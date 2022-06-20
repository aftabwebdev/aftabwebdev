import React from 'react';
import { createRoot } from 'react-dom/client';
import './css/style.min.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';



createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter basename='/aftabwebdev'>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
 