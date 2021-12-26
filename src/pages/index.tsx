import type { NextPage } from "next";
import { trpc } from "../utils/trpc";

import TodoList from "../components/TodoList";
import CreateTodo from "../components/CreateTodo";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  const todos = trpc.useQuery(["todos", { name: "Todo" }]);
  if (!todos.data) {
    return <div>Loading...</div>;
  }
  return (
    <div className={styles.container}>
      <TodoList todos={todos.data.todos} />
      <CreateTodo onCreate={() => {}} />
    </div>
  );
};

export default Home;
