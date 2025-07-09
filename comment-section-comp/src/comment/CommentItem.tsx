import React from "react";

import { useState } from "react";
import { CommentItemType } from "../types";

function CommentItem({ comment, onAddClick, onDeleteClick }: CommentItemType) {
  const [showInput, toggleInput] = useState(false);
  const onAdd = () => {
    toggleInput(!showInput);
  };
  const onkeydownClick = (e) => {
    if (e.keyCode === 13) {
      onAddClick(comment, e.target.value);
      toggleInput(!showInput);
    }
  };
  const onDelete = () => onDeleteClick(comment);
  return (
    <div className="flex flex-col gap-2">
      <div className="px-4 py-2 flex gap-4 justify-between border-2 border-gray-600 rounded-md">
        <span className="rounded-full border w-6 h-6 items-center border-gray-500"></span>
        <span className="">{comment?.comment}Comment</span>
        <button className="p-1 hover: border" onClick={onAdd}>
          Add
        </button>
        <button className="p-1 hover: border" onClick={onDelete}>
          Delete
        </button>
        {/* <button className="p-1 hover: border" onClick={onShowClick}>
          view
        </button> */}
      </div>
      {showInput && (
        <input
          className=" px-4 py-2 border rounded-md"
          name="newComment"
          placeholder="Add new"
          onKeyDown={onkeydownClick}
          // onBlur={onBlur}
        />
      )}
    </div>
  );
}

export default CommentItem;
