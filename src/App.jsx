import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ParentLayout from "./components/ParentLayout";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup_password from "./pages/Signup_password";
import Signup_with_code from "./pages/Signup_with_code";
import User_login from "./pages/User_login";
import New_User_Code from "./pages/New_User_Code";
import User_details from "./pages/User_details"

export default function App() {
  const routerObj = createBrowserRouter([
    {
      path: "/",
      element: <ParentLayout />,
      children: [
        { index: true, element: <Login /> },
        { path: "login", element: <Login /> },
        { path: "home", element: <Home /> },
        { path: "Signup_password", element: <Signup_password /> },
        { path: "signup_with_code", element: <Signup_with_code /> },
        { path: "User_login", element: <User_login /> },
        { path: "New_User_code", element: <New_User_Code/>},
        { path: "User_details", element: <User_details/>}
      ]
    }
  ]);
  return (
    <RouterProvider router={routerObj} />
  )
}

