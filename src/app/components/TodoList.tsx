"use client";

import React, { useEffect, useState } from "react";
import { Todo } from "../types";
import SingleTodo from "./SingleTodo";
import { useRecoilState, useRecoilValue } from "recoil";
import { sortStates, todoListState } from "../recoil/atom";

const TodoList = () => {
  const selectedStatus = useRecoilValue(sortStates);
  const [todoList, setTodoList] = useRecoilState(todoListState);

  useEffect(() => {
    const fetchData = async () => {
      const API_URL = process.env.NEXT_PUBLIC_API_URL;

      const res = await fetch(`${API_URL}/api/`, {
        cache: "no-cache",
      });
      const todoDatas = await res.json();

      setTodoList(todoDatas);
    };
    fetchData();
  }, [selectedStatus, setTodoList]);

  const sortedTodos = todoList.filter((todo) => {
    return selectedStatus === "all" ? true : todo.status.id === selectedStatus;
  });

  return (
    <ul>
      {sortedTodos.map((todo: Todo) => (
        <SingleTodo key={todo.id} todo={todo} />
      ))}
    </ul>
  );
};

export default TodoList;
