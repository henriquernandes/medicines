import { z } from "zod";
import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";

export const pacientsRouter = createTRPCRouter({
  getAllPacients: publicProcedure.query(({ ctx }) => {
    return ctx.db.pacients.findMany({
      orderBy: { name: "desc" },
    });
  }),

  getPacientById: publicProcedure
    .input(
      z.object({
        id: z.number(),
      }),
    )
    .query(({ ctx, input }) => {
      return ctx.db.pacients.findUnique({
        where: {
          id: input.id,
        },
      });
    }),
});
