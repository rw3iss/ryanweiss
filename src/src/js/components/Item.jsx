import React from 'react';
import { Link } from 'react-router';
import dateFormat from 'dateformat';

require('../../scss/components/Item.scss');

var Item = React.createClass({
    handleClick: function() {
        /*
        if(this.props.item.isOpen == true)
            this.props.item.isOpen = false;
        else 
            this.props.item.isOpen = true;
        this.forceUpdate();
        */

        if (this.props.item.demo) {
            window.open(this.props.item.demo);
        } else {
            window.open(this.props.item.url);
        }

        //this.props.history.push('/entry/' + this.props.item.key);
    },

    render: function() {
        var self = this;
        var item = this.props.item;

        if(item.date_added) {
            var date = Date.parse(item.date_added);
            var dateString = dateFormat(date, 'mmmm dS, yyyy');
        } else if (item.date_from) {
            var dateFrom = Date.parse(item.date_from);
            var dateTo = Date.parse(item.date_to);
            var dateString = dateFormat(dateFrom, 'mmmm yyyy') + ' to ' + dateFormat(dateTo, 'mmmm yyyy');
        }

        return (
            <div is class={"item " + (item.isOpen == true ? 'open' : '')}>
                <div is class="inner clear" onClick={this.handleClick}>
                    <div is class="thumb">{item.thumb && <img src={item.thumb}/>}</div>
                    <div is class="text-top">
                        <div is class="date">{dateString}</div>
                        <div is class="title">{item.title}</div>
                        {item.url && <div is class="link"><a href={item.url} target="_blank">{item.url}</a></div>}
                        {item.tags && <div is class="tags"><span className="label">Tags:</span> {item.tags}</div>}
                    </div>
                    <div is class="text-bottom">
                        <div is class="content" dangerouslySetInnerHTML={{__html: item.description}}></div>
                    </div>
                    { item.demo && <div is class="demo-link">
                        <a href={item.demo} target="_blank">Demo</a>
                    </div>
                    }
                </div>
            </div>
        );
    }
});
    
module.exports = Item;
