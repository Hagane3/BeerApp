import { useEffect, useState } from "react";
import axios from "axios";

interface DataType {
  [key: string]: string;
}

interface UseFetchType {
  data: Array<DataType>;
  loading: boolean;
  error: Error | null;
}

const useFetch = (url: string): UseFetchType => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    axios
      .get(url)
      .then((res) => setData(res.data))
      .catch((err) => setError(err))
      .finally(() => setLoading(false));
  }, []);

  return { data, loading, error };
};

export default useFetch;
