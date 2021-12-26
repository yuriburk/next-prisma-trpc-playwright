import type { NextPage } from "next";
import { trpc } from "../utils/trpc";

import TodoList from "../components/TodoList";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  const todos = trpc.useQuery(["todos", { name: "Todo" }]);
  if (!todos.data) {
    return <div>Loading...</div>;
  }
  return (
    <div className={styles.container}>
      <TodoList todos={todos.data.todos} />
    </div>
  );
};

export default Home;
