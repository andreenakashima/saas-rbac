"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Image from "next/image";
import Link from "next/link";
import githubIcon from "@/assets/github-icon.svg";
import { Separator } from "@/components/ui/separator";
import { useRouter } from "next/navigation";
import { useFormState } from "@/hooks/use-form-state";
import { signUpAction } from "./actions";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { AlertTriangle, Loader2 } from "lucide-react";
import { signInWithGithub } from "../actions";

export function SignUpForm() {
	const router = useRouter();

	const [{ success, message, errors }, handleSubmit, isPending] = useFormState(
		signUpAction,
		() => {
			router.push("/auth/sign-in");
		}
	);

	return (
		<div className="space-y-4">
			<form onSubmit={handleSubmit} className="space-y-4">
				{success === false && message && (
					<Alert variant="destructive">
						<AlertTriangle className="size-4" />
						<AlertTitle>Sign up failed</AlertTitle>
						<AlertDescription>
							<p>{message}</p>
						</AlertDescription>
					</Alert>
				)}

				<div className="space-y-4">
					<Label htmlFor="name">Name</Label>
					<Input name="name" id="name" />

					{errors?.name && (
						<p className="text-xs font-medium text-red-500 dark:text-red-400">
							{errors.name[0]}
						</p>
					)}
				</div>

				<div className="space-y-4">
					<Label htmlFor="email">Name</Label>
					<Input name="email" id="email" type="email" />

					{errors?.email && (
						<p className="text-xs font-medium text-red-500 dark:text-red-400">
							{errors.email[0]}
						</p>
					)}
				</div>

				<div className="space-y-4">
					<Label htmlFor="password">Password</Label>
					<Input name="password" id="password" type="password" />

					{errors?.password && (
						<p className="text-xs font-medium text-red-500 dark:text-red-400">
							{errors.password[0]}
						</p>
					)}
				</div>

				<div className="space-y-4">
					<Label htmlFor="password_confirmation">Confirm your password</Label>
					<Input
						name="password_confirmation"
						id="password_confirmation"
						type="password"
					/>

					{errors?.password_confirmation && (
						<p className="text-xs font-medium text-red-500 dark:text-red-400">
							{errors.password_confirmation[0]}
						</p>
					)}
				</div>

				<Button type="submit" className="w-full">
					{isPending ? (
						<Loader2 className="size-4 animate-spin" />
					) : (
						"Create account"
					)}
				</Button>

				<Button variant="link" className="w-full" size="sm" asChild>
					<Link href="/auth/sign-in">Already registered? Sign in</Link>
				</Button>
			</form>

			<form action={signInWithGithub}>
				<Separator />

				<Button type="submit" variant="outline" className="w-full">
					<Image src={githubIcon} className="size-4 mr-2 dark:invert" alt="" />
					Sign up with Github
				</Button>
			</form>
		</div>
	);
}
