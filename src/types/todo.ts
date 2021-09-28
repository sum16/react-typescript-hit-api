// 型のの定義をいれるファイル

// 型を定義
// type タイプ名  セミコロンをつける
// ? をつけることで型指定が必須じゃないことを明示
export type TodoType = {
  userId: number;
  id: number;
  title: string;
  completed?: boolean;
};
