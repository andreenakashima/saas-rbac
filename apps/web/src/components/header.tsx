import bunIcon from "@/assets/bun-icon.svg";
import Image from "next/image";
import ProfileButton from "./profile-button";

export async function Header() {
	return (
		<div className="mx-auto flex max-w-[1200px] items-center justify-between">
			<div className="flex items-center gap-3">
				<Image src={bunIcon} className="size-6" alt="Bun icon" />
			</div>

			<div className="flex items-center gap-4">
				<ProfileButton />
			</div>
		</div>
	);
}
