var React = require('react');
var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var IndexRoute = ReactRouter.IndexRoute;
var Main = require('../components/Main');
var Home = require('../components/Home');
var ConfirmBattle = require('../components/ConfirmBattle');
var PromptContainer = require('../containers/PromptContainer');

var routes = (
    <Router>
        <Route path='/' component={Main}>
            <IndexRoute component={Home} />
            <Route path='playerOne' header='PlayerOne' component={PromptContainer}/>
            <Route path='playerTwo/:playerOne' header='PlayerTwo' component={PromptContainer}/>
            <Route path='battle' component={ConfirmBattle}/>
        </Route>
            
    </Router>
);

module.exports  = routes;
