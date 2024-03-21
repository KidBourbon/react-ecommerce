import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './Pages/App';
import './index.css';
import { GlobalProvider } from './Context';

ReactDOM.createRoot(document.getElementById('root')).render(
  <GlobalProvider>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </GlobalProvider>
);
