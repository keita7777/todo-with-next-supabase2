import SortTodo from "./components/SortTodo";
import TodoList from "./components/TodoList";
import { RecoilProvider } from "./recoil/RecoilProvider";

export default function Home() {
  return (
    <RecoilProvider>
      <SortTodo />
      <TodoList />
    </RecoilProvider>
  );
}
