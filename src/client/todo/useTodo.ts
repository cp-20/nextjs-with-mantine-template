import useImmutableSWR from 'swr/immutable';
import type { TodoItem } from '@/scheme/todo';
import { client } from '@/trpc/client';

export const useTodo = () => {
  const todoItems = useImmutableSWR<TodoItem[]>('todo', () =>
    client.todo.getTodoList.query({}),
  );

  return todoItems.data;
};
