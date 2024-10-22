"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@radix-ui/react-label";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import type { FormEventHandler } from "react";

export const SignInForm = () => {
  const router = useRouter();

  const handleAction = async (formData: FormData): Promise<void> => {
    const [email, password] = [formData.get("email"), formData.get("password")];

    const res = await signIn("credentials", {
      email,
      password,
      redirect: false,
    });

    if (res && !res.error) {
      router.push("/my");
    }
  };

  return (
    <form action={handleAction} className="block">
      <Card className="w-full max-w-sm">
        <CardHeader>
          <CardTitle className="text-2xl">Login</CardTitle>
          <CardDescription>
            Enter your email below to login to your account.
          </CardDescription>
        </CardHeader>
        <CardContent className="grid gap-4">
          <div className="grid gap-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              name="email"
              placeholder="m@example.com"
              required
            />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="password">Password</Label>
            <Input id="password" type="password" name="password" required />
          </div>
        </CardContent>
        <CardFooter>
          <Button className="w-full" type="submit">
            Sign in
          </Button>
        </CardFooter>
      </Card>
    </form>
  );
};
