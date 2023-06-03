import { css } from '@emotion/react';
import { Button } from '@mantine/core';
import type { FC } from 'react';
import { useState } from 'react';
import { mutate } from 'swr';
import { DraftTodoItem } from '@/client/todo/DraftTodoItem';
import { client } from '@/trpc/client';

export const CreateTodoItemButton: FC = () => {
  const [isDrafting, setIsDrafting] = useState(false);

  return (
    <div
      css={css`
        margin-top: 8px;
      `}
    >
      {isDrafting ? (
        <DraftTodoItem
          submitDraft={async (draft) => {
            setIsDrafting(false);
            await client.todo.createTodo.query({ todo: draft });
            await mutate('todo');
          }}
          cancelDraft={() => {
            setIsDrafting(false);
          }}
          submitButtonLabel="追加"
        />
      ) : (
        <Button
          type="button"
          fullWidth
          variant="light"
          onClick={() => {
            setIsDrafting(true);
          }}
        >
          Todoを追加
        </Button>
      )}
    </div>
  );
};
