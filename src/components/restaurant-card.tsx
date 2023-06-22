import "./restaurant-card.css";

type RestaurantCardProps = {
	image: string | undefined;
	name: string;
	category: string;
	address: string;
};

export default function RestaurantCard(props: RestaurantCardProps) {
	return (
		<div className="container card">
			<img src={props.image ? props.image : ""} alt="restaurant-image" />
			<p id="name">{props.name}</p>
			<p id="category">{props.category}</p>
			<p id="address">{props.address}</p>
		</div>
	);
}
