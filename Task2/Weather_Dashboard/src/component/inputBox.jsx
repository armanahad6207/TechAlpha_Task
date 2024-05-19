import "../icons.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse } from "@fortawesome/free-solid-svg-icons";

function InputBox() {
  return (
    <div className="">
      <div>
        <input type="text" placeholder="search city name...." />
        <FontAwesomeIcon icon={faHouse} className="text-white" />
      </div>
    </div>
  );
}

export default InputBox;
