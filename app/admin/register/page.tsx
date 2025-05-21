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

const Page = () => {
    return (
        <div className="flex justify-center items-center min-h-screen">
            <Card className="w-full max-w-md min-w-[425px]">
                <CardHeader className="space-y-1">
                    <div className="flex justify-center mb-4">
                        <Logo size="large" />
                    </div>
                    <CardTitle className="text-2xl text-center">Inscription</CardTitle>
                    <CardDescription className="text-center">
                        Espace reservé aux agents
                    </CardDescription>
                </CardHeader>

                <CardContent><RegisterForm /></CardContent>

                <CardFooter className="flex justify-center">
                    <Link href={"/admin"} className="text-gray-500">
                        Déjà inscrit ? Connexion
                    </Link>
                </CardFooter>
            </Card>
        </div>
    );
};

export default Page;
