const PlayersFilter = () => {
  return (
    <div className="px-4 py-6 bg-white rounded-md shadow-lg bg-gradient-to-b from-cyan-500 to-transparent bg-opacity-10 mt-4">
      <h1 className="text-xl font-bold">Filter players by continent</h1>

      <div className="flex mt-2">
        <button className="py-2 px-4 bg-gradient-to-r from-black to-slate-600 text-white rounded-l-md hover:opacity-90 transition-all">
          All
        </button>
        <button className="py-2 px-4 bg-gradient-to-r from-blue-500 to-blue-700 text-white hover:opacity-90 transition-all">
          Europe
        </button>
        <button className="py-2 px-4 bg-gradient-to-r from-green-500 to-green-700 text-white hover:opacity-90 transition-all">
          Asia
        </button>
        <button className="py-2 px-4 bg-gradient-to-r from-yellow-500 to-yellow-700 text-white hover:opacity-90 transition-all">
          Africa
        </button>
        <button className="py-2 px-4 bg-gradient-to-r from-cyan-500 to-cyan-700 text-white hover:opacity-90 transition-all rounded-r-md">
          America
        </button>
      </div>
    </div>
  );
};

export default PlayersFilter;
