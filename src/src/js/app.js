//import styles from '../client/css/scss/app.scss';
import { match, Router }  from 'react-router';
import { render } from 'react-dom';
import { createHistory } from 'history';
import React from 'react';
import routes from './components/Routes.jsx';

const { pathname, search, hash } = window.location;
const location = '${pathname}${search}${hash}';

match({ history: createHistory(), routes: routes, location: location }, (error, redirectLocation, renderProps) => {
	render(
		<Router 
			onUpdate={() => { 
				document.getElementById('app-container').scrollTop = 0;
		    }}
		    {...renderProps} />, document.getElementById('app'));
});