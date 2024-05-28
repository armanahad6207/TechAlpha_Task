const api_key = "3ce7301240d18d5b5c6671fca3722abb";
const base_url = "https://api.openweathermap.org/data/2.5";

// "https://api.openweathermap.org/data/2.5/weather?q=ranchi&appid=3ce7301240d18d5b5c6671fca3722abb"

const getWeatherData = (infoType, searchParams) => {
  const url = new URL(base_url + "/" + infoType);
  url.search = new URLSearchParams({ ...searchParams, appid: api_key });
  const apiData = fetch(url).then((res) => res.json());

  return apiData;
};

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

const getFormatedWeatherData = async (searchParams) => {
  const formatCurrentWeather = await getWeatherData(
    "weather",
    searchParams
  ).then(formatedData);
  console.log(formatCurrentWeather);
};
export default getFormatedWeatherData;
