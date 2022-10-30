import { ChangeEvent, useState, FC } from "react";
import classes from "../css/App.module.scss";
export const App: FC = () => {

  // テキストボックス State
  const [text, setText] = useState<string>("");

  // メモ一覧 State
  const [memos, setMemos] = useState<string[]>([]);

  // テキストボックス入力時に入力内容をStateに設定
  const onChangeText = (e: ChangeEvent<HTMLInputElement>) => setText(e.target.value);

  // 追加ボタン押下時
  const onClickAdd = () => {
    // State変更を正常に検知させるため当たらな配列を生成
    const newMemos = [...memos];
    newMemos.push(text);
    setMemos(newMemos);

    // テキストボックスを空にする
    setText("");
  };

  // 削除ボタン押下時
  const onClickDelete = (index: number) => {
    // State変更を正常に検知させるために新たな配列を生成
    const newMemos = [...memos];

    // メモ配列から該当の要素を削除
    newMemos.splice(index, 1);
    setMemos(newMemos);
  }

  return (
    <div>
      <h1>簡単メモアプリ</h1>
      <input type="text" value={text} onChange={onChangeText} />
      <button className={classes.button} onClick={onClickAdd}>追加</button>
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
    </div>
  )

};