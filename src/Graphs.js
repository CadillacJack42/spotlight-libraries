import React from 'react';
import { DataGrid } from '@mui/x-data-grid';

export default function Graphs({ columns, rows }) {
  console.log(columns);
  return (
    <div className="App">
      <DataGrid
        rows={rows}
        columns={columns}
        // pageSize={5}
        // rowsPerPageOptions={[5]}
        // checkboxSelection
      />
    </div>
  );
}
