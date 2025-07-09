import React from "react";
import "./App.css";
import CommentsContainer from "./comment/CommentContainer";
import { comments } from "./comment/dumyComment";
function App() {
  const commentsData = comments;

  return (
    <div className="h-screen w-screen m-0 flex place-content-center flex-col gap-4">
      <span>Comment Box</span>
      <CommentsContainer commentsData={commentsData} />
    </div>
  );
}

export default App;
