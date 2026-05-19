import { StrictMode } from 'react';
import { GenresProvider } from './context/GenresContext.jsx';
import { createRoot } from 'react-dom/client';
import { HelmetProvider } from 'react-helmet-async';
import App from './App.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HelmetProvider>
      <GenresProvider>
        <App />
      </GenresProvider>
    </HelmetProvider>
  </StrictMode>,
);
