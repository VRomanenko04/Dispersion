import "@/styles/globals.scss";
import '@/app/firebase';
import Header from "@/components/admin/Header/Header";


export default function AdminLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body>
                <Header />
                {children}
            </body>
        </html>
    );
}