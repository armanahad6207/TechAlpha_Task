import { DateTime } from "luxon";
const api_key = "3ce7301240d18d5b5c6671fca3722abb";
const base_url = "https://api.openweathermap.org/data/2.5";

// "https://api.openweathermap.org/data/2.5/weather?q=ranchi&appid=3ce7301240d18d5b5c6671fca3722abb"

// custom function for api calling
const getWeatherData = (infoType, searchParams) => {
  const url = new URL(base_url + "/" + infoType);
  url.search = new URLSearchParams({ ...searchParams, appid: api_key });
  const apiData = fetch(url).then((res) => res.json());

  return apiData;
};

// formatLocalTime

const formatLocalTime = (
  secs,
  offset,
  format = "cccc,dd/LL/yyyy', | Local time: 'hh:mm:a"
) => DateTime.fromSeconds(secs + offset, { zone: "utc" }).toFormat(format);

// end formatlocaltime

// icon iconUrlfromCode
const iconUrlfromCode = (code) =>
  `http://openweathermap.org/img/wn/${code}@2x.png`;

// formate the data from api
const formatedData = (data) => {
  const {
    coord: { lat, lon },
    main: { temp, feels_like, temp_min, temp_max, humidity },
    name,
    dt,
    sys: { country, sunrise, sunset },
    weather,
    wind: { speed },
    timezone,
  } = data;
  const { main: details, icon } = weather[0];
  const localTime = formatLocalTime(dt, timezone);
  return {
    lat,
    lon,
    temp,
    feels_like,
    temp_min,
    temp_max,
    humidity,
    name,
    country,
    sunrise: formatLocalTime(sunrise, timezone, "hh:mm a"),
    sunset: formatLocalTime(sunset, timezone, "hh:mm a"),
    speed,
    details,
    icon: iconUrlfromCode(icon),
    localTime,
    dt,
    timezone,
  };
};
// formate forecast weather
const formateForecastWeather = (secs, offset, data) => {
  //hourly
  const hourly = data
    .filter((f) => {
      return f.dt > secs;
    })
    .slice(0, 5)
    .map((f) => ({
      temp: f.main.temp,
      title: formatLocalTime(f.dt, offset, "hh:mm a"),
      icon: iconUrlfromCode(f.weather[0].icon),
      date: f.dt_txt,
    }));

  // daily
  const daily = data
    .filter((f) => f.dt_txt.slice(-8) === "00:00:00")
    .slice(0, 5)
    .map((f) => ({
      temp: f.main.temp,
      title: formatLocalTime(f.dt, offset, "cccc"),
      icon: iconUrlfromCode(f.weather[0].icon),
      date: f.dt_txt,
    }));

  return { hourly, daily };
};
// <<<weatehr data api calling

const getFormatedWeatherData = async (searchParams) => {
  const formatCurrentWeather = await getWeatherData(
    "weather",
    searchParams
  ).then(formatedData);

  // weatehr data api calling end>>>

  // <<<<forcast data api calling
  const { lat, lon, dt, timezone } = formatCurrentWeather;

  const foreCastWeather = await getWeatherData("forecast", {
    lat,
    lon,
    units: searchParams.units,
  }).then((d) => formateForecastWeather(dt, timezone, d.list));

  // forcast data api calling

  return { ...formatCurrentWeather, ...foreCastWeather };
};

export default getFormatedWeatherData;

export { formatLocalTime, iconUrlfromCode };
