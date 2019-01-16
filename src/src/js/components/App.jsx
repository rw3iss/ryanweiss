import React from 'react';
var Nav = require('./Nav.jsx');

require('../../scss/components/App.scss');

var App = React.createClass({
    render: function() {
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
});
    
module.exports = App;
