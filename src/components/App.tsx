import { ChangeEvent, useState, FC, useCallback } from "react";
import styled from "styled-components";
import { MemoList } from "./MemoList";

export const App: FC = () => {
  // テキストボックスState
  const [text, setText] = useState<string>("");
  // メモ一覧State
  const [memos, setMemos] = useState<string[]>([]);

  // テキスト入力時に入力内容をStateに設定
  const onChangeText = (e: ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };

  // 追加ボタンを押したとき
  const onClickAdd = () => {
    // state変更を正常に検知する為新たな配列を生成
    const newMemos = [...memos];
    // テキストボックスの入力内容を目も配列に追加
    newMemos.push(text);
    setMemos(newMemos);
    // テキストボックスを空に
    setText("");
  };

  // 削除ボタンを押したとき（何番目が押されたか引数で受け取る）
  const onClickDelete = useCallback(
    (index: number) => {
      // state変更を正常に検知させるため新たな配列を生成
      const newMemos = [...memos];
      // メモは配列から該当の要素を削除
      newMemos.splice(index, 1);
      setMemos(newMemos);
    },
    [memos]
  );

  return (
    <div>
      <h1>簡単メモアプリ</h1>
      <input type="text" value={text} onChange={onChangeText} />
      <SButton onClick={onClickAdd}>追加</SButton>
      <MemoList memos={memos} onClickDelete={onClickDelete} />
    </div>
  );
};

const SButton = styled.button`
  margin-left: 16px;
`;
