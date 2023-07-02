import classes from "./BeerItem.module.scss";
import { Link } from "react-router-dom";
import { useState } from "react";
import LoadingSpinner from "../UI/LoadingSpinner/LoadingSpinner";

interface Props {
  beer: {
    id: number;
    name: string;
    tagline: string;
    image_url: string;
  };
}

const BeerItem = ({ beer }: Props) => {
  const [isImageLoaded, setIsImageLoaded] = useState(false);

  const handleImageLoad = () => {
    setIsImageLoaded(true);
  };

  return (
    <div className={classes.root}>
      <h3>{beer.name}</h3>
      <LoadingSpinner isLoading={!isImageLoaded} color="#fdd71f" />
      <img
        src={beer.image_url}
        className={isImageLoaded ? classes.active : classes.inActive}
        alt="beer image"
        onLoad={handleImageLoad}
      />
      <p>{beer.tagline}</p>
      <Link to={`details/${beer.id}`}>Check details</Link>
    </div>
  );
};

export default BeerItem;
