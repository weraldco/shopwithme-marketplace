import { IoSearchOutline } from 'react-icons/io5';

const Search = () => {
	return (
		<div className="relative w-full flex">
			<input
				type="text"
				className="bg-neutral-200/50 px-4 py-2 rounded outline-none w-full"
				placeholder="Search.."
			/>
			<button className="absolute top-0 right-0 cursor-pointer bg-red-400 text-white p-3	 rounded-r">
				<IoSearchOutline />
			</button>
		</div>
	);
};

export default Search;
