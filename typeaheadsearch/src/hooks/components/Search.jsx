import React, { useState } from "react";
import Input from "./Input";
import useFetchPromise from "../useFetchPromise";
import List from "./list";
import useDebounce from "../useDebounce";

function Search() {
  const [query, setQuery] = useState("");
  const { debouncedValue } = useDebounce(query, 300);
  const { data, loading, error } = useFetchPromise(debouncedValue);
  return (
    <div>
      <Input
        name="search"
        placeholder="type to search"
        query={query}
        setQuery={setQuery}
      />
      <List items={data} loading={loading} error={error} />
    </div>
  );
}

export default Search;
