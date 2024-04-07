import { useEffect, useState } from "react";
import SearchBar from "./components/SearchBar/SearchBar";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import fetchImages from "./services/api";
import Loader from "./components/Loader/Loader";
import ErrorMessage from "./components/ErrorMessage/ErrorMessage";
import ImageModal from "./components/ImageModal/ImageModal";
import LoadMoreBtn from "./components/LoadMoreBtn/LoadMoreBtn";

const App = () => {
  const [searchValue, setSearchValue] = useState("");
  const [loading, setLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [images, setImages] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalImage, setModalImage] = useState(null);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(null);

  const searchImagesWithQuery = async (value) => {
    try {
      setImages([]);
      setLoading(true);
      const resData = await fetchImages(value, page);
      setTotalPages(resData["total_pages"]);
      setImages(resData.results);
    } catch (err) {
      setIsError(true);
    } finally {
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

  const handleMoreClick = async () => {
    try {
      setLoading(true);
      const resData = await fetchImages(searchValue, page + 1);
      setPage((prev) => prev + 1);
      setImages((prev) => [...prev, ...resData.results]);
    } catch (err) {
      setIsError(true);
    } finally {
      setLoading(false);
    }
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
      {isModalOpen && (
        <ImageModal
          isOpen={isModalOpen}
          onModalClose={handleModalClose}
          modalImage={modalImage}
        />
      )}
      {page <= totalPages && <LoadMoreBtn onMoreClick={handleMoreClick} />}
    </>
  );
};

export default App;
