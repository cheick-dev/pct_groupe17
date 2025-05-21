import { FC } from "react";
import { Logo } from "./Logo";

export const Footer: FC = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-gray-50 border-t">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <div className="md:flex md:items-center md:justify-between">
                    <div className="flex justify-center md:justify-start">
                        <Logo size="small" />
                    </div>
                    <div className="mt-8 md:mt-0 text-center md:text-right">
                        <p className="text-sm text-gray-500">
                            &copy; {currentYear} État Civil CI - République de
                            Côte d'Ivoire
                        </p>
                        <p className="text-xs text-gray-400 mt-1">
                            Tous droits réservés
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
};
