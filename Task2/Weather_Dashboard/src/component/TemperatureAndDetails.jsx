/* eslint-disable react/prop-types */
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTemperatureQuarter } from "@fortawesome/free-solid-svg-icons";

<link
  rel="stylesheet"
  href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"
/>;

export default function TemperatureAndDetails({
  details,
  temp,
  feelLike,
  humidity,
  icon,
  speed,
}) {
  return (
    <div>
      <div>
        <div className="flex items-center justify-center py-6">
          <p className="text-xl font-semibold text-blue-700 ">{details}</p>
        </div>
        <div className="flex flex-row items-center justify-between text-white ">
          <img src={icon} />

          <p className="text-4xl font-semibold">{`${temp.toFixed()}°`}</p>

          <div className="flex flex-col">
            <div className="flex flex-row items-center space-x-1 ml-2">
              <FontAwesomeIcon
                icon={faTemperatureQuarter}
                className="mr-2 font-extrabold"
              />
              Real fell:
              <span className="font-semibold">{`${feelLike.toFixed()}°`}</span>
            </div>
            <div className="flex flex-row items-center space-x-2">
              <span className="material-icons pr-1 ">water_drop</span>
              Humidity:
              <span className="font-semibold">{humidity}%</span>
            </div>
            <div className="flex flex-row items-center space-x-3">
              <span className="material-icons pr-1">air</span>
              wind:
              <span className="font-semibold">{speed}km/h</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
