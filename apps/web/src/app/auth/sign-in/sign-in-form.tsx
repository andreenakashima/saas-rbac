"use client";

import { Label } from "@/components/ui/label";
import { signInWithEmailAndPassword } from "./actions";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import Image from "next/image";
import githubIcon from "@/assets/github-icon.svg";
import { useActionState } from "react";
import { Loader2 } from "lucide-react";

export function SignInForm() {
	const [state, formAction, isPending] = useActionState(
		signInWithEmailAndPassword,
		null
	);

	return (
		<form action={formAction} className="space-y-4">
			<div className="space-y-1">
				<Label htmlFor="email">E-mail</Label>
				<Input name="email" id="email" type="email" />
			</div>

			<div className="space-y-1">
				<Label htmlFor="password">Password</Label>
				<Input name="password" id="password" type="password" />

				<Link
					href="/auth/forgot-password"
					className="text-xs font-medium text-foreground hover:underline"
				>
					Forgot your password?
				</Link>
			</div>

			<Button type="submit" className="w-full">
				{isPending ? (
					<Loader2 className="size-4 animate-spin" />
				) : (
					"Sign in with e-mail"
				)}
			</Button>

			<Button variant="link" className="w-full" size="sm" asChild>
				<Link href="/auth/sign-up">Create a new account</Link>
			</Button>

			<Separator />

			<Button type="submit" variant="outline" className="w-full">
				<Image src={githubIcon} className="size-4 mr-2 dark:invert" alt="" />
				Sign in with Github
			</Button>
		</form>
	);
}
