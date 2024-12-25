"use client"

import { createPortal } from "react-dom"

function Drawer({ open, onClose, children }) {
    return createPortal(
        <>
            <div
                className={`backdrop-blur-sm fixed inset-0 w-full h-screen bg-secondary-800 bg-opacity-30 ${open ? "block" : "pointer-events-none hidden"}`}
                onClick={onClose}
            >
            </div>
            <div
                className={`fixed top-0 start-0 w-[250px] h-full transition-transforms transforms duration-300 ${open ? "translate-x-0" : "translate-x-full"}`}
                onClick={(event) => {
                    event.preventDefault();
                    event.stopPropagation();
                }}
            >
                <div className="bg-secondary-0 max-h-full overflow-y-auto">
                    {children}
                </div>
            </div>
        </>,
        document.body
    );
}
export default Drawer
