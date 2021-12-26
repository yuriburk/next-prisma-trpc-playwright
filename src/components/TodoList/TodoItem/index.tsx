import React from "react";
import { Todo } from "@prisma/client";

const TodoItem = ({ todo: { name } }: { todo: Todo }) => {
  return <div style={{ display: "flex" }}>{name}</div>;
};

export default TodoItem;
