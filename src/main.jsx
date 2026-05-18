import { StrictMode } from 'react';
import { GenresProvider } from './context/GenresContext.jsx';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <GenresProvider>
      <App />
    </GenresProvider>
  </StrictMode>,
);
