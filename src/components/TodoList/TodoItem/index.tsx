import React from "react";

const TodoItem = ({ todo: { name } }: { todo: Todo }) => {
  return <div style={{ display: "flex" }}>{name}</div>;
};

export default TodoItem;
