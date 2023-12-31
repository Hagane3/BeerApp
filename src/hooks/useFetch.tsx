import { useEffect, useState } from "react";
import axios from "axios";

interface UseFetchType {
  data: Array<any>;
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
  }, [url]);

  return { data, loading, error };
};

export default useFetch;
