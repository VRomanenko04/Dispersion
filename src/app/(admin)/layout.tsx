import "@/styles/globals.scss";
import '@/app/firebase';
import Header from "@/components/admin/Header/Header";
import NavBar from "@/components/admin/NavBar/NavBar";
import { Be_Vietnam_Pro } from "next/font/google";

const beVietnamPro = Be_Vietnam_Pro({subsets: ["latin"], weight: ["400", "500", "600", "700"] });

export default function AdminLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={beVietnamPro.className}>
                <Header />
                <main style={{
                    display: 'flex',
                    flexDirection: 'row',
                    gap: 20,
                    backgroundColor: '#F3F3F3',
                    height: '100vh',
                    overflow: 'hidden'
                }}>
                    <NavBar />
                    {children}
                </main>
            </body>
        </html>
    );
}