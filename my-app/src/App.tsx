import { useFetchUsers } from './hooks/useFetchUsers';

export const App = () => {
  const { userList, isLoading, isError, onClickFetchUser } = useFetchUsers();

  return (
    <div>
      <button onClick={onClickFetchUser}>ユーザー取得</button>

      {/* エラー時 */}
      {isError && <p style={{ color: "red" }}>エラーが発生しました</p>}

      {/* ローディング時 */}
      {isLoading ? (
        <p>データ取得中です</p>
      ) : (
        userList.map(user => (
          <p key={user.id}>{`${user.id}:${user.name}(${user.age}歳)`}</p>
        ))
      )}
    </div>
  )
};