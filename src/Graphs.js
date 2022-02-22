import React from 'react';
import { DataGrid } from '@mui/x-data-grid';

export default function Graphs({ columns, rows }) {
  return (
    <div className="App">
      <DataGrid rows={rows} columns={columns} checkboxSelection />
    </div>
  );
}
