import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Sidebar } from "@/components/layout/Sidebar";

export const metadata: Metadata = {
  title: "EasyPay University - Merchant Training Platform",
  description: "Comprehensive training platform for EasyPay Finance merchant partners",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        <div className="min-h-screen">
          <Header />
          <div className="flex pt-16">
            <Sidebar />
            <main className="flex-1 ml-0 lg:ml-64 p-6 lg:p-8 min-h-screen">
              {children}
            </main>
          </div>
        </div>
      </body>
    </html>
  );
}
