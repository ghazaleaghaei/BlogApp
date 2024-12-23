"use client"

import useOutsideClick from "@/Hooks/useOutsideClick";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { createPortal } from "react-dom"

function Modal({ open, title, description, children, onClose }) {

    const ref = useOutsideClick(onClose)

    return (
        open &&
        createPortal(
            <div className="fixed top-0 end-0 backdrop-blur-sm w-full h-screen bg-secondary-800 bg-opacity-30 z-50">
                <div
                    className="fixed top-1/2 end-1/2 -translate-x-1/2 -translate-y-1/2 rounded-lg bg-secondary-0 p-4 shadow-lg transition-all duration-50 ease-out w-[calc(100vw-2rem)] md:max-w-lg max-h-[calc(100vh-2rem)] overflow-y-auto"
                    ref={ref}
                >
                    <div className="flex items-center justify-between border-b border-b-secondary-300 pb-2 mb-6">
                        <div>
                            <p className="text-secondary-700 font-bold text-base">
                                {title}
                            </p>
                            <p className="text-secondary-400 text-sm lg:text-base">
                                {description}
                            </p>
                        </div>
                        <button onClick={onClose}>
                            <XMarkIcon className="w-5 text-secondary-500" />
                        </button>
                    </div>
                    {children}
                </div>
            </div>,
            document.body
        )
    );
}
export default Modal
