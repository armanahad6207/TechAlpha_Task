import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTemperatureQuarter } from "@fortawesome/free-solid-svg-icons";

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
          <img src="" />

          <p className="text-4xl font-semibold">34°</p>

          <div className="flex flex-col">
            <div className="flex flex-row items-center space-x-2">
              <FontAwesomeIcon icon={faTemperatureQuarter} className="mr-2" />
              Real fell:
              <span className="font-semibold">32°</span>
            </div>
            <div className="flex flex-row items-center space-x-2">
              <FontAwesomeIcon icon={faTemperatureQuarter} className="mr-2" />
              Real fell:
              <span className="font-semibold">32°</span>
            </div>
            <div className="flex flex-row items-center space-x-2">
              <FontAwesomeIcon icon={faTemperatureQuarter} className="mr-2" />
              Real fell:
              <span className="font-semibold">32°</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
