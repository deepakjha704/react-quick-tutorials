import React from "react";

function Input(props) {
  const { name, placeholder, query, setQuery } = props;
  return (
    <div className="flex flex-col gap-2">
      <label for={name}>Please enter the text</label>
      <input
        type="text"
        className="p-2 border border-yellow-200 focus:border-orange-200 hover:border-green-200"
        name={name}
        placeholder={placeholder}
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
    </div>
  );
}

export default Input;
