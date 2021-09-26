// * propsの型を定義 *

// 型を定義
type TodoType = {
  userId: number;
  title: string;
  completed: boolean;
};

// propsにTodoTypeの型を定義
// propsに初期値をいれる事が可能
export const Todo = (props: TodoType) => {
  const { title, userId, completed = false } = props;
  const completeMark = completed ? "[完]" : "[未]";
  return <p>{`${completeMark} ${title}(ユーザー:${userId})`}</p>;
};
