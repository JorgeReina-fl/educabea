import type { Metadata } from "next";
import "../globals.css";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import CookieBanner from "../../components/CookieBanner";

export const metadata: Metadata = {
    title: "Educabea | Maestra y Pedagoga en Elche",
    description: "Beatriz Olivares, maestra de infantil y primaria especializada en pedagogía terapéutica. Descubre recursos, técnicas de estudio y un blog para apoyar el desarrollo educativo.",
};

export default function WebsiteLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="es" suppressHydrationWarning>
            <head>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
                <link href="https://fonts.googleapis.com/css2?family=Pacifico&family=Poppins:wght@400;500;600&display=swap" rel="stylesheet" />
            </head>
            <body
                className={`antialiased font-sans flex flex-col min-h-screen bg-zinc-50`}
            >
                <Header />
                <main className="flex-grow">
                    {children}
                </main>
                <Footer />
                <CookieBanner />
            </body>
        </html>
    );
}
