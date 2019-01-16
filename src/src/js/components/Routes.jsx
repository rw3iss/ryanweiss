import App from './App.jsx';
import Home from './Home.jsx';
//import Index from './Index.jsx';

if(typeof require.ensure !== "function") require.ensure = function(d, c) { c(require) }

module.exports = {
  path: '/',
  component: App,
  indexRoute: { component: Home },
  childRoutes: [
  	{ path: 'work', 
  		getComponent(location, cb) {
		  	require.ensure([], (require) => {
		      cb(null, require('./Work.jsx'))
		    })
		  }
    },
    { path: 'play', 
  		getComponent(location, cb) {
		  	require.ensure([], (require) => {
		      cb(null, require('./Play.jsx'))
		    })
		  }
    },
    { path: 'info', 
  		getComponent(location, cb) {
		  	require.ensure([], (require) => {
		      cb(null, require('./Info.jsx'))
		    })
		  }
    },
    { path: 'entry/:key', 
      getComponent(location, cb) {
        require.ensure([], (require) => {
          cb(null, require('./ItemDetail.jsx'))
        })
      }
    },
    { path: '*', 
  		getComponent(location, cb) {
		  	require.ensure([], (require) => {
		      cb(null, require('./NotFound.jsx'))
		    })
		  }
    }
  ] 
}
