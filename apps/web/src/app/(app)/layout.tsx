import { isAuthenticated } from "@/auth/auth";
import { redirect } from "next/navigation";
import React from "react";

export default async function AppLayout({
	children,
}: Readonly<{ children: React.ReactNode }>) {
	if (!isAuthenticated()) {
		redirect("/auth/sign-in");
	}

	return <>{children}</>;
}
