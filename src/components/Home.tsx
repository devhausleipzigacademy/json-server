import { Outlet, Link } from "react-router-dom";

function Home() {
  return (
    <>
      <div className="flex gap-5 p-5">
        <Link to="/">
          <h3>Home</h3>
        </Link>
        <Link to="new-user">
          <h3>New User</h3>
        </Link>
      </div>
      <Outlet />

      <button onClick={() => {}}>Click me</button>
      <button onClick={function handleClick() {}}>Click me</button>
    </>
  );
}

export default Home;
