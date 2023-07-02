import { useState, useEffect } from "react";

interface Beer {
  id?: number;
  name?: string;
  tagline?: string;
  description?: string;
  image_url?: string;
}

interface Props {
  data: Beer[];
  perPage: number;
}

const useMoreData = ({ data, perPage }: Props) => {
  const [hasMoreData, setHasMoreData] = useState(true);

  useEffect(() => {
    if (data.length < perPage) {
      setHasMoreData(false);
    } else if (data.length === perPage) {
      setHasMoreData(true);
    }
  }, [data, perPage]);

  return { hasMoreData };
};

export default useMoreData;
