import { useCallback, useState } from "react";
import "./App.css";
import InfiniteScroll from "./InfiniteScroll";
import useFetchData from "./useFetchData";
import useDebounce from "./useDebounce";

function App() {
  const [searchQuery, setSearchQuery] = useState("");

  const { debounceValue } = useDebounce(searchQuery, 300);

  const url = "https://jsonplaceholder.typicode.com/posts?";
  const { data, loading, fetchApiCall } = useFetchData(url);

  const renderListItem = useCallback((data, ref) => (
    <li key={data.id} ref={ref}>
      {data.title}
    </li>
  ));

  const renderLoading = useCallback(() => <li key={"loading"}>Loading...</li>);

  return (
    <>
      <input
        name="search"
        type="text"
        value={searchQuery}
        onChange={(event) => setSearchQuery(event.target.value)}
      />
      <InfiniteScroll
        searchQuery={debounceValue}
        data={data}
        loading={loading}
        fetchApiCall={fetchApiCall}
        renderListItem={renderListItem}
        renderLoading={renderLoading}
      />
      <div className="text-red-100">hello</div>
    </>
  );
}

export default App;
