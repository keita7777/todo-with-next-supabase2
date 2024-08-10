"use client";

import { nanoid } from "nanoid";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

const Createtodo = () => {
  const router = useRouter();
  const [todoText, setTodoText] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!todoText) return;

    const API_URL = process.env.NEXT_PUBLIC_API_URL;

    const res = await fetch(`${API_URL}/api/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id: nanoid(),
        text: todoText,
      }),
    });

    setTodoText("");
    router.push("/");
    router.refresh();
  };

  return (
    <div className="my-6">
      <h1 className="text-center text-2xl font-bold mb-3">
        TODOを新規作成します
      </h1>
      <form className="flex gap-2" onSubmit={handleSubmit}>
        <input
          className="flex-1 rounded-md outline-none p-2 text-lg"
          type="text"
          value={todoText}
          onChange={(e) => setTodoText(e.target.value)}
        />
        <button className="bg-orange-600 p-3 font-bold text-white rounded-md hover:bg-orange-400 hover:text-black transition-all duration-100">
          追加
        </button>
      </form>
    </div>
  );
};

export default Createtodo;
