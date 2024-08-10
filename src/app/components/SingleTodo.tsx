import React from "react";
import { Todo } from "../types";
import SelectStatusUpdate from "./SelectStatusUpdate";
import EditButton from "./EditButton";
import DeleteButton from "./DeleteButton";

type SingleTodoProps = {
  todo: Todo;
};

const SingleTodo = ({ todo }: SingleTodoProps) => {
  return (
    <li className="flex items-center gap-2 bg-white p-2 mt-2 rounded-lg">
      <SelectStatusUpdate todo={todo} />
      <p className="flex-1 flex items-center">{todo.text}</p>
      <EditButton id={todo.id} />
      <DeleteButton id={todo.id} />
    </li>
  );
};

export default SingleTodo;
