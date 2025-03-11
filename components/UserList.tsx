import { Box, Typography } from '@mui/material';
import { User } from '../types/User';
import UserCard from '../components/UserCard';
import React from 'react';

interface UserListProps{
    users:User[];
}

const UserList: React.FC<UserListProps> = ({users}) => {
    return(
        <>
        {users.map(user => (
            <UserCard key={user.id} user={user} />
        ))}
        </>
    )
}

export default UserList;