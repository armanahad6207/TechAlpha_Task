import TopBtn from "./component/TopBtn";
import InputBox from "./component/inputBox";
import TimeAndLocation from "./component/TimeAndLocation";
import TemperatureAndDetails from "./component/TemperatureAndDetails";
import Forecast from "./component/Forecast.jsx";
import getWeatherData from "./services/WeatherApi.js";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    const getWeather = async () => {
      const data = await getWeatherData();
      console.log(data);
    };
    getWeather();
  }, []);
  return (
    <>
      <div className="mx-auto max-w-screen-md mt-5 py-3 px-32 bg-gradient-to-br from-slate-900 to-slate-700 min-h-12">
        <TopBtn />
        <InputBox />
        <TimeAndLocation />
        <TemperatureAndDetails />
        <Forecast keyprop={"hourly"} title={"HOURLY FORECAST"} />
        <Forecast keyprop={"dialy"} title={"DAILY FORECAST"} />
      </div>
    </>
  );
}

export default App;
