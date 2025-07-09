import React, { useCallback, useEffect, useRef } from "react";

function InfiniteScroll(props) {
  const {
    searchQuery,
    data,
    loading,
    fetchApiCall,
    renderListItem,
    renderLoading,
  } = props;

  const page = useRef(1);
  const observerRef = useRef();

  const interactionObserver = useCallback((node) => {
    if (loading) return;
    if (observerRef.current) observerRef.current.disconnect();

    observerRef.current = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        debugger;

        page.current += 1;
        fetchData();
      }
    });
    if (node) observerRef.current.observe(node);
  });

  const fetchData = useCallback(() => {
    fetchApiCall({ searchQuery: searchQuery, page: page.current });
  }, [searchQuery]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  const renderList = (data, renderListItem) => {
    return data.map((item, index) => {
      if (data.length - 1 === index)
        return renderListItem(item, interactionObserver);
      return renderListItem(item, null);
    });
  };

  return (
    <ol>
      {data.length > 0 && renderList(data, renderListItem, loading)}
      {loading && renderLoading()}
    </ol>
  );
}

export default InfiniteScroll;
