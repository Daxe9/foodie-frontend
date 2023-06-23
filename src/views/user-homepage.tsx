import "./user-homepage.css";
import FoodieNavbar from "../components/foodie-navbar.tsx";
import RestaurantCard from "../components/restaurant-card.tsx";

export default function UserHomepage() {
	let links: [string, string, string] = ["Orders", "Restaurants", "Profile"];
	let paths: [string, string, string] = ["", "", ""];
	let restaurants: {
		id: number;
		image: string | undefined;
		name: string;
		category: string;
		address: string;
	}[] = [
		{
			id: 1,
			image: undefined,
			name: "restaurant1",
			category: "category",
			address: "address"
		},
		{
			id: 2,
			image: undefined,
			name: "restaurant2",
			category: "category",
			address: "address"
		},
		{
			id: 3,
			image: undefined,
			name: "restaurant3",
			category: "category",
			address: "address"
		},
		{
			id: 4,
			image: undefined,
			name: "restaurant4",
			category: "category",
			address: "address"
		},
		{
			id: 5,
			image: undefined,
			name: "restaurant5",
			category: "category",
			address: "address"
		},
		{
			id: 6,
			image: undefined,
			name: "restaurant6",
			category: "category",
			address: "address"
		},
		{
			id: 7,
			image: undefined,
			name: "restaurant7",
			category: "category",
			address: "address"
		},
		{
			id: 8,
			image: undefined,
			name: "restaurant8",
			category: "category",
			address: "address"
		}
	];
	/* let categories: string[] = [
		"Italian",
		"Mexican",
		"Chinese",
		"Fast Food",
		"Japanese"
	]; */

	return (
		<div className="user-page">
			<FoodieNavbar links={links} paths={paths} selected={2} />
			<div className="restaurantsDiv">
				{restaurants.map((restaurant, index) => {
					return (
						<RestaurantCard
							key={index}
							id={restaurant.id}
							image={restaurant.image}
							name={restaurant.name}
							category={restaurant.category}
							address={restaurant.address}
						/>
					);
				})}
			</div>
		</div>
	);
}
