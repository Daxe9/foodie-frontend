import "./login.css";
import TextInput from "../components/text-input.tsx";
import FoodieLogo from "../components/foodie-logo.tsx";

function Login() {
	return (
		<div className={"page"}>
			<div className={"login-div"}>
				<FoodieLogo></FoodieLogo>
				<br />
				<div className={"container"}>
					<TextInput text={"E-mail"} />
					<TextInput text={"Password"} type="password" />
					<br />
					<button className={"button saul-goodman"}>Login</button>
					<br />
					<a href={"/signup"}>Sign up</a>
				</div>
			</div>
		</div>
	);
}

export default Login;
