import { z } from "zod";
import { createRouter } from "../createRouter";

export const todosRouter = createRouter()
  .mutation("add", {
    input: z.string().min(1),
    async resolve({ ctx, input }) {
      return ctx.prisma.todo.create({ data: { name: input } });
    },
  })
  .query("getAll", {
    async resolve({ ctx }) {
      return ctx.prisma.todo.findMany({
        select: {
          id: true,
          name: true,
        },
      });
    },
  });
