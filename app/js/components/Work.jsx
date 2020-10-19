import React from 'react';
import Item from './Item';
var db = require('../../../server/data/db');

require('../../scss/common/_page.scss');
require('../../scss/components/Work.scss');

export default class Work extends React.Component {

    componentWillMount() {
        this.state = { 
            freelance: db.getFreelance(),
            fulltime: db.getFulltime()
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
                <h1>Work</h1>
                <div is class="sub-nav">
                    <a is onClick={()=>this.scrollTo('freelance')} href="#freelance">Freelance</a>
                    <a is onClick={()=>this.scrollTo('fulltime')} href="#fulltime">Fulltime</a>
                </div>

                <div is class="line-title" id="freelance"><h3>Freelance</h3></div>
                <div is class="items" flex="row wrap">
                 {this.state.freelance.map(function(item, i) {
                    return <Item item={item} key={i} />
                  })}
                </div>

                <div is class="line-title" id="fulltime"><h3>Fulltime</h3>
                    <h5><a is onClick={()=>this.scrollTo('work')} href="#" class="to-top">Back to Top</a></h5>
                </div>
                <div is class="items" flex="row wrap">
                 {this.state.fulltime.map(function(item, i) {
                    return <Item item={item} key={i} />
                  })}
                </div>
            </div>
        );
    }

}