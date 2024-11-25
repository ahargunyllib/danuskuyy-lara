import { PropsWithChildren } from "react";
import { Footer } from "../Components/Shared/Footer";
import { Navbar } from "../Components/Shared/Navbar";
import { cn } from "../lib/utils";

export function GuestLayout({
    children,
    className = "",
}: PropsWithChildren<{ className?: string }>) {
    return (
        <body className="flex h-screen flex-col items-center">
            <Navbar />
            <main className={cn("bg-yellow-50 w-full h-full", className)}>
                {children}
            </main>
            <Footer />
        </body>
    );
}
