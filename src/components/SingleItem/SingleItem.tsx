import classes from "./SingleItem.module.scss";
import { useParams } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
import LoadingSpinner from "../UI/LoadingSpinner/LoadingSpinner";
import { useState } from "react";

interface MaltProps {
  name: string;
  amount: {
    value: number;
    unit: string;
  };
}

interface HopProps {
  name: string;
  amount: {
    value: number;
    unit: string;
  };
  add: string;
}

const SingleItem = () => {
  const [isImageLoaded, setIsImageLoaded] = useState(false);
  const { id } = useParams<{ id: string }>();
  const { data, loading, error } = useFetch(
    `https://api.punkapi.com/v2/beers/${id}`
  );

  const beer = { ...data[0] };

  if (loading)
    return (
      <div className={classes.wrapper}>
        <LoadingSpinner isLoading={loading} color="#fdd71f" />
      </div>
    );

  if (error) return <p className={classes.error}>Something went wrong...</p>;

  return (
    <section className={classes.root}>
      <div className={classes.basicInfo}>
        <h2>{beer.name}</h2>
        <h3>{beer.tagline}</h3>
        <h4>First brewed: {beer.first_brewed}</h4>
        <LoadingSpinner isLoading={!isImageLoaded} color="#fdd71f" />
        <img
          src={beer.image_url}
          alt={beer.name}
          className={isImageLoaded ? classes.active : classes.inActive}
          onLoad={() => setIsImageLoaded(true)}
        />
        <p>{beer.description}</p>
      </div>
      <div className={classes.details}>
        <h3>Some details for Hopheads</h3>
        <div className={classes.detailsScores}>
          <div className={classes.score}>
            <h4>IBU</h4>
            <p>{beer.ibu}</p>
          </div>
          <div className={classes.score}>
            <h4>ABV</h4>
            <p>{beer.abv}</p>
          </div>
          <div className={classes.score}>
            <h4>EBC</h4>
            <p>{beer.ebc}</p>
          </div>
          <div className={classes.score}>
            <h4>SRM</h4>
            <p>{beer.srm}</p>
          </div>
          <div className={classes.score}>
            <h4>PH</h4>
            <p>{beer.ph}</p>
          </div>
        </div>
      </div>
      <div className={classes.ingredients}>
        <h3>Ingredients</h3>
        <div className={classes.ingredientsList}>
          <div className={classes.ingredient}>
            <h4>Malt</h4>
            <ul>
              {beer.ingredients.malt.map((malt: MaltProps) => (
                <li key={malt.name}>{malt.name}</li>
              ))}
            </ul>
          </div>
          <div className={classes.ingredient}>
            <h4>Hops</h4>
            <ul>
              {beer.ingredients.hops.map((hop: HopProps, index: number) => (
                <li key={index}>
                  {hop.amount.value} {hop.amount.unit} - {hop.add} - {hop.name}
                </li>
              ))}
            </ul>
          </div>
          <div className={classes.ingredient}>
            <h4>Yeast</h4>
            <p>{beer.ingredients.yeast}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SingleItem;
