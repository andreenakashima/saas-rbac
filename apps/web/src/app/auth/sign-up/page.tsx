import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import Image from "next/image";
import githubIcon from "@/assets/github-icon.svg";
import Link from "next/link";

export default function SignUpPage() {
	return (
		<form action="" className="space-y-4">
			<div className="space-y-1">
				<Label htmlFor="name">Name</Label>
				<Input name="name" id="name" />
			</div>

			<div className="space-y-1">
				<Label htmlFor="email">E-mail</Label>
				<Input name="email" id="email" type="email" />
			</div>

			<div className="space-y-1">
				<Label htmlFor="password">Password</Label>
				<Input name="password" id="password" type="password" />
			</div>

			<div className="space-y-1">
				<Label htmlFor="password_confirmation">Password</Label>
				<Input
					name="password_confirmation"
					id="password_confirmation"
					type="password"
				/>
			</div>

			<Button type="submit" className="w-full">
				Create account
			</Button>

			<Button variant="link" className="w-full" size="sm" asChild>
				<Link href="/auth/sign-in">Already registered? Sign in</Link>
			</Button>

			<Separator />

			<Button type="submit" variant="outline" className="w-full">
				<Image src={githubIcon} className="size-4 mr-2 dark:invert" alt="" />
				Sign up with Github
			</Button>
		</form>
	);
}
