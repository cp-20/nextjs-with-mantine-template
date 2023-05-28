import type { Meta, StoryObj } from '@storybook/react';

import { DraftTodoItem } from './DraftTodoItem';

// storiesのセットアップについて: https://storybook.js.org/docs/react/writing-stories/introduction
const meta: Meta<typeof DraftTodoItem> = {
  title: 'Pages/DraftTodoItem',
  component: DraftTodoItem,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof DraftTodoItem>;

// storiesの引数について: https://storybook.js.org/docs/react/writing-stories/args
// storiesのinteraction testingについて: https://storybook.js.org/docs/react/writing-tests/interaction-testing
export const Primary: Story = {
  args: {
    submitButtonLabel: '追加',
  },
};
