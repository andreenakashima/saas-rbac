import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
	Card,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { ArrowRight } from "lucide-react";

export function ProjectList() {
	return (
		<div className="grid grid-cols-3 gap-4">
			<Card>
				<CardHeader>
					<CardTitle></CardTitle>
					<CardDescription className="line-clamp-2 leading-relaxed"></CardDescription>
				</CardHeader>

				<CardFooter className="flex items-center gap-1.5">
					<Avatar className="size-4">
						<AvatarImage src="" />
						<AvatarFallback />
					</Avatar>

					<span className="text-xs text-muted-foreground">
						Created by{" "}
						<span className="font-medium text-foreground">Andre Nakashima</span>{" "}
						a day ago
					</span>

					<Button size="xs" variant="outline" className="ml-auto">
						View <ArrowRight className="size-3 ml-2" />
					</Button>
				</CardFooter>
			</Card>
		</div>
	);
}
