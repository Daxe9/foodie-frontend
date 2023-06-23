import "./foodie-navbar.css";
import FoodieLogo from "./foodie-logo.tsx";
import { useNavigate } from "react-router-dom";

type FoodieNavbarProps = {
	links: [string, string, string];
	paths: [string, string, string];
	selected: number;
};

export default function FoodieNavbar(props: FoodieNavbarProps) {
	const navigation = useNavigate();

	function firstNavigation() {
		navigation(props.paths[0]);
	}

	function secondNavigation() {
		navigation(props.paths[1]);
	}

	function thirdNavigation() {
		navigation(props.paths[2]);
	}

	return (
		<div className="navbar">
			<FoodieLogo />
			<div className="navbar-links">
				<p
					onClick={firstNavigation}
					className={
						props.selected == 1 ? "selected" : "grow clickable"
					}
				>
					<b>{props.links[0]}</b>
				</p>
				<p
					onClick={secondNavigation}
					className={
						props.selected == 2 ? "selected" : "grow clickable"
					}
				>
					<b>{props.links[1]}</b>
				</p>
				<p
					onClick={thirdNavigation}
					className={
						props.selected == 3 ? "selected" : "grow clickable"
					}
				>
					<b>{props.links[2]}</b>
				</p>
			</div>
			<select id="navbar-box">
				<option key="link1">{props.links[1]}</option>
				<option key="link2" onClick={firstNavigation}>
					{props.links[0]}
				</option>
				<option key="link3" onClick={secondNavigation}>
					{props.links[2]}
				</option>
			</select>
		</div>
	);
}
