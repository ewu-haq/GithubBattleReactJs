var React = require('react');
var TransparentBg = require('../styles').transparentBg;
var styles =  require('../styles');
var PropTypes = React.PropTypes;
var UserDetailsWrapper = require('../components/UserDetailsWrapper');
var UserDetails = require('../components/UserDetails');
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;

function ConfirmBattleContainer (props){
         console.log(props.playersInfo)

        return props.isLoading === true
            ? <p>LOADING</p>
            : <div className="jumbotron col-sm-12 text-center" style={TransparentBg}>
                <h1>Confirm Players</h1>
                <div className='col-sm-8 col-sm-offset-2'>
                <UserDetailsWrapper header='Player 1'>
                    <UserDetails info={props.playersInfo[0]} />
                </UserDetailsWrapper>
                <UserDetailsWrapper header='Player 2'>
                    <UserDetails info={props.playersInfo[1]} />
                </UserDetailsWrapper>
                </div>
                <div className='col-sm-8 col-sm-offset-2'>
                <div className='col-sm-12' style={styles.space}>
                    <button type='button' className='btn btn-lg btn-success' onClick={props.onInitiateBattle}>Initiate Battle!</button>
                </div>
                <div className='col-sm-12' style={styles.space}>
                    <Link to='/playerOne'>
                    <button type='button' className='btn btn-lg btn-danger'>Reselect Players</button>
                    </Link>
                </div>
                </div>
            </div>
    }

ConfirmBattleContainer.PropTypes = {
    isLoading: PropTypes.bool.isRequired,
    playersInfo: PropTypes.array.isRequired,
    onInitiateBattle: PropTypes.func.isRequired,
}    

module.exports = ConfirmBattleContainer;