import { FC, memo } from "react";
import classes from "../css/App.module.scss";

type Props = {
  memos: string[];
  onClickDelete: (index: number) => void;
};

export const MemoList: FC<Props> = memo(props => {
  const { memos, onClickDelete } = props;
  return (
    <div className={classes.container}>
      <p>メモ一覧</p>
      <ul>
        {memos.map((memo, index) => (
          <li key={memo}>
            <div className={classes.memo_wrapper}>
              <p>{memo}</p>
              <button className={classes.button} onClick={() => onClickDelete(index)}>削除</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
});