'use client';
import { useCartStore } from '@/store/cartStore';
import { useProductStore } from '@/store/productStore';
import { FC, ReactNode, useEffect } from 'react';

interface Props {
	children: ReactNode;
}

const ClientWrapper: FC<Props> = ({ children }) => {
	const { getCartData } = useCartStore();
	const { fetchAllProducts } = useProductStore();

	useEffect(() => {
		getCartData();
	}, [getCartData]);

	useEffect(() => {
		fetchAllProducts();
	}, [fetchAllProducts]);
	return <>{children}</>;
};

export default ClientWrapper;
