import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import * as serviceWorker from "./serviceWorker";
import { BrowserRouter } from "react-router-dom";
// import reduc
// import store from "./redux/Stores/Store";
// import { PersistGate } from 'redux-persist/integration/react'

// import { Provider } from 'react-redux'

// Stripe
import {Elements} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';

// loading styling sheets
import "./styles/responsiveness.scss";
import "./styles/base.scss";
// import {AuthAction} from "./redux/Actions/AuthAction";

const stripePromise = loadStripe('pk_test_CQNVt3gbOLxOgkq1ZjhM9yAl00KwcngaQu');

// store.subscribe(()=>console.log("subsc",store.getState()));



ReactDOM.render(
  <React.StrictMode>
    {/* <Provider store={store}> */}
      {/*<PersistGate loading={null} persistor={persistor}>*/}
        <BrowserRouter>
          <Elements stripe={stripePromise}>
            <App />
          </Elements>
        </BrowserRouter>
      {/*</PersistGate>*/}
    {/* </Provider> */}
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
serviceWorker.unregister();

