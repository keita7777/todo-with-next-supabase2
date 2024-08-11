"use client";

import React from "react";
import { useRecoilState } from "recoil";
import { todoListState } from "../recoil/atom";

type DeleteButtonProps = {
  id: string;
};

const DeleteButton = ({ id }: DeleteButtonProps) => {
  const [todoList, setTodoList] = useRecoilState(todoListState);

  const handleDelete = async () => {
    const API_URL = process.env.NEXT_PUBLIC_API_URL;
    await fetch(`${API_URL}/api/`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id }),
    });

    setTodoList((currentTodo) => currentTodo.filter((todo) => todo.id !== id));
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
