import { PropsWithChildren } from "react";
import { Footer } from "../components/shared/Footer";
import { Navbar } from "../components/shared/Navbar";
import { cn } from "../lib/utils";
import RootLayout from "./RootLayout";

export default function GuestLayout({
    children,
    className = "",
}: PropsWithChildren<{ className?: string }>) {
    return (
        <RootLayout>
            <div className="flex h-screen flex-col items-center">
                <Navbar />
                <main className={cn("bg-yellow-50 w-full h-full", className)}>
                    {children}
                </main>
                <Footer />
            </div>
        </RootLayout>
    );
}
