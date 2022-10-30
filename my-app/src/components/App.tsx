import { ChangeEvent, useState, FC, useCallback } from "react";
import classes from "../css/App.module.scss";
import { MemoList } from "./MemoList";

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
  const onClickDelete = useCallback((index: number) => {
    // State変更を正常に検知させるために新たな配列を生成
    const newMemos = [...memos];

    // メモ配列から該当の要素を削除
    newMemos.splice(index, 1);
    setMemos(newMemos);
  }, [memos])

  return (
    <div>
      <h1>簡単メモアプリ</h1>
      <input type="text" value={text} onChange={onChangeText} />
      <button className={classes.button} onClick={onClickAdd}>追加</button>
      <MemoList memos={memos} onClickDelete={onClickDelete} />
    </div>
  )

};