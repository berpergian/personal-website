import React, { useEffect } from 'react';
import { createRoot } from 'react-dom/client';
import './css/index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

// Spinner shown in public/index.html until React has mounted
const loader = document.querySelector('.loader');
const hideLoader = () => loader?.classList.add('loader--hide');

const Index = () => {
  useEffect(() => {
    hideLoader();
  }, []);

  return <App />;
};

createRoot(document.getElementById('root')).render(<Index />);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
