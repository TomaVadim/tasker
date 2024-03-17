import { z } from "zod";

const envVariables = z.object({
  NEXTAUTH_SECRET: z.string().min(1),
  NEXTAUTH_URL: z.string().url(),
  NEXTAUTH_INTERNAL_URL: z.string().url(),
  GOOGLE_CLIENT_ID: z.string().min(1),
  GOOGLE_CLIENT_SECRET: z.string().min(1),
  MONGODB_URI: z.string().url(),
});

export const ENV_VARIABLES = envVariables.parse(process.env);
