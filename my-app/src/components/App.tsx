import { ChangeEvent, useState, FC, useCallback, useMemo } from "react";
import classes from "../css/App.module.scss";
import { MemoList } from "./MemoList";
import { useMemoList } from "../hooks/useMemoList";

export const App: FC = () => {

  // カスタムフックからそれぞれ取得
  const { memos, addTodo, deleteTodo } = useMemoList();

  // テキストボックス State
  const [text, setText] = useState<string>("");

  // テキストボックス入力時に入力内容をStateに設定
  const onChangeText = (e: ChangeEvent<HTMLInputElement>) => setText(e.target.value);

  // 追加ボタン押下時
  const onClickAdd = () => {
    addTodo(text);

    // テキストボックスを空にする
    setText("");
  };

  // 削除ボタン押下時
  const onClickDelete = useCallback((index: number) => {
    deleteTodo(index);
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