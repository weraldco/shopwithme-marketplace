import { FC, ReactNode, useState } from "react";
import Modal from "./Modal";

interface Props {
  children: ReactNode;
  deleteCart: () => void;
}

const ModalPrompt: FC<Props> = ({ children, deleteCart }) => {
  const [modalShow, setModalShow] = useState(false);
  return (
    <div>
      <button onClick={() => setModalShow((prev) => !prev)}>{children}</button>
      <div>
        {modalShow && (
          <Modal
            toggleShow={setModalShow}
            toggleDelete={() => {
              deleteCart();
              setModalShow(false);
            }}
          ></Modal>
        )}
      </div>
    </div>
  );
};

export default ModalPrompt;
