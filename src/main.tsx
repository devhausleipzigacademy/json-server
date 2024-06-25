import React from "react";
import ReactDOM from "react-dom/client";
import { User } from "./utils/types.ts";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./components/Home.tsx";
import UserList from "./components/UserList.tsx";
import NewUser from "./components/NewUser.tsx";

// export async function userLoader() {
//   const response = await fetch("http://localhost:8000/users");
//   const users: User[] = await response.json();
//   return {
//     users,
//   };
// }

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    children: [
      {
        index: true,
        element: <UserList />,
        // loader: userLoader,
      },
      {
        path: "new-user",
        element: <NewUser />,
        // loader: userLoader,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
