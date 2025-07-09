import { comments } from "./dumyComment";

export const updateComment = (
  comments,
  selectedComment,
  newComment,
  operation
) => {
  let copyComments = structuredClone(comments);

  if (operation === "DELETE") {
    copyComments = copyComments.filter(
      (item) => item.index !== selectedComment.index
    );
  }
  for (let obj of copyComments) {
    if (obj.index === selectedComment.index) {
      if (operation === "ADD") {
        obj.subComment.push({
          index: new Date().getTime(),
          comment: newComment,
          subComment: [],
        });
      }
    } else if (obj.subComment.length > 0) {
      obj.subComment = updateComment(
        obj.subComment,
        selectedComment,
        newComment,
        operation
      );
    }
  }

  return copyComments;
};
