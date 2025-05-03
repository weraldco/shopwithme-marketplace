import { ProductType } from '@/utils/types';
import { create } from 'zustand';

type ProductStore = {
	products: ProductType[] | null;
	product: ProductType | null;
	fetchAllProducts: () => Promise<void>;
	fetchSingleProduct: (id: number) => Promise<void>;
};

export const useProductStore = create<ProductStore>((set) => ({
	products: null,
	product: null,

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
			set({ product: data });
		} catch (error) {
			console.error('Failed fetching product', error);
		}
	},
}));
