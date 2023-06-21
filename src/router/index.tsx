import { createBrowserRouter } from "react-router-dom";
import Login from "../views/login.tsx";
import Signup from "../views/signup.tsx";

const routes = [
	{ path: "/", element: <Login /> },
	{ path: "/signup", element: <Signup /> }
];

export default createBrowserRouter(routes);
