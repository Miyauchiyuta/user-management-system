// app/users/[id]/edit/page.tsx

"use client"; // クライアントコンポーネントとしてマーク

import React from "react";
import EditUserForm from "../../../../components/EditUserForm";
import { useParams } from "next/navigation";
import { Typography, Box } from "@mui/material";
import { useRouter } from "next/navigation";

// TODO: URLパラメータからユーザーIDを取得し、EditUserFormコンポーネントに渡す
const EditUserPage: React.FC = () => {

  const router = useRouter();
  const id  = useParams<{ id:string }>().id;

  const handleSuccess = () => {
    // 登録成功後にユーザー一覧ページにリダイレクト
    router.push("/users");
  };

  // ユーザーIDが取得できていない場合はnullを返す
  if (!id || Array.isArray(id)) {
    return <Typography>ユーザーIDが無効です。</Typography>;
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
    <Box sx={{ mt: 4 }}>
      <Typography variant="h4" gutterBottom>
        ユーザー編集
      </Typography>
      <EditUserForm   userId = {Number(id)} onSuccess={handleSuccess}
      />
    </Box>
    </Box>
  );
};

export default EditUserPage;
