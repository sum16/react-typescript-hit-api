// * propsの型を定義 *

import { TodoType } from "./types/todo";

// propsにTodoTypeの型を定義
// propsに初期値をいれる事が可能
// Pick<第一引数に型, 第２引数に必要な値だけ記述> で型の使い回しができる
// omit<第一引数に型, 第２引数> Pickの逆で第２引数以外の方が適用される
export const Todo = (
  props: Pick<TodoType, "userId" | "title" | "completed"> //id以外を指定している
) => {
  const { title, userId, completed = false } = props;
  const completeMark = completed ? "[完]" : "[未]";
  return <p>{`${completeMark} ${title}(ユーザー:${userId})`}</p>;
};
