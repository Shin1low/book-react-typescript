import { FC } from "react";
import styled from "styled-components";

// 必要なpropsはメモ一覧と削除時に実行する関数
type Props = {
  memos: string[];
  onClickDelete: (index: number) => void;
};

export const MemoList: FC<Props> = (props) => {
  const { memos, onClickDelete } = props;

  return (
    <div>
      <SContainer>
        <p>メモ一覧</p>
        <ul>
          {memos.map((memo, index) => {
            <li key={memos}>
              <SMemoWrapper>
                <p>{memo}</p>
                <SButton onClick={() => onClickDelete(index)}>削除</SButton>
              </SMemoWrapper>
            </li>;
          })}
        </ul>
      </SContainer>
    </div>
  );
};

const SButton = styled.button`
  margin-left: 16px;
`;
const SContainer = styled.div`
  border: solid 1ps #ccc;
  padding: 16px;
  margin: 8px;
`;
const SMemoWrapper = styled.div`
  display: flex;
  align-items: conter;
`;
