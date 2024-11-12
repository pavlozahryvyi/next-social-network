"use client";

import { usePathname, useSearchParams } from "next/navigation";
import {
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
  Pagination as PaginationUI,
} from "./ui/pagination.ui";
import { generatePagination } from "@/lib/utils";

export const Pagination = ({ totalPages }: { totalPages: number }) => {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const currentPage = Number(searchParams.get("page")) || 1;

  const allPages = generatePagination(currentPage, totalPages);

  const createPageURL = (pageNumber: number | string) => {
    const params = new URLSearchParams(searchParams);
    params.set("page", pageNumber.toString());
    return `${pathname}?${params.toString()}`;
  };

  return (
    <PaginationUI>
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious href={createPageURL(currentPage - 1)} />
        </PaginationItem>
        {allPages.map((page, idx) => {
          if (page === "...")
            return (
              <PaginationItem key={idx}>
                <PaginationEllipsis />
              </PaginationItem>
            );

          return (
            <PaginationItem key={idx}>
              <PaginationLink href={createPageURL(page)}>{page}</PaginationLink>
            </PaginationItem>
          );
        })}
        <PaginationItem>
          <PaginationNext href={createPageURL(currentPage + 1)} />
        </PaginationItem>
      </PaginationContent>
    </PaginationUI>
  );
};
