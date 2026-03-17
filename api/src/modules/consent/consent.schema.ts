import { z } from "zod";

export const createConsentSchema = z.object({
  analytics: z.boolean(),
  marketing: z.boolean(),
});

export type CreateConsentDTO = z.infer<typeof createConsentSchema>;
