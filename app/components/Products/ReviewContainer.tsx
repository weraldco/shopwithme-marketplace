import { FC, JSX } from "react";
import { FaStar } from "react-icons/fa";

type ReviewType = {
  rating: number;
  comment: string;
  date: Date;
  reviewerName: string;
  reviewerEmail: string;
};
interface Props {
  data: ReviewType;
}

const ReviewContainer: FC<Props> = ({ data }) => {
  const reviewStar = (count: number) => {
    const result: JSX.Element[] = [];
    //  const test: JSX.Element = <FaStar />;
    for (let i = 0; i < count; i++) {
      result.push(<FaStar key={i} />);
    }
    return result;
  };

  return (
    <div className="flex flex-col gap-4">
      {/* Review Header */}
      <div className="flex items-center gap-4 text-sm">
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-red-200 p-4 text-2xl font-bold text-white">
          {data.reviewerName.split("")[0].split("")[0]}
        </div>
        <div className="flex flex-col text-sm">
          <div className="flex gap-2">
            <span className="font-semibold">{data.reviewerName}</span>
            <span className="text-neutral-500">({data.reviewerEmail})</span>
          </div>
          <div className="text-xs text-neutral-500">
            {new Date(data.date).toLocaleDateString("en-EN", {
              day: "2-digit",
              month: "short",
              year: "numeric",
            })}
          </div>
        </div>
      </div>
      {/* Review Star */}
      <div className="flex text-yellow-400">
        {reviewStar(data.rating).map((t) => t)}
      </div>
      {/* Review Content */}
      <div>{data.comment}</div>
      <hr className="text-neutral-200" />
    </div>
  );
};

export default ReviewContainer;
