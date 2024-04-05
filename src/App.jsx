import { useEffect, useState } from "react";
import SearchBar from "./components/SearchBar/SearchBar";
import fetchImages from "./services/api";

const App = () => {
  const [searchValue, setSearchValue] = useState("");
  const [loading, setLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [images, setImages] = useState([]);

  useEffect(() => {
    if (searchValue !== "") searchImagesWithQuery(searchValue);
  }, [searchValue]);

  const searchImagesWithQuery = async (value) => {
    // console.log(await fetchImages("parrot"));

    try {
      console.log(`searching for a ${value}`);
      setSearchValue("");
      setLoading(true);
      const resData = await fetchImages(value);
      setImages(await resData);
    } catch (err) {
      console.log("in error");
      setIsError(true);
    } finally {
      console.log("in finally");
      setLoading(false);
    }
  };

  const handleSearchPressed = (query) => {
    setSearchValue(query);
  };

  return (
    <>
      <SearchBar onSubmit={handleSearchPressed} />
    </>
  );
};

export default App;
