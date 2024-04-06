import css from "./ImageCard.module.css";

const ImageCard = ({ urlSmall, urlRegular, alt }) => {
  return (
    <div>
      <img src={urlSmall} alt={alt} />
    </div>
  );
};

export default ImageCard;
