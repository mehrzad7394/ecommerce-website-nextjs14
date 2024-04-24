import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/header/Header";
import Providers from "@/components/Providers";
import DrawerButton from "@/components/DrawerButton";
import Sidebar from "@/components/Sidebar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Next Ecommerce App",
  description: "Modern Ecommerce website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
    <body className={inter.className}>
      <Providers>
        <div className="drawer">
          <DrawerButton />
          <div className="drawer-content">
            {/* Page content here */}
            <div className="min-h-screen flex flex-col">
              <Header />
              {children}
              <footer className="footer footer-center p-4 bg-base-300 text-base-content">
                <p>
                  Copyright © 2023 - All right reserved by{' '}
                  {process.env.NEXT_PUBLIC_APP_NAME || 'Next Shop'}
                </p>
              </footer>
            </div>
          </div>
          <div className="drawer-side z-20">
            <label
              htmlFor="my-drawer"
              aria-label="close sidebar"
              className="drawer-overlay"
            ></label>
            <Sidebar />
          </div>
        </div>
      </Providers>
    </body>
  </html>
  );
}
