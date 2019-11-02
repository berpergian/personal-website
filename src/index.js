import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';


// React loader page https://stackoverflow.com/questions/40987309/
const loader = document.querySelector('.loader');

// if you want to show the loader when React loads data again
const showLoader = () => loader.classList.remove('loader--hide');
const hideLoader = () => loader.classList.add('loader--hide');

const Index = ({ hideLoader }) => {
	useEffect(() => hideLoader(), []);

	return(
		<App />
	)
}

setTimeout(() =>
	ReactDOM.render(
		<Index hideLoader={hideLoader} showLoader={showLoader} />, document.getElementById('root')
	)
,1000);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
