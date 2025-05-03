// Product Card
import { getDiscount } from '@/utils/helper';
import { ProductType } from '@/utils/types';
import { Inter } from 'next/font/google';
import Image from 'next/image';
import Link from 'next/link';
import { FC } from 'react';
import { FaStar } from 'react-icons/fa';
import Rating from './Rating';

const interFont = Inter({ weight: '400', subsets: ['latin'] });

interface Props {
	product: ProductType;
}

const ProductCard: FC<Props> = ({ product }) => {
	const { id, title, thumbnail, rating, reviews, price, discountPercentage } =
		product;

	return (
		<Link href={`/product/${id}`}>
			{/* Product title */}

			<div className="bg-neutral-100/80 max-w-lg p-6">
				<Image
					width={500}
					height={500}
					src={thumbnail}
					alt={title}
					priority
				></Image>
			</div>
			<div className={`flex gap-2 flex-col ${interFont.className}`}>
				<div className={` font-semibold`}>{title}</div>
				<Rating rating={rating} reviews={reviews} />
				<div className="flex gap-2 items-center">
					<div className="font-bold">
						${(price - getDiscount(price, discountPercentage)).toFixed(2)}
					</div>
					{Math.round(discountPercentage) !== 0 && (
						<>
							<span className="line-through text-neutral-500">${price}</span>
							<div className="py-1 px-2 bg-orange-200 text-orange-400 text-sm">
								{Math.round(discountPercentage)}% Off
							</div>
						</>
					)}
				</div>
			</div>
		</Link>
	);
};

export default ProductCard;
