import { css } from '@emotion/react';
import { ActionIcon, Button, Card, TextInput, Textarea } from '@mantine/core';
import { IconX } from '@tabler/icons-react';
import type { FC } from 'react';
import { useCallback } from 'react';
import { useState } from 'react';
import type { TodoItemQuery } from '@/scheme/todo';

const useDraftTodoItem = (defaultDraft?: TodoItemQuery) => {
  const [draft, setDraft] = useState<TodoItemQuery>(
    defaultDraft ?? {
      title: '',
      content: '',
      done: false,
    },
  );

  const updateDraft = useCallback((newDraft: Partial<TodoItemQuery>) => {
    setDraft((draft) => ({ ...draft, ...newDraft }));
  }, []);

  return { draft, updateDraft };
};

type Props = {
  submitDraft: (todoItem: TodoItemQuery) => void;
  cancelDraft: () => void;
  submitButtonLabel: string;
  defaultDraft?: TodoItemQuery;
};

export const DraftTodoItem: FC<Props> = ({
  submitDraft,
  cancelDraft,
  submitButtonLabel,
  defaultDraft,
}) => {
  const { draft, updateDraft } = useDraftTodoItem(defaultDraft);

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        submitDraft(draft);
      }}
    >
      <Card
        withBorder
        css={css`
          display: flex;
          flex-direction: column;
          gap: 8px;
        `}
      >
        <div
          css={css`
            display: flex;
            align-items: center;
            gap: 8px;
          `}
        >
          <TextInput
            type="text"
            value={draft.title}
            placeholder="タスク名"
            onChange={(e) => updateDraft({ title: e.target.value })}
            css={css`
              flex: 1;
            `}
          />
          <ActionIcon onClick={cancelDraft}>
            <IconX />
          </ActionIcon>
        </div>
        <Textarea
          value={draft.content}
          placeholder="タスクの詳細"
          onChange={(e) => updateDraft({ content: e.target.value })}
        />
        <Button type="submit" variant="light" fullWidth>
          {submitButtonLabel}
        </Button>
      </Card>
    </form>
  );
};
