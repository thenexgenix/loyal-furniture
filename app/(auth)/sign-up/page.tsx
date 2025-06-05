"use client";

import AuthForm from "@/components/auth/AuthForm";
import {
  signUpSchema,
  signUpFields,
  type SignUpFormData,
} from "@/components/auth/authConfig";
import Image from "next/image";

export default function SignUpPage() {
  function handleSubmit(values: SignUpFormData) {
    console.log("Sign up values:", values);
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
          title="Sign in"
          subtitle="Create your account in a seconds"
          fields={signUpFields}
          schema={signUpSchema}
          hasTermsCheckbox={true}
          submitButtonText="Create an account"
          linkText="Already a member?"
          linkHref="/login"
          linkLabel="Login"
          onSubmit={handleSubmit}
        />
      </div>
    </div>
  );
}
