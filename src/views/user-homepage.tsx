import "./user-homepage.css";
import FoodieNavbar from "../components/foodie-navbar.tsx";
import RestaurantCard from "../components/restaurant-card.tsx";

export default function UserHomepage() {
	let links: [string, string, string] = ["Orders", "Restaurants", "Profile"];
	let paths: [string, string] = ["", ""];
	/* let categories: string[] = [
		"Italian",
		"Mexican",
		"Pizzeria",
		"Kebab",
		"Chinese",
		"Fast Food",
		"Japanese"
	]; */

	return (
		<>
			<FoodieNavbar links={links} paths={paths} />
			<div className="restaurantsDiv">
				<RestaurantCard
					image={"./../../public/fish.jpeg"}
					name={"ristorante"}
					category={"sium"}
					address={"lmao"}
				/>
			</div>
		</>
	);
}
