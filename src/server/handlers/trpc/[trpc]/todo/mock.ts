import { trpcMswHandlerFactory } from '@/trpc/mock';

export const getTodoList = () =>
  trpcMswHandlerFactory({
    path: ['todo', 'getTodoList'],
    type: 'query',
    response: [
      {
        id: 1,
        title: 'Todo 1',
        content: 'Content 1',
        done: false,
      },
      {
        id: 2,
        title: 'Todo 2',
        content: 'Content 2',
        done: false,
      },
      {
        id: 3,
        title: 'Todo 3',
        content: 'Content 3',
        done: false,
      },
    ],
  });

export const getTodo = () =>
  trpcMswHandlerFactory({
    path: ['todo', 'getTodo'],
    type: 'query',
    response: {
      id: 1,
      title: 'Todo 1',
      content: 'Content 1',
      done: false,
    },
  });

export const createTodo = () =>
  trpcMswHandlerFactory({
    path: ['todo', 'createTodo'],
    type: 'mutation',
    response: {
      id: 1,
      title: 'Todo 1',
      content: 'Content 1',
      done: false,
    },
  });

export const updateTodo = () =>
  trpcMswHandlerFactory({
    path: ['todo', 'updateTodo'],
    type: 'mutation',
    response: {
      id: 1,
      title: 'Todo 1',
      content: 'Content 1',
      done: false,
    },
  });

export const deleteTodo = () =>
  trpcMswHandlerFactory({
    path: ['todo', 'deleteTodo'],
    type: 'mutation',
    response: {
      id: 1,
      title: 'Todo 1',
      content: 'Content 1',
      done: false,
    },
  });
