import React, { useCallback, useEffect, useState } from "react";
import useDebounce from "./useDebounce";

function useFetchPromise(query) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [data, setData] = useState([]);

  const fetchData = useCallback(async (query) => {
    const url =
      "https://api.escuelajs.co/api/v1/products?" +
      new URLSearchParams({
        offset: 0,
        limit: 10,
        title: query ?? "",
      });

    try {
      setLoading(true);

      const response = await fetch(url);
      if (!response.ok) new Error("There is some problem with the Api!");
      const resolvedResponse = await response.json();
      setData(resolvedResponse);
    } catch (e) {
      setError(e.message);
    } finally {
      setLoading(false);
    }
  });

  useEffect(() => {
    debugger;
    fetchData(query);
  }, [query]);

  return { loading, data, error };
}

export default useFetchPromise;
