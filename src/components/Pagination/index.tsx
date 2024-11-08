import React, { useEffect, useMemo, useState } from 'react';
import ChevronLeftIcon from '../ChevronLeftIcon';
import ChevronRightIcon from '../ChevronRightIcon';
import { PaginationContent, PrevPage, NextPage, PageNumber } from './styles';

interface PaginationProps {
  totalPages: number;
  currentPage: number;
  onPageChange: (page: number) => void;
}

const useWindowSize = () => {
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return windowSize;
};

const Pagination: React.FC<PaginationProps> = ({
  totalPages,
  currentPage,
  onPageChange,
}: PaginationProps) => {
  const { width } = useWindowSize();
  const isMobile = width <= 768;

  const pageNumbers = useMemo(() => {
    const pages: number[] = [];
    const maxVisiblePages = isMobile ? 4 : 5;

    let startPage: number;
    let endPage: number;

    if (totalPages <= maxVisiblePages) {
      startPage = 1;
      endPage = totalPages;
    } else {
      if (currentPage <= 3) {
        startPage = 1;
        endPage = maxVisiblePages;
      } else {
        if (isMobile) {
          if (currentPage + 1 >= totalPages) {
            startPage = totalPages - maxVisiblePages + 1;
            endPage = totalPages;
          } else {
            startPage = currentPage - 2;
            endPage = currentPage + 1;
          }
        } else {
          if (currentPage + 2 >= totalPages) {
            startPage = totalPages - maxVisiblePages + 1;
            endPage = totalPages;
          } else {
            startPage = currentPage - 2;
            endPage = currentPage + 2;
          }
        }
      }
    }

    for (let i = startPage; i <= endPage; i++) {
      pages.push(i);
    }

    return pages;
  }, [currentPage, totalPages, isMobile]);

  return (
    <PaginationContent>
      {totalPages > 1 && (
        <PrevPage
          onClick={() => onPageChange(currentPage - 1)}
          disabled={currentPage === 1}
        >
          <ChevronLeftIcon />
        </PrevPage>
      )}

      {pageNumbers.map(pageNumber => (
        <PageNumber
          key={pageNumber}
          $pageActive={currentPage === pageNumber}
          onClick={() => {
            if (typeof pageNumber === 'number') {
              onPageChange(pageNumber);
            }
          }}
        >
          {pageNumber}
        </PageNumber>
      ))}

      {totalPages > 1 && (
        <NextPage
          onClick={() => onPageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
        >
          <ChevronRightIcon />
        </NextPage>
      )}
    </PaginationContent>
  );
};

export default Pagination;
