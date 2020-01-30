import React, { Component } from 'react';
import { connect } from 'react-redux';
import {getAllgames} from './../store/actions/gamesActions';
import {gameImages} from './../store/helpers/common';
import { NavLink} from 'react-router-dom';


class Matchfinder extends Component {
    constructor(props) {
        super(props);
        this.state = {
            matchfindergames: '',
        };
    }
    componentDidMount() {
            this.props.dispatch(getAllgames());
    }
    chooseGame = (gname) =>{
        localStorage.setItem('game', gname);
        const element1 = document.getElementById('cg-step-1'); 
            element1.style.setProperty('display', 'none');
        const element = document.getElementById('cg-step-2'); 
            element.style.setProperty('display', 'block');
    }
    choosePlatform =(plat) =>{
        localStorage.setItem('platform', plat);
        document.getElementById("close").click();
        const element1 = document.getElementById('cg-step-1'); 
        element1.style.setProperty('display', 'block');
    const element = document.getElementById('cg-step-2'); 
        element.style.setProperty('display', 'none');
        // window.location.reload();
       
    }
    componentWillReceiveProps(nextProps) {
        this.setState({
            matchfindergames: nextProps.matchfindergamesdata,
        });
    }
    render() {
        return (
            <div className="modal fade" id="modal-container-509222" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
             <button type="button" className="close" id="close" data-dismiss="modal">&times;</button>
            <div className="logo-image text-center">
            <img className="img-fluid footer_logo" src="/assets/img/games/foot-logo.png" alt=""></img>
                {/* <img src="https://res.cloudinary.com/dnv0dij0y/image/upload/v1575906102/homepage/Tcgamingassets_4_xqp3d7.png" alt="" className="img-fluid" /> */}
            </div>
        <div className="login team modal-dialog ladder-filter" role="document">
        <div className="login modal-content rob">
            <div className="login modal-header text-center">
                <h5 className="modal-titl text-center w-100 creategametitle" id="myModalLabel">Join a Ladder Match</h5>
            </div>
        <div className="modal-body list_game">
            <div className="cg-step-1" id="cg-step-1">
                <p>Select a Game</p>
                { this.state.matchfindergames.length > 0?this.state.matchfindergames.map((post) => (
                <img className="choosegame" key={post.game_name} onClick={(e)=>this.chooseGame(post.game_name)} alt="" id={post.game_name} src={gameImages(post.game_name)} />
                )):''}
            </div>
            <div className="cg-step-2" id="cg-step-2"> 
                <p>Select a Platform</p>
                <NavLink to="/all-tournaments-matches" ><img className="chooseplat" onClick={()=>this.choosePlatform('ps4')} alt="" id="ps4" src="https://res.cloudinary.com/dnv0dij0y/image/upload/v1575906102/homepage/Tcgamingassets_5_ge5csr.png" /></NavLink>
                <NavLink to="/all-tournaments-matches" ><img className="chooseplat" onClick={()=>this.choosePlatform('xbox')} alt="" id="xbox" src="https://res.cloudinary.com/dnv0dij0y/image/upload/v1575906102/homepage/Tcgamingassets_6_srfkhu.png" /></NavLink>
                <NavLink to="/all-tournaments-matches" ><img className="chooseplat" onClick={()=>this.choosePlatform('pc')} alt=""  id="pc" src="https://res.cloudinary.com/dnv0dij0y/image/upload/v1575906102/homepage/Tcgamingassets_1_oeabmu.png" /></NavLink>
            </div>
            {/* <div className="cg-step-3">
                <p>Select a Ladder</p>
                <p className="ladder singles">Single Player</p>
                <p className="ladder doubles" id="solo">Solo</p>
                <p className="ladder doubles" id="duos">Duos</p>
            </div> */}
        </div>
        </div>
        </div>
        </div>
        );
    }
}


const mapStateToProps = (state) => ({
    matchfindergamesdata: state.games.data
})
export default connect(mapStateToProps)(Matchfinder);