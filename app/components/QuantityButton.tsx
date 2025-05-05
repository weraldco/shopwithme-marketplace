import { FC } from "react";
import { FaMinus, FaPlus } from "react-icons/fa6";

interface Props {
  quantity: number;
  increment: () => void;
  decrement: () => void;
}

const QuantityButton: FC<Props> = ({ quantity, increment, decrement }) => {
  return (
    <div className="flex items-center justify-center">
      <button
        className="rounded-l-lg border-1 border-r-0 border-neutral-200/70 p-2 text-neutral-500/70 duration-200 hover:text-neutral-600"
        onClick={decrement}
      >
        <FaMinus />
      </button>
      <span className="w-[50px] border-1 border-neutral-200/70 py-1 text-center text-neutral-600 duration-200">
        {quantity}
      </span>
      <button
        className="rounded-r-lg border-1 border-l-0 border-neutral-200/70 p-2 text-neutral-500/70 duration-200 hover:text-neutral-700"
        onClick={increment}
      >
        <FaPlus />
      </button>
    </div>
  );
};

export default QuantityButton;
