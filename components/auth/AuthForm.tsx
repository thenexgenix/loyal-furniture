"use client";

import { useState } from "react";
import { Key, LockOpen } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import Link from "next/link";

interface FormFieldConfig {
  name: string;
  label: string;
  type?: "text" | "email" | "password" | "tel";
  placeholder: string;
  validation: z.ZodTypeAny;
}

interface AuthFormProps {
  title: string;
  subtitle: string;
  fields: FormFieldConfig[];
  submitButtonText: string;
  linkText?: string;
  linkHref?: string;
  linkLabel?: string;
  onSubmit: (values: any) => void;
  schema: z.ZodSchema;
  hasTermsCheckbox?: boolean;
  hasKeepLoggedInCheckbox?: boolean;
  forgotPasswordLink?: string;
}

export default function AuthForm({
  title,
  subtitle,
  fields,
  submitButtonText,
  linkText,
  linkHref,
  linkLabel,
  onSubmit,
  schema,
  hasTermsCheckbox = false,
  hasKeepLoggedInCheckbox = false,
  forgotPasswordLink,
}: AuthFormProps) {
  const [showPasswords, setShowPasswords] = useState<Record<string, boolean>>(
    {}
  );

  const form = useForm({
    resolver: zodResolver(schema),
    defaultValues: fields.reduce((acc, field) => {
      if (field.type === "password") {
        acc[field.name] = "";
      } else if (
        field.name === "agreedToTerms" ||
        field.name === "keepLoggedIn"
      ) {
        acc[field.name] = false;
      } else {
        acc[field.name] = "";
      }
      return acc;
    }, {} as Record<string, any>),
  });

  const togglePasswordVisibility = (fieldName: string) => {
    setShowPasswords((prev) => ({
      ...prev,
      [fieldName]: !prev[fieldName],
    }));
  };

  const renderField = (field: FormFieldConfig) => {
    const isPasswordField = field.type === "password";
    const showPassword = showPasswords[field.name] || false;

    return (
      <FormField
        key={field.name}
        control={form.control}
        name={field.name}
        render={({ field: formField }) => (
          <FormItem>
            <FormLabel className="text-[#818181] font-extrabold">
              {field.label}
            </FormLabel>
            <FormControl>
              {isPasswordField ? (
                <div className="relative">
                  <Input
                    type={showPassword ? "text" : "password"}
                    placeholder={field.placeholder}
                    className="border-[#d1d1d1] bg-[#fffdfd] text-[#000000] placeholder:text-[#adb0cd] pr-10"
                    {...formField}
                  />
                  <button
                    type="button"
                    onClick={() => togglePasswordVisibility(field.name)}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-[#adb0cd] hover:text-[#818181]"
                  >
                    {showPassword ? (
                      <LockOpen className="h-4 w-4" />
                    ) : (
                      <Key className="h-4 w-4" />
                    )}
                  </button>
                </div>
              ) : (
                <Input
                  type={field.type || "text"}
                  placeholder={field.placeholder}
                  className="border-[#d1d1d1] bg-[#fffdfd] text-[#000000] placeholder:text-[#adb0cd]"
                  {...formField}
                />
              )}
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
    );
  };

  return (
    <div className="w-full max-w-md space-y-6">
      <div className="space-y-2">
        <h1 className="text-4xl font-bold text-[#000000]">{title}</h1>
        <p className="text-[#818181]">{subtitle}</p>
      </div>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          {fields.map(renderField)}

          {hasKeepLoggedInCheckbox && (
            <div className="flex items-center justify-between">
              <FormField
                control={form.control}
                name="keepLoggedIn"
                render={({ field }) => (
                  <FormItem>
                    <div className="flex items-center space-x-2">
                      <FormControl>
                        <Checkbox
                          checked={field.value}
                          onCheckedChange={field.onChange}
                          className="border-[#3b0c50] data-[state=checked]:bg-[#3b0c50] data-[state=checked]:border-[#3b0c50]"
                        />
                      </FormControl>
                      <FormLabel className="text-sm text-[#818181]">
                        Keep me logged in
                      </FormLabel>
                    </div>
                    <FormMessage />
                  </FormItem>
                )}
              />
              {forgotPasswordLink && (
                <Link
                  href={forgotPasswordLink}
                  className="text-sm text-[#818181] hover:text-[#3b0c50]"
                >
                  Forget password?
                </Link>
              )}
            </div>
          )}

          {hasTermsCheckbox && (
            <FormField
              control={form.control}
              name="agreedToTerms"
              render={({ field }) => (
                <FormItem>
                  <div className="flex items-center space-x-2 pt-2">
                    <FormControl>
                      <Checkbox
                        checked={field.value}
                        onCheckedChange={field.onChange}
                        className="border-[#3b0c50] data-[state=checked]:bg-[#3b0c50] data-[state=checked]:border-[#3b0c50]"
                      />
                    </FormControl>
                    <FormLabel className="text-[#818181] text-sm">
                      I agree to the terms and privacy policy
                    </FormLabel>
                  </div>
                  <FormMessage />
                </FormItem>
              )}
            />
          )}

          <Button
            type="submit"
            className="w-full bg-[#3b0c50] hover:bg-[#3b0c50]/90 text-white font-medium py-3"
          >
            {submitButtonText}
          </Button>
        </form>
      </Form>

      {linkText && linkHref && linkLabel && (
        <p className="text-center text-[#818181] text-sm">
          {linkText}{" "}
          <Link
            href={linkHref}
            className="text-[#000000] hover:underline font-medium"
          >
            {linkLabel}
          </Link>
        </p>
      )}
    </div>
  );
}
