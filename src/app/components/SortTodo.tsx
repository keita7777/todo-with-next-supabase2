"use client";

import { useRecoilState } from "recoil";
import { sortStates } from "../recoil/atom";

const SortTodo = () => {
  const [selectedStatus, setSelectedStatus] = useRecoilState(sortStates);

  return (
    <div className="flex justify-end">
      <select
        className="py-2 px-6 rounded-lg bg-green-200 text-black"
        value={selectedStatus}
        onChange={(e) => setSelectedStatus(e.target.value)}
      >
        <option value="all">すべて</option>
        <option value="notstarted">未着手</option>
        <option value="progress">進行中</option>
        <option value="done">完了</option>
      </select>
    </div>
  );
};

export default SortTodo;
