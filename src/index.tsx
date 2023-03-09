import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './page/ChatApp/index';
import Main from './page/MainPage';
import { Provider } from "react-redux"
import store from './redux/store';
import { BrowserRouter } from "react-router-dom";
import ChatApp from './page/ChatApp';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  // <React.StrictMode>
  <Provider store={store}>
    <BrowserRouter>
      <Main />
    </BrowserRouter>
  </Provider>
  // </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
