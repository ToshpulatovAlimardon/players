import { FaRegFutbol } from "react-icons/fa";
import { FaFontAwesomeFlag } from "react-icons/fa";
import player from "../assets/player.png";
import { IoClose } from "react-icons/io5";

const PlayersList = () => {
  return (
    <div>
      <div className="bg-white p-4 rounded-md shadow-lg grid grid-cols-2 items-center relative">
        <div className="flex flex-col space-y-2">
          <div className="flex items-center gap-1">
            <FaRegFutbol className="w-6 h-6" />
            <p className="font-bold text-xl">Muhammad Salah</p>
          </div>
          <div className="flex items-center gap-1">
            <FaFontAwesomeFlag className="w-6 h-6" />
            <p className="font-bold text-xl">Egypt</p>
          </div>
        </div>

        <img src={player} alt="player" className="h-24 ml-auto" />

        <span
          className="absolute -right-2 -top-4 bg-slate-300 rounded-full p-1 hover:bg-slate-400 transition-all"
          role="button"
        >
          <IoClose className="h-5 w-5"/>
        </span>
      </div>
    </div>
  );
};

export default PlayersList;
