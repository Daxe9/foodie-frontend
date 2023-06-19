import "./App.css";
import TextInput from "./components/text-input.tsx";
import FoodieLogo from "./components/foodie-logo.tsx";

/*function selectedRadio(): string | undefined {
	let radios = document.getElementsByName("role");
	for (let i = 0; i < radios.length; i++) {
		let radio = radios[i] as HTMLInputElement;
		if (radio.checked) {
			return radio.value;
		}
	}
}

function loginUrl(): string | undefined {
	if (selectedRadio() === "User") {
		return "http://localhost:3000/user";
	}
	if (selectedRadio() === "Restaurant") {
		return "http://localhost:3000/restaurant";
	}
	if (selectedRadio() === "Rider") {
		return "http://localhost:3000/rider";
	}
}*/

function App() {
	return (
		<>
			<FoodieLogo></FoodieLogo>
			<div className={"container"}>
				<TextInput text={"E-mail"} />
				<TextInput text={"Password"} />
				<br />
				<form className={"role-radios"}>
					<p>Role:</p>
					<input type={"radio"} name={"role"} />
					<label>User</label>
					<br />
					<input type={"radio"} name={"role"} />
					<label>Restaurant</label>
					<br />
					<input type={"radio"} name={"role"} />
					<label>Rider</label>
					<br />
				</form>
				<br />
				<button className={"saul-goodman"}>Login</button>
				<br />
				<a href={""}>Forgot password?</a>
				<br />
				<a href={""}>Sign up</a>
			</div>
		</>
	);
}

export default App;
