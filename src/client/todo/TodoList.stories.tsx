import type { Meta, StoryObj } from '@storybook/react';

import { TodoList } from './TodoList';

// storiesのセットアップについて: https://storybook.js.org/docs/react/writing-stories/introduction
const meta: Meta<typeof TodoList> = {
  title: 'Pages/TodoList',
  component: TodoList,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof TodoList>;

// storiesの引数について: https://storybook.js.org/docs/react/writing-stories/args
// storiesのinteraction testingについて: https://storybook.js.org/docs/react/writing-tests/interaction-testing
export const Primary: Story = {
  args: {
    items: [
      {
        id: 1,
        title: 'title',
        content: 'content',
        done: false,
      },
      {
        id: 2,
        title: 'title',
        content: 'content',
        done: false,
      },
      {
        id: 3,
        title: 'title',
        content: 'content',
        done: false,
      },
    ],
  },
};
