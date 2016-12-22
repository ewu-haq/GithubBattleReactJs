var React = require('react');
var ConfirmBattleContainer = require('../containers/ConfirmBattleContainer');
var githubHelpers = require('../utils/githubHelpers');
var ConfirmBattle = React.createClass({

     contextTypes: {
        router: React.PropTypes.object.isRequired
    },

    getInitialState: function(){
        return {
            isLoading: true,
            playerInfo: []
        }
    },

    componentDidMount: function(){
      var query = this.props.location.query;

      var result = githubHelpers.getPlayersInfo([query.playerOne,query.playerTwo])
                            .then(function(players){
                                this.setState({
                                    isLoading: false,
                                    playerInfo: [players[0],players[1]]
                                })
                            }.bind(this));      
    },

    handleInitiateBattle: function(){
        this.context.router.push({
            pathname: '/result',
            state : {
                playerInfo: this.state.playerInfo
            }
        })
    },

    render() {
        return (
            <ConfirmBattleContainer
                isLoading={this.state.isLoading}
                playersInfo={this.state.playerInfo}>
                onInitiateBattle= {this.handleInitiateBattle}                
            </ConfirmBattleContainer>
        );
    }
});

module.exports = ConfirmBattle;
