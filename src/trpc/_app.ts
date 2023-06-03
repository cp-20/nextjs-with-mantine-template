import type { inferRouterInputs, inferRouterOutputs } from '@trpc/server';
import { router } from './trpc';
import { todoHandlers } from '@/server/handlers/trpc/[trpc]/todo';

export const appRouter = router({
  todo: todoHandlers,
});
// export type definition of API
export type AppRouter = typeof appRouter;

export type RouterInput = inferRouterInputs<AppRouter>;
export type RouterOutput = inferRouterOutputs<AppRouter>;
