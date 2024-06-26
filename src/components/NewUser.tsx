import { FormEvent } from "react";
import { User } from "../utils/types";
import { useFormField } from "../utils/hooks";

function NewUser() {
  // const data = useLoaderData() as { users: User[] };

  // get last free ID from Database
  // let currId = data.users.reduce((lastId, users) => {
  //   return users.id > lastId ? users.id : lastId;
  // }, 0);
  // currId++;

  const name = useFormField("");
  const hobbies = useFormField("");

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (name.value === "" || hobbies.value === "") return;
    const newUser = {
      name: name.value,
      hobbies: hobbies.value.split(", "),
    };
    postNewUser(newUser);
  }

  function postNewUser(newUser: Omit<User, "id">) {
    fetch("http://localhost:8000/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newUser),
    })
      .then((response) => response.json())
      .then(() => console.log("POST SUCCESS"));
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
            // {...name}
            // value={value}
            // onChange={onChange}
            value={name.value}
            onChange={name.onChange}
          />
        </label>
        <label>
          Enter your hobbies:
          <input
            className="border-solid border-2"
            type="text"
            // {...hobbies}
            value={hobbies.value}
            onChange={hobbies.onChange}
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
