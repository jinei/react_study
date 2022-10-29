import { useState } from "react";
import { User } from "../types/user";

/**
 * ユーザー一覧を取得するカスタムフック
 */
export const useFetchUsers = () => {
  const [userList, setUserList] = useState<User[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isError, setIsError] = useState<boolean>(false);

  // ユーザー取得
  const onClickFetchUser = () => {
    // ローディングON エラーOFF
    setIsLoading(true);
    setIsError(false);

    const temp: User[] = [
      {
        "id": 1,
        "name": "主田",
        "age": 24,
      },
      {
        "id": 2,
        "name": "先岡",
        "age": 28,
      },
      {
        "id": 3,
        "name": "後藤",
        "age": 23,
      }
    ];
    setUserList(temp);
    setIsLoading(false);
  };

  return { userList, isLoading, isError, onClickFetchUser };
};