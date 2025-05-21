import { ReactNode } from "react";
import "../globals.css";

export default async function DashboardLayout({
    children,
}: {
    children: ReactNode;
}) {
    // const session = await getSession();
    // console.log(session);

    return (
        <html lang="fr">
            <body>{children}</body>
        </html>
    );
}
