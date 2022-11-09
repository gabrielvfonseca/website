import React from 'react';

interface TableProps {
  id: string;
  data?: any;
  columns: any;
}

const TableHeader = ({ columns }: any) => {
  return (
    <tr>
      {columns.map((column, index) => (
        <th key={index}>{column.title}</th>
      ))}
    </tr>
  );
};

const TableRow = ({ data, columns }: TableProps) => {
  return (
    <>
      {data.map((item, index) => (
        <tr>
          {columns.map((column, index) => (
            <td></td>
          ))}
        </tr>
      ))}
    </>
  );
};

const Table = ({ id, data, columns }: TableProps) => {
  if (!columns) {
    return (
      <table id={id}>
        <TableRow data={data} columns={columns} />
      </table>
    );
  } else {
    <table id={id}>
      <thead>
        <TableHeader columns={columns} />
      </thead>
      <tbody>
        <TableRow data={data} columns={columns} />
      </tbody>
    </table>;
  }
};

export default Table;
