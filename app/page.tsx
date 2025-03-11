import React from 'react';
import { Typography, Box } from '@mui/material';

const HomePage: React.FC = () => {
//router
//id=useParams().id;

//consteditsuccess
  //
  return (
    <Box sx={{ textAlign: 'center', mt: 8 }}>
      <Typography variant="h3" gutterBottom>
        ユーザー管理システムへようこそ
      </Typography>
      <Typography variant="h6" color="text.secondary">
        このシステムでは、ユーザーの一覧表示、編集、削除が可能です。
      </Typography>
    </Box>
  );
}

export default HomePage;