import React from "react";
import { Todo } from "../types";
import SingleTodo from "./SingleTodo";

const TodoList = async () => {
  const API_URL = process.env.NEXT_PUBLIC_API_URL;

  const res = await fetch(`${API_URL}/api/`, {
    cache: "no-cache",
  });
  const todoDatas = await res.json();

  return (
    <ul>
      {todoDatas.map((todo: Todo) => (
        <SingleTodo todo={todo} />
      ))}
    </ul>
  );
};

export default TodoList;
