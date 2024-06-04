/* eslint-disable react/prop-types */
import "../icons.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

function InputBox({ setquery }) {
  const [city, setCity] = useState("");
  const inputHandler = () => {
    setquery({ q: city });
  };
  return (
    <div className=" flex justify-between items-center my-4  ">
      <div className="flex flex-row items-center justify-center space-x-4 w-3/4 mx-auto">
        <input
          value={city}
          onChange={(e) => {
            setCity(e.currentTarget.value);
          }}
          type="text"
          placeholder="search city name...."
          className=" w-full rounded-sm px-3 py-2 outline-none text-xl text-slate-600 capitalize "
        />
        <FontAwesomeIcon
          onClick={inputHandler}
          icon={faMagnifyingGlass}
          className="text-black cursor-pointer rounded-sm hover:bg-white text-2xl px-3 py-2 bg-red-100"
        />
      </div>
    </div>
  );
}

export default InputBox;
