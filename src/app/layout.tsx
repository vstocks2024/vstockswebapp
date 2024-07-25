import type { Metadata } from "next";
import { Inter, Poppins, Montserrat, Roboto } from "next/font/google";
import UserProvider from "../context/user";
import HomeProvider from "../context/home";
import SortProvider from "../context/sort";
import ModalProvider from "../context/modal";
import FilterProvider from "../context/filter";

import "./globals.css";

const inter = Inter({ subsets: ["latin"] });
const poppins600 = Poppins({
  subsets: ["latin"],
  variable: "--font-poppins600",
  weight: "600",
  style: "normal",
});
const poppins400 = Poppins({
  subsets: ["latin"],
  variable: "--font-poppins400",
  weight: "400",
  style: "normal",
});
const montserrat400 = Montserrat({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-montserrat400",
  style: "normal",
});
const roboto500 = Roboto({
  weight: "500",
  subsets: ["latin"],
  variable: "--font-roboto500",
  style: "normal",
});

export const metadata: Metadata = {
  title: "VSTOCKS",
  description: "VSTOCKS",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <UserProvider>
        <HomeProvider>
          <FilterProvider>
            <SortProvider>
              <ModalProvider>
                <body className={inter.className}>{children}</body>
              </ModalProvider>
            </SortProvider>
          </FilterProvider>
        </HomeProvider>
      </UserProvider>
    </html>
  );
}
