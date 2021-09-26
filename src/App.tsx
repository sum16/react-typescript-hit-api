import axios from "axios";
import { useState } from "react";
import "./styles.css";
import { Todo } from "./Todo";

// type タイプ名
// セミコロンでくぐる
// ? をつけることで型指定が必須じゃないことを明示
type TodoType = {
  userId: number;
  id: number;
  title: string;
  completed?: boolean;
};

export default function App() {
  // 空の配列を初期値としている
  // stateに型を定義
  const [todos, setTodos] = useState<Array<TodoType>>([]);
  const onClickFeachData = () => {
    // .then() ~ 取得後の関数を記述できる
    // todoデータの配列をステートに保持して、todo一覧を表示する
    axios
      .get<Array<TodoType>>("https://jsonplaceholder.typicode.com/todos")
      .then((res) => {
        // ステートを更新
        setTodos(res.data);
      });
  };
  return (
    <div className="App">
      <button onClick={onClickFeachData}>APIデータを取得</button>
      {todos.map((todo) => (
        <Todo
          title={todo.title}
          userId={todo.userId}
          completed={todo.completed}
        />
        // <>
        //   <p>{todo.id}</p>
        //   <p>{todo.title}</p>
        // </>
      ))}
    </div>
  );
}
