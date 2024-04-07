import css from "./ImageCard.module.css";

const ImageCard = ({ urlSmall, urlRegular, alt }) => {
  return (
    <div className={css.div}>
      <img src={urlSmall} alt={alt} className={css.img} />
    </div>
  );
};

export default ImageCard;
