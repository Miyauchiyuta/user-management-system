// components/parts/CustomModal.stories.tsx

import React, { Component, useState } from "react";
import type { Meta, StoryObj } from "@storybook/react";
import CustomModal from "./CustomModal";
import CustomButton from "./CustomButton";
import { Box } from "@mui/material";

const meta : Meta<typeof CustomModal> = {
  title: "Components/Parts/CustomModal",
  component: CustomModal,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof CustomModal>;

export const Default: Story = {
  render: () => {
    const [open, setOpen] = useState(false);

    return (
      <Box>
        <CustomButton variantType="primary" onClick={() => setOpen(true)}>
          モーダルを開く
        </CustomButton>
        <CustomModal
        open = {open}
        title="サンプルタイトル"
        content="コンテンツがここに表示されます"
        onClose={() => setOpen(false)}
        onConfirm={() => {
        alert("ボタンをクリックしました")
          setOpen(false)
        }}
        />
      </Box>
    );
  },
};
