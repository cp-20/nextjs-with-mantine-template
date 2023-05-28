import { router } from './trpc';
import { todoHandlers } from '@/server/handlers/trpc/[trpc]/todo';

export const appRouter = router({
  ...todoHandlers,
});
// export type definition of API
export type AppRouter = typeof appRouter;
