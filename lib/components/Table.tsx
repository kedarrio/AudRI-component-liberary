import React from 'react';
import clsx from 'clsx';
import styles from './Table.module.css';

/**
 * Table component for displaying structured data.
 */
export interface TableProps {
  headers: React.ReactNode[];
  children: React.ReactNode;
  className?: string;
  rowHover?: boolean;
}

export const Table: React.FC<TableProps> = ({
  headers,
  children,
  className,
  rowHover = true,
}) => {
  return (
    <div className={clsx(styles['table-wrap'], className)}>
      <table className={styles.table}>
        <thead>
          <tr>
            {headers.map((header, index) => (
              <th key={index} className={styles.th}>
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className={clsx(rowHover && styles['row-hover'])}>
          {children}
        </tbody>
      </table>
    </div>
  );
};

export const TableRow: React.FC<{ children: React.ReactNode; className?: string }> = ({
  children,
  className,
}) => <tr className={clsx(styles.tr, className)}>{children}</tr>;

export const TableCell: React.FC<{
  children: React.ReactNode;
  numeric?: boolean;
  className?: string;
}> = ({ children, numeric = false, className }) => (
  <td className={clsx(styles.td, numeric && styles.numeric, className)}>
    {children}
  </td>
);
