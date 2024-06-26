import { Outlet, Link } from "react-router-dom";
import { UserIcon } from "@heroicons/react/24/solid";

function Home() {
  return (
    <>
      <div className="flex gap-5 p-5 items-center">
        <UserIcon className="size-8" />
        <Link to="/">
          <h3>Home</h3>
        </Link>
        <Link to="new-user">
          <h3>New User</h3>
        </Link>
      </div>
      <Outlet />
    </>
  );
}

export default Home;
