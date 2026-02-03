const Searchbar = () => {
  return (
    <div className="flex justify-center items-center w-full">
      <input
        type="text"
        placeholder="Search type of keywords"
        className="px-8 py-2 rounded-lg w-74 bg-white justify-center  shadow-sm focus:outline-none focus:ring-1 focus:ring-blue-600 focus:border-transparent"
      />
    </div>
  );
};

export default Searchbar;
