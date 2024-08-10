"use client";

import { supabase } from "@/app/utils/supabaseClient";
import { getStatusName } from "@/app/utils/utils";
import { useRouter } from "next/navigation";
import { NextResponse } from "next/server";
import React, { useEffect, useState } from "react";

type EditPageProps = {
  params: {
    id: string;
  };
};

const EditPage = ({ params }: EditPageProps) => {
  const { id } = params;
  const router = useRouter();
  const [todoText, setTodoText] = useState("");
  const [todoStatus, setTodoStatus] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      const { data, error } = await supabase
        .from("todoList")
        .select("*")
        .eq("id", id)
        .single();
      if (error) {
        return NextResponse.json(error);
      }
      setTodoText(data.text);
      setTodoStatus(data.status.id);
    };

    fetchData();
  }, [id]);

  const handleEdit = async (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();
    const { error } = await supabase
      .from("todoList")
      .update({
        text: todoText,
        status: {
          id: todoStatus,
          name: getStatusName(todoStatus),
        },
      })
      .eq("id", id);

    if (error) {
      return NextResponse.json(error);
    }

    setTodoText("");
    setTodoStatus("");
    router.push("/");
    router.refresh();
  };

  return (
    <div className="my-6">
      <h1 className="text-center text-2xl font-bold mb-3">TODOを更新します</h1>
      <div className="flex gap-2">
        <select
          className="p-2 border rounded-lg"
          defaultValue={todoStatus}
          onChange={(e) => setTodoStatus(e.target.value)}
        >
          <option value="notstarted">未着手</option>
          <option value="progress">進行中</option>
          <option value="done">完了</option>
        </select>
        <form className="flex gap-2 flex-1">
          <input
            className="flex-1 rounded-md outline-none p-2 text-lg"
            type="text"
            value={todoText}
            onChange={(e) => setTodoText(e.target.value)}
          />
          <button
            className="bg-orange-600 p-3 font-bold text-white rounded-md hover:bg-orange-400 hover:text-black transition-all duration-100"
            onClick={handleEdit}
          >
            更新
          </button>
          <button className="bg-orange-600 p-3 font-bold text-white rounded-md hover:bg-orange-400 hover:text-black transition-all duration-100">
            キャンセル
          </button>
        </form>
      </div>
    </div>
  );
};

export default EditPage;
