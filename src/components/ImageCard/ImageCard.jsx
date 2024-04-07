import css from "./ImageCard.module.css";
import { FaInstagram } from "react-icons/fa";

const ImageCard = ({ imageInfo, setIsModalOpen, onSetModalImage }) => {
  const {
    alt_description: alt,
    urls: { small: urlSmall, regular: urlRegular },
    likes,
    user: {
      name,
      social: { instagram_username: instagram },
    },
  } = imageInfo;

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
      <ul className={css.infoList}>
        <li className={css.infoItem}>
          <h3 className={css.infoHeader}>Likes</h3>
          <p className={css.text}>{likes}</p>
        </li>
        <li className={css.infoItem}>
          <h3 className={css.infoHeader}>Photographer</h3>
          {instagram ? (
            <a
              className={css.text}
              href={"https://www.instagram.com/" + instagram}
              target="_blank"
            >
              <FaInstagram className={css.icon} />
              {name}
            </a>
          ) : (
            <p className={css.text}>{name}</p>
          )}
        </li>
      </ul>
    </div>
  );
};

export default ImageCard;
