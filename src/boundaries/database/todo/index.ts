import { PrismaClient } from '@prisma/client';
import type { TodoItem, TodoItemQuery } from '@/scheme/todo';

const prisma = new PrismaClient();

export const getTodoById = async (id: number): Promise<TodoItem | null> => {
  return await prisma.todoItem.findFirst({
    where: {
      id,
    },
  });
};

export const getTodoList = async (): Promise<TodoItem[]> => {
  return await prisma.todoItem.findMany();
};

export const createTodo = async (todo: TodoItemQuery): Promise<TodoItem> => {
  return await prisma.todoItem.create({
    data: todo,
  });
};

export const updateTodo = async (
  id: number,
  todo: Partial<TodoItem>,
): Promise<TodoItem> => {
  return await prisma.todoItem.update({
    where: {
      id,
    },
    data: todo,
  });
};

export const deleteTodo = async (id: number): Promise<TodoItem> => {
  return await prisma.todoItem.delete({
    where: {
      id,
    },
  });
};
