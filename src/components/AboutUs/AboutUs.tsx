import classes from "./AboutUs.module.scss";
import beerAbout from "../../assets/images/beerAbout.webp";
import { Link } from "react-router-dom";

const AboutUs = () => {
  return (
    <section className={classes.root}>
      <div className={classes.wrapper}>
        <div className={classes.container}>
          <img src={beerAbout} alt="two people drinking a beer" />
        </div>
        <div className={classes.description}>
          <p>
            Welcome to Beer App, the ultimate destination for beer enthusiasts
            and connoisseurs alike. Our app is designed to bring you a world of
            beer at your fingertips, offering a comprehensive and immersive
            experience for those who appreciate the art of brewing.
          </p>
          <p>
            At Beer App, we believe that this recruitment task could get our
            first commercial job! It's a cultural phenomenon, a symbol of
            celebration, and a testament to human craftsmanship. Our mission is
            to provide you with a platform where you can discover, explore, and
            learn about a diverse range of beers from around the globe.
          </p>
        </div>
      </div>
      <Link to="/">Discover our library</Link>
    </section>
  );
};

export default AboutUs;
