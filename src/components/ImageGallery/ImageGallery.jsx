// import css from "./ImageGallery.module.css";

import ImageCard from "../ImageCard/ImageCard";

const ImageGallery = ({ images }) => {
  console.log(images);
  return (
    <ul>
      {images.map((image) => {
        const {
          id,
          alt_description: alt,
          urls: { small, regular },
        } = image;
        return (
          <li key={id}>
            <ImageCard urlSmall={small} urlRegular={regular} alt={alt} />
          </li>
        );
      })}
    </ul>
  );
};

export default ImageGallery;
