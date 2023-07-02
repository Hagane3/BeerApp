import classes from "./GetRandomBeer.module.scss";
import { useNavigate } from "react-router-dom";
import { MAX_BEER_ID } from "../../constants";

const GetRandomBeer = () => {
  const navigate = useNavigate();
  const getRandomBeer = () => {
    const randomBeerId = Math.floor(Math.random() * MAX_BEER_ID) + 1;
    navigate(`/details/${randomBeerId}`);
  };

  return (
    <li className={classes.root} onClick={getRandomBeer}>
      Get Random Beer
    </li>
  );
};

export default GetRandomBeer;
