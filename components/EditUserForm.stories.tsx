import type { Meta, StoryObj } from '@storybook/react';
import EdituserForm from './EditUserForm';

const meta: Meta<typeof EdituserForm> = {
  title: 'Components/EdituserForm',
  component: EdituserForm,
};

export default meta;

type Story = StoryObj<typeof EdituserForm>;

export const Default: Story = {
  args:{
    userId:1,
  }
};