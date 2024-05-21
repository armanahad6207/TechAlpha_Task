import "../icons.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLocationDot,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";

function InputBox() {
  return (
    <div className=" flex justify-between items-center my-4">
      <div className="flex flex-row items-center justify-center space-x-4 w-3/4">
        <input
          type="text"
          placeholder="search city name...."
          className=" w-full rounded-sm px-3 py-2 outline-none text-xl text-slate-600 capitalize "
        />
        <FontAwesomeIcon
          icon={faMagnifyingGlass}
          className="text-white text-2xl"
        />
        <FontAwesomeIcon icon={faLocationDot} className="text-white text-2xl" />
      </div>
      <div className="flex text-white items-center  ">
        <button className="text-2xl font-medium">°C</button>
        <p className="text-3xl pb-2 pl-1">|</p>
        <button className="text-2xl font-medium">°F</button>
      </div>
    </div>
  );
}

export default InputBox;
