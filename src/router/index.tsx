import { createBrowserRouter } from "react-router-dom";
import Login from "../views/login.tsx";
import Signup from "../views/signup.tsx";
import UserHomepage from "../views/user-homepage.tsx";
import ItemSelection from "../views/item-selection.tsx";

const routes = [
	{ path: "/", element: <Login /> },
	{ path: "/signup", element: <Signup /> },
	{ path: "/user/homepage", element: <UserHomepage /> },
	{ path: "/user/:id", element: <ItemSelection /> }
];

export default createBrowserRouter(routes);
