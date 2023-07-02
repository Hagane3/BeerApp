import arrow from "../../../assets/icons/arrow.svg";
import classes from "./Pagination.module.scss";

interface Props {
  changePageHandler: (prev: (prev: number) => number) => void;
  actualPage: number;
  hasMoreData: boolean;
}

const Pagination = ({ changePageHandler, actualPage, hasMoreData }: Props) => {
  const handleNextPage = () => {
    changePageHandler((prev) => prev + 1);
  };

  const handlePrevPage = () => {
    changePageHandler((prev) => prev - 1);
  };

  return (
    <div className={classes.root}>
      <button
        className={classes.arrowLeft}
        onClick={handlePrevPage}
        disabled={actualPage === 1}
      >
        <img src={arrow} alt="arrow icon" />
      </button>
      <div className={classes.counter}>{actualPage}</div>
      <button
        className={classes.arrowRight}
        onClick={handleNextPage}
        disabled={!hasMoreData}
      >
        <img src={arrow} alt="arrow icon" />
      </button>
    </div>
  );
};

export default Pagination;
