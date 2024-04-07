import css from "./ImageCard.module.css";

const ImageCard = ({
  urlSmall,
  urlRegular,
  alt,
  setIsModalOpen,
  onSetModalImage,
}) => {
  const handleImgClick = () => {
    setIsModalOpen();
    onSetModalImage({ urlRegular, alt });
  };

  return (
    <div className={css.div}>
      <img
        src={urlSmall}
        alt={alt}
        className={css.img}
        onClick={handleImgClick}
      />
    </div>
  );
};

export default ImageCard;
