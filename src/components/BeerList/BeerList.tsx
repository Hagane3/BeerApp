import BeerItem from "../BeerItem/BeerItem";
import classes from "./BeerList.module.scss";
import useFetch from "../../hooks/useFetch";
import { PER_PAGE } from "../../constants";
import { useState } from "react";
import LoadingSpinner from "../UI/LoadingSpinner/LoadingSpinner";
import Pagination from "../UI/Pagination/Pagination";
import useMoreData from "../../hooks/useMoreData";

const BeerList = () => {
  const [page, setPage] = useState(1);
  const { data, loading, error } = useFetch(
    `https://api.punkapi.com/v2/beers?per_page=${PER_PAGE}&page=${page}`
  );
  console.log(data);
  const { hasMoreData } = useMoreData({ data, perPage: PER_PAGE });

  return (
    <div className={classes.root}>
      {error && <p className={classes.error}>{error.message}</p>}
      {loading && !error ? (
        <div className={classes.wrapper}>
          <LoadingSpinner isLoading={loading} color="#fdd71f" />
        </div>
      ) : (
        data &&
        data.map((beer: any) => {
          return <BeerItem key={beer.id} beer={beer} />;
        })
      )}
      <div className={classes.paginationWrapper}>
        <Pagination
          changePageHandler={setPage}
          actualPage={page}
          hasMoreData={hasMoreData}
        />
      </div>
    </div>
  );
};

export default BeerList;
