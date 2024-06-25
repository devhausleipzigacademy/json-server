import { Outlet } from "react-router-dom";

function Home() {
  return (
    <>
      <div>
        <h1>Home</h1>
        {/* Add a new route for creating a new user */}
        <Outlet />
      </div>
    </>
  );
}

export default Home;
