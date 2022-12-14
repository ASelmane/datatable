import React from 'react';
import employees from './_mocks_/employees';
import columns from './_mocks_/colunms';
import { createRoot } from 'react-dom/client';
import { DataTable } from './lib';
const root = createRoot(document.getElementById('root'));

const App = () => (
  <div style={{ width: 800, margin: "15px auto" }}>
    <h1>Hello React</h1>
    <DataTable data={employees} columns={columns} />
  </div>
);

root.render(<App />);