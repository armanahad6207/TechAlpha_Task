const api_key = "3ce7301240d18d5b5c6671fca3722abb";
const base_url = "https://api.openweathermap.org/data/2.5";

const getWeatherData = (infoType, searchParams) => {
  const url = new url(base_url + infoType);
  url.search = new URLSearchParams({ ...searchParams, appid: api_key });
  return fetch(url)
    .then((res) => res.json)
    .then((data) => data);
};
export default getWeatherData;
