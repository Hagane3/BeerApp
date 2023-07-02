import BeerList from "../../components/BeerList/BeerList";
import classes from "./Homepage.module.scss";

const Homepage = () => {
  return (
    <section className={classes.root}>
      <h2>Try our beer app today!</h2>
      <BeerList />
    </section>
  );
};

export default Homepage;
