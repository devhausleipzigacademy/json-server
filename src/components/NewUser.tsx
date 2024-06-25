import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import { User } from "../utils/types";

function NewUser() {
  const data = useLoaderData() as { users: User[] };

  // get last free ID from Database
  let id = data.users.reduce((lastId, users) => {
    return users.id > lastId ? users.id : lastId;
  }, 0);

  id++;

  console.log(id);

  const [name, setName] = useState("");
  const [hobbies, setHobbies] = useState("");

  function handleSubmit(e: Event) {
    e.preventDefault();
    console.log(name);
    console.log(hobbies);
  }

  return (
    <>
      <h1>Create new user.</h1>
      <form onSubmit={handleSubmit} className="p-5 flex flex-col gap-4">
        <label>
          Enter your name:
          <input
            className="border-solid border-2"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>
        <label>
          Enter your hobbies:
          <input
            className="border-solid border-2"
            type="text"
            value={hobbies}
            onChange={(e) => setHobbies(e.target.value)}
          />
        </label>

        <input
          className="w-1/2 border-solid border-2 rounded-sm cursor-pointer"
          type="submit"
        />
      </form>
    </>
  );
}

export default NewUser;
