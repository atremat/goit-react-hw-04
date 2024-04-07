import { useEffect, useState } from "react";
import SearchBar from "./components/SearchBar/SearchBar";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import fetchImages from "./services/api";
import Loader from "./components/Loader/Loader";
import ErrorMessage from "./components/ErrorMessage/ErrorMessage";
import ImageModal from "./components/ImageModal/ImageModal";

const App = () => {
  const [searchValue, setSearchValue] = useState("");
  const [loading, setLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [images, setImages] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalImage, setModalImage] = useState(null);

  const searchImagesWithQuery = async (value) => {
    try {
      console.log(`searching for a '${value}'`);
      setImages([]);
      setLoading(true);
      const resData = await fetchImages(value);
      setImages(resData.results);
    } catch (err) {
      console.log("in error");
      setIsError(true);
    } finally {
      console.log("in finally");
      console.log("images: ", images);
      console.log("images.typeof = ", typeof images);
      setLoading(false);
    }
  };

  useEffect(() => {
    if (searchValue !== "") searchImagesWithQuery(searchValue);
  }, [searchValue]);

  const handleSearchPressed = (query) => {
    setSearchValue(query);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  const handleModalOpen = () => {
    setIsModalOpen(true);
  };

  const handleSetModalImage = (img) => {
    setModalImage(img);
  };

  return (
    <>
      <SearchBar onSubmit={handleSearchPressed} />
      {images.length > 0 && (
        <ImageGallery
          images={images}
          setIsModalOpen={handleModalOpen}
          onSetModalImage={handleSetModalImage}
        />
      )}
      {loading && <Loader />}
      {isError && <ErrorMessage />}
      {
        <ImageModal
          isOpen={isModalOpen}
          onModalClose={handleModalClose}
          modalImage={modalImage}
        />
      }
    </>
  );
};

export default App;
