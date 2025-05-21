import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Logo } from "@/components/Logo";
import Link from "next/link";

import RegisterForm from "./registerForm";
import { getSession } from "@/server/sessions/citoyen_session";
import { redirect } from "next/navigation";

export default async function SignUpForm() {
    const session = await getSession();
    if (session) redirect("/");
    return (
        <div className="flex justify-center items-center min-h-[80vh]">
            <Card className="min-w-[425px] max-w-md">
                <CardHeader className="space-y-1">
                    <div className="flex justify-center mb-4">
                        <Logo size="large" />
                    </div>
                    <CardTitle className="text-2xl text-center">
                        Inscription
                    </CardTitle>
                    <CardDescription className="text-center">
                        Inscrivez vous pour accéder à votre espace
                    </CardDescription>
                </CardHeader>

                <CardContent>
                    <RegisterForm />
                </CardContent>

                <CardFooter className="flex justify-center">
                    <Link href={"/login"} className="text-gray-500 text-sm">
                        Déjà inscrit ? Se connecter
                    </Link>
                </CardFooter>
            </Card>
        </div>
    );
}
