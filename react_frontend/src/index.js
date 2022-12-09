import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/font-awesome/css/font-awesome.min.css';
import { BrowserRouter } from 'react-router-dom';


const rootElement = ReactDOM.createRoot(document.getElementById('root'));
rootElement.render(

  <BrowserRouter>
    <App />
  </BrowserRouter>
);

reportWebVitals();
