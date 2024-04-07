import ReactModal from "react-modal";
import css from "./ImageModal.module.css";

ReactModal.setAppElement("#root");

const ImageModal = ({ isOpen, onModalClose, modalImage }) => {
  const { urlRegular, alt } = modalImage;
  return (
    <>
      <ReactModal
        isOpen={isOpen}
        onRequestClose={onModalClose}
        shouldCloseOnOverlayClick={true}
        shouldCloseOnEsc={true}
        className={css.modal}
      >
        <img src={urlRegular} alt={alt} className={css.img}></img>
      </ReactModal>
    </>
  );
};

export default ImageModal;
