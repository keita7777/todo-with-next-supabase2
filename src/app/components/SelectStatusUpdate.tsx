"use client";

import React, { useState } from "react";
import { Todo } from "../types";
import { supabase } from "../utils/supabaseClient";
import { getStatusName } from "../utils/utils";
import { useRecoilState } from "recoil";
import { todoListState } from "../recoil/atom";

type SelectStatusUpdateProps = {
  todo: Todo;
};

const SelectStatusUpdate = ({ todo }: SelectStatusUpdateProps) => {
  const [todoStatus, setTodoStatus] = useState(todo.status.id);
  const [todoList, setTodoList] = useRecoilState(todoListState);

  const handleStatusChange = async (newStatus: string) => {
    setTodoStatus(newStatus);

    const { data, error } = await supabase
      .from("todoList")
      .update({
        status: {
          id: newStatus,
          name: getStatusName(newStatus),
        },
      })
      .eq("id", todo.id)
      .select();

    if (error) {
      console.error("Error updating status:", error);
      return;
    }

    setTodoList((currentTodoList) =>
      currentTodoList.map((currentTodo) =>
        currentTodo.id === todo.id
          ? { ...currentTodo, status: data[0].status }
          : currentTodo
      )
    );
  };

  return (
    <select
      value={todoStatus}
      className="p-2 border rounded-lg"
      onChange={(e) => handleStatusChange(e.target.value)}
    >
      <option value="notstarted">未着手</option>
      <option value="progress">進行中</option>
      <option value="done">完了</option>
    </select>
  );
};

export default SelectStatusUpdate;
