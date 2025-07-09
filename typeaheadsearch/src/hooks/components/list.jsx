import React from "react";

function List(props) {
  const { items, loading, error } = props;
  return (
    <ol className="flex flex-col border border-green-100 rounded-md">
      {items?.map((item) => {
        return (
          <li
            className="bg-slate-300 text-stone-700 hover:bg-red-400 active:bg-green-400"
            key={item.id}
          >
            {item.title}
          </li>
        );
      })}
      {items.length < 1 && (
        <li className="bg-slate-300 text-stone-700 hover:bg-red-400 active:bg-green-400 p-2 border border-white ">
          No data found!
        </li>
      )}
      {loading && (
        <li className="bg-slate-300 text-stone-700 hover:bg-red-400 active:bg-green-400 p-2 border border-white ">
          Loading...
        </li>
      )}
      {error && (
        <li className="bg-slate-300 text-stone-700 hover:bg-red-400 active:bg-green-400 p-2 border border-white ">
          {error}
        </li>
      )}
    </ol>
  );
}

export default List;
