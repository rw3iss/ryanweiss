import React from 'react';
import Nav from './Nav';

require('../../scss/components/App.scss');

export default class App extends React.Component {

    render() {
        return (
            <div is id="app-container">

            	<div is id="content-wrapper">

                    <Nav />
                    
					<div is class="page-wrapper">
						{this.props.children}
					</div>

				</div>

            </div>
        );
    }
    
}