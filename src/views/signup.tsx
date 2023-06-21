import "./signup.css";
import TextInput from "../components/text-input.tsx";
import FoodieLogo from "../components/foodie-logo.tsx";
import React, { createRef, JSX, useRef, useState } from "react";
import { Person, Restaurant, User, TimeTable } from "../types/entities.ts";

function Signup() {
	const user: React.RefObject<HTMLInputElement> = createRef();
	const restaurant: React.RefObject<HTMLInputElement> = createRef();
	const rider: React.RefObject<HTMLInputElement> = createRef();

	const opening1 = useRef<HTMLInputElement>(null);
	const opening2 = useRef<HTMLInputElement>(null);
	const closing1 = useRef<HTMLInputElement>(null);
	const closing2 = useRef<HTMLInputElement>(null);

	const [roleDiv, setRoleDiv] = useState<JSX.Element>(
		<>
			<TextInput text={"First name"} />
			<TextInput text={"Last name"} />
		</>
	);
	let day: string = "monday";
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

	function selectDay(event: any) {
		document.getElementById(day)?.classList.remove("selected");
		day = event.target.id;
		document.getElementById(day)?.classList.add("selected");
	}

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
						<TextInput text="First name" />
						<TextInput text="Last name" />
					</>
				);
				break;
			case "Restaurant":
				setRoleDiv(
					<>
						<TextInput text="Restaurant name" />

						<div className="time-table">
							<p>Time table:</p>
							<button
								id="monday"
								title="Monday"
								onClick={selectDay}
								className="time-button selected"
							>
								M
							</button>
							<button
								id="tuesday"
								title="Tuesday"
								onClick={selectDay}
								className="time-button"
							>
								T
							</button>
							<button
								id="wednesday"
								title="Wednesday"
								onClick={selectDay}
								className="time-button"
							>
								W
							</button>
							<button
								id="thursday"
								title="Thursday"
								onClick={selectDay}
								className="time-button"
							>
								T
							</button>
							<button
								id="friday"
								title="Friday"
								onClick={selectDay}
								className="time-button"
							>
								F
							</button>
							<button
								id="saturday"
								title="Saturday"
								onClick={selectDay}
								className="time-button"
							>
								S
							</button>
							<button
								id="sunday"
								title="Sunday"
								onClick={selectDay}
								className="time-button"
							>
								S
							</button>
							<div className="time-inputs">
								<input
									id="opening1-input"
									ref={opening1}
									onChange={setTimeTable}
									type="time"
								/>
								<input
									id="closing1-input"
									ref={closing1}
									onChange={setTimeTable}
									type="time"
								/>
							</div>
							<div className="time-inputs">
								<input
									id="opening2-input"
									ref={opening2}
									onChange={setTimeTable}
									type="time"
								/>
								<input
									id="closing2-input"
									ref={closing2}
									onChange={setTimeTable}
									type="time"
								/>
							</div>
						</div>
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
			phone: 0
		};
		temp.email = (
			document.getElementById("e-mail") as HTMLInputElement
		).value;
		temp.password = (
			document.getElementById("password") as HTMLInputElement
		).value;
		temp.address = (
			document.getElementById("address") as HTMLInputElement
		).value;
		temp.phone = parseInt(
			(document.getElementById("phone_number") as HTMLInputElement).value
		) as number;
		return temp;
	}

	function setTimeTable() {
		// @ts-ignore
		const dayReference = timeTable[day];
		dayReference["opening1"] = opening1.current?.value;
		dayReference["opening2"] = opening2.current?.value;
		dayReference["closing1"] = closing1.current?.value;
		dayReference["closing2"] = closing2.current?.value;
		console.log(timeTable);
	}

	function getUserData() {
		const userData = getBaseInformation() as User;
		userData.firstName = (
			document.getElementById("first_name") as HTMLInputElement
		).value;
		userData.lastName = (
			document.getElementById("last_name") as HTMLInputElement
		).value;
		return userData;
	}

	function getRestaurantData() {
		const restaurantData = getBaseInformation() as Restaurant;

		restaurantData.name = (
			document.getElementById("restaurant_name") as HTMLInputElement
		).value;
		restaurantData.timeTable = timeTable;
		return restaurantData;
	}

	function getRiderData() {
		return getBaseInformation();
	}

	function signUp() {
		switch (selectedRadio()) {
			case "User":
				getUserData();
				break;
			case "Restaurant":
				getRestaurantData();
				break;
			case "Rider":
				getRiderData();
		}
	}

	//function setTimeTable() {}

	return (
		<div className="page">
			<div className="signup-div">
				<FoodieLogo></FoodieLogo>
				<br />
				<div className="container">
					<TextInput
						text="E-mail"
						pattern={
							new RegExp(
								/(?:[a-z0-9!#$%&'*+\/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+\/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/gm
							)
						}
					/>
					<TextInput
						text="Password"
						pattern={
							new RegExp(
								/^(?=(.*[a-z])+)(?=(.*[A-Z])+)(?=(.*[0-9])+)(?=(.*[!@#$%^&*()\-,_+.])+).{8,}$/
							)
						}
					/>
					<TextInput text="Address" />
					<TextInput
						text="Phone number"
						pattern={
							new RegExp(
								/^(?:3\d{2}|\(0\d{2}\))\s?\d{3}\s?\d{4}$/g
							)
						}
					/>
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
