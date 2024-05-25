import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTemperatureQuarter } from "@fortawesome/free-solid-svg-icons";
<link
  rel="stylesheet"
  href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"
/>;

export default function TemperatureAndDetails() {
  return (
    <div>
      <div>
        <div className="flex items-center justify-center py-6">
          <p className="text-xl font-semibold text-blue-700 ">
            Cloudy or whatever
          </p>
        </div>
        <div className="flex flex-row items-center justify-between text-white ">
          <span className="material-icons text-7xl text-red-500">sunny</span>

          <p className="text-4xl font-semibold">34°</p>

          <div className="flex flex-col">
            <div className="flex flex-row items-center space-x-1 ml-2">
              <FontAwesomeIcon
                icon={faTemperatureQuarter}
                className="mr-2 font-extrabold"
              />
              Real fell:
              <span className="font-semibold">32°</span>
            </div>
            <div className="flex flex-row items-center space-x-2">
              <span className="material-icons pr-1 ">water_drop</span>
              Humidity:
              <span className="font-semibold">32°</span>
            </div>
            <div className="flex flex-row items-center space-x-3">
              <span className="material-icons pr-1">air</span>
              wind:
              <span className="font-semibold">32°</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
