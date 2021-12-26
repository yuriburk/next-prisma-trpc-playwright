import type { NextPage } from "next";
import { trpc } from "../utils/trpc";

import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  const hello = trpc.useQuery(["hello", { text: "Yuri" }]);
  if (!hello.data) {
    return <div>Loading...</div>;
  }
  return (
    <div className={styles.container}>
      <p>{hello.data.greeting}</p>
    </div>
  );
};

export default Home;
