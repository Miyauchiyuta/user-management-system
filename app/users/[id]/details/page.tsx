"use client"

import React, { useEffect, useState } from "react";
import UserDetails from "../../../../components/UserDetails";
import { useParams } from "next/navigation";
import { Alert, Box, Typography } from "@mui/material";
import { fetchUserById } from "@/utils/api";
import { User } from "../../../../types/User";


const UserDetailsPage: React.FC = () =>{
     const [user, setUser] = useState<User | null>(null);
     const [error, setError] = useState<string | null>(null);
     const id  = useParams<{ id:string }>().id;
     const userId: number = Number(id); 
     
      useEffect(() => {
        const getUser = async () => {
          try {
            const data = await fetchUserById(userId); // 変換後の数値を引数として渡す
            setUser(data);
          } catch (err) {
            setError('ユーザー情報の取得に失敗しました。');
          }
        };
        getUser();
      }, [userId]);

      if (error) {
          return <Alert severity="error">{error}</Alert>;
        }

      if (!id || Array.isArray(id)) {
        return <Typography>ユーザーIDが無効です。</Typography>;
      }

      return (
        <Box sx={{ mt: 4 }}>
          <Typography variant="h4" gutterBottom>
            ユーザー詳細
          </Typography>
                {user && (
                  <UserDetails user={user}/>
                )}
        </Box>
      );
}

export default UserDetailsPage;