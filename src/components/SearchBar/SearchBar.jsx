import css from "./SearchBar.module.css";
import toast, { Toaster } from "react-hot-toast";

const notify = () => toast.error("Search query can not be empty!");

const SearchBar = ({ onSubmit }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const inputQuery = e.target.elements.query.value;
    if (inputQuery === "") notify();
    onSubmit(inputQuery);
    e.target.reset();
  };

  return (
    <header className={css.header}>
      <Toaster />
      <form onSubmit={handleSubmit} className={css.form}>
        <input
          className={css.input}
          name="query"
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
        <button type="submit" className={css.submitBtn}>
          Search
        </button>
      </form>
    </header>
  );
};

export default SearchBar;
