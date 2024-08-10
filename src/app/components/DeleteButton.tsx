"use client";

import { useRouter } from "next/navigation";
import React from "react";

type DeleteButtonProps = {
  id: string;
};

const DeleteButton = ({ id }: DeleteButtonProps) => {
  const router = useRouter();

  const handleDelete = async () => {
    const API_URL = process.env.NEXT_PUBLIC_API_URL;
    await fetch(`${API_URL}/api/`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id }),
    });

    router.push("/");
    router.refresh();
  };

  return (
    <button
      onClick={handleDelete}
      className="p-2 rounded-lg bg-red-600 text-slate-50 hover:bg-red-500 hover:text-gray-700 transition-all duration-100"
    >
      削除
    </button>
  );
};

export default DeleteButton;
