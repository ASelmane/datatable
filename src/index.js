import React from 'react';
import Table from "./component/Table";
import employees from './_mocks_/employees';
import columns from './_mocks_/colunms';
import { createRoot } from 'react-dom/client';
const root = createRoot(document.getElementById('root'));

const App = () => (
  <div style={{ width: 800, margin: "15px auto" }}>
    <h1>Hello React</h1>
    <Table data={employees} columns={columns} />
  </div>
);

root.render(<App />);