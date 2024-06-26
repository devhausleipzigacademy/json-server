import { useFetch } from "../utils/hooks";
import { User } from "../utils/types";

function UserList() {
  // const data = useLoaderData() as { users: User[] };
  const { data, error, isLoading } = useFetch<User[]>(
    "http://localhost:8000/users"
  );
  // console.log(data);
  return (
    <>
      <h1>UserList</h1>

      <table className="p-5 w-screen">
        <thead>
          <tr>
            <th className="w-1/6 text-left">Name</th>
            <th className="text-left">Hobbies</th>
          </tr>
        </thead>
        {error ? (
          <tr>
            <td className="text-red-600 text-sm">Error: {error}</td>
          </tr>
        ) : null}
        <tbody>
          {isLoading ? (
            <tr>
              <td>Loading...</td>
            </tr>
          ) : (
            data?.map((user) => (
              <tr key={user.id}>
                <td>{user.name}</td>
                <td>{user.hobbies.join(", ")}</td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </>
  );
}

export default UserList;
