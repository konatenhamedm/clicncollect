import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Header from "@/components/headers/Header";
import Footer from "@/components/footers/Footer";
//const roboto = Roboto({ weight: "400", subsets: ["latin"] });
const roboto = Poppins({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "CLICNCOLLECT",
  description: "Site ecommerce pour tous",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <Header />
        <div className="container  mx-auto bg-[#F5F5F5]    border-2 border-gray-200 ">
          <div className="text-neutral-800  relative overflow-hidden flex flex-col justify-around w-full   bg-[#F5F5F5]  px-4">
            {children}
          </div>

          <Footer />
        </div>
      </body>
    </html>
  );
}
