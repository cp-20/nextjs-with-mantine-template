import { css } from '@emotion/react';
import type { FC } from 'react';
import { TodoItem } from '@/client/todo/TodoItem';
import type { TodoItem as TodoItemType } from '@/scheme/todo';

type Props = {
  items: TodoItemType[];
};

export const TodoList: FC<Props> = ({ items }) => {
  return (
    <div
      css={css`
        display: flex;
        flex-direction: column;
        gap: 8px;
      `}
    >
      {items.map((item) => (
        <TodoItem key={item.id} item={item} />
      ))}
    </div>
  );
};
