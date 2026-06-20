import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ParentLayout from "./components/ParentLayout";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Signup_with_code from "./pages/Signup_with_code";

export default function App() {
  const routerObj = createBrowserRouter([
    {
      path: "/",
      element: <ParentLayout />,
      children: [
        { index: true, element: <Login /> },
        { path: "login", element: <Login /> },
        { path: "home", element: <Home /> },
        { path: "signup", element: <Signup /> },
        { path: "signup_with_code", element: <Signup_with_code /> }
      ]
    }
  ]);
  return (
    <RouterProvider router={routerObj} />
  )
}

