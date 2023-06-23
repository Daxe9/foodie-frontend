import "./signup.css";
import TextInput from "../components/text-input.tsx";
import FoodieLogo from "../components/foodie-logo.tsx";
import TimeTableHTML from "../components/time-table.tsx";
import CategoryBox from "../components/category-box.tsx";
import React, { createRef, JSX, useRef, useState } from "react";
import {
	Person,
	Restaurant,
	Rider,
	TimeTable,
	User
} from "../types/entities.ts";
import {
	RestaurantNamespace,
	RiderNamespace,
	UserNamespace
} from "../services/axios.service.ts";
import {
	validateRestaurant,
	validateRider,
	validateUser
} from "../services/validation.service.ts";

function Signup() {
	// const navigate = useNavigate();
	const user: React.RefObject<HTMLInputElement> = createRef();
	const restaurant: React.RefObject<HTMLInputElement> = createRef();
	const rider: React.RefObject<HTMLInputElement> = createRef();
	const timetableRef = useRef(null);
	const categoryRef = useRef(null);
	let categories: string[] = [
		"Italian",
		"Mexican",
		"Pizzeria",
		"Kebab",
		"Chinese",
		"Fast Food",
		"Japanese"
	];
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
						<TextInput text="URL" />
						<CategoryBox ref={categoryRef} options={categories} />
						<TimeTableHTML ref={timetableRef} />
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

	function getRestaurantData(): {
		name: string;
		category: string;
		url: string;
		timetable: TimeTable;
	} {
		const temp: any = {};

		temp.name = (
			document.getElementById("restaurantName") as HTMLInputElement
		).value;
		temp.url = (document.getElementById("url") as HTMLInputElement).value;
		// @ts-ignore
		temp.category = categoryRef.current?.getValue();
		// @ts-ignore
		temp.timetable = timetableRef.current?.getTimetable() as Timetable;

		return temp;
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
				try {
					const restaurantData: Restaurant = await validateRestaurant(
						{
							...baseObj,
							...getRestaurantData()
						}
					);
					console.log(restaurantData);
					await RestaurantNamespace.register(restaurantData);
				} catch (e: any) {
					// pop up for showing errors
					console.error(e);
				}
				// navigate("/user/homepage");
				break;
			case "Rider":
				try {
					const riderData: Rider = await validateRider({
						...baseObj
					});
					await RiderNamespace.register(riderData);
				} catch (e: any) {
					// pop up for showing errors
					console.error(e);
				}
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
