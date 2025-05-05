import { IoSearchOutline } from "react-icons/io5";

const Search = () => {
  return (
    <div className="relative flex w-full">
      <input
        type="text"
        className="w-full rounded bg-neutral-200/50 px-4 py-2 outline-none"
        placeholder="Search.."
      />
      <button className="absolute top-0 right-0 cursor-pointer rounded-r bg-red-400 p-3 text-white">
        <IoSearchOutline />
      </button>
    </div>
  );
};

export default Search;
