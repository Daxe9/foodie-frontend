import axios from "axios";
import { User } from "../types/entities.ts";

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
		return apiClient.post(userBaseUrl + "/register", user);
	}
}
