import { useCartStore } from '@/store/cartStore';
import { ProductType } from '@/utils/types';
import Image from 'next/image';
import { FC, useState } from 'react';
import { FaMinus, FaPlus } from 'react-icons/fa6';
import Price from './Price';
import Rating from './Rating';

interface Props {
	product: ProductType;
}

const ProductItem: FC<Props> = ({ product }) => {
	const { cart, addToCart, removeToCart } = useCartStore();
	console.log('Cart', cart);
	const {
		id,
		title,
		description,
		rating,
		reviews,
		price,
		discountPercentage,
		images,
		brand,
		shippingInformation,
		returnPolicy,
		warrantyInformation,
		stock,
	} = product;
	const [imageIndex, setImageIndex] = useState(0);
	const [quantity, setQuantity] = useState(1);

	const handleIncrementQuantity = () => {
		setQuantity((quantity) => (quantity < stock ? quantity + 1 : stock));
	};

	const handleDecrementQuantity = () => {
		setQuantity((quantity) => (quantity == 1 ? 1 : quantity - 1));
	};
	// console.log(product);

	return (
		<div className="flex w-full gap-4">
			<div className=" w-full flex flex-col items-center justify-center gap-4">
				<div className="bg-neutral-100 rounded-lg">
					<Image
						src={images[imageIndex]}
						height={500}
						width={500}
						alt={title}
						priority
					/>
				</div>
				<div className="flex gap-4">
					{images.map((image, i) => (
						<Image
							key={i}
							src={image}
							height={100}
							width={100}
							alt={title}
							priority
							onClick={() => setImageIndex(i)}
							className="bg-neutral-100 hover:bg-neutral-100/50 active:bg-neutral-200/50 duration-200 rounded-lg"
						/>
					))}
				</div>
			</div>
			<div className="flex flex-col w-full gap-4">
				<div className="text-xl font-bold">{title}</div>
				<div>
					<Rating rating={rating} reviews={reviews} />
					{brand && <>Brand: {brand}</>}
					<Price
						price={price}
						discountPercentage={discountPercentage}
						className="font-bold text-4xl text-red-400"
					/>
				</div>
				<div>{description}</div>
				<div>
					<OptionTable title="Delivery Option:" content={shippingInformation} />
					<OptionTable
						title="Return and Warranty:"
						content={`${returnPolicy} | ${warrantyInformation}`}
					/>
				</div>
				<div className="flex items-center gap-2">
					Quantity:
					<div className="flex items-center justify-center">
						<button
							className="border-1 border-r-0 border-neutral-300 p-2 rounded-l-lg hover:text-neutral-600 duration-200 text-neutral-500"
							onClick={handleDecrementQuantity}
						>
							<FaMinus />
						</button>
						<span className="border-1 border-neutral-300 py-1 w-[50px]  duration-200 text-center text-neutral-700">
							{quantity}
						</span>
						<button
							className="border-1 border-l-0 border-neutral-300 p-2 rounded-r-lg hover:text-neutral-700 duration-200 text-neutral-500"
							onClick={handleIncrementQuantity}
						>
							<FaPlus />
						</button>
					</div>
					<div className="text-neutral-400 italic text-sm">
						{stock} pcs left
					</div>
				</div>
				<div className="flex gap-4">
					<button className="bg-red-400 px-4 py-2 rounded-lg text-white font-bold w-full">
						Buy Now
					</button>
					<button
						className="border border-red-400 px-4 py-2 rounded-lg text-red-400 font-bold w-full"
						onClick={() => addToCart({ product: product, quantity: quantity })}
					>
						Add to Cart
					</button>
				</div>
			</div>
		</div>
	);
};

export default ProductItem;

const OptionTable = ({
	title,
	content,
}: {
	title: string;
	content: string;
}) => {
	return (
		<div className="flex w-full items-center text-[0.95em]">
			<span className="w-[20%]">{title}</span>
			<span className="w-full"> {content}</span>
		</div>
	);
};
