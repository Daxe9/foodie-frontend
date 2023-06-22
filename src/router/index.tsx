import { createBrowserRouter } from "react-router-dom";
import Login from "../views/login.tsx";
import Signup from "../views/signup.tsx";
import UserHomepage from "../views/user-homepage.tsx";

const routes = [
	{ path: "/", element: <Login /> },
	{ path: "/signup", element: <Signup /> },
	{ path: "/user/homepage", element: <UserHomepage /> }
];

export default createBrowserRouter(routes);
