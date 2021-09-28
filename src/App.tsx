import axios from "axios";
import { useState } from "react";
import "./styles.css";
import { Todo } from "./Todo";
import { TodoType } from "./types/todo";
import { Text } from "./Text";

export default function App() {
  // 空の配列を初期値としている
  // stateに型を定義
  const [todos, setTodos] = useState<Array<TodoType>>([]);
  // todoデータの配列をステートに保持して、todo一覧を表示する
  const onClickFeachData = () => {
    axios
      .get<Array<TodoType>>("https://jsonplaceholder.typicode.com/todos")
      .then((res) => {
        // .then() ~ 取得後の関数を記述できる
        // ステートを更新
        setTodos(res.data);
      });
  };
  return (
    <div className="App">
      <Text color="red" fontSize="18px" />
      <button onClick={onClickFeachData}>APIデータを取得</button>
      {todos.map((todo) => (
        <Todo
          key={todo.id}
          title={todo.title}
          userId={todo.userId}
          completed={todo.completed}
        />
      ))}
    </div>
  );
}

// keyをつける意味
// ここでkeyが活躍してくれます。keyをつけると、Reactが比較するときにkeyを元に比較してくれます。
// つまり、上から順番通りではなくてkeyが同じ要素同士に比較するということです。結果、以下のように改善されます。
// keyにid入れただけなのに前回とは違って新規で追加された要素一つだけ更新されました。これで簡単に不要な更新を防げられます。
// https://zenn.dev/luvmini511/articles/f7b22d93e9c182
