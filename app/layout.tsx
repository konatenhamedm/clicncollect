import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Header from "@/components/headers/Header";
import Footer from "@/components/footers/Footer";
import { SearchProvider } from "../components/context/SearchContext";

//const roboto = Roboto({ weight: "400", subsets: ["latin"] });
const poppins = Poppins({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title:
    "ClicnCollect - Marketplace : Retrait en Boutique et Livraison Partout en Côte d’Ivoire",
  description:
    "ClicnCollect, le site d’E-Commerce qui facilite vos ventes et achats en ligne partout en Côte d'Ivoire. Accédez aussi à vos marques préférées en France et faites-vous livrer directement en Côte d'Ivoire",
  icons: {
    icon: "/favicon.ico", // Chemin vers le favicon
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <SearchProvider>
          <Header />
          <div className="  mx-auto bg-white    border-2 border-gray-200 ">
            <div className="text-neutral-800  relative overflow-hidden flex flex-col justify-around w-full   bg-white  px-4">
              {children}
            </div>

            <Footer />
          </div>
        </SearchProvider>
      </body>
    </html>
  );
}
