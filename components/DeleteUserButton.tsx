import React from 'react';
import { deleteUser } from  '../utils/api';
import { Button } from '@mui/material';


interface DelteUserButtonProps{
    userId: number;
    onDelete: (userId: number) => void; // 再レンダリング⽤
}

const DelteUserButton: React.FC<DelteUserButtonProps> = ({userId,onDelete}) => {
    const handleDele = async () => {
    if (confirm("本当にこのユーザーを削除しますか？")){
        try {
            // 論理削除を実行
            await deleteUser(userId);
            // 削除成功後、コンポーネントに通知して再レンダリング
            onDelete(userId);
        } catch (error) {
            console.error("ユーザー削除に失敗しました:", error);
            alert("削除に失敗しました。もう一度お試しください。");
        }
    }
}
        return(
            <Button onClick={handleDele}>
                ユーザーを削除
            </Button>
        )
}

export default DelteUserButton;