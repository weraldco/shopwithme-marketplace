import { CartType } from '@/utils/types';
import { create } from 'zustand';

type CartStoreType = {
	cart: CartType[] | null;
	getCartData: () => Promise<void>;
	addToCart: (product: CartType) => void;
	removeToCart: () => void;
};

export const useCartStore = create<CartStoreType>((set) => ({
	cart: null,

	getCartData: async () => {
		try {
			const getData = localStorage.getItem('cart');
			if (getData) set({ cart: JSON.parse(getData) });
		} catch (error) {
			console.log('Failed to get the data', error);
		}
	},
	addToCart: (product) => {
		const getData = localStorage.getItem('cart');
		if (!getData) {
			// if localstorage is empty save a new data
			const data = [product];
			set({ cart: data });
			localStorage.setItem('cart', JSON.stringify(data));
		} else {
			const existingData: CartType[] = JSON.parse(getData);
			const found = existingData.find(
				(data) => data.product.title == product.product.title
			);
			if (!found) {
				existingData.push(product);
				set({ cart: existingData });
				localStorage.setItem('cart', JSON.stringify(existingData));
			} else {
				console.log(product);
				found.quantity = found.quantity + product.quantity;
				set({ cart: existingData });
				localStorage.setItem('cart', JSON.stringify(existingData));
			}
		}
	},
	removeToCart: () => {
		console.log('removing data');
	},
}));
