import React, { FC, useEffect, useState } from "react";

interface ModalProps {
  isVisible: boolean;
  onClose: () => void;
  children?: React.ReactNode;
}

const Modal: FC<ModalProps> = ({ isVisible, onClose, children }) => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;

  return (
    <div
      className={`fixed inset-0 bg-black bg-opacity-25 backdrop-blur-xl flex justify-center items-center transition-opacity p-6 ${
        isVisible ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
      onClick={() => onClose()}
    >
      <div className="w-[600px] relative">
        <div
          className={`bg-[#1E1E1F] p-9 rounded-xl transition-transform transform ${
            isVisible ? "scale-100" : "scale-95"
          }`}
        >
          <svg
            aria-hidden="true"
            className="text-white text-3xl absolute top-2 right-2 cursor-pointer"
            fill="none"
            focusable="false"
            height="1em"
            role="presentation"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="3"
            viewBox="0 0 24 24"
            width="1em"
            onClick={() => onClose()}
          >
            <path d="M18 6L6 18M6 6l12 12"></path>
          </svg>

          {children}
        </div>
      </div>
    </div>
  );
};

export default Modal;
