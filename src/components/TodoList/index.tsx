import React from "react";
import { Todo } from "@prisma/client";

import TodoItem from "./TodoItem";

const TodoList = ({ todos }: { todos: Todo[] }) => {
  return (
    <div>
      <h1>ToDos</h1>
      {todos.map((todo) => (
        <div key={todo.id}>
          <TodoItem todo={todo} />
        </div>
      ))}
    </div>
  );
};

export default TodoList;
