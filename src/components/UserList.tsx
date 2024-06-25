import { useLoaderData } from "react-router-dom";
import { User } from "../utils/types";

function UserList() {
  const data = useLoaderData() as { users: User[] };
  console.log(data);
  return (
    <>
      <h1>UserList</h1>
      <ul>
        {data.users.map((user) => {
          return <li>{user.name}</li>;
        })}
      </ul>
    </>
  );
}

export default UserList;
