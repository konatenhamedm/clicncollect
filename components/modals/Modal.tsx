import { useRouter } from "next/navigation";
import React, { useEffect } from "react";

interface ModalDynamiqueProps {
  show: any;
  onClose: any;
  content: React.ReactElement;
  title?: string;
  size: string;
  footer?: React.ReactElement;
  actionLabel?: string;
  onCloseExiste?: boolean;
  gradient?: boolean;
  errorServeur?: boolean;
}

const Modal: React.FC<ModalDynamiqueProps> = ({
  show,
  onClose,
  content,
  title,
  size,
  footer,
  actionLabel,
  onCloseExiste,
  gradient,
  errorServeur,
}) => {
  useEffect(() => {
    if (show) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [show]);

  if (!show) {
    return null;
  }
  const router = useRouter();
  return (
    <>
      <div
        className="
          justify-center 
          items-center 
          flex 
          overflow-x-hidden 
          overflow-y-auto 
          fixed 
          inset-0 
          z-50 
          outline-none 
          focus:outline-none
          bg-transparent
        "
      >
        <div
          className={`modal-box w-full max-w-md mx-4 sm:mx-auto border-2 border-black cursor-pointer px-4 ${
            gradient
              ? "bg-gradient-to-r from-[#75d4c3] to-[#f1a730]"
              : "bg-white"
          }`}
        >
          <form className="  px-3 pb-3">
            {onCloseExiste && (
              <div
                onClick={onClose}
                className="btn btn-sm btn-circle btn-ghost absolute top-3 right-3 font-bold text-white"
              >
                ✕
              </div>
            )}
          </form>
          <h3
            className={`font-bold text-lg flex justify-center mt-3 ${
              gradient ? "text-white" : "text-black"
            }`}
          >
            {title}
          </h3>
          <div className="relative flex py-3.5 items-center">
            <div className="flex-grow "></div>
            <div className="flex-grow "></div>
          </div>

          <div className="content justify-center">
            {errorServeur ? (
              <div
                role="alert"
                className="relative flex w-full px-4 py-4 text-base text-gray-900 rounded-lg font-regular bg-gray-900/10"
              >
                <div className="shrink-0">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-8 h-8 text-red-500"
                  >
                    <path
                      fillRule="evenodd"
                      d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm8.706-1.442c1.146-.573 2.437.463 2.126 1.706l-.709 2.836.042-.02a.75.75 0 01.67 1.34l-.04.022c-1.147.573-2.438-.463-2.127-1.706l.71-2.836-.042.02a.75.75 0 11-.671-1.34l.041-.022zM12 9a.75.75 0 100-1.5.75.75 0 000 1.5z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </div>
                <div className="ml-3 mr-12">
                  <p className="block font-sans text-base antialiased font-medium leading-relaxed text-inherit">
                    Une erreur est survenue, veuillez réessayer
                  </p>
                </div>
              </div>
            ) : (
              content
            )}
            {actionLabel && (
              <div className="relative flex py-1 items-center">
                <div className="flex-grow "></div>
                <div className="flex-grow "></div>
              </div>
            )}

            <div className="grid grid-cols-3 gap-2 justify-items-end pb-4">
              <div></div>
              <div></div>
              <div className="pt-4">
                {actionLabel && (
                  <button
                    onClick={() => onClose(true)}
                    type="button"
                    className="bg-black text-white font-bold py-2 px-4 rounded-md hover:bg-[#95ebdb] transition ease-in-out duration-150"
                  >
                    {actionLabel}
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;
