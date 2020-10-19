import React from 'react';
import Item from './Item';
var db = require('../../../server/data/db');

require('../../scss/common/_page.scss');
require('../../scss/components/Repositories.scss');

export default class Repositories extends React.Component {

    componentWillMount() {
        this.state = { 
            repos: db.getRepositories()
        };
    }

    componentDidMount() {
        var hash = this.props.location.hash.substring(1);
        if(hash.length) {
            console.log(hash, hash.length)
            this.scrollTo(hash);
        }
    }

    scrollTo(targetId) {
        var target = document.getElementById(targetId);
        Velocity(target, "scroll", { 
            duration: 500,
            container: document.getElementById('app-container'),
            easing: "easeInBack"
        });
    }

    render() {
        return (
            <div is class="page" id="work">
                <h1>Repositories</h1>
                <div is class="sub">
                    These are various miscellaneous projects I've worked on that might warrant attention, and can demonstrate coding style.
                </div>

                <div is class="items" flex="row wrap">
                 {this.state.repos.map(function(item, i) {
                    return <Item item={item} key={i} />
                  })}
                </div>
            </div>
        );
    }

}