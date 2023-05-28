import { css } from '@emotion/react';
import { ActionIcon, Card, Checkbox, Modal, Text } from '@mantine/core';
import { IconPencil, IconTrash } from '@tabler/icons-react';
import type { FC } from 'react';
import { useState } from 'react';
import { mutate } from 'swr';
import { DraftTodoItem } from '@/client/todo/DraftTodoItem';
import type { TodoItem as TodoItemType } from '@/scheme/todo';
import { client } from '@/trpc/client';

const useTodoItem = (item: TodoItemType) => {
  const updateTodoItem = async (newItem: Partial<TodoItemType>) => {
    await client.updateTodo.query({ id: item.id, todo: newItem });
    await mutate('todo');
  };
  const deleteTodoItem = async () => {
    await client.deleteTodo.query({ id: item.id });
    await mutate('todo');
  };

  return { updateTodoItem, deleteTodoItem };
};

type PresentialProps = {
  updateTodoItem: (newItem: Partial<TodoItemType>) => void;
  deleteTodoItem: () => void;
  editTodoItem: () => void;
} & Props;

export const PresentialTodoItem: FC<PresentialProps> = ({
  item,
  updateTodoItem,
  deleteTodoItem,
  editTodoItem,
}) => (
  <Card
    withBorder
    css={css`
      display: flex;
      align-items: center;
      gap: 16px;
    `}
  >
    <div>
      <Checkbox
        size="lg"
        checked={item.done}
        onChange={(e) => updateTodoItem({ done: e.target.checked })}
      />
    </div>
    <div>
      <Text fw="bold">{item.title}</Text>
      <Text color="dimmed">{item.content}</Text>
    </div>
    <div
      css={css`
        display: flex;
        margin-left: auto;
        gap: 8px;
      `}
    >
      <ActionIcon onClick={() => editTodoItem()}>
        <IconPencil />
      </ActionIcon>

      <ActionIcon onClick={() => deleteTodoItem()}>
        <IconTrash />
      </ActionIcon>
    </div>
  </Card>
);

type Props = {
  item: TodoItemType;
};

export const TodoItem: FC<Props> = ({ item }) => {
  const [isEditing, setIsEditing] = useState(false);
  const { updateTodoItem, deleteTodoItem } = useTodoItem(item);

  const editTodoItem = () => {
    setIsEditing(true);
  };

  return (
    <>
      <PresentialTodoItem
        item={item}
        updateTodoItem={updateTodoItem}
        deleteTodoItem={deleteTodoItem}
        editTodoItem={editTodoItem}
      />
      <Modal
        opened={isEditing}
        onClose={() => setIsEditing(false)}
        withCloseButton={false}
        title="タスクの編集"
      >
        <DraftTodoItem
          defaultDraft={item}
          cancelDraft={() => setIsEditing(false)}
          submitButtonLabel="更新"
          submitDraft={(newDraft) => updateTodoItem(newDraft)}
        />{' '}
      </Modal>
    </>
  );
};
