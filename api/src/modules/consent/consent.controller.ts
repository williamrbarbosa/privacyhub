import { FastifyInstance } from "fastify";
import { createConsentSchema } from "./consent.schema";
import { ConsentRepository } from "./consent.repository";
import { ConsentService } from "./consent.service";

export async function consentController(app: FastifyInstance) {
  const repo = new ConsentRepository();
  const service = new ConsentService(repo);

  app.post("/consent", async (request, reply) => {
    const parsed = createConsentSchema.safeParse(request.body);

    if (!parsed.success) {
      return reply.status(400).send({
        message: "Validation error",
        issues: parsed.error.format(),
      });
    }

    const consent = await service.create(parsed.data);

    return reply.status(201).send(consent);
  });
}
