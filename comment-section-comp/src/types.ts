export type Comment = {
  comment: string;
  subComment: [];
};

export type CommentItemType = {
  comment: Comment;
  onAddClick?: (comment: Comment) => void;
  onDeleteClick?: (comment: Comment) => void;
};
