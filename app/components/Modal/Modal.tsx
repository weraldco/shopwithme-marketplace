import { FC } from "react";
import { IoIosClose } from "react-icons/io";

interface Props {
  toggleShow: (args: boolean) => void;
  toggleDelete: () => void;
}

const Modal: FC<Props> = ({ toggleShow, toggleDelete }) => {
  return (
    <>
      {/* Modal */}
      <div className="fixed top-0 right-0 bottom-0 left-0 flex h-screen items-center justify-center bg-neutral-400/40">
        <div className="w-full max-w-md bg-white">
          <div className="relative flex justify-between">
            <div className="w-full bg-red-300 p-2 text-white">
              Removing Item to Cart
            </div>
            <div className="absolute top-2 right-2 text-2xl">
              <IoIosClose></IoIosClose>
            </div>
          </div>
          <div className="p-2">Are you sure you want to delete?</div>
          <div className="flex justify-end gap-2 p-2">
            <button
              className="rounded bg-blue-400 px-4 py-2 text-white duration-200 hover:bg-blue-400/80 active:bg-blue-400/90"
              onClick={() => toggleDelete()}
            >
              Yes
            </button>
            <button
              className="rounded border border-blue-400 px-4 py-2 text-blue-400 duration-200 hover:text-blue-400/80 active:bg-blue-400/90"
              onClick={() => toggleShow(false)}
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;
