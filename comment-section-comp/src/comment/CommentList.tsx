import React from "react";

import { Comment } from "../types";
import CommentItem from "./CommentItem";

function CommentList({ commentsData, ...restProps }) {
  const renderItems = (commentsData: Comment[]) => {
    return commentsData?.map((item) => {
      return (
        <div className="flex flex-col m-4 gap-2">
          <CommentItem key={item?.index} comment={item} {...restProps} />
          {item.subComment.length > 0 && renderItems(item.subComment)}
        </div>
      );
    });
  };
  return (
    <div className="px-4 py-2 flex flex-col gap-2">
      {renderItems(commentsData)}
    </div>
  );
}

export default CommentList;
