"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";

import InputField from "../InputField";

const formSchema = z.object({
  username: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  fullName: z
    .string()
    .min(8, { message: "Fullname must be 8 characters long.." }),
  password: z
    .string()
    .min(4, { message: "Password must be 4 characters long.." }),
  repeatPassword: z
    .string()
    .min(4, { message: "Password must be 4 characters long.." }),
});

const RegistrationForm = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      fullName: "",
      password: "",
      repeatPassword: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
  }
  return (
    <div className="flex h-screen flex-col items-center justify-start">
      <div className="flex w-full max-w-xl flex-col gap-4 rounded-lg bg-white p-4">
        <div className="flex flex-col gap-4">
          <h1 className="text-xl">Welcome back</h1>
          <span className="text-[0.85em] text-neutral-400">
            Please sign-in to use a lot of features..
          </span>
        </div>
        <div>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
              <InputField
                form={form.control}
                placeholder="Enter your username.."
                fieldLabel="Username"
                fieldName="username"
              />
              <InputField
                form={form.control}
                placeholder="Enter your fullname.."
                fieldLabel="Fullname"
                fieldName="fullName"
              />
              <InputField
                form={form.control}
                placeholder="Enter your password.."
                fieldLabel="Password"
                fieldName="password"
                type="password"
              />
              <InputField
                form={form.control}
                placeholder="Repeat your password.."
                fieldLabel="Repeat Password"
                fieldName="repeatPassword"
                type="password"
              />
              <Button type="submit" className="w-full py-6">
                Login
              </Button>
            </form>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default RegistrationForm;
