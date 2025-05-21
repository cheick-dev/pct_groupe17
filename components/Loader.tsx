import { LoaderCircle } from "lucide-react";

export const Loader = () => {
    return (
        <div className="absolute inset-0 bg-primary-foreground opacity-50 z-0 flex items-center justify-center">
            <LoaderCircle className="animate-spin h-16 w-16 text-primary z-10" />
        </div>
    );
};