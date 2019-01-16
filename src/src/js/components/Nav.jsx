import React from 'react';
import { Link } from 'react-router';

require('../../scss/components/Nav.scss');

var Nav = React.createClass({
    componentDidMount: function() {
        console.log("Component did mount");

        var content = document.getElementById('app-container');

        function initSlide(options) {
            // Define the settings as an object
            var settings = {
                element: options.element,
                class: 'to_scroll'
            }

            // If the target element has a specific class declared in the object passed,
            // replace the default class key in settings object
            if (options.class) {
                settings.class = options.class;
            }

            // Get the target element from the DOM
            var elementToSlide = document.querySelector(settings.element);

            // If there's a valid element, slide it. If not, just return false
            if (elementToSlide != null) {
                console.log("slide", elementToSlide);

                var elementSettings = {
                    elementHeight: elementToSlide.clientHeight,
                    class: settings.class
                }

                slide(elementToSlide, elementSettings);
            } else {
                return false;
            }
        }

        function slide(element, elementSettings) {
            var offset = 0,
            lastPosition = 0,
            targetClass = elementSettings.class,
            elementHeight = elementSettings.elementHeight;

            content.addEventListener('scroll', function(e) {
            //window.addEventListener('scroll', function(e) {  
                var newPosition = e.target.scrollTop,
                    position = newPosition - lastPosition;          

                // If we scrolled more than the element's height, then add the class to it.
                // Else, remove it, and the element will show up again
                if (offset + position > elementHeight) {
                    offset = elementHeight;
                    if (!element.classList.contains(targetClass)) {
                        element.className = element.className + targetClass;
                    }
                } else {
                    offset = offset + position;

                    if (element.classList.contains(targetClass)) {
                        element.className = '';
                    }
                }

                if (offset < 0) {
                    offset = 0;
                }

                lastPosition = newPosition;

            });
        }

        initSlide({
            element: 'nav',
            class: 'scrolled'
        })
    },

    render: function() {
		return (
			<nav>
				<div is class="wrap">
                    <div is class="nav-items" flex="row center spread">
                	    <Link is to="/" class="nav-item" flex="col center"><span>Home</span></Link> 
                    	<Link is to="/work" class="nav-item" flex="col center"><span>Work</span></Link> 
                    	<Link is to="/play" class="nav-item" flex="col center"><span>Play</span></Link> 
                    	<Link is to="/info" class="nav-item" flex="col center"><span>Info</span></Link> 
                    </div>
				</div>
			</nav>
        );
    }
});
    
module.exports = Nav;
