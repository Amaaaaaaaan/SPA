import { use, useEffect, useState } from "react";

export function useFetch(url) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

    async function getData() {
      setLoading(true);
      const response = await fetch(url);
      const json = await response.json();
      setData(json);
      setLoading(false);
    }
  

  useEffect(() => {
    getData();
  }, [url]);

  useEffect(() => {
    setInterval(getData, 10*1000);

  }, []);

  return { data, loading };
}