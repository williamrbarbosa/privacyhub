import Fastify from "fastify";
import cors from "@fastify/cors";

import { consentController } from "./modules/consent/consent.controller";

const app = Fastify({
  logger: true,
});

app.register(cors, {
  origin: true,
});

app.get("/health", async () => {
  return { status: "ok" };
});

app.register(consentController);

app.listen({ port: 3333 });
