import { z } from 'zod';
import {
  createTodo,
  deleteTodo,
  getTodoById,
  getTodoList,
  updateTodo,
} from '@/boundaries/database/todo';
import { TodoItemQuerySchema, TodoItemSchema } from '@/scheme/todo';
import { procedure, router } from '@/trpc/trpc';

export const todoHandlers = router({
  getTodoList: procedure.input(z.object({})).query(() => getTodoList()),
  getTodo: procedure
    .input(z.object({ id: z.number() }))
    .query(({ input }) => getTodoById(input.id)),
  deleteTodo: procedure
    .input(z.object({ id: z.number() }))
    .query(({ input }) => deleteTodo(input.id)),
  updateTodo: procedure
    .input(z.object({ id: z.number(), todo: TodoItemSchema.partial() }))
    .query(({ input }) => updateTodo(input.id, input.todo)),
  createTodo: procedure
    .input(z.object({ todo: TodoItemQuerySchema }))
    .query(({ input }) => createTodo(input.todo)),
});
