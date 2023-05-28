import type { Meta, StoryObj } from '@storybook/react';

import { TodoItem } from './TodoItem';

// storiesのセットアップについて: https://storybook.js.org/docs/react/writing-stories/introduction
const meta: Meta<typeof TodoItem> = {
  title: 'Pages/TodoItem',
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
