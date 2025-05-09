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
        <div className="w-full max-w-md rounded bg-white">
          <div className="relative flex justify-between">
            <div className="w-full rounded-t bg-neutral-700 p-3 text-white">
              Removing Item to Cart
            </div>
            <div
              className="absolute top-2 right-2 text-2xl text-neutral-300 duration-200 hover:text-neutral-300/80"
              onClick={() => toggleShow(false)}
            >
              <IoIosClose></IoIosClose>
            </div>
          </div>
          <div className="p-3">Are you sure you want to delete?</div>
          <div className="flex justify-end gap-2 p-2">
            <button
              className="rounded bg-neutral-600 px-4 py-2 text-white duration-200 hover:bg-neutral-600/80 active:bg-neutral-600/90"
              onClick={() => toggleDelete()}
            >
              Yes
            </button>
            <button
              className="rounded border border-neutral-600 px-4 py-2 text-neutral-600 duration-200 hover:text-neutral-600/80 active:bg-neutral-600/90"
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
