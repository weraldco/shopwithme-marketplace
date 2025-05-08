import { FC } from "react";

interface Props {
  handleClick: () => void;
}

const LoadMoreButton: FC<Props> = ({ handleClick }) => {
  return (
    <div className="flex w-full items-center justify-center">
      <button
        className="rounded bg-blue-400 px-4 py-2 text-white hover:bg-blue-400/80 active:bg-blue-500/80"
        onClick={handleClick}
      >
        Load More
      </button>
    </div>
  );
};

export default LoadMoreButton;
