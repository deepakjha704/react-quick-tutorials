import React from "react";
import { useState } from "react";
import CommentList from "./CommentList";
import { updateComment } from "./helper";

function CommentsContainer({ commentsData }) {
  const [newComments, setNewComments] = useState(commentsData);

  const onAddClick = (item: Comment, addComment: string) => {
    const updatedComments = updateComment(newComments, item, addComment, "ADD");
    setNewComments(updatedComments);
  };
  const onDeleteClick = (item: Comment) => {
    const updatedComments = updateComment(newComments, item, "", "DELETE");
    setNewComments(updatedComments);
  };

  return (
    <div className="h-[70%] w-[60%] border rounded-sm">
      <CommentList
        commentsData={newComments}
        onAddClick={onAddClick}
        onDeleteClick={onDeleteClick}
      />
    </div>
  );
}

export default CommentsContainer;
