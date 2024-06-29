"use server";

import { signInWithPassword } from "@/http/sign-in-with-password";
import { HTTPError } from "ky";
import { z } from "zod";

const signInSchema = z.object({
	email: z.string().email({ message: "Please provide a valid email address." }),
	password: z.string().min(1, { message: "Please enter your password" }),
});

export async function signInWithEmailAndPassword(_: unknown, data: FormData) {
	const result = signInSchema.safeParse(Object.fromEntries(data));

	if (!result.success) {
		const errors = result.error.flatten().fieldErrors;

		return { success: false, message: null, errors };
	}

	const { email, password } = result.data;

	try {
		const { token } = await signInWithPassword({
			email,
			password,
		});

		console.log(token);
	} catch (err) {
		if (err instanceof HTTPError) {
			const { message } = await err.response.json();

			return { success: false, message, errors: null };
		}

		return {
			success: false,
			message: "Unexpected error, please try again in a few seconds",
			errors: null,
		};
	}

	return { success: true, message: null, errors: null };
}
