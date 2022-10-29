import { useEffect, useState } from 'react';
import { ListItem } from "./components/ListItem";
import type { User } from "./types/user";

export const App = () => {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    const temp: User[] = [
      {
        "id": 1,
        "name": "主田",
        "age": 24,
        "personalColor": "blue"
      },
      {
        "id": 2,
        "name": "先岡",
        "age": 28,
        "personalColor": "pink"
      },
      {
        "id": 3,
        "name": "後藤",
        "age": 23,
        "personalColor": "green",
        "hobbies": ["game", "soccer"]
      }
    ];
    setUsers(temp);
  }, []);

  return (
    <div>
      {users.map((user) => (
        <ListItem
          id={user.id}
          name={user.name}
          age={user.age}
          hobbies={user.hobbies}
        />
      ))}
    </div>
  );
};