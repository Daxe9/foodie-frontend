import { object, string } from "yup";
import { User } from "../types/entities.ts";

const personSchema = {
	password: string()
		.required()
		.min(8)
		.max(255)
		.matches(
			/^(?=(.*[a-z])+)(?=(.*[A-Z])+)(?=(.*[0-9])+)(?=(.*[!@#$%^&*()\-,_+.])+).{8,}$/
		),
	address: string().required(),
	email: string()
		.matches(
			/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
		)
		.required(),
	phone: string().required()
};

export async function validateUser(user: User): Promise<User> {
	const userSchema = object({
		...personSchema,
		firstName: string().required(),
		lastName: string().required()
	});

	return await userSchema.validate(user);
}
