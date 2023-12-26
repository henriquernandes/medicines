import { createTRPCRouter } from "~/server/api/trpc";
import { pacientsRouter } from "./routers/pacients";
import { medicinesRouter } from "./routers/medicines";

/**
 * This is the primary router for your server.
 *
 * All routers added in /api/routers should be manually added here.
 */
export const appRouter = createTRPCRouter({
  pacients: pacientsRouter,
  medicines: medicinesRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
