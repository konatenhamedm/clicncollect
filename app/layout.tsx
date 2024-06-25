import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import Header from "@/components/headers/Header";
import Footer from "@/components/footers/Footer";
//const roboto = Roboto({ weight: "400", subsets: ["latin"] });
const roboto = Roboto({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "ONCECI",
  description: "Plateform de demande documents administratifs",
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
        <div className="container  mx-auto bg-[#fbfff8]  w-[80%]  border-4 ">
          <div className="text-neutral-800  relative overflow-hidden flex flex-col justify-around w-full   bg-[#fbfff8]  px-4">
            {children}
          </div>

          <Footer />
        </div>
      </body>
    </html>
  );
}
