import css from "./ImageGallery.module.css";

import ImageCard from "../ImageCard/ImageCard";

const ImageGallery = ({ images }) => {
  console.log(images);
  return (
    <div className={css.wrapper}>
      <ul className={css.list}>
        {images.map((image) => {
          const {
            id,
            alt_description: alt,
            urls: { small, regular },
          } = image;
          return (
            <li key={id} className={css.item}>
              <ImageCard urlSmall={small} urlRegular={regular} alt={alt} />
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default ImageGallery;
