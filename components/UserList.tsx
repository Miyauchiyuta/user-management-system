import { Box, Button, Typography } from '@mui/material';
import { User } from '../types/User';
import React, { useState } from 'react';
import CustomCard from './part/CustomCard';
import DeleteUserButton from './DeleteUserButton';
import Link from 'next/link';

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
            <CustomCard key={user.id} title={user.name} description = {`役割: ${user.role}\n${user.email}`} 
            actions ={
                <>
                <Button size="small" component={Link} href={`/users/${user.id}/details`}>詳細</Button>
                <Button size="small" component={Link} href={`/users/${user.id}/edit`}>編集</Button>
                <DeleteUserButton  userId={user.id}  onDelete = {handleDelte}/>
                </>
            }/>
        ))}
        </>
    )
}

export default UserList;