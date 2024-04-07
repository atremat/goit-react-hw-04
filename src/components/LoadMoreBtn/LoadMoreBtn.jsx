import css from "./LoadMoreBtn.module.css";

const LoadMoreBtn = ({ onMoreClick }) => {
  const handleClick = () => {
    onMoreClick();
  };
  return (
    <button type="button" className={css.button} onClick={handleClick}>
      Load more
    </button>
  );
};

export default LoadMoreBtn;
