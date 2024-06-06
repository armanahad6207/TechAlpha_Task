/* eslint-disable quotes */
import React from "react";
import { genres } from "../assets/constants";
import { SongCard } from "../components";

function Discover() {
  const genereTitle = "Pop";
  return (
    <div className="flex flex-col">
      <div className="w-full flex justify-between items-center sm:flex-row flex-col mt-4 mb-10">
        <h1 className="text-3xl font-bold text-white mb-2 text-left">
          Discover {genereTitle}
        </h1>
        <select className=" p-2  rounded-sm text-sm outline-none bg-gray-600 text-white">
          {genres.map((gener) => (
            <option key={gener.value} value={gener.value} className="">
              {gener.title}
            </option>
          ))}
        </select>
      </div>
      {/* Songs-cards */}
      <div className="grid sm:justify-start sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3  bg-red-300">
        {[1, 2, 3, 4, 5, 6, 7, 8].map((song, i) => (
          <SongCard key={song.key} song={song} i={i} />
        ))}
      </div>
    </div>
  );
}

export default Discover;
