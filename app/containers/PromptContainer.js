var React = require('react');

var Prompt = require('../components/Prompt');

var PromptContainer = React.createClass({

    contextTypes: {
        router: React.PropTypes.object.isRequired
    },

    getInitialState: function(){
        return {
            username: ''
        }
    },

    HandleUpdateUser: function(e){
        this.setState({
            username: e.target.value
        })
    },

    HandleSubmitUser: function(e){
        console.log(this.props);

        e.preventDefault();
        var username = this.state.username;
        this.setState({
            username: ''
        });

        if(this.props.routeParams.playerOne)
        {
            this.context.router.push({
                pathname: '/battle',
                query: {
                    playerOne: this.props.routeParams.playerOne,
                    playerTwo: this.state.username
                }
            })
        }
        else
        {
            this.context.router.push('/playerTwo/' + this.state.username)
        }

        console.log(this.props);
    },

	render() {
        return (
            <Prompt 
                onSubmitUser={this.HandleSubmitUser}
                onUpdateUser={this.HandleUpdateUser}
                header= {this.props.route.header}
                username={this.state.username}
                />
        );
    }
});

module.exports = PromptContainer;