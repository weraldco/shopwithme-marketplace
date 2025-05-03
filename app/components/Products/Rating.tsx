import { ProductReviewsType } from '@/utils/types';
import { FC } from 'react';
import { FaStar } from 'react-icons/fa';

interface Props {
	rating: number;
	reviews: ProductReviewsType[];
}

const Rating: FC<Props> = ({ rating, reviews }) => {
	return (
		<div className="flex items-center gap-2 text-sm">
			<FaStar className="text-yellow-400" />
			{rating}
			<div className="italic text-neutral-400">({reviews.length} Ratings)</div>
		</div>
	);
};

export default Rating;
