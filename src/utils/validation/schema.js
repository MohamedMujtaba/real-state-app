import { z } from "zod";

export const UserNameSchema = z
  .string({
    required_error: "Username is required",
    invalid_type_error: 'You can only use "String"',
  })
  .min(3, { message: "Name most be at lest 3 char" })
  .max(25, { message: "Name most be max of 25 char" });

export const PhoneSchema = z
  .string({
    required_error: "Phone Number is required",
    invalid_type_error: 'You can only use "String"',
  })
  .min(9, { message: "Phone Number should be 9 numbers " })
  .max(9, { message: "Phone Number should be 9 numbers" });

export const PasswordSchema = z
  .string()
  .regex(new RegExp(".*[A-Z].*"), "One uppercase character")
  .regex(new RegExp(".*[a-z].*"), "One lowercase character")
  .regex(new RegExp(".*\\d.*"), "One number")
  .regex(
    new RegExp(".*[`~<>?,./!@#$%^&*()\\-_+=\"'|{}\\[\\];:\\\\].*"),
    "One special character"
  )
  .min(8, "Must be at least 8 characters in length");

export const ZodUserSchema = z.object({
  name: z
    .string({
      required_error: "Username is required",
      invalid_type_error: 'You can only use "String"',
    })
    .min(3, { message: "Name most be at lest 3 char" })
    .max(25, { message: "Name most be max of 25 char" }),
  phone: z
    .string({
      required_error: "Phone Number is required",
      invalid_type_error: 'You can only use "String"',
    })
    .min(9, { message: "Phone Number should be 9 numbers " })
    .max(9, { message: "Phone Number should be 9 numbers" }),
  whatsapp: z
    .string({
      required_error: "Whatsapp Number is required",
      invalid_type_error: 'You can only use "String"',
    })
    .min(9, { message: "Whatsapp Number should be 9 numbers " })
    .max(19, { message: "Whatsapp Number should be 9 numbers" }),
});
