import React from 'react';
import clsx from 'clsx';
import styles from './Pagination.module.css';

export interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
  showPrevNext?: boolean;
  className?: string;
}

export const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  totalPages,
  onPageChange,
  showPrevNext = true,
  className,
}) => {
  const getPages = () => {
    const pages = [];
    const maxVisible = 5;

    if (totalPages <= maxVisible) {
      for (let i = 1; i <= totalPages; i++) pages.push(i);
    } else {
      pages.push(1);
      if (currentPage > 3) pages.push('...');
      
      const start = Math.max(2, currentPage - 1);
      const end = Math.min(totalPages - 1, currentPage + 1);
      
      for (let i = start; i <= end; i++) {
        if (!pages.includes(i)) pages.push(i);
      }
      
      if (currentPage < totalPages - 2) pages.push('...');
      if (!pages.includes(totalPages)) pages.push(totalPages);
    }
    return pages;
  };

  return (
    <nav className={clsx(styles.pagination, className)}>
      {showPrevNext && (
        <button
          className={styles.btn}
          disabled={currentPage === 1}
          onClick={() => onPageChange(currentPage - 1)}
          aria-label="Previous page"
        >
          <span className="material-symbols-rounded icon-sm">chevron_left</span>
        </button>
      )}

      {getPages().map((page, index) => (
        page === '...' ? (
          <span key={`ellipsis-${index}`} className={styles.ellipsis}>...</span>
        ) : (
          <button
            key={page}
            className={clsx(styles.btn, currentPage === page && styles.active)}
            onClick={() => onPageChange(page as number)}
          >
            {page}
          </button>
        )
      ))}

      {showPrevNext && (
        <button
          className={styles.btn}
          disabled={currentPage === totalPages}
          onClick={() => onPageChange(currentPage + 1)}
          aria-label="Next page"
        >
          <span className="material-symbols-rounded icon-sm">chevron_right</span>
        </button>
      )}
    </nav>
  );
};
