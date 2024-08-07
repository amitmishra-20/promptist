import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { signInSchema } from "@/lib/validation";
import { Link } from "react-router-dom";

const SignIn = () => {
  const form = useForm<z.infer<typeof signInSchema>>({
    resolver: zodResolver(signInSchema),
    defaultValues: {
      username: "",
      password: "",
    },
  });

  function onSubmit(values: z.infer<typeof signInSchema>) {
    console.log(values);
  }

  return (
    <>
      <section className="text-white">
        <Form {...form}>
        <h2 className="text-2xl text-center font-semibold pb-5">Sign In</h2>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <FormField
              control={form.control}
              name="username"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Username</FormLabel>
                  <FormControl>
                    <Input
                      type="text"
                      className="bg-transparent border-primary"
                      {...field}
                    />
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
                    <Input
                      type="password"
                      className="bg-transparent border-primary"
                      {...field}
                    />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />
            <div className="flex items-center justify-center">
              <Button className="bg-primary w-1/3" type="submit">
                Submit
              </Button>
            </div>
          </form>
        </Form>
        <p className="text-center pt-3">New to this page? <Link to="/sign-up" className="text-primary text-xl cursor-pointer">Sign Up</Link> </p>
      </section>
    </>
  );
};

export default SignIn;
