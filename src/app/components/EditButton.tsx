"use client";

import { useRouter } from "next/navigation";
import React from "react";

type EditButtonProps = {
  id: string;
};

const EditButton = ({ id }: EditButtonProps) => {
  const router = useRouter();

  const openEdit = () => {
    router.push(`/edit/${id}`);
  };

  return (
    <button
      onClick={openEdit}
      className="p-2 rounded-lg bg-green-600 text-slate-50 hover:bg-green-500 hover:text-gray-700 transition-all duration-100"
    >
      編集
    </button>
  );
};

export default EditButton;
