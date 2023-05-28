import * as trpcNext from '@trpc/server/adapters/next';
import { appRouter } from '@/trpc/_app';

// export API handler
// @see https://trpc.io/docs/server/adapters
export const trpcApiHandler = trpcNext.createNextApiHandler({
  router: appRouter,
  createContext: () => ({}),
});
