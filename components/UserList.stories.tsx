import type { Meta, StoryObj } from '@storybook/react';
import UserList from './UserList';
import { User } from '../types/User';

const meta: Meta<typeof UserList> = {
  title: 'Components/UserList:',
  component: UserList,
};

export default meta;

type Story = StoryObj<typeof UserList>;

export const Default: Story = {
  args:{
    users: [
      { 
        id: 1, 
        name: 'sample01', 
        email: 'john.doe@example.com', 
        role: 'Admin', 
        deleted: false 
      },
      { 
        id: 2, 
        name: 'sample02', 
        email: 'jane.smith@example.com', 
        role: 'User', 
        deleted: false 
      }
    ],
    },
};