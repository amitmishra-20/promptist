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
import { signUpSchema } from "@/lib/validation";
import { Link } from "react-router-dom";
import { CreateUserAccount } from "@/lib/appwrite/api";
import { useToast } from "@/components/ui/use-toast";

const SignUp = () => {
  const {toast} = useToast();
  const form = useForm<z.infer<typeof signUpSchema>>({
    resolver: zodResolver(signUpSchema),
    defaultValues: {
      name: "",
      email: "",
      username: "",
      password: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof signUpSchema>) => {
    console.log(values);
    // debugger
    const newUser = await CreateUserAccount(values);

    if (newUser) {
      toast({ variant: "destructive", title: "Uh oh! Something went wrong." });
    }
  };

  return (
    <section className="text-white">
      <Form {...form}>
        <h2 className="text-2xl text-center font-semibold pb-5">
          Create a New Account
        </h2>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="flex flex-col gap-4 w-full"
        >
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
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Name</FormLabel>
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
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input
                    type="email"
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
      <p className="text-center pt-3">
        Already have an Account?{" "}
        <Link to="/sign-in" className="text-primary text-xl cursor-pointer">
          Sign In
        </Link>{" "}
      </p>
    </section>
  );
};

export default SignUp;
