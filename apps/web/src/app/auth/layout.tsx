import { isAuthenticated } from "@/auth/auth";
import { redirect } from "next/navigation";

export default function AuthLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	if (isAuthenticated()) {
		redirect("/");
	}

	return (
		<div className="min-h-screen flex flex-col items-center justify-center px-4">
			<div className="w-full max-w-xs">{children}</div>
		</div>
	);
}
