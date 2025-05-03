export type ProductType = {
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
	thumbnail: string;
	reviews: ProductReviewsType[];
	images: string[];
	warrantyInformation: string;
	shippingInformation: string;
	returnPolicy: string;
	availabilityStatus: string;
};

export type ProductReviewsType = {
	rating: number;
	comment: string;
	date: Date;
	reviewerName: string;
	reviewerEmail: string;
};

export type CartType = {
	product: ProductType;
	quantity: number;
};
