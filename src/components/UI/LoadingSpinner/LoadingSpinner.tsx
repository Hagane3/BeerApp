import classes from "./LoadingSpinner.module.scss";
import { PuffLoader } from "react-spinners";

interface Props {
  isLoading: boolean;
  color: string;
}

const LoadingSpinner = ({ isLoading, color }: Props) => {
  return (
    <PuffLoader
      loading={isLoading}
      className={classes.loadingSpinner}
      color={color}
    />
  );
};

export default LoadingSpinner;
