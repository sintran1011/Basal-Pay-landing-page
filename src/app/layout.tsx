import Footer from "@/features/components/Footer";
import Header from "@/features/components/Header";
import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  style: "normal",
});

export const metadata: Metadata = {
  title: "Basal Pay",
  description: "Basal Payment Service",
  icons: {
    icon: "/logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      {/* <head>
        <link rel="icon" href="/favicon.ico" />
      </head> */}
      <body className={`${poppins.className}  antialiased`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
