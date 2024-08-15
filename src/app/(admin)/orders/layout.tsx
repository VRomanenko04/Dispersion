import "@/styles/globals.scss";
import '@/app/firebase';
import { Be_Vietnam_Pro } from "next/font/google";
import OrdersNavBar from "@/components/admin/OrdersNavBar/OrdersNavBar";

const beVietnamPro = Be_Vietnam_Pro({subsets: ["latin"], weight: ["400", "500", "600", "700"] });

export default function AdminLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <main className={beVietnamPro.className}>
            <OrdersNavBar />
            {children}
        </main>
    );
}