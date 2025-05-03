'use client';

import { useProductStore } from '@/store/productStore';
import { useEffect } from 'react';
import ProductCard from './components/Products/ProductCard';

const Home = () => {
	const { products, fetchAllProducts } = useProductStore();

	useEffect(() => {
		fetchAllProducts();
	}, [fetchAllProducts]);

	if (!products) return <div>Loading...</div>;
	console.log(products);
	return (
		<div className=" grid grid-cols-1 md:grid-cols-3 xl:grid-cols-5 gap-4 px-4 place-items-center">
			{products.map((product) => (
				<ProductCard key={product.id} product={product} />
			))}
		</div>
	);
};

export default Home;
