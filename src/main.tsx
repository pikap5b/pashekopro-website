import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import './i18n';

// Wait for i18n to initialize
import i18n from './i18n';
i18n.on('initialized', () => {
  console.log('i18n initialized with language:', i18n.language);
});

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
