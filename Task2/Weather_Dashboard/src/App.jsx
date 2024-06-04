import TopBtn from "./component/TopBtn";
import InputBox from "./component/inputBox";
import TimeAndLocation from "./component/TimeAndLocation";
import TemperatureAndDetails from "./component/TemperatureAndDetails";
import Forecast from "./component/Forecast.jsx";
import getFormatedWeatherData from "./services/WeatherApi.js";
import { useEffect, useState } from "react";

function App() {
  const [query, setQuery] = useState({ q: "kolkata" });
  // const [units, setUnits] = useState("metric");
  const [weather, setWeather] = useState(null);

  const getWeather = async () => {
    await getFormatedWeatherData(query).then((data) => {
      setWeather(data);
    });
  };

  useEffect(() => {
    getWeather();
  }, [query]);

  console.log(weather);

  return (
    <>
      <div className="mx-auto max-w-screen-md mt-5 py-3 px-32 bg-gradient-to-br from-slate-900 to-slate-700 min-h-12">
        <TopBtn setquery={setQuery} />
        <InputBox setquery={setQuery} />

        {weather && (
          <>
            <TimeAndLocation
              localTime={weather.localTime}
              name={weather.name}
              country={weather.country}
            />
            <TemperatureAndDetails
              details={weather.details}
              temp={weather.temp - 273.15}
              feelLike={weather.feels_like - 273.15}
              humidity={weather.humidity}
              icon={weather.icon}
              speed={weather.speed}
            />
            <Forecast
              keyprop={"hourly"}
              title={"HOURLY FORECAST"}
              data={weather.hourly}
            />
            <Forecast
              keyprop={"dialy"}
              title={"DAILY FORECAST"}
              data={weather.daily}
            />
          </>
        )}
      </div>
    </>
  );
}

export default App;
