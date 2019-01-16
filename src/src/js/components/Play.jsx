import React from 'react';
var db = require('../../../server/data/db');
var Item = require('./Item.jsx');

require('../../scss/common/_page.scss');
require('../../scss/components/Play.scss');

var Play = React.createClass({
    componentWillMount: function() {
        var items = db.getPlay();
        this.state = {items: items};
    },

    handleClick: function(item) {
        if(item.isOpen == true)
            item.isOpen = false;
        else 
            item.isOpen = true;
        this.forceUpdate();
    },

    render: function() {
        var self = this;
        return (
            <div is class="page" id="play">
                <h1>Play</h1>
               
                <div is class="items" flex="row wrap">
                 {this.state.items.map(function(item, i) {
                    return <Item item={item} key={i} />
                  })}
                </div>

            </div>
        );
    }
});
    
module.exports = Play;
