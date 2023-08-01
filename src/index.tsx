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

ReactDOM.render(
  <React.StrictMode>
    <Main />
  </React.StrictMode>,
  document.getElementById('root')
);