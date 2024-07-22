import React from "react";

const PlayersAddForm = () => {
  return (
    <div className="px-4 py-6 bg-white rounded-md shadow-lg bg-gradient-to-t from-cyan-500 to-transparent bg-opacity-10">
      <div className="flex flex-col space-y-3">
        <div>
          <label htmlFor="name" className="text-2xl">
            New football player
          </label>
          <input
            type="text"
            className="block w-full py-2 px-4 rounded-md mt-1"
            placeholder="Muhammad Salah"
            name="name"
            required
          />
        </div>

        <div>
          <label htmlFor="country" className="text-2xl">
            Country
          </label>
          <input
            type="text"
            className="block w-full py-2 px-4 rounded-md mt-1"
            placeholder="Egypt"
            name="country"
            required
          />
        </div>

        <div>
          <label htmlFor="continent" className="text-2xl">
            Select player continent
          </label>
          <select
            className="block w-full py-2 px-4 rounded-md mt-1"
            name="continent"
            required
          >
            <option value="Europe">Europe</option>
            <option value="Asia">Asia</option>
            <option value="Africa">Africa</option>
            <option value="America">America</option>
          </select>
        </div>

        <button className="py-2 px-4 w-fit rounded-md ml-auto bg-gradient-to-r from-blue-500 to-blue-950 text-white hover:scale-105 transition-all font-medium">
          Add player
        </button>
      </div>
    </div>
  );
};

export default PlayersAddForm;
