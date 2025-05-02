import { create } from 'zustand';

type ProductType = {
	id: number;
	title: string;
	description: string;
	category: string;
	price: number;
	discountPercentage: number;
	rating: number;
	stock: number;
	tags: string[];
	brand: string;
};

type ProductStore = {
	products: ProductType[] | null;
	fetchAllProducts: () => Promise<void>;
	fetchSingleProduct: (id: number) => Promise<void>;
};

export const useProductStore = create<ProductStore>((set) => ({
	products: null,
	fetchAllProducts: async () => {
		try {
			const response = await fetch('https://dummyjson.com/products/');
			const data = await response.json();
			set({ products: data.products });
		} catch (error) {
			console.error('Failed fetching products', error);
		}
	},
	fetchSingleProduct: async (id: number) => {
		try {
			const response = await fetch(`https://dummyjson.com/products/${id}`);
			const data = await response.json();
			set({ products: data });
		} catch (error) {
			console.error('Failed fetching product', error);
		}
	},
}));
