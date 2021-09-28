import { VFC } from "react";
import { TodoType } from "./types/todo";

// propsにTodoTypeの型を定義
export const Todo: VFC<Pick<TodoType, "userId" | "title" | "completed">> = (
  props
) => {
  const { title, userId, completed = false } = props; // propsに初期値をいれる事が可能
  const completeMark = completed ? "[完]" : "[未]";
  return <p>{`${completeMark} ${title}(ユーザー:${userId})`}</p>;
};

// Pick<第一引数に型, 第２引数に必要な値だけ記述> で型の使い回しができる
// omit<第一引数に型, 第２引数> Pickの逆で第２引数以外の方が適用される

// * propsの型を定義 *
// VFC定義前
// export const Todo = (props: Pick<TodoType, "userId" | "title" | "completed">)  // id以外を指定している
// => {}
