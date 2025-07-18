import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';

// Only debug in development
if (import.meta.env.DEV) {
  import('./utils/imageLoader').then(({ debugImages }) => {
    debugImages();
  });
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>
);