import TopBtn from "./component/TopBtn";
import InputBox from "./component/inputBox";
import TimeAndLocation from "./component/TimeAndLocation";
import TemperatureAndDetails from "./component/TemperatureAndDetails";
import Forecast from "./component/Forecast.jsx";

function App() {
  return (
    <>
      <div className="mx-auto max-w-screen-md mt-5 py-3 px-32 bg-gradient-to-br from-slate-900 to-slate-700 min-h-12">
        <TopBtn />
        <InputBox />
        <TimeAndLocation />
        <TemperatureAndDetails />
        <Forecast title={"HOURLY FORECAST"} />
        <Forecast title={"DAILY FORECAST"} />
      </div>
    </>
  );
}

export default App;
