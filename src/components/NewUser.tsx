import { useState } from "react";

function NewUser() {
  const [name, setName] = useState("");
  const [hobbies, setHobbies] = useState("");

  function handleSubmit() {
    {
      /* log in the console, the values of the form */
    }
  }

  return (
    <>
      <h1>Create new user.</h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <label>
          Enter your name:
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>
        <label>
          Enter your hobbies:
          <input
            type="text"
            value={hobbies}
            onChange={(e) => setHobbies(e.target.value)}
          />
        </label>

        <input type="submit" />
      </form>
    </>
  );
}

export default NewUser;
