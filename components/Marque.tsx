"use client";
import React, { useEffect, useState } from "react";
import CardMarque from "./CardMarque";
import { axiosAuthapi, BASE_SITE } from "@/lib/axios";
import { marque } from "@/modeles/Marque";
import MarqueSkeleton from "./skeletons/MarqueSkeleton";
import { useSearch } from "./context/SearchContext"; // Importez le contexte de recherche

function Marque() {
  const [marques, setMarques] = useState<marque[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const { searchTerm } = useSearch(); // Obtenez le terme de recherche depuis le contexte

  useEffect(() => {
    axiosAuthapi
      .get("/marque")
      .then((res) => {
        setMarques(res.data.data);
        setIsLoading(false);
      })
      .catch((err) => {
        console.error(err.message);
        setIsLoading(false);
      });
  }, []);

  // Filtrer les marques en fonction du terme de recherche
  const filteredMarques = marques.filter((marque) =>
    marque.libelle.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="font-[sans-serif] bg-white">
      <div className="py-4 px-2 mx-auto w-full">
        {isLoading ? (
          <MarqueSkeleton nombre={12} />
        ) : (
          <>
            <div className="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-5 max-xl:gap-4 md:gap-6  gap-4">
              {filteredMarques.map((marque, index) => (
                <CardMarque
                  key={marque.id}
                  id={marque.id}
                  image={`${BASE_SITE}${marque.photo.nomComplet}`}
                  nom={marque.libelle}
                  lien={marque.lien}
                />
              ))}
            </div>
            {filteredMarques.length === 0 && (
              <div className="flex flex-col justify-center items-center">
                <img
                  src="/assets/search_notfound.svg"
                  alt="Empty illustration"
                />
                <h1 className="text-2xl font-bold">Aucun résultat</h1>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
}

export default Marque;
