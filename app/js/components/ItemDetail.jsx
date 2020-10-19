import React from 'react';
import dateFormat from 'dateformat';
var db = require('../../../server/data/db');

require('../../scss/components/ItemDetail.scss');

export default class ItemDetail extends React.Component {

    render() {
        var self = this;

        var itemKey = this.props.params.key;

        var item = db.getItem(itemKey);

        var date = Date.parse(item.date_added);
        var dateString = dateFormat(date, 'mmmm dS, yyyy');

        return (
            <div>
                Item Detail
                <div is class="inner">
                    <div is class="thumb"><img src={item.thumb}/></div>
                    <div is class="text">
                        <div is class="date">{dateString}</div>
                        <div is class="title">{item.title}</div>
                        <div is class="content">{item.description}</div>
                        {item.url && <div is class="link"><span className="label">Website:</span> <a href={item.url} target="_blank">{item.url}</a></div>}
                        <div is class="tags"><span className="label">Tags:</span> {item.tags}</div>
                    </div>
                </div>
            </div>
        );
    }
    
}