import React, { useMemo } from 'react';

import ChevronLeft from '../ChevronLeft';
import ChevronRight from '../ChevronRight';

import { PaginationContent, PrevPage, NextPage, PageNumber } from './styles';

interface PaginationProps {
  totalPages: number;
  currentPage: number;
  onPageChange: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({
  totalPages,
  currentPage,
  onPageChange,
}: PaginationProps) => {
  const pageNumbers = useMemo(() => {
    const pages: number[] = [];
    const maxVisiblePages = 5;

    let startPage: number;
    let endPage: number;

    if (totalPages <= maxVisiblePages) {
      startPage = 1;
      endPage = totalPages;
    } else {
      if (currentPage <= 3) {
        startPage = 1;
        endPage = maxVisiblePages;
      } else if (currentPage + 2 >= totalPages) {
        startPage = totalPages - maxVisiblePages + 1;
        endPage = totalPages;
      } else {
        startPage = currentPage - 2;
        endPage = currentPage + 2;
      }
    }

    for (let i = startPage; i <= endPage; i++) {
      pages.push(i);
    }

    return pages;
  }, [currentPage, totalPages]);

  return (
    <PaginationContent>
      {totalPages > 1 && (
        <PrevPage
          onClick={() => {
            onPageChange(currentPage - 1);
          }}
          disabled={currentPage === 1}
        >
          <ChevronLeft />
        </PrevPage>
      )}

      {pageNumbers.map(pageNumber => (
        <PageNumber
          key={pageNumber}
          $pageActive={currentPage === pageNumber}
          onClick={() => onPageChange(pageNumber)}
        >
          {pageNumber}
        </PageNumber>
      ))}

      {totalPages > 1 && (
        <NextPage
          onClick={() => {
            onPageChange(currentPage + 1);
          }}
          disabled={currentPage === totalPages}
        >
          <ChevronRight />
        </NextPage>
      )}
    </PaginationContent>
  );
};

export default Pagination;
