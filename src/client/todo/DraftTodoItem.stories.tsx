import { expect, jest } from '@storybook/jest';
import type { Meta, StoryObj } from '@storybook/react';
import { userEvent } from '@storybook/testing-library';
import { DraftTodoItem } from './DraftTodoItem';

// storiesのセットアップについて: https://storybook.js.org/docs/react/writing-stories/introduction
const meta: Meta<typeof DraftTodoItem> = {
  title: 'Components/DraftTodoItem',
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

export const SubmitDraft: Story = {
  args: {
    submitButtonLabel: '追加',
    submitDraft: jest.fn(),
    cancelDraft: jest.fn(),
  },
  play: async ({ canvasElement, args }) => {
    const taskNameInput = canvasElement.querySelector('input');
    const taskContentInput = canvasElement.querySelector('textarea');
    const submitButton = canvasElement.querySelector('button[type="submit"]');
    if (!taskNameInput || !taskContentInput || !submitButton) {
      throw new Error('inputs are not found');
    }

    userEvent.type(taskNameInput, 'task name');
    userEvent.type(taskContentInput, 'task content');
    userEvent.click(submitButton);

    expect(args.submitDraft).toHaveBeenCalledWith({
      title: 'task name',
      content: 'task content',
      done: false,
    });
    expect(args.cancelDraft).not.toHaveBeenCalled();
  },
};

export const CancelDraft: Story = {
  args: {
    submitButtonLabel: '追加',
    submitDraft: jest.fn(),
    cancelDraft: jest.fn(),
  },
  play: async ({ canvasElement, args }) => {
    const cancelButton = canvasElement.querySelector('button[type="button"]');
    if (!cancelButton) {
      throw new Error('cancelButton is not found');
    }

    userEvent.click(cancelButton);

    expect(args.submitDraft).not.toHaveBeenCalled();
    expect(args.cancelDraft).toHaveBeenCalled();
  },
};
