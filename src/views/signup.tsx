import "./signup.css";
import TextInput from "../components/text-input.tsx";
import FoodieLogo from "../components/foodie-logo.tsx";
import TimeTableHTML from "../components/time-table.tsx";
import CategoryBox from "../components/category-box.tsx";
import React, { createRef, JSX, useState } from "react";
// import { useNavigate } from "react-router-dom";
import { Person, TimeTable, User } from "../types/entities.ts";
import { UserNamespace } from "../services/axios.service.ts";
import { validateUser } from "../services/validation.service.ts";

function Signup() {
	// const navigate = useNavigate();
	const user: React.RefObject<HTMLInputElement> = createRef();
	const restaurant: React.RefObject<HTMLInputElement> = createRef();
	const rider: React.RefObject<HTMLInputElement> = createRef();
	let categories: string[] = [
		"Italian",
		"Mexican",
		"Pizzeria",
		"Kebab",
		"Chinese",
		"Fast Food",
		"Japanese"
	];
	let timeTable: TimeTable = {
		monday: {
			opening1: null,
			closing1: null,
			opening2: null,
			closing2: null
		},
		tuesday: {
			opening1: null,
			closing1: null,
			opening2: null,
			closing2: null
		},
		wednesday: {
			opening1: null,
			closing1: null,
			opening2: null,
			closing2: null
		},
		thursday: {
			opening1: null,
			closing1: null,
			opening2: null,
			closing2: null
		},
		friday: {
			opening1: null,
			closing1: null,
			opening2: null,
			closing2: null
		},
		saturday: {
			opening1: null,
			closing1: null,
			opening2: null,
			closing2: null
		},
		sunday: {
			opening1: null,
			closing1: null,
			opening2: null,
			closing2: null
		}
	};

	const [roleDiv, setRoleDiv] = useState<JSX.Element>(
		<>
			<TextInput text={"First name"} />
			<TextInput text={"Last name"} />
		</>
	);

	function selectedRadio(): string | undefined {
		if (user.current?.checked) {
			return "User";
		}
		if (restaurant.current?.checked) {
			return "Restaurant";
		}
		if (rider.current?.checked) {
			return "Rider";
		}
	}

	function selectRole() {
		switch (selectedRadio()) {
			case "User":
				setRoleDiv(
					<>
						<TextInput
							text="First name"
							pattern={new RegExp(/^[A-Za-z\s'-]+$/gm)}
						/>
						<TextInput
							text="Last name"
							pattern={new RegExp(/^[A-Za-z\s'-]+$/gm)}
						/>
					</>
				);
				break;
			case "Restaurant":
				setRoleDiv(
					<>
						<TextInput text="Restaurant name" />
						<CategoryBox options={categories} />
						<TimeTableHTML timeTable={timeTable} />
					</>
				);
				break;
			case "Rider":
				setRoleDiv(
					<>
						<p>POV: you are a rider</p>
						<img
							className="skeleton-spin"
							src="./../../public/skeleton-spin.gif"
							alt="pov-you-are-a-rider"
						></img>
					</>
				);
		}
	}

	function getBaseInformation(): Person {
		const temp: Person = {
			email: "",
			password: "",
			address: "",
			phone: ""
		};
		temp.email = (
			document.getElementById("email") as HTMLInputElement
		).value;
		temp.password = (
			document.getElementById("password") as HTMLInputElement
		).value;
		temp.address = (
			document.getElementById("address") as HTMLInputElement
		).value;
		temp.phone = (
			document.getElementById("phone") as HTMLInputElement
		).value;
		return temp;
	}

	function getUserData(): {
		firstName: string;
		lastName: string;
	} {
		const temp: any = {};
		temp.firstName = (
			document.getElementById("firstName") as HTMLInputElement
		).value;
		temp.lastName = (
			document.getElementById("lastName") as HTMLInputElement
		).value;
		return temp;
	}

	function getRestaurantData() {
		const temp: any = {};

		temp.name = (
			document.getElementById("restaurantName") as HTMLInputElement
		).value;
		temp.category = (
			document.getElementById("category") as HTMLInputElement
		).value;
		temp.timeTable = timeTable;
		console.log(temp);
		return temp;
	}

	function getRiderData() {
		return getBaseInformation();
	}

	async function signUp() {
		const baseObj = getBaseInformation();
		switch (selectedRadio()) {
			case "User":
				try {
					const userData: User = await validateUser({
						...baseObj,
						...getUserData()
					});
					await UserNamespace.register(userData);
				} catch (e: any) {
					// pop up for showing errors
					console.error(e.message);
				}
				// navigate("/user/homepage");
				break;
			case "Restaurant":
				getRestaurantData();
				break;
			case "Rider":
				getRiderData();
		}
	}

	return (
		<div className="page">
			<div className="signup-div">
				<FoodieLogo></FoodieLogo>
				<br />
				<div className="container">
					<TextInput text="E-mail" />
					<TextInput text="Password" type="password" />
					<TextInput text="Address" />
					<TextInput text="Phone" />
					<form className="role-radios">
						<p>Role:</p>
						<label>
							<input
								type="radio"
								name="role"
								ref={user}
								onChange={selectRole}
								defaultChecked={true}
							/>
							User
						</label>
						<label>
							<input
								type="radio"
								name="role"
								ref={restaurant}
								onChange={selectRole}
							/>
							Restaurant
						</label>
						<label>
							<input
								type="radio"
								name="role"
								ref={rider}
								onChange={selectRole}
							/>
							Rider
						</label>
					</form>
					{roleDiv}
					<br />
					<button
						className="saul-goodman signup-button"
						onClick={signUp}
					>
						Sign up
					</button>
					<br />
					<a href="/">Login</a>
				</div>
			</div>
		</div>
	);
}

export default Signup;
