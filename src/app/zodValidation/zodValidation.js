import { z } from "zod";

export const loginZod = z.object({
  email: z.string().min(1, { message: "Email is required" }).email({
    message: "Please input a valid email",
  }),
  password: z
    .string()
    .min(5, { message: "Password must be atleast 5 characters" }),
});

export const registerZod = z
  .object({
    name: z.string().min(3, { message: "Name must be atleast 3 characters" }),
    email: z.string().min(1, { message: "Email is required" }).email({
      message: "Please input a valid email",
    }),
    password: z
      .string()
      .min(5, { message: "Password must be atleast 5 characters" }),
    confirm_password: z
      .string()
      .min(1, { message: "Confirm Password is required" }),
  })
  .refine((data) => data.password === data.confirm_password, {
    path: ["confirm_password"],
    message: "Password don't match",
  });

export const updateAccountZod = z.object({
  name: z.string().min(3, { message: "Name must be atleast 3 characters" }),

  email: z.string().min(1, { message: "Email is required" }).email({
    message: "Please input a valid email",
  }),
  password: z
      .string()
      .min(5, { message: "Password must be atleast 5 characters" })
});
