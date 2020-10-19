import React from 'react';
var db = require('../../../server/data/db');
import Item from './Item';

require('../../scss/common/_page.scss');
require('../../scss/components/Play.scss');

export default class Play extends React.Component {

    componentWillMount() {
        var items = db.getPlay();
        this.state = {items: items};
    }

    handleClick(item) {
        if(item.isOpen == true)
            item.isOpen = false;
        else 
            item.isOpen = true;
        this.forceUpdate();
    }

    render() {
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

}