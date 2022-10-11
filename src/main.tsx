import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import MainApp from './components/MainApp';

const root = document.getElementById("root")!;
ReactDOM.createRoot(root).render(
  <BrowserRouter>
    <MainApp />
  </BrowserRouter>
);
