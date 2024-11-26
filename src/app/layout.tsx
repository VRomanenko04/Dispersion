import type { Metadata } from "next";
import "@/styles/globals.scss";
import '@/app/firebase';
import Analytics from "@/components/user/Analytics";

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
      <head>
        <Analytics />
      </head>
      <body>{children}</body>
    </html>
  );
}