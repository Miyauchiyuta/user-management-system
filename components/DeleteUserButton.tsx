import React, { useState } from 'react';
import { deleteUser } from '../utils/api';
import CustomButton from '@/components/parts/CustomButton';
import CustomModal from './parts/CustomModal';


interface DelteUserButtonProps {
    userId: number;
    onDelete: (userId: number) => void; // 再レンダリング⽤
}

const DelteUserButton: React.FC<DelteUserButtonProps> = ({ userId, onDelete }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleDelete = async () => {
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

    return (
        <>
            <CustomButton onClick={() => setIsModalOpen(true)}>
                ユーザーを削除
            </CustomButton>
            <CustomModal
                open={isModalOpen}
                title='ユーザーを削除します'
                content='本当に削除しますか？'
                onClose={() => setIsModalOpen(false)}
                onConfirm={handleDelete}
            />

        </>
    )
}

export default DelteUserButton;