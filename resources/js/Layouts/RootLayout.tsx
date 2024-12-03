import { ThemeProvider } from "next-themes";
import { PropsWithChildren } from "react";
import { Toaster } from "../components/ui/sonner";

export default function RootLayout({ children }: PropsWithChildren<{}>) {
    return (
        <body>
            <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
                <main>{children}</main>
                <Toaster position="top-right" richColors />
            </ThemeProvider>
        </body>
    );
}
