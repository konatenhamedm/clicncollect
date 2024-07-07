import React from "react";

function Page() {
  return (
    <>
      <div className=" flex pb-4 py-7 mt-[45px] bg-[#F5F5F5] items-center justify-center">
        <div className="pt-4  items-center justify-center pb-4">
          <div className="bg-white max-w-2xl shadow overflow-hidden sm:rounded-lg pb-4 items-center justify-center">
            <div className="px-4 py-5 sm:px-6 items-center justify-center">
              <h3 className="text-xl leading-6 font-normal text-red-500 items-center justify-center text-center">
                Votre demande a bien été reçue
              </h3>
              {/* <p className="mt-1 max-w-2xl text-sm text-gray-500">
              Details and informations about user.
            </p> */}
            </div>
            <div className="border-t border-gray-200">
              <dl>
                <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-1 sm:gap-4 sm:px-6">
                  <dt className="text-xl font-normal text-black sm:col-span-2">
                    <p className="mt-1 max-w-2xl text-xl text-black justify-center text-justify">
                      {/*  Le site ClicnCollect s’occupe{" "} */}
                      <span className="font-normal">
                        {" "}
                        Cher client, votre demande a bien été reçue. Vous
                        recevrez un message sur votre espace.
                      </span>
                    </p>
                  </dt>
                </div>
                <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-1 sm:gap-4 sm:px-6 ">
                  <dt className="text-lg font-bold text-black sm:col-span-2 border-dashed border-2 border-blue-400 px-2">
                    <p className="mt-1 max-w-2xl text-xl text-black justify-center text-center">
                      Veuillez saisir notre adresse ci-dessous comme adresse de
                      livraison à Paris.{" "}
                    </p>
                  </dt>
                </div>
                <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-1 sm:gap-4 sm:px-6  text-center">
                  <dt className="text-lg font-bold text-black border-2 px-2">
                    <p className="mt-1 max-w-2xl text-lg text-black">
                      Code Postal: 75019,
                      <br /> Adresse: 54 Rue Riquet <br /> Complément d’adresse:
                      Appt 0625 Chez KONE MEVALY <br /> Contact: +33 6 29 77 03
                      51
                    </p>
                  </dt>
                </div>

                <div className="bg-white px-0 py-5  sm:grid sm:grid-cols-5 sm:gap-2 sm:px-6 border-b-2 mt-[-70px]">
                  <dt className="text-lg font-normal text-black "></dt>
                  <dd className="font-normal text-lg  text-black sm:mt-0 sm:col-span-4">
                    <p className="font-extranormal">
                      Puis revenez sur cette page et cliquez sur continuer
                    </p>
                  </dd>
                </div>

                <div className="bg-white px-4 py-3 sm:grid sm:grid-cols-5 sm:gap-4 sm:px-6">
                  <dt className="text-sm font-medium text-gray-500 sm:col-span-4"></dt>
                  <dd className="mt-1 text-sm text-gray-900 sm:mt-0 items-end justify-end">
                    <button
                      className="bg-[#f1a730] text-white font-normal py-2 px-4 rounded-md  hover:bg-[#f1a730] hover:to-[#95ebdb] transition ease-in-out duration-150"
                      type="submit"
                    >
                      Continuer
                    </button>
                  </dd>
                </div>
                {/* <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500">Salary</dt>
                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                  $10,000
                </dd>
              </div>
              <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500">About</dt>
                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                  To get social media testimonials like these, keep your
                  customers engaged with your social media accounts by posting
                  regularly yourself
                </dd>
              </div> */}
              </dl>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Page;
