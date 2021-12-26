import * as trpc from "@trpc/server";
import * as trpcNext from "@trpc/server/adapters/next";
import { z } from "zod";

const appRouter = trpc.router().query("todos", {
  input: z
    .object({
      name: z.string().nullish(),
    })
    .nullish(),
  resolve({ input }) {
    return {
      todos: (
        [
          { id: 1, name: "Todo" },
          { id: 2, name: "Todo" },
          { id: 3, name: "Todo" },
          { id: 4, name: "Todo" },
        ] as Todo[]
      ).filter((todo) => todo.name.includes(input?.name ?? "")),
    };
  },
});

// export type definition of API
export type AppRouter = typeof appRouter;

// export API handler
export default trpcNext.createNextApiHandler({
  router: appRouter,
  createContext: () => null,
});
