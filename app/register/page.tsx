// app/register/page.tsx

'use client'; // クライアントコンポーネントとしてマーク

import React from 'react';
import RegisterForm from '../../components/RegisterForm';
import { Typography, Box } from '@mui/material';
import router, { useRouter } from 'next/navigation';

// TODO: 新規登録ページを実装し、RegisterFormコンポーネントを使用する
const RegisterPage: React.FC = () => {
  const router = useRouter();
  
  const handleSucess = () =>{
    router.push('/users')
  }

  return (
    <Box sx={{
      maxWidth: 800,
      mx: 'auto',
      mt: 4,
      p: 3,
      boxShadow: 3,
      borderRadius: 2
    }}>
      <Typography
        variant="h4"
        gutterBottom
        sx={{
          mb: 4,
          color: 'primary.main',
          fontWeight: 'bold'
        }}
      >
        新規ユーザー登録
      </Typography>
      <RegisterForm
        onSuccess={handleSucess}
      />
    </Box>
  );
}

export default RegisterPage;