import {
  Checkbox,
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
} from "@headlessui/react";
import { User } from "../utils/types";
import { Link } from "react-router-dom";

type Props = {
  user: User;
  refetch: () => void;
};

export function UserItem({ user, refetch }: Props) {
  async function deleteUser(userId: number) {
    await fetch(`http://localhost:8000/users/${userId}`, {
      method: "DELETE",
    });
    refetch();
    console.log("User deleted");
  }

  return (
    <tr>
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
      <td>{user.name}</td>
      <td>{user.hobbies.join(", ")}</td>
      <td>
        <Menu>
          <MenuButton className="rounded py-1 px-2 bg-zinc-800 text-zinc-50">
            Click me
          </MenuButton>
          <MenuItems
            anchor={{ to: "bottom end" }}
            className="border bg-zinc-50 flex flex-col w-40"
          >
            <MenuItem>
              <Link
                className="hover:bg-zinc-600/20 px-4 py-2"
                to={`/edit-user/${user.id}`}
              >
                Edit
              </Link>
            </MenuItem>
            <MenuItem>
              <button
                onClick={() => deleteUser(user.id)}
                className="hover:bg-zinc-600/20 px-4 py-2 text-left"
              >
                Delete
              </button>
            </MenuItem>
          </MenuItems>
        </Menu>
      </td>
    </tr>
  );
}
