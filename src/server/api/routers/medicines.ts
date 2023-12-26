import { z } from "zod";
import { createTRPCRouter, publicProcedure } from "../trpc";

export const medicinesRouter = createTRPCRouter({
  getAllMedicinesFromPacient: publicProcedure
    .input(
      z.object({
        pacient_id: z.number(),
      }),
    )
    .query(({ ctx, input }) => {
      return ctx.db.medicines.findMany({
        where: {
          pacient_id: input.pacient_id,
        },
        include: {
          pacient: true,
        },
      });
    }),
});
