import { getCurrentOrg } from "@/auth/auth";
import { Button } from "./ui/button";
import { NavLink } from "./nav-link";

export async function Tabs() {
	const currentOrg = await getCurrentOrg();

	return (
		<div className="border-b py-4">
			<nav className="mx-auto flex max-w-[1200px] items-center gap-2">
				<Button
					asChild
					variant="ghost"
					size="sm"
					className="to-muted-foreground data-[current=true]:text-foreground border border-transparent data-[current=true]:border-border"
				>
					<NavLink href={`/org/${currentOrg}`}>Projects</NavLink>
				</Button>
				<Button
					asChild
					variant="ghost"
					size="sm"
					className="to-muted-foreground data-[current=true]:text-foreground border border-transparent data-[current=true]:border-border"
				>
					<NavLink href={`/org/${currentOrg}/members`}>Members</NavLink>
				</Button>
				<Button
					asChild
					variant="ghost"
					size="sm"
					className="to-muted-foreground data-[current=true]:text-foreground border border-transparent data-[current=true]:border-border"
				>
					<NavLink href={`/org/${currentOrg}/settings`}>
						Settings & Billing
					</NavLink>
				</Button>
			</nav>
		</div>
	);
}
