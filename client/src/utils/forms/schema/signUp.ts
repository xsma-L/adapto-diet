import { z } from 'zod';

export const SignUpSchema = z.object({
  last_name: z.string(),
  first_name: z.string(),
  email: z.string().email(),
  password: z
    .string()
    .min(6, { message: "Votre mot de passe doit contenir au moins 6 caractères"})
    .max(20, { message: "Votre mot de passe doit contenir au maximum 6 caractères" })
    .regex(/^(?=.*[A-Z])(?=.*[!@#$%^&*()_+\[\]{};':"\\|,.?/\-`~]).+$/, { message: "Majuscule et caractère spécial requis dans le mot de passe." })
});

export type SignUpSchemaType = z.infer<typeof SignUpSchema>