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
  } = data;
  const { main: details, icon } = weather[0];
  return {
    lat,
    lon,
    temp,
    feels_like,
    temp_min,
    temp_max,
    humidity,
    name,
    dt,
    country,
    sunrise,
    sunset,
    speed,
    details,
    icon,
  };
};

// format Forcast data
const formatForcastData = (data) => {
  let { timezone, daily, hourly } = data;
  daily = daily.slice(1, 6).map((d) => {
    return {
      title: formatLocalTime(d.dt, timezone, "ccc"),
      temp: d.temp.day,
      icon: d.weather[0].icon,
    };
  });
  hourly = hourly.slice(1, 6).map((d) => {
    return {
      title: formatLocalTime(d.dt, timezone, "hh:mm a"),
      temp: d.temp.day,
      icon: d.weather[0].icon,
    };
  });
  return { timezone, daily, hourly };
};

const getFormatedWeatherData = async (searchParams) => {
  const formatCurrentWeather = await getWeatherData(
    "weather",
    searchParams
  ).then(formatedData);

  // onecallapi
  const { lat, lon } = formatCurrentWeather;

  const formatForcastWeather = await getWeatherData("onecall", {
    lat,
    lon,
    exclude: "current,minutely,alerts",
    units: searchParams.units,
  }).then(formatForcastData);
  console.log(" formate weather" + formatCurrentWeather);
  console.log(" formate forecast" + formatForcastWeather);

  return { ...formatCurrentWeather, ...formatForcastWeather };
};

const formatLocalTime = (
  secs,
  zone,
  format = "cccc,dd LL yyyy', | Local time: 'hh:mm:a"
) => DateTime.fromSeconds(secs).setZone(zone).toFormat(format);

const iconUrlfromCode = (code) =>
  `http://openweathermap.org/img/wn/${code}@2x.png`;
export default getFormatedWeatherData;

export { formatLocalTime, iconUrlfromCode };
