import { Box, Typography } from '@mui/material';
import { User } from '../types/User';
import UserCard from '../components/UserCard';
import React, { useState } from 'react';

interface UserListProps{
    initialUsers:User[];
}

const UserList: React.FC<UserListProps> = ({initialUsers}) => {
    const [users,setUSers] = useState<User[]>(initialUsers);
    
    const handleDelte = (userId: number) => {
        const updateUSers = initialUsers.filter(user => user.id !== userId);
        setUSers(updateUSers);
    }

    return(
        <>
        {users.map(user => (
            <UserCard key={user.id} user={user} onDelete={handleDelte}/>
        ))}
        </>
    )
}

export default UserList;