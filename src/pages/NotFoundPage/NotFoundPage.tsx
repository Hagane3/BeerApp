import classes from "./NotFoundPage.module.scss";
import notFoundImg from "../../assets/images/notFoundImg.webp";
import { Link } from "react-router-dom";

const NotFoundPage = () => {
  return (
    <section className={classes.root}>
      <h1>Ooops!</h1>
      <h2>404</h2>
      <img src={notFoundImg} alt="beer not found page" />
      <h3>It looks like the keg is empty!</h3>
      <Link to="/">Go Home, You're Drunk 🤨</Link>
    </section>
  );
};

export default NotFoundPage;
