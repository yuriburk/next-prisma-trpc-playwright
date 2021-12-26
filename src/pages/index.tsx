import type { NextPage } from "next";
import { trpc } from "../utils/trpc";

import TodoList from "../components/TodoList";
import CreateTodo from "../components/CreateTodo";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  const utils = trpc.useContext();
  const todos = trpc.useQuery(["todos.getAll"]);
  const addTodo = trpc.useMutation("todos.add", {
    async onSuccess() {
      await utils.invalidateQueries(["todos.getAll"]);
    },
  });
  if (!todos.data) {
    return <div>Loading...</div>;
  }

  const handleCreate = (name: string) => {
    addTodo.mutateAsync(name);
  };

  return (
    <div className={styles.container}>
      <TodoList todos={todos.data} />
      <CreateTodo onCreate={handleCreate} />
    </div>
  );
};

export default Home;
