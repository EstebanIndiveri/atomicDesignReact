import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import { AppContextProvider } from 'contexto/store';
import 'scss/application.scss';
import 'config/i18n';
import App from 'components/App';

import reportWebVitals from './reportWebVitals';

const rootElement = document.getElementById('root');

if (rootElement === null) {
  throw new Error(
    'Root element could not be found, it needs to be different than null'
  );
}

const root = createRoot(rootElement);

const renderApp = () => {
  root.render(
    <AppContextProvider>
      <StrictMode>
        <App />
      </StrictMode>
    </AppContextProvider>
  );
};

// Render once
renderApp();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
