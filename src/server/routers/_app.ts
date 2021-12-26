import superjson from "superjson";
import { createRouter } from "../createRouter";
import { todosRouter } from "./todos";

export const appRouter = createRouter()
  .transformer(superjson)
  .merge("todos.", todosRouter);

export type AppRouter = typeof appRouter;
