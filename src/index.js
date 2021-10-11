import React from "react";
import ReactDOM from 'react-dom';
//import App from './App';
//import Header from './components/Header';
import { BrowserRouter } from "react-router-dom";

import Main from './Main';

export { default as Navigation } from "./components/Navigation";
export { default as Footer } from "./components/Footer";
export { default as Home } from "./components/Home";
export { default as About } from "./components/About";
export { default as Contact } from "./components/Contact";
export { default as Service } from "./components/Service";



ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
        <Main />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);



