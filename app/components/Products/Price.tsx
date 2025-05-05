import { getDiscount } from '@/utils/helper';
import { FC } from 'react';

interface Props {
	price: number;
	discountPercentage: number;
	className?: string;
	priceClass?: string;
	priceOffClassname?: string;
	dollarClass?: string;
}

const Price: FC<Props> = ({
	price,
	discountPercentage,
	className,
	priceClass,
	priceOffClassname,
	dollarClass,
}) => {
	return (
		<div className={`flex gap-2 items-center ${className}`}>
			<div className={` flex gap-1 ${priceClass}`}>
				<span className={`${dollarClass}`}>$</span>
				{(price - getDiscount(price, discountPercentage)).toFixed(2)}
			</div>
			{Math.round(discountPercentage) !== 0 && (
				<>
					<span className="line-through text-neutral-400">${price}</span>
					<div
						className={`py-1 px-2 bg-orange-200 text-orange-400 ${priceOffClassname}`}
					>
						{Math.round(discountPercentage)}% Off
					</div>
				</>
			)}
		</div>
	);
};

export default Price;
