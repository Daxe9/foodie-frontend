import "./item-selection.css";
import { useNavigate, useParams } from "react-router-dom";
import FoodieNavbar from "../components/foodie-navbar.tsx";
import { TimeTable } from "../types/entities.ts";

export default function ItemSelection() {
	const { id } = useParams();
	const navigate = useNavigate();
	let links: [string, string, string] = ["Orders", "Restaurants", "Profile"];
	let paths: [string, string, string] = ["", "", ""];
	let restaurant: {
		id: number;
		name: string;
		category: string;
		address: string;
		phone: string;
		email: string;
		url: string | undefined;
		timeTable: TimeTable;
	} = {
		// @ts-ignore
		id: parseInt(id),
		name: "La taverna imprunetina",
		category: "Italian",
		address: "via Alessio Mori 18",
		phone: "3317126490",
		email: "latavernaimprunetina@gmail.com",
		url: undefined,
		timeTable: {
			monday: {
				opening1: null,
				closing1: null,
				opening2: null,
				closing2: null
			},
			tuesday: {
				opening1: "11:00",
				closing1: "15:00",
				opening2: "19:00",
				closing2: "23:00"
			},
			wednesday: {
				opening1: "11:00",
				closing1: "15:00",
				opening2: "19:00",
				closing2: "23:00"
			},
			thursday: {
				opening1: "11:00",
				closing1: "15:00",
				opening2: "19:00",
				closing2: "23:00"
			},
			friday: {
				opening1: "11:00",
				closing1: "15:00",
				opening2: "19:00",
				closing2: "23:00"
			},
			saturday: {
				opening1: "11:00",
				closing1: "15:00",
				opening2: "19:00",
				closing2: "23:00"
			},
			sunday: {
				opening1: "11:00",
				closing1: "15:00",
				opening2: "19:00",
				closing2: "23:00"
			}
		}
	};
	let items: {
		id: number;
		name: string;
		description: string;
		price: number;
		preparationTimeMinutes: number;
	}[] = [
		{
			id: 1,
			name: "Spaghetti alla carbonara",
			description: "Spaghetti with eggs and bacon",
			price: 8,
			preparationTimeMinutes: 15
		},
		{
			id: 2,
			name: "Lasagne",
			description: "Lasagne with ragù",
			price: 10,
			preparationTimeMinutes: 20
		},
		{
			id: 3,
			name: "Bistecca alla fiorentina",
			description: "Florentine steak",
			price: 15,
			preparationTimeMinutes: 25
		}
	];
	let orderedItems: number[] = [];

	function addItemToOrder(id: number) {
		if (!orderedItems.includes(id)) {
			orderedItems.push(id);
		}
	}

	function itemInfo(id: number) {
		console.log(id);
	}

	function returnToRestaurants() {
		navigate("/user/homepage");
	}

	return (
		<div className="item-selection-page">
			<FoodieNavbar links={links} paths={paths} selected={2} />
			<button onClick={returnToRestaurants}>Restaurants list</button>
			<div className="container restaurant-info">
				<h1>{restaurant.name}</h1>
				<img
					src={
						restaurant.url
							? restaurant.url
							: "../../public/noimage.jpg"
					}
				/>
				<p>{restaurant.category}</p>
				<p>{restaurant.address}</p>
				<p>{restaurant.phone}</p>
				<p>{restaurant.email}</p>
				<p>
					{restaurant.timeTable.tuesday.opening1} -{" "}
					{restaurant.timeTable.tuesday.closing1}
				</p>
				<p>
					{restaurant.timeTable.tuesday.opening2} -{" "}
					{restaurant.timeTable.tuesday.closing2}
				</p>
				<button className="saul-goodman">Confirm order</button>
				{items.map((item, index) => {
					return (
						<div className="item-list" key={index}>
							<div className="item container">
								<p>{item.name}</p>
								<div className="item-buttons">
									<button onClick={() => itemInfo(index + 1)}>
										<b>
											<i>i</i>
										</b>
									</button>
									<button
										onClick={() =>
											addItemToOrder(index + 1)
										}
									>
										<b>+</b>
									</button>
								</div>
							</div>
						</div>
					);
				})}
			</div>
		</div>
	);
}
