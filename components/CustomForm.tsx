"use client";
import { Button, buttonVariants } from "@/components/ui/button";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Eye, EyeOff } from "lucide-react";
import { useState } from "react";
import { FieldValues, UseFormReturn, Path } from "react-hook-form";

function CustomForm<T extends FieldValues>({
    Passedform,
    submit,
    isLoading,
    authType,
}: {
    Passedform: UseFormReturn<T>;
    submit: (values: T) => void | Promise<void>;
    isLoading: boolean;
    authType: "login" | "register";
}) {
    const [showPassword, setShowPassword] = useState(false);

    return (
        <Form {...Passedform}>
            <form
                onSubmit={Passedform.handleSubmit(submit, (errors) => {
                    console.error("Form validation errors", errors);
                })}
                className="space-y-4"
            >
                {authType === "register" && (
                    <>
                        <FormField
                            control={Passedform.control}
                            name={"name" as Path<T>}
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Nom</FormLabel>
                                    <FormControl>
                                        <Input
                                            type="text"
                                            placeholder="Votre nom"
                                            autoComplete="name"
                                            disabled={isLoading}
                                            {...field}
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <div className="hidden">
                            <FormField
                                control={Passedform.control}
                                name={"role" as Path<T>}
                                render={({ field }) => (
                                    <FormItem>
                                        <FormControl>
                                            <Input
                                                type="hidden"
                                                disabled={isLoading}
                                                {...field}
                                                // value="agent"
                                                defaultValue={"agent"}
                                            />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                        </div>
                    </>
                )}

                <FormField
                    control={Passedform.control}
                    name={"email" as Path<T>}
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Email</FormLabel>
                            <FormControl>
                                <Input
                                    type="email"
                                    placeholder="exemple@email.com"
                                    autoComplete="email"
                                    disabled={isLoading}
                                    {...field}
                                />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                <FormField
                    control={Passedform.control}
                    name={"password" as Path<T>}
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Mot de passe</FormLabel>
                            <FormControl>
                                <div className="relative">
                                    <Input
                                        type={
                                            showPassword ? "text" : "password"
                                        }
                                        placeholder="••••••••"
                                        autoComplete="new-password"
                                        disabled={isLoading}
                                        {...field}
                                    />
                                    <Button
                                        type="button"
                                        variant="ghost"
                                        size="sm"
                                        className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent"
                                        onClick={() =>
                                            setShowPassword(!showPassword)
                                        }
                                        disabled={isLoading}
                                    >
                                        {showPassword ? (
                                            <EyeOff className="h-4 w-4" />
                                        ) : (
                                            <Eye className="h-4 w-4" />
                                        )}
                                    </Button>
                                </div>
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                <Input
                    type="submit"
                    className={`${buttonVariants({
                        variant: "secondary",
                    })}`}
                    disabled={isLoading}
                    value={isLoading ? "...." : "Envoyer"}
                />
            </form>
        </Form>
    );
}

export default CustomForm;
