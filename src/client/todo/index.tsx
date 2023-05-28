import { css } from '@emotion/react';
import { Center, Loader } from '@mantine/core';
import type { FC } from 'react';
import { CreateTodoItemButton } from '@/client/todo/CreateTodoItemButton';
import { TodoList } from '@/client/todo/TodoList';
import { useTodo } from '@/client/todo/useTodo';

export const Todo: FC = () => {
  const todoItems = useTodo();

  return (
    <div
      css={css`
        padding: 32px;
      `}
    >
      {todoItems === undefined ? (
        <Center
          css={css`
            height: 64px;
          `}
        >
          <Loader variant="dots" />
        </Center>
      ) : todoItems.length === 0 ? (
        <p>No items</p>
      ) : (
        <TodoList items={todoItems} />
      )}
      <CreateTodoItemButton />
    </div>
  );
};
