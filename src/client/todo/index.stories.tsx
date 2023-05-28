import type { Meta, StoryObj } from '@storybook/react';

import { Todo } from '.';

// storiesのセットアップについて: https://storybook.js.org/docs/react/writing-stories/introduction
const meta: Meta<typeof Todo> = {
  title: 'Pages/Todo',
  component: Todo,
  parameters: {
    // storiesの配置について: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'fullscreen',
  },
};

export default meta;
type Story = StoryObj<typeof Todo>;

// storiesの引数について: https://storybook.js.org/docs/react/writing-stories/args
// storiesのinteraction testingについて: https://storybook.js.org/docs/react/writing-tests/interaction-testing
export const Primary: Story = {};
