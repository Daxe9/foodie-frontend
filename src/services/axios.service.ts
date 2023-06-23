import axios from "axios";
import { Restaurant, Rider, User } from "../types/entities.ts";

const apiClient = axios.create({
	baseURL: "http://localhost:3000",
	withCredentials: false,
	headers: {
		Accept: "application/json",
		"Content-Type": "application/json"
	}
});

export namespace UserNamespace {
	const userBaseUrl = "/user";

	export async function register(user: User) {
		return apiClient
			.post(userBaseUrl + "/register", user)
			.catch((res: any) => {
				throw new Error(res.response.data);
			});
	}
}
export namespace RestaurantNamespace {
	const restaurantBaseUrl = "/restaurant";

	export async function register(restaurant: Restaurant) {
		return apiClient
			.post(restaurantBaseUrl + "/register", restaurant)
			.catch((res: any) => {
				throw new Error(JSON.stringify(res.response.data));
			});
	}
}

export namespace RiderNamespace {
	const riderBaseUrl = "/rider";

	export async function register(rider: Rider) {
		return apiClient
			.post(riderBaseUrl + "/register", rider)
			.catch((res: any) => {
				throw new Error(JSON.stringify(res.response.data));
			});
	}
}
