import { IoCartOutline, IoHeartOutline } from 'react-icons/io5';

import { FC } from 'react';
import Search from './Search';

const Navbar: FC<Props> = () => {
	return (
		<div className="fixed  backdrop-blur-xs top-0 w-full p-4 flex justify-between items-center">
			<div className="text-xl">Logo</div>
			<div className=" flex items-center justify-center w-[50%]">
				<Search />
			</div>
			<div className="flex gap-4 items-center justify-between">
				<div className="flex  text-xl gap-4 items-center justify-center">
					<IoCartOutline className=""></IoCartOutline>
					<IoHeartOutline></IoHeartOutline>
				</div>
				<div>sign-up</div>
				<div>sign-in</div>
			</div>
		</div>
	);
};

export default Navbar;
