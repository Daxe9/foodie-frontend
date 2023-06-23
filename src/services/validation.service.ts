import { object, string } from "yup";
import { Restaurant, Rider, User } from "../types/entities.ts";

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

export async function validateRider(rider: Rider): Promise<Rider> {
	const riderSchema = object({
		...personSchema
	});

	return await riderSchema.validate(rider);
}

export async function validateUser(user: User): Promise<User> {
	const userSchema = object({
		...personSchema,
		firstName: string().required(),
		lastName: string().required()
	});

	return await userSchema.validate(user);
}

export async function validateRestaurant(
	restaurant: Restaurant
): Promise<Restaurant> {
	const restaurantSchema = object({
		name: string().required(),
		url: string().default(""),
		category: string().required(),
		timetable: object().shape({
			monday: object().shape({
				opening1: string()
					.nullable()
					.typeError("Field must be a string or null"),
				opening2: string()
					.nullable()
					.typeError("Field must be a string or null"),
				closing1: string()
					.nullable()
					.typeError("Field must be a string or null"),
				closing2: string()
					.nullable()
					.typeError("Field must be a string or null")
			}),
			tuesday: object().shape({
				opening1: string().nullable(),
				opening2: string().nullable(),
				closing1: string().nullable(),
				closing2: string().nullable()
			}),
			wednesday: object().shape({
				opening1: string().nullable(),
				opening2: string().nullable(),
				closing1: string().nullable(),
				closing2: string().nullable()
			}),
			thursday: object().shape({
				opening1: string().nullable(),
				opening2: string().nullable(),
				closing1: string().nullable(),
				closing2: string().nullable()
			}),
			friday: object().shape({
				opening1: string().nullable(),
				opening2: string().nullable(),
				closing1: string().nullable(),
				closing2: string().nullable()
			}),
			saturday: object().shape({
				opening1: string().nullable(),
				opening2: string().nullable(),
				closing1: string().nullable(),
				closing2: string().nullable()
			}),
			sunday: object().shape({
				opening1: string().nullable(),
				opening2: string().nullable(),
				closing1: string().nullable(),
				closing2: string().nullable()
			})
		})
	});

	// @ts-ignore
	return restaurantSchema.validate(restaurant);
}
