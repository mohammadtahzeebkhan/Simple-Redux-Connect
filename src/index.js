import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import storeFactory from './Redux/Store/store';
import { Provider } from 'react-redux';
import InButtoncontainer from './Redux/Containers/InButtoncontainer';
import INButton from './Components/inbutton';
const mystore=storeFactory()
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <React.StrictMode>
    <>
    <Provider store={mystore}>
    <App />
    </Provider>
  
   
    </>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
