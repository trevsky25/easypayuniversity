import type { Metadata, Viewport } from "next";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Sidebar } from "@/components/layout/Sidebar";
import { MobileMenuProvider } from "@/components/layout/MobileMenuProvider";
import { ErrorBoundary } from "@/components/ErrorBoundary";

export const metadata: Metadata = {
  title: "EasyPay University - Merchant Training Platform",
  description: "Comprehensive training platform for EasyPay Finance merchant partners",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        <ErrorBoundary>
          <MobileMenuProvider>
            <div className="min-h-screen">
              <Header />
              <div className="flex pt-16">
                <Sidebar />
                <main className="flex-1 ml-0 lg:ml-64 p-4 sm:p-6 lg:p-8 min-h-screen overflow-x-hidden">
                  <ErrorBoundary>
                    {children}
                  </ErrorBoundary>
                </main>
              </div>
            </div>
          </MobileMenuProvider>
        </ErrorBoundary>
      </body>
    </html>
  );
}
