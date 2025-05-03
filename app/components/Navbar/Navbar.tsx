'use client';
import { IoCartOutline, IoHeartOutline } from 'react-icons/io5';

import { useCartStore } from '@/store/cartStore';
import Link from 'next/link';
import { FC } from 'react';
import Search from './Search';

const Navbar: FC<Props> = () => {
	const { cart } = useCartStore();
	return (
		<div className="fixed backdrop-blur-2xl top-0 w-full p-4 flex justify-between items-center">
			<Link href="/" className="text-xl">
				Logo
			</Link>
			<div className=" flex items-center justify-center w-[50%]">
				<Search />
			</div>
			<div className="flex gap-4 items-center justify-between">
				<div className="flex  text-xl gap-6 items-center justify-center">
					<div className="relative">
						<IoCartOutline className="text-2xl"></IoCartOutline>
						<span className="text-xs text-white absolute -top-3 -right-4 px-2 py-1 bg-red-400 rounded-full">
							{cart?.length}
						</span>
					</div>
					<IoHeartOutline></IoHeartOutline>
				</div>
				<div>sign-up</div>
				<div>sign-in</div>
			</div>
		</div>
	);
};

export default Navbar;
