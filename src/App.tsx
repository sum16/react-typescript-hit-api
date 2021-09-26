import axios from "axios";
import "./styles.css";

export default function App() {
  const onClickFeachData = () => {
    // .then() ~ 取得後の関数を記述できる
    axios.get("https://jsonplaceholder.typicode.com/todos").then((res) => {
      console.log(res);
    });
  };
  return (
    <div className="App">
      <button onClick={onClickFeachData}>APIデータを取得</button>
    </div>
  );
}
