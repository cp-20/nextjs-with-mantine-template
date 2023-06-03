import { rest } from 'msw';
import type { RouterInput, RouterOutput } from './_app';
import { getBaseUrl } from '@/trpc/client';

export const jsonRpcSuccessResponse = (json: unknown) => ({
  id: null,
  result: { type: 'data', data: { json } },
});

export const trpcMswHandlerFactory = <
  K1 extends keyof RouterInput,
  K2 extends keyof RouterInput[K1], // object itself
  O extends RouterOutput[K1][K2], // all its keys
>(endpoint: {
  path: [K1, K2];
  response: O;
  type?: 'query' | 'mutation';
}) => {
  const fn = endpoint.type === 'mutation' ? rest.post : rest.get;
  const route = `${getBaseUrl()}/api/trpc/${endpoint.path[0]}.${
    endpoint.path[1] as string
  }`;
  return fn(route, (req, res, ctx) => {
    return res(ctx.json(jsonRpcSuccessResponse(endpoint.response)));
  });
};
