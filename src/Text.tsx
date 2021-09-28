import { VFC } from "react";

type Props = {
  color: string;
  fontSize: string;
};

// FC<型>で関数コンポーネントの型を定義
// 暗黙でchildrenを取得できる //ver18~なくなるかも
// childrenを含まない型定義にVFCがある
export const Text: VFC<Props> = (props) => {
  const { color, fontSize } = props;
  return <p style={{ color, fontSize }}>テキスト</p>;
};
