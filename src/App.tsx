import axios from "axios";
import { useState } from "react";
import "./styles.css";
import { Todo } from "./Todo";

export default function App() {
  // 空の配列を初期値としている
  // stateに型を定義
  const [todos, setTodos] = useState<any>([]);
  const onClickFeachData = () => {
    // .then() ~ 取得後の関数を記述できる
    // todoデータの配列をステートに保持して、todo一覧を表示する
    axios.get("https://jsonplaceholder.typicode.com/todos").then((res) => {
      // ステートを更新
      setTodos(res.data);
    });
  };
  return (
    <div className="App">
      <button onClick={onClickFeachData}>APIデータを取得</button>
      {todos.map((todo) => (
        <Todo title={todo.title} userid={todo.userid} />
        // <>
        //   <p>{todo.id}</p>
        //   <p>{todo.title}</p>
        // </>
      ))}
    </div>
  );
}
