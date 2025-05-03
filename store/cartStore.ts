import { CartType } from '@/utils/types';
import { create } from 'zustand';

type CartStoreType = {
	cart: CartType | null;
	addToCart: (product: CartType) => void;
	removeToCart: () => void;
};

export const useCartStore = create<CartStoreType>((set) => ({
	cart: null,
	addToCart: (product) => {
		const getData = localStorage.getItem('cart');
		if (!getData) {
			localStorage.setItem('cart', JSON.stringify(product));
		} else {
			set({ cart: JSON.parse(getData) });
		}

		const existingData = [{ name: 'test', quantity: 10 }];
		const newData = { name: 'test', quantity: 1 };

		const foundData = existingData.find((data) => data.name == newData.name);

		// existingData.push(newData);
		if (foundData) {
			foundData.quantity = foundData.quantity + newData.quantity;
		}

		console.log('ex', existingData);
		// get all the data from localstorage
		// iterate the new data from the old datas.
		// save the data to localstorage
	},
	removeToCart: () => {
		console.log('removing data');
	},
}));
