import { AiOutlineLoading } from "react-icons/ai";
import { FaRegCircle } from "react-icons/fa6";
const LoadingState = () => {
  return (
    <div className="flex h-[60vh] w-full flex-col items-center justify-center gap-2">
      <div className="relative bg-red-50">
        <FaRegCircle size={34} className="text-neutral-300" />
        <div className="absolute top-0 animate-spin">
          <AiOutlineLoading size={34} />
        </div>
      </div>

      <span>Loading ...</span>
    </div>
  );
};

export default LoadingState;
