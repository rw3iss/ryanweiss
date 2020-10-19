import React from 'react';
import { Router }  from 'react-router';
import ReactDOM from 'react-dom';
import { createBrowserHistory } from 'history';
import routes from './components/Routes.jsx';

console.log("App")

ReactDOM.render(
    <Router routes={routes} history={createBrowserHistory()} onUpdate={() => { 
        // Scroll user to top of page on route changes
        console.log("route changed")
        document.getElementById('app-container').scrollTop = 0;
    }}/>, 
    document.getElementById('app')
);
