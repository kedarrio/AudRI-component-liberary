import React from 'react';
import { Table, TableRow, TableCell, Tag, Button } from '@lib';
import { CodeBlock } from '../../components/CodeBlock';

const TableSection = () => {
  const data = [
    { id: 'WC-2024-00194', claimant: 'H. Thompson', type: 'Workers\' Comp', status: 'Violation', amount: '$12,450.00' },
    { id: 'WC-2024-00195', claimant: 'M. Chen', type: 'Property', status: 'Compliant', amount: '$8,210.45' },
    { id: 'WC-2024-00196', claimant: 'J. Smith', type: 'General Liab.', status: 'Pending', amount: '$420.00' },
    { id: 'WC-2024-00197', claimant: 'S. Rodriguez', type: 'Workers\' Comp', status: 'Compliant', amount: '$150,000.00' },
  ];

  return (
    <div>
      <h2 className="heading-xl" style={{ marginBottom: '8px' }}>Data Table</h2>
      <p className="body-md" style={{ color: 'var(--color-text-secondary)', marginBottom: '32px' }}>
        Dense data presentation with monospace numeric values and integrated status tags.
      </p>

      <div style={{ marginBottom: '24px' }}>
        <Table headers={['Claim ID', 'Claimant', 'Type', 'Status', 'Incurred', 'Actions']}>
          {data.map((row) => (
            <TableRow key={row.id}>
              <TableCell numeric>{row.id}</TableCell>
              <TableCell>{row.claimant}</TableCell>
              <TableCell>{row.type}</TableCell>
              <TableCell>
                <Tag variant={row.status === 'Violation' ? 'danger' : row.status === 'Compliant' ? 'success' : 'warning'}>
                  {row.status}
                </Tag>
              </TableCell>
              <TableCell numeric>{row.amount}</TableCell>
              <TableCell>
                <Button size="xs" variant="ghost" icon="more_horiz" iconOnly />
              </TableCell>
            </TableRow>
          ))}
        </Table>
      </div>

      <CodeBlock code={`<Table headers={['ID', 'Status', 'Amount']}>
  <TableRow>
    <TableCell numeric>WC-2024-00194</TableCell>
    <TableCell><Tag variant="danger">Violation</Tag></TableCell>
    <TableCell numeric>$12,450.00</TableCell>
  </TableRow>
</Table>`} />
    </div>
  );
};

export default TableSection;
