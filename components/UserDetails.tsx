import React from 'react';
import { User } from '../types/User';
import { Box, Card, CardContent, Typography } from '@mui/material';

interface USerDetailsProps{
    user: User;
}

const UserDetails:React.FC<USerDetailsProps> = ({ user }) => {
    return(
        <Card sx={{ maxWidth: 600, mx: 'auto', mt: 4 }}>
          <Box sx={{ mt: 2 }}>
            <Typography>
              ID: {user.id}
            </Typography>
            <Typography>
              名前: {user.name}
            </Typography>
            <Typography>
              メールアドレス: {user.email}
            </Typography>
            <Typography>
              役割: {user.role}
            </Typography>
          </Box>
      </Card>
    )
}

export default UserDetails;