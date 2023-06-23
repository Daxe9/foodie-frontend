import "./restaurant-card.css";
import { useNavigate } from "react-router-dom";

type RestaurantCardProps = {
	id: number;
	image: string | undefined;
	name: string;
	category: string;
	address: string;
};

export default function RestaurantCard(props: RestaurantCardProps) {
	const navigate = useNavigate();

	function navigateToRestaurant() {
		navigate(`/user/${props.id}`);
	}

	return (
		<div
			className="container restaurant-card grow clickable"
			onClick={navigateToRestaurant}
		>
			<img
				src={props.image ? props.image : "./../public/noimage.jpg"}
				alt="restaurant-image"
			/>
			<p id="name">{props.name}</p>
			<p id="category">{props.category}</p>
			<p id="address">{props.address}</p>
		</div>
	);
}
