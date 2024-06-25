import { useLoaderData } from "react-router-dom";
import { User } from "../utils/types";
import { useEffect, useState } from "react";

function UserList() {
  // const data = useLoaderData() as { users: User[] };

  const [users, setUsers] = useState<User[]>([]);

  async function fetchUsers() {
    const response = await fetch("http://localhost:8000/users");
    const users: User[] = await response.json();
    setUsers(users);
  }

  useEffect(() => {
    fetchUsers();
  }, []);

  // console.log(data);
  return (
    <>
      <h1>UserList</h1>
      <table className="p-5 w-screen">
        <tr>
          <th className="w-1/6 text-left">Name</th>
          <th className="text-left">Hobbies</th>
        </tr>
        {!users.length ? (
          <p>Loading...</p>
        ) : (
          users.map((user) => (
            <tr>
              <td>{user.name}</td>
              <td>{user.hobbies.join(", ")}</td>
            </tr>
          ))
        )}
      </table>
    </>
  );
}

export default UserList;
