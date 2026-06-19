import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ParentLayout from "./components/ParentLayout";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";

export default function App() {
  const routerObj = createBrowserRouter([
    {
      path: "/",
      element: <ParentLayout />,
      children: [
        { index: true, element: <Login /> },
        { path: "login", element: <Login /> },
        { path: "home", element: <Home /> },
        { path: "signup", element: <Signup /> }
      ]
    }
  ]);
  return (
    <RouterProvider router={routerObj} />
  )
}

