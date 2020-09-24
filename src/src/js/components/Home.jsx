import React from 'react';
import { Link } from 'react-router';
var db = require('../../../server/data/db');
var Item = require('./Item.jsx');

require('../../scss/common/_page.scss');
require('../../scss/components/Home.scss');

var Home = React.createClass({
    componentWillMount: function() {
        var items = db.getLatest();
        this.state = { items: items };
    },

    scrollTo: function(targetId) {
        var target = document.getElementById(targetId);
        Velocity(target, "scroll", { 
            duration: 500,
            container: document.getElementById('app-container'),
            easing: "easeInBack"
        });
    },

    render: function() {
        return (
            <div is class="page" id="home">
                <h1>Hello, World</h1>

                <div is class="bio" flex="row wrap">
                    <div is class="left" flex="row nowrap">
                        <div is class="col image">
                            <img is src="/img/profile.png" width="180" height="200" />
                        </div>
                        <div is class="col me fill">
                            <h3>I'm</h3>
                            <ul>
                                <li>Ryan Weiss</li>
                                <li>34yrs of age, 150lbs, 5'10"</li>
                                <li><b>Web Developer</b>: Since 1998 (20+ years)</li>
                                <li><b>Musician</b>: Since 1998 (20+ years)</li>
                            </ul>

                            <h3>Links</h3>
                            <ul>
                                <li><a target="_blank" href="/files/resume.pdf">Resume</a></li>
                                <li><Link to="/play">Demos</Link></li>
                                <li><a target="_blank" href="http://github.com/rw3iss">Github</a></li>
                                <li><a href="mailto:rw3iss@gmail.com">rw3iss@gmail.com</a></li>
                            </ul>
                        </div>
                    </div>
                    <div is class="right">
                        <div is class="section" id="skills">
                            <h3>Skills</h3>
                            <div is class="skill-types">  
                                <h4>Frontend (<a target="_blank" href="/files/resume.pdf">full list</a>)</h4>
                                <ul>
                                    <li>JavaScript, React.js/Preact, Angular.js, Vue.js, Backbone.js, Mithril.js, Marko, ember.js, Knockout.js, HTML5, CSS3, SASS, CSS Flexbox and Grid, Canvas, WebGL, websockets, PWA's and service workers, jQuery, Backbone.js, Bootstrap, CoffeeScript, Handlebars, OAuth, Webpack, gulp, grunt, <a target="_blank" href="/files/resume.pdf">more</a></li>
                                </ul>

                                <h4>Backend (<a target="_blank" href="/files/resume.pdf">full list</a>)</h4>
                                <ul>
                                    <li>node.js, Express.js, PHP, ASP.NET, C#, Python, Java, Kotlin, Laravel, CodeIgniter, DialogFlow, ExpressionEngine, Drupal, Wordpress, Directus, MySQL, PostgreSQL, websockets, MongoDB, e-commerce, Git, SSL, nginx, Apache, redis, OAuth, AWS, MVC, CQRS, message queues, continuous integration, unit testing, <a target="_blank" href="/files/resume.pdf">more</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                <div is class="line-title" id="fulltime"><h3>Latest</h3><h4>(updated September 2020)</h4></div>
                <div is class="items" flex="row wrap">
                 {this.state.items.map(function(item, i){
                    return <Item item={item} key={i} />
                  })}
                </div>

                <h5><a is onClick={()=>this.scrollTo('home')} href="#">Back to Top</a></h5>

                <h3 is class="see-more">See more <Link is to="/work">Work</Link> or <Link is to="/play">Play</Link> ...</h3>
            </div>
        );
    }
});
    
module.exports = Home;
