import React from 'react';
import { PageContainer } from '../../components/PageContainer';
import { useTable } from 'react-table';

const fakeData = [
  {
    id: 1,
    habit: 'adsadsdas',
    actions: 'asdasdasd',
  },
];

export function HabitsListPage() {
  const data = React.useMemo(() => fakeData, []);
  const columns: any = React.useMemo(
    () => [
      {
        Header: 'ID',
        accessor: 'id',
      },
      {
        Header: 'Hábito',
        accessor: 'habit',
      },
      {
        Header: 'Ações',
        accessor: 'actions',
      },
    ],
    []
  );

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } = useTable({
    columns,
    data,
  });

  return (
    <PageContainer>
      <div className={'w-full max-w-5xl h-[88%] px-6 flex flex-col gap-16 flex-1 items-center justify-center mx-auto'}>
        <table {...getTableProps()}>
          <thead>
            {headerGroups.map((headerGroup) => (
              <tr {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map((column) => (
                  <th {...column.getHeaderProps()}>{column.render('Header')}</th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody {...getTableBodyProps()}>
            {rows.map((row) => {
              prepareRow(row);
              return (
                <tr {...row.getRowProps()}>
                  {row.cells.map((cell) => (
                    <td {...cell.getCellProps()}> {cell.render('Cell')} </td>
                  ))}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </PageContainer>
  );
}
