import { IoSearchOutline } from 'react-icons/io5';

const Search = () => {
	return (
		<div className="relative w-full max-w-2xl flex">
			<input
				type="text"
				className="bg-neutral-800 px-4 py-2 rounded outline-none w-full"
				placeholder="Search.."
			/>
			<button className="absolute top-0 right-0 cursor-pointer bg-red-200 p-3	 rounded-r">
				<IoSearchOutline />
			</button>
		</div>
	);
};

export default Search;
