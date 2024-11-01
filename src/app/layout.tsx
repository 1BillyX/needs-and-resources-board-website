import type { Metadata } from "next";
import "../styles/font.css";
import "./globals.css";

export const metadata: Metadata = {
    title: "Needs & Resources Board",
    description: "A forum for Unconditional Giving and Unconditional Receiving"
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body>
                {children}
            </body>
        </html>
    );
}
