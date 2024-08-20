import "@/styles/globals.scss";
import '@/app/firebase';
import Header from "@/components/admin/Header/Header";
import NavBar from "@/components/admin/NavBar/NavBar";
import { Inter } from "next/font/google";

const InterClass = Inter({subsets: ["latin"], weight: ["400", "500", "600", "700"] });

export default function AdminLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={InterClass.className}>
                <Header />
                <main style={{
                    display: 'flex',
                    flexDirection: 'row',
                    gap: 20,
                    backgroundColor: '#F3F3F3',
                    height: 'calc(100vh - 60px)',
                    overflow: 'hidden'
                }}>
                    <NavBar />
                    {children}
                </main>
            </body>
        </html>
    );
}