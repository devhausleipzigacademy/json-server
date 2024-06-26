import { useFetch } from "../utils/hooks";
import { User } from "../utils/types";
import { Checkbox } from "@headlessui/react";

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
            <th className="text-left">Actions</th>
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
                <td>
                  <Checkbox className="group block size-4 rounded border bg-white data-[checked]:bg-blue-500">
                    {/* Checkmark icon */}
                    <svg
                      className="stroke-white opacity-0 group-data-[checked]:opacity-100"
                      viewBox="0 0 14 14"
                      fill="none"
                    >
                      <path
                        d="M3 8L6 11L11 3.5"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </Checkbox>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </>
  );
}

export default UserList;
