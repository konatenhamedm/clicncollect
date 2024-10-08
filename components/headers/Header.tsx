"use client";
import Image from "next/image";
import React, { useEffect, useRef } from "react";
import { useSearch } from "../context/SearchContext";

function Header() {
  const toggleOpenRef = useRef<HTMLButtonElement | null>(null);
  const toggleCloseRef = useRef<HTMLButtonElement | null>(null);
  const collapseMenuRef = useRef<HTMLDivElement | null>(null);

  const { setSearchTerm } = useSearch();

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  useEffect(() => {
    const toggleOpen = toggleOpenRef.current;
    const toggleClose = toggleCloseRef.current;
    const collapseMenu = collapseMenuRef.current;

    const handleClick = () => {
      if (collapseMenu) {
        collapseMenu.style.display =
          collapseMenu.style.display === "block" ? "none" : "block";
      }
    };

    if (toggleOpen && toggleClose) {
      toggleOpen.addEventListener("click", handleClick);
      toggleClose.addEventListener("click", handleClick);
    }

    return () => {
      if (toggleOpen && toggleClose) {
        toggleOpen.removeEventListener("click", handleClick);
        toggleClose.removeEventListener("click", handleClick);
      }
    };
  }, []);

  return (
    <header className="flex w-full bg-white font-[sans-serif] min-h-[80px] tracking-wide left-0 right-0 z-40 fixed top-0">
      <div className="w-full mx-auto sm:px-8 px-6 border-b-2 border-b-blue py-4 top-0 border-t-2 border-r-2 border-l-2 border-t-gray-200 border-r-gray-200 border-l-gray-200">
        <div className="flex flex-wrap items-center lg:gap-y-2 gap-4 w-full">
          <a href="/" className="mr-4">
            <Image
              src="/logo2.jpg"
              alt="logo"
              width={200}
              height={200}
              className="w-[6rem] md:w-[16rem] "
            />
          </a>

          <div
            id="collapseMenu"
            ref={collapseMenuRef}
            className="lg:ml-10 max-lg:hidden lg:!block max-lg:before:fixed max-lg:before:bg-black max-lg:before:opacity-50 max-lg:before:inset-0 max-lg:before:z-50"
          >
            <button
              id="toggleClose"
              ref={toggleCloseRef}
              className="lg:hidden fixed top-2 right-4 z-[100] rounded-full bg-white p-3"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-4 fill-black"
                viewBox="0 0 320.591 320.591"
              >
                <path d="M30.391 318.583a30.37 30.37 0 0 1-21.56-7.288c-11.774-11.844-11.774-30.973 0-42.817L266.643 10.665c12.246-11.459 31.462-10.822 42.921 1.424 10.362 11.074 10.966 28.095 1.414 39.875L51.647 311.295a30.366 30.366 0 0 1-21.256 7.288z"></path>
                <path d="M287.9 318.583a30.37 30.37 0 0 1-21.257-8.806L8.83 51.963C-2.078 39.225-.595 20.055 12.143 9.146c11.369-9.736 28.136-9.736 39.504 0l259.331 257.813c12.243 11.462 12.876 30.679 1.414 42.922-.456.487-.927.958-1.414 1.414a30.368 30.368 0 0 1-23.078 7.288z"></path>
              </svg>
            </button>
            <ul className="lg:flex lg:gap-x-3 max-lg:space-y-3 max-lg:fixed max-lg:bg-white max-lg:w-1/2 max-lg:min-w-[300px] max-lg:top-0 max-lg:left-0 max-lg:p-6 max-lg:h-full max-lg:shadow-md max-lg:overflow-auto z-50"></ul>
          </div>

          <div className="flex gap-x-6 gap-y-4 ml-auto justify-end">
            <div className="flex border-2 focus-within:border-gray-400 rounded-lg px-6 py-2 overflow-hidden max-w-52 max-lg:hidden">
              {/* <div className="flex border-2 focus-within:border-gray-400 rounded-full px-6 py-3 overflow-hidden max-w-52 max-lg:hidden"> */}
              {/*  <input
                type="text"
                placeholder="Recherche..."
                onChange={handleSearchChange}
                className="w-full text-sm bg-transparent outline-none pr-2"
              /> */}
              <input
                className="peer h-full w-full outline-none text-sm text-gray-700 pr-2"
                type="text"
                id="search"
                onChange={handleSearchChange}
                placeholder="Recherche.."
              />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 192.904 192.904"
                width="16px"
                className="cursor-pointer fill-gray-600"
              >
                <path d="m190.707 180.101-47.078-47.077c11.702-14.072 18.752-32.142 18.752-51.831C162.381 36.423 125.959 0 81.191 0 36.422 0 0 36.423 0 81.193c0 44.767 36.422 81.187 81.191 81.187 19.688 0 37.759-7.049 51.831-18.751l47.079 47.078a7.474 7.474 0 0 0 5.303 2.197 7.498 7.498 0 0 0 5.303-12.803zM15 81.193C15 44.694 44.693 15 81.191 15c36.497 0 66.189 29.694 66.189 66.193 0 36.496-29.692 66.187-66.189 66.187C44.693 147.38 15 117.689 15 81.193z"></path>
              </svg>
            </div>
            <div className="flex items-center space-x-4 ">
              <span className="flex flex-col items-center text-black text-[12px] ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-5 h-5 cursor-pointer"
                >
                  <path d="M5.25 9a6.75 6.75 0 0113.5 0v.75c0 2.123.8 4.057 2.118 5.52a.75.75 0 01-.297 1.206c-1.544.57-3.16.99-4.831 1.243a3.75 3.75 0 11-7.48 0 24.585 24.585 0 01-4.831-1.244.75.75 0 01-.298-1.205A8.217 8.217 0 005.25 9.75V9zm4.502 8.9a2.25 2.25 0 104.496 0 25.057 25.057 0 01-4.496 0z" />
                </svg>
                <span className="mt-1">Notifications</span>
              </span>
              <a
                href="#"
                className="flex flex-col items-center text-black text-[12px]  "
              >
                <Image
                  src="/connexion.png"
                  alt="logo"
                  width={24}
                  height={24}
                  className="w-5 h-5"
                />
                <span className="mt-1">Se connecter</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
