import { useState, useCallback } from "react";
import "./App.css";

function App() {
  const [password, setpassword] = useState("");
  const [length, setlength] = useState(8);
  const [allowedLowerchar, setLowerchar] = useState(false);
  const [allowedUpperchar, setUpperchar] = useState(false);
  const [allowedNumber, setNumber] = useState(false);
  const [allowedSymbol, setSymbol] = useState(false);

  const generatePassword = useCallback(() => {
    const lowercahrs = "abcdefghijklmnopqrstuvwxyz";
    const upperchars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numbers = "0123456789";
    const symbols = "!@#$%&*_";

    let finalpassword = "";
    let str = "";

    str += allowedLowerchar ? lowercahrs : "";
    str += allowedUpperchar ? upperchars : "";
    str += allowedNumber ? numbers : "";
    str += allowedSymbol ? symbols : "";

    console.log("length before" + finalpassword);
    for (let i = 1; i <= length; i++) {
      finalpassword += str.charAt(Math.floor(Math.random() * str.length));
    }
    setpassword(finalpassword);
  }, [
    length,
    allowedLowerchar,
    allowedUpperchar,
    allowedNumber,
    allowedSymbol,
  ]);

  return (
    <>
      <div className=" h-screen w-full flex flex-col  justify-center items-center  ">
        <div className=" p-5 rounded-lg min-w-96 border ">
          <h1 className="text-white text-center text-4xl mb-10">
            Password Generator
          </h1>
          <div>
            <input
              value={password}
              type="text"
              className="w-96 h-10 text-2xl rounded-sm outline-none p-6"
            />

            <div className="flex justify-between items-center   mt-6">
              <input
                className="basis-[12rem] outline-none"
                type="range"
                min={8}
                max={30}
                value={length}
                onChange={(e) => {
                  setlength(e.target.value);
                }}
              />
              <span className="text-white">{length}</span>
            </div>

            <div className="flex justify-between mt-6 items-center   ">
              <label
                className="text-blue-600 text-xl basis-[12rem]"
                htmlFor="characters"
              >
                include(abc..z)
              </label>

              <input
                onChange={() => setLowerchar((prev) => !prev)}
                type="checkbox"
                id="characters"
                className="w-5 h-5  "
              />
            </div>

            <div className="flex justify-between mt-6 items-center   ">
              <label
                className="text-blue-600 text-xl basis-[12rem]"
                htmlFor="characters"
              >
                include(ABC..Z)
              </label>

              <input
                onChange={() => {
                  setUpperchar((prev) => !prev);
                }}
                type="checkbox"
                id="characters"
                className="w-5 h-5 "
              />
            </div>

            <div className="flex justify-between mt-6 items-center   ">
              <label
                className="text-blue-600 text-xl basis-[12rem]"
                htmlFor="numbers"
              >
                include(0-9)
              </label>
              <input
                onChange={() => {
                  setNumber((prev) => !prev);
                }}
                type="checkbox"
                id="numbers"
                className="w-5 h-5 "
              />
            </div>

            <div className="flex justify-between mt-6 items-center   ">
              <label
                className="text-blue-600 text-xl basis-[12rem]"
                htmlFor="symbol"
              >
                include(@#%..)
              </label>
              <input
                onChange={() => {
                  setSymbol((prev) => !prev);
                }}
                type="checkbox"
                id="symbol"
                className="w-5 h-5 "
              />
            </div>

            <div className="flex justify-center mt-3">
              <button
                className=" px-8 py-2 text-black bg-yellow-400 rounded-sm font-semibold "
                onClick={generatePassword}
              >
                Generate Password
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
