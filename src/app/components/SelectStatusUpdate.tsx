"use client";

import React, { useEffect, useState } from "react";
import { Todo } from "../types";
import { supabase } from "../utils/supabaseClient";
import { getStatusName } from "../utils/utils";
import { NextResponse } from "next/server";
import { useRouter } from "next/navigation";

type SelectStatusUpdateProps = {
  todo: Todo;
};

const SelectStatusUpdate = ({ todo }: SelectStatusUpdateProps) => {
  const router = useRouter();
  const [todoStatus, setTodoStatus] = useState(todo.status.id);

  useEffect(() => {
    const updateStatus = async () => {
      const { error } = await supabase
        .from("todoList")
        .update({
          status: {
            id: todoStatus,
            name: getStatusName(todoStatus),
          },
        })
        .eq("id", todo.id);

      if (error) {
        return NextResponse.json(error);
      }

      router.push("/");
      router.refresh();
    };
    updateStatus();
  }, [todoStatus]);

  return (
    <select
      defaultValue={todoStatus}
      className="p-2 border rounded-lg"
      onChange={(e) => setTodoStatus(e.target.value)}
    >
      <option value="notstarted">未着手</option>
      <option value="progress">進行中</option>
      <option value="done">完了</option>
    </select>
  );
};

export default SelectStatusUpdate;
