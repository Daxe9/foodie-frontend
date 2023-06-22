import "./foodie-navbar.css";
import FoodieLogo from "./foodie-logo.tsx";
import { useNavigate } from "react-router-dom";

type FoodieNavbarProps = {
	links: [string, string, string];
	paths: [string, string];
};

export default function FoodieNavbar(props: FoodieNavbarProps) {
	const navigation1 = useNavigate();
	const navigation2 = useNavigate();

	function firstNavigation() {
		navigation1(props.paths[0]);
	}

	function secondNavigation() {
		navigation2(props.paths[1]);
	}

	return (
		<div className="navbar">
			<FoodieLogo />
			<div className="navbar-links">
				<p onClick={firstNavigation}>
					<b>{props.links[0]}</b>
				</p>
				<p className="selected">
					<b>{props.links[1]}</b>
				</p>
				<p onClick={secondNavigation}>
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
