import { z } from "zod";

export const signInSchema = z.object({
  username: z.string().min(2, { message: "Too Short" }),
  password: z
    .string()
    .min(8, { message: "Password must be more than 8 letters" }),
});

export const signUpSchema = z.object({
  username: z.string().min(2, { message: "Too Short" }),
  name: z.string().min(2, { message: "Too Short" }),
  email: z.string().email(),
  password: z
    .string()
    .min(8, { message: "Password must be more than 8 Characters" }),
});
