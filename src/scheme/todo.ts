import { z } from 'zod';

export const TodoItemQuerySchema = z.object({
  title: z.string(),
  content: z.string(),
  done: z.boolean(),
});

export type TodoItemQuery = z.infer<typeof TodoItemQuerySchema>;

export const TodoItemSchema = z.object({
  id: z.number(),
  ...TodoItemQuerySchema.shape,
});

export type TodoItem = z.infer<typeof TodoItemSchema>;
