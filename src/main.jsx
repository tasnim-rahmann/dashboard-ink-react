import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import AppRoute from './routes/AppRoute.jsx';
import { BrowserRouter } from "react-router";


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <AppRoute />
    </BrowserRouter>
  </StrictMode>,
);
