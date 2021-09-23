import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';
import {BrowserRouter} from "react-router-dom"
import {AppProvider} from "./context/appContext"


ReactDOM.render(
  <React.StrictMode>
    <AppProvider>
    <BrowserRouter>
    <App />
    </BrowserRouter>
    </AppProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

