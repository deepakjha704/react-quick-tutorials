import { useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "./ui/form";
import { Input } from "./ui/input";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "./ui/button";
import { Link, useNavigate } from "@tanstack/react-router";
import { signUp } from "supertokens-web-js/recipe/emailpassword";
import { useAuth } from "./AuthProvider";

const formSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8),
});
type FormSchema = z.infer<typeof formSchema>;

export function SignUpForm() {
  const navigate = useNavigate();
  const { handleSignIn } = useAuth();

  const form = useForm<FormSchema>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const handleSubmit = form.handleSubmit(async (data) => {
    try {
      const response = await signUp({
        formFields: [
          {
            id: "email",
            value: data.email,
          },
          {
            id: "password",
            value: data.password,
          },
        ],
      });

      if (response.status === "FIELD_ERROR") {
        response.formFields.forEach((formField) => {
          form.setError(formField.id as keyof FormSchema, {
            message: formField.error,
          });
        });
      } else if (response.status === "SIGN_UP_NOT_ALLOWED") {
        form.setError("root", {
          message: response.reason,
        });
      } else {
        handleSignIn(response.user.id);
        navigate({ to: "/" });
      }
    } catch (error: any) {
      if (error.isSuperTokensGeneralError === true) {
        console.error(error);
      } else {
        console.error(error);
      }
    }
  });

  return (
    <div className="w-full">
      <Form {...form}>
        <form onSubmit={handleSubmit} className="space-y-4">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input placeholder="Email" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Password</FormLabel>
                <FormControl>
                  <Input type="password" placeholder="Password" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button type="submit" disabled={form.formState.isSubmitting}>
            {form.formState.isSubmitting ? "Signing up..." : "Sign Up"}
          </Button>

          <p className="text-sm text-gray-500">
            Already have an account?{" "}
            <Link to="/auth/signin" className="text-blue-500">
              Sign In
            </Link>
          </p>

          {form.formState.errors.root && (
            <p className="text-red-500">{form.formState.errors.root.message}</p>
          )}
        </form>
      </Form>
    </div>
  );
}
