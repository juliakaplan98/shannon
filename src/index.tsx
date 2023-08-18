// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import './index.css';
// import Main from './main';

// import reportWebVitals from './reportWebVitals';
// // import { Footer } from './pages/footer';

// // const root = ReactDOM.createRoot(
// //   document.getElementById('root') as HTMLElement
// // );
// const root = ReactDOM.createRoot(
//   document.getElementById('root') as Element
// );
// root.render(
//   <React.StrictMode>
//      <Main />
//   </React.StrictMode>
// );

// reportWebVitals();

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Main from './main';
// import Navigation from './components/Navigation'
import Header from './components/Header'
import Footer from './components/Footer'

ReactDOM.render(
  <React.StrictMode>
    <Header/>
    <Main />
    <Footer/>
  </React.StrictMode>,
  document.getElementById('root')
);