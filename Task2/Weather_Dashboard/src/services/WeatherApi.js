// const api_key = "3ce7301240d18d5b5c6671fca3722abb";
// const base_url = "https://api.openweathermap.org/data/2.5";

// "https://api.openweathermap.org/data/2.5/weather?q=ranchi&appid=3ce7301240d18d5b5c6671fca3722abb"

const getWeatherData = () => {
  const Apidata = fetch()
    .then((res) => res.json())
    .then((data) => data);
  return Apidata;
};
export default getWeatherData;
