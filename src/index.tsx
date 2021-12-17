import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Auth0Provider } from "@auth0/auth0-react";
import history from "./pages/history"

const onRedirectCallback = (appState: any) => {
  history.push(
    appState && appState.returnTo ? appState.returnTo : window.location.pathname
  );
};

const providerConfig = {
  domain: "lypz-4156.us.auth0.com",
  clientId: "SeLMIAZmDMlcGzcjvyOVI6vrw4ZvLS8V",
  audience: "https://LYPZ-4156",
  redirectUri: window.location.origin,
  onRedirectCallback,
};

ReactDOM.render(

  <Auth0Provider {...providerConfig}>

    <App />

  </Auth0Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();