import { api } from "./api-client";

interface CreateOrganizationRequest {
	name: string;
	domain: string | null;
	shouldAttachUsersByDomain: boolean;
}

type CreateOrganizationResponse = void;

export async function createOrganization({
	name,
	domain,
	shouldAttachUsersByDomain,
}: CreateOrganizationRequest) {
	await api.post("organizations", {
		json: {
			name,
			domain,
			shouldAttachUsersByDomain,
		},
	});
}
