import type { Meta, StoryObj } from '@storybook/react';

import { TodoItem } from './TodoItem';
import * as todoMock from '@/server/handlers/trpc/[trpc]/todo/mock';

// storiesのセットアップについて: https://storybook.js.org/docs/react/writing-stories/introduction
const meta: Meta<typeof TodoItem> = {
  title: 'Components/TodoItem',
  component: TodoItem,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof TodoItem>;

// storiesの引数について: https://storybook.js.org/docs/react/writing-stories/args
// storiesのinteraction testingについて: https://storybook.js.org/docs/react/writing-tests/interaction-testing
export const Primary: Story = {
  args: {
    item: {
      id: 1,
      title: 'title',
      content: 'content',
      done: false,
    },
  },
};

export const Done: Story = {
  args: {
    item: {
      id: 1,
      title: 'title',
      content: 'content',
      done: true,
    },
  },
};

export const LongTitle: Story = {
  args: {
    item: {
      id: 1,
      title: 'title is too long '.repeat(100).trim(),
      content: 'content is too too long '.repeat(100).trim(),
      done: false,
    },
  },
};

export const CheckDone: Story = {
  parameters: {
    msw: {
      handlers: [todoMock.updateTodo()],
    },
  },
  args: {
    item: {
      id: 1,
      title: 'title',
      content: 'content',
      done: false,
    },
  },
  play: async ({ canvasElement }) => {
    const checkbox = canvasElement.querySelector(
      'input[type="checkbox"]',
    ) as HTMLInputElement | null;
    if (!checkbox) {
      throw new Error('checkbox not found');
    }
    checkbox.click();
  },
};
