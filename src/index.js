import React from 'react';
import { render } from 'react-dom';
import App from './app';
import { GlobalStyles } from './globalStyles';
import 'normalize.css';
import { firebase } from './lib/firebase.prod';
import { FirebaseContext } from './context/firebase';

render(
  <React.StrictMode>
    <FirebaseContext.Provider value={{ firebase }}>
      <GlobalStyles />
      <App />
    </FirebaseContext.Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
