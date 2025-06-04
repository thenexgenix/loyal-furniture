import { z } from "zod";

// Sign Up Schema
export const signUpSchema = z
  .object({
    firstName: z.string().min(2, {
      message: "First name must be at least 2 characters.",
    }),
    lastName: z.string().min(2, {
      message: "Last name must be at least 2 characters.",
    }),
    email: z.string().email({
      message: "Please enter a valid email address.",
    }),
    phone: z.string().min(10, {
      message: "Phone number must be at least 10 characters.",
    }),
    password: z.string().min(8, {
      message: "Password must be at least 8 characters.",
    }),
    confirmPassword: z.string(),
    agreedToTerms: z.boolean().refine((val) => val === true, {
      message: "You must agree to the terms and privacy policy.",
    }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords don't match",
    path: ["confirmPassword"],
  });

// Login Schema
export const loginSchema = z.object({
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  password: z.string().min(1, {
    message: "Password is required.",
  }),
  keepLoggedIn: z.boolean(),
});

// Form Field Configurations
export const signUpFields = [
  {
    name: "firstName",
    label: "First Name:",
    placeholder: "eg. John",
    validation: z.string().min(2),
  },
  {
    name: "lastName",
    label: "Last Name:",
    placeholder: "eg. Doe",
    validation: z.string().min(2),
  },
  {
    name: "email",
    label: "Email Address:",
    type: "email" as const,
    placeholder: "eg. johndoe@gmail.com",
    validation: z.string().email(),
  },
  {
    name: "phone",
    label: "Phone Number",
    type: "tel" as const,
    placeholder: "eg. +8801xxxxxxxxx",
    validation: z.string().min(10),
  },
  {
    name: "password",
    label: "Create Password:",
    type: "password" as const,
    placeholder: "••••••••••",
    validation: z.string().min(8),
  },
  {
    name: "confirmPassword",
    label: "Confirm Password:",
    type: "password" as const,
    placeholder: "••••••••••",
    validation: z.string(),
  },
];

export const loginFields = [
  {
    name: "email",
    label: "Email Address",
    type: "email" as const,
    placeholder: "eg. john@gmail.com",
    validation: z.string().email(),
  },
  {
    name: "password",
    label: "Password",
    type: "password" as const,
    placeholder: "Enter your password",
    validation: z.string().min(1),
  },
];

export type SignUpFormData = z.infer<typeof signUpSchema>;
export type LoginFormData = z.infer<typeof loginSchema>;
