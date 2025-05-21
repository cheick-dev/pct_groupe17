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
import LoginForm from "./loginForm";
import { getSession } from "@/server/sessions/citoyen_session";



const Page = async () => {
    const session = await getSession()
    console.log(session);
    
    return (
        <div className="flex justify-center items-center min-h-[80vh]">
            <Card className="w-full max-w-md min-w-[425px]">
                <CardHeader className="space-y-1">
                    <div className="flex justify-center mb-4">
                        <Logo size="large" />
                    </div>
                    <CardTitle className="text-2xl text-center">
                        Connexion
                    </CardTitle>
                    <CardDescription className="text-center">
                        Connectez-vous pour accéder à votre espace
                    </CardDescription>
                </CardHeader>

                <CardContent>
                    <LoginForm />
                </CardContent>

                <CardFooter className="flex justify-center">
                    <Link href={"/register"} className="text-gray-500">
                        Pas encore inscrit ? Inscription
                    </Link>
                </CardFooter>
            </Card>
        </div>
    );
};

export default Page;
