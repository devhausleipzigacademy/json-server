import { useLoaderData } from "react-router-dom";
import { User } from "../utils/types";

function UserList() {
  const data = useLoaderData() as { users: User[] };
  console.log(data);
  return (
    <>
      <h1>UserList</h1>
      <table className="p-5 w-screen">
        <tr>
          <th className="w-1/6 text-left">Name</th>
          <th className="text-left">Hobbies</th>
        </tr>
        {data.users.map((user) => {
          return (
            <tr>
              <td>{user.name}</td>
              <td>{user.hobbies.join(", ")}</td>
            </tr>
          );
        })}
      </table>
    </>
  );
}

export default UserList;
