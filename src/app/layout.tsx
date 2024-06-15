import type { Metadata } from "next";
import { Be_Vietnam_Pro } from "next/font/google";
import "@/styles/globals.scss";

const beVietnamPro = Be_Vietnam_Pro({subsets: ["latin"], weight: ["400", "600", "700"] });

export const metadata: Metadata = {
  title: "Dispersion digital agency",
  description: "Dispersion specializes in developing websites of varying complexity: landing, e-commerce, web applications. As well as developing brand book designs, social networks, web design and much more.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={beVietnamPro.className}>{children}</body>
    </html>
  );
}