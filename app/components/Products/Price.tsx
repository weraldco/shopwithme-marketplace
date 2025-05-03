import { getDiscount } from '@/utils/helper';
import { FC } from 'react';

interface Props {
	price: number;
	discountPercentage: number;
	className: string;
}

const Price: FC<Props> = ({ price, discountPercentage, className }) => {
	return (
		<div className="flex gap-2 items-center">
			<div className={`${className} flex gap-1 `}>
				<span className="text-xl ">$</span>
				{(price - getDiscount(price, discountPercentage)).toFixed(2)}
			</div>
			{Math.round(discountPercentage) !== 0 && (
				<>
					<span className="line-through text-neutral-400">${price}</span>
					<div className="py-1 px-2 bg-orange-200 text-orange-400 text-sm">
						{Math.round(discountPercentage)}% Off
					</div>
				</>
			)}
		</div>
	);
};

export default Price;
