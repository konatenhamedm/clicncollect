import Image from "next/image";
import React from "react";

function Footer() {
  return (
    <>
      <footer className="font-sans tracking-wide bg-[#213343] py-10 px-10">
        <div className="flex flex-col sm:grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h4 className="text-[#FFA726] font-semibold text-lg mb-6">
              BESOIN D'AIDE?
            </h4>
            <ul className="space-y-5">
              <li>
                <a
                  href="#"
                  className="hover:text-[#FFA726] text-gray-300 text-[15px] transition-all"
                >
                  Aide & FAQ
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-[#FFA726] text-gray-300 text-[15px] transition-all"
                >
                  Contactez-nous
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-[#FFA726] font-semibold text-lg mb-6">
              A PROPOS
            </h4>
            <ul className="space-y-5">
              <li>
                <a
                  href="#"
                  className="hover:text-[#FFA726] text-gray-300 text-[15px] transition-all"
                >
                  Qui sommes-nous
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-[#FFA726] text-gray-300 text-[15px] transition-all"
                >
                  Travailler chez ClicnCollect
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-[#FFA726] text-gray-300 text-[15px] transition-all"
                >
                  Conditions Générales d'Utilisation Cookies
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-[#FFA726] font-semibold text-lg mb-6">
              LIENS UTILES
            </h4>
            <ul className="space-y-5">
              <li>
                <a
                  href="#"
                  className="hover:text-[#FFA726] text-gray-300 text-[15px] transition-all"
                >
                  Suivre sa commande
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-[#FFA726] text-gray-300 text-[15px] transition-all"
                >
                  Expédition et livraison
                </a>
              </li>
            </ul>
          </div>
          <div>
            <div className="flex items-center space-x-4">
              <Image src="/logo_.png" width={60} height={60} alt="logo" />
              <div className="text-white">
                Téléchargez notre application gratuite
              </div>
            </div>
            <ul className="space-y-5 py-6">
              <li>
                <a
                  href="#"
                  className="hover:text-[#FFA726] text-gray-300 text-[15px] transition-all"
                >
                  <Image
                    src="/images.png"
                    width={300}
                    height={150}
                    alt="logo"
                  />
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t text-center border-[#6b5f5f] pt-8 mt-8">
          <p className="text-gray-300 text-[15px]">
            Copyright © 2024
            <a
              href="https://readymadeui.com/"
              target="_blank"
              className="hover:underline mx-1"
            >
              clicnCollect
            </a>
            Tous droits réservés.
          </p>
        </div>
      </footer>
    </>
  );
}

export default Footer;
