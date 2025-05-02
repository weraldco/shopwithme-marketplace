'use client';

import { useProductStore } from '@/app/store/productStore';
import { useEffect } from 'react';

const Home = () => {
	const { products, fetchAllProducts } = useProductStore();

	useEffect(() => {
		fetchAllProducts();
	}, [fetchAllProducts]);

	if (!products) return <div>Loading...</div>;
	console.log(products);
	return (
		<div className="py-20 flex gap-4">
			{products.map((product) => (
				<div key={product.id}>{product.title}</div>
			))}
		</div>
	);
};

export default Home;
