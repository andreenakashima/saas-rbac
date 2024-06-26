import { FastifyInstance } from "fastify";
import { ZodTypeProvider } from "fastify-type-provider-zod";
import { auth } from "../../middlewares/auth";
import z from "zod";
import { getUserPermissions } from "../../../utils/get-user-permissions";
import { UnauthorizedError } from "../_errors/unauthorized-error";
import { prisma } from "../../../lib/prisma";
import { BadRequestError } from "../_errors/bad-request-error";

export async function revokeInvite(app: FastifyInstance) {
	app
		.withTypeProvider<ZodTypeProvider>()
		.register(auth)
		.post(
			"/organizations/:slug/invites/:inviteId",
			{
				schema: {
					tags: ["invites"],
					summary: "Revoke invite",
					params: z.object({
						slug: z.string(),
						inviteId: z.string().uuid(),
					}),
					response: {
						204: z.null(),
					},
				},
			},
			async (request, reply) => {
				const { slug, inviteId } = request.params;
				const userId = await request.getCurrentUserId();
				const { organization, membership } =
					await request.getUserMembership(slug);

				const { cannot } = getUserPermissions(userId, membership.role);

				if (cannot("delete", "Invite")) {
					throw new UnauthorizedError(
						"You are not allowed to delete an invite"
					);
				}

				const invite = await prisma.invite.findUnique({
					where: {
						id: inviteId,
						organizationId: organization.id,
					},
				});
				if (!invite) {
					throw new BadRequestError("Invite not found");
				}

				await prisma.invite.delete({
					where: { id: inviteId },
				});

				return reply.status(204).send();
			}
		);
}