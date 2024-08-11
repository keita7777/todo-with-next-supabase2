"use client";

import { nanoid } from "nanoid";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { useRecoilState } from "recoil";
import { todoListState } from "../recoil/atom";

const Createtodo = () => {
  const router = useRouter();
  const [todoText, setTodoText] = useState("");
  const [todoList, setTodoList] = useRecoilState(todoListState);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!todoText) return;

    const API_URL = process.env.NEXT_PUBLIC_API_URL;

    const newTodo = {
      id: nanoid(),
      text: todoText,
    };

    const res = await fetch(`${API_URL}/api/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newTodo),
    });

    const result = await res.json();

    console.log(result);

    if (!result || result.length === 0) {
      console.error("No data returned from the server:", result);
      return;
    }

    setTodoList((currentTodoList) => [...currentTodoList, result[0]]);

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
