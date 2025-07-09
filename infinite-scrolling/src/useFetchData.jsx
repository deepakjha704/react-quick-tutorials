import React, { useState } from "react";

function useFetchData(url) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const fetchApiCall = async (payload) => {
    // const url =
    //   "https://jsonplaceholder.typicode.com/posts?" +
    //   new URLSearchParams({
    //     _search: searchQuery,
    //     _page: page ?? 1,
    //     _size: 10,
    //   }).toString();
    setLoading(true);
    try {
      const response = await fetch(
        url +
          new URLSearchParams({
            _search: payload?.searchQuery ?? "",
            _page: payload?.page ?? 1,
            _size: 10,
          })
      );
      const responseData = await response.json();
      setData((prevState) => [...prevState, ...responseData]);
    } catch (e) {
      console.lof("OOps might be some error", e.message);
    } finally {
      setLoading(false);
    }
  };
  return { data, loading, fetchApiCall };
}

export default useFetchData;
