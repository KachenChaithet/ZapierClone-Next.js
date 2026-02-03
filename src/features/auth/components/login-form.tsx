"use client";

import { useForm } from "react-hook-form";
import z from "zod";
import { zodResolver } from "@hookform/resolvers/zod"
import { useRouter } from "next/navigation";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { Input } from "@base-ui/react";
import Link from "next/link";
import { authClient } from "@/lib/auth-client";
import { toast } from "sonner";

const loginSchema = z.object({
    email: z.email("Please enter a vaild email address"),
    password: z.string().min(1, "Password is required")
})

type LoginFormValues = z.infer<typeof loginSchema>

export function LoginForm() {
    const router = useRouter()
    const form = useForm({
        resolver: zodResolver(loginSchema),
        defaultValues: {
            email: "",
            password: ""
        }
    })

    const onSubmit = async (values: LoginFormValues) => {
        await authClient.signIn.email({
            email: values.email,
            password: values.password,
            callbackURL: "/"
        }, {
            onSuccess: () => {
                router.push('/')
                toast.success("Login Success!")
            },
            onError(ctx) {
                toast.error(ctx.error.message)
            },
        }


        )
    }
    const isPending = form.formState.isSubmitting

    return (
        <div className="flex flex-col gap-6">
            <Card>
                <CardHeader className="text-center">
                    <CardTitle>
                        Welcome back
                    </CardTitle>
                    <CardDescription>
                        Login to continue
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <Form {...form}>
                        <form onSubmit={form.handleSubmit(onSubmit)}>
                            <div className="grid gap-6">
                                <div className="flex flex-col gap-4">
                                    <Button variant={'outline'} className="w-full" type="button" disabled={isPending}>Continue with Github</Button>
                                    <Button variant={'outline'} className="w-full" type="button" disabled={isPending}>Continue with Google</Button>
                                    <div className="grid gap-6"
                                    >
                                        <FormField control={form.control} name="email" render={({ field, fieldState }) => (
                                            <FormItem>
                                                <FormLabel>Email</FormLabel>
                                                <FormControl>
                                                    <Input className={'outline-none border p-1 rounded-md'} type="email" placeholder="m@example.com" {...field} />
                                                </FormControl>
                                                <FormMessage className="text-red-500" />
                                            </FormItem>
                                        )} />
                                        <FormField control={form.control} name="password" render={({ field, fieldState }) => (
                                            <FormItem>
                                                <FormLabel>Password</FormLabel>
                                                <FormControl>
                                                    <Input className={'outline-none border p-1 rounded-md'} type="password" placeholder="********" {...field} />
                                                </FormControl>
                                                <FormMessage className="text-red-500" />
                                            </FormItem>
                                        )} />
                                        <Button type="submit" className="w-full" disabled={isPending}>Login</Button>
                                    </div>
                                    <div className="text-center text-sm">
                                        Don&apos;t have an account?{" "}

                                        <Link href={"/signup"} className="underline underline-4">Sign Up</Link>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </Form>
                </CardContent>

            </Card>
        </div>
    )
}