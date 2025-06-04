"use client";

import AuthForm from "@/components/auth/AuthForm";
import {
  loginSchema,
  loginFields,
  type LoginFormData,
} from "@/components/auth/authConfig";
import Image from "next/image";

export default function LoginPage() {
  function handleSubmit(values: LoginFormData) {
    console.log("Login values:", values);
  }

  return (
    <div className="flex">
      <div className="hidden w-full md:flex md:justify-center md:items-center md:w-1/2 relative p-8">
        <Image
          src="/furniture.svg"
          alt="3D rendered outdoor furniture scene with hanging chairs and plants"
          width={380}
          height={380}
          className="object-cover"
        />
      </div>

      <div className="flex-1 flex items-center justify-center p-8">
        <AuthForm
          title="Login"
          subtitle="Login your account in a seconds"
          fields={loginFields}
          schema={loginSchema}
          hasKeepLoggedInCheckbox={true}
          forgotPasswordLink="#"
          submitButtonText="Log in"
          linkText="Don't have an account?"
          linkHref="/sign-up"
          linkLabel="Sign up"
          onSubmit={handleSubmit}
        />
      </div>
    </div>
  );
}
