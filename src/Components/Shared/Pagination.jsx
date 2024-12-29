"use client";

import { ArrowLeftIcon, ArrowRightIcon } from "@heroicons/react/24/outline";
import { generatePagination } from "Functions/generatePagination";

import Link from "next/link";

import { usePathname, useSearchParams } from "next/navigation";

export default function Pagination({ totalPages }) {
    // const totalPages = Math.ceil(Number(length) / itemsPerPage);
    const pathname = usePathname();
    const searchParams = useSearchParams();
    const currentPage = Number(searchParams.get("page")) || 1;
    const itemsPerPage = Number(searchParams.get("limit")) || 3;

    const createPageURL = (pageNumber) => {
        const params = new URLSearchParams(searchParams);
        params.set("page", pageNumber.toString());
        params.set("limit", itemsPerPage.toString());
        return `${pathname}?${params.toString()}`;
    };

    const allPages = generatePagination(currentPage, totalPages);

    return (
        <div className="inline-flex">
            <PaginationArrow
                direction="right"
                href={createPageURL(currentPage - 1)}
                isDisabled={currentPage <= 1}
            />

            <div className="flex -space-x-px">
                {allPages.map((page, index) => {
                    // let position: "first" | "last" | "single" | "middle" | undefined;
                    let position;
                    if (index === 0) position = "first";
                    if (index === allPages.length - 1) position = "last";
                    if (allPages.length === 1) position = "single";
                    if (page === "...") position = "middle";

                    return (
                        <PaginationNumber
                            key={`${page}-${index}`}
                            href={createPageURL(page)}
                            page={page}
                            position={position}
                            isActive={currentPage === page}
                        />
                    );
                })}
            </div>

            <PaginationArrow
                direction="left"
                href={createPageURL(currentPage + 1)}
                isDisabled={currentPage >= totalPages}
            />
        </div>
    );
}

// position?: "first" | "last" | "middle" | "single",

function PaginationNumber({ page, href, isActive, position }) {
    const className = `flex h-10 w-10 items-center justify-center text-sm border border-secondary-400 text-secondary-400 ${(position === "first" || position === "single") && "rounded-s-md"} ${(position === "last" || position === "single") && "rounded-e-md"} ${isActive && "z-10 bg-primary-900 !border-primary-900 text-white"}${(!isActive && position !== "middle") && "hover:bg-secondary-200"} ${position === "middle" && "text-secondary-300"}`;

    return isActive || position === "middle" ? (
        <div className={className}>{page}</div>
    ) : (
        <Link href={href} className={className}>
            {page}
        </Link>
    );
}

function PaginationArrow({ href, direction, isDisabled }) {
    const className = `flex h-10 w-10 items-center justify-center rounded-md border border-secondary-400 text-secondary-400 ${isDisabled ? "pointer-events-none text-secondary-200 !border-secondary-200" : "hover:bg-secondary-200"}${direction === "left" ? "ms-2 md:ms-4" : "me-2 md:me-4"}`;

    const icon =
        direction === "left" ? (
            <ArrowLeftIcon className="w-4" />
        ) : (
            <ArrowRightIcon className="w-4" />
        );

    return isDisabled ? (
        <div className={className}>{icon}</div>
    ) : (
        <Link className={className} href={href}>
            {icon}
        </Link>
    );
}
