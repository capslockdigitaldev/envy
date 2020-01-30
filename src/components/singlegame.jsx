import React, { Component } from 'react';
import { connect } from 'react-redux';
import {getSinglegame} from './../store/actions/gamesActions';
import { getallUserdetails} from "./../store/actions/userActions";
import {getSpecificMatches} from './../store/actions/matchActions';
import {getSpecificTours} from './../store/actions/tournamentsActions';
import {gamePlatformName ,gametourBanners}  from './../store/helpers/common';

import {NavLink } from 'react-router-dom';

class singlegame extends Component {
    constructor(props) {
        super(props);
        const gamename = this.props.match.params.id;
        this.state = {
            totalItems: '',
            flipped:false,
            rules:'',
            description:'',
            gname:gamename,
            displayname:'',
            specificmatch:'',
            leaderboarddata:'',
            tourdata:'',
            singlegamesdata:''
            
        };
    }
    componentDidMount() {
        
        const gamename = this.props.match.params.id;
        const gamescore = gamename+'score';
        document.title = 'match';
        this.props.dispatch(getSinglegame(gamename));
        this.props.dispatch(getSpecificMatches(gamename));
        this.props.dispatch(getSpecificTours(gamename));
        this.props.dispatch(getallUserdetails(gamescore));
    }
    
    componentWillReceiveProps(nextProps) {
        this.setState({
             specificmatch: nextProps.allmatchesdata,
             tourdata:nextProps.alltournamentsdata,
             leaderboarddata:nextProps.alluserdata,
             singlegamesdata:nextProps.gamesdata,
            rules:nextProps.gamesdata.rules,
            description:nextProps.gamesdata.description,
            gname:nextProps.gamesdata.game_name,
            displayname:nextProps.gamesdata.game_title,

        });
    }
    render() {
        const gamename = this.props.match.params.id;
        const gamescore = gamename+'score';
        const gametotal = gamename+'total';
        const gamewins = gamename+'wins';
        const {rules,description,gname,displayname,specificmatch} = this.state;
        return (
        <div className="container">            
            <div id="mainpage" className="singlegame main_box col-md-12 p-0">
                                        <div className="tab-dec banner_tourr">
                                        
                                        <img src={gametourBanners(gname)}  alt=""/>
                                                                            
                                    </div>
                <div className="tabbable details" id="tabs-454262215">
                            <ul className="nav nav-tabs my-4">
                                <li className="nav-item">
                                    <a className="nav-link active" href="#details1" data-toggle="tab">DESCRIPTION</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#details2" data-toggle="tab">RULES</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#details3" data-toggle="tab">MATCHES</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#details4" data-toggle="tab">TOURNAMENTS</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#details5" data-toggle="tab">LEADERBOARD</a>
                                </li>
                            </ul>
                            
                            <div className="tab-content singlegameinfo">
                                    
                                    <div className="tab-pane active pl-4" id="details1">
                <h3>{description}</h3>
                                    </div>
                                    
                                    <div className="tab-pane pl-4" id="details2">
                                        <h2><strong>Community Rules</strong></h2>
                                        {rules}
                                    </div>
                                    <div className="tab-pane pl-4" id="details3">
                                        <div className="row games-list">
                            <table className="table mt-2">
                                            
                                <tr className="new_list_tournament only_headings list_game leadehead">
                                        <th>Game</th>
                                        <th>Platform</th>
                                        <th>Created By</th>
                                        <th>Created On</th>
                                        <th>Join</th>
                                </tr> 
                            
                                {
                                    specificmatch.length > 0 ? specificmatch.map((post) => (
                                        <tr key={post.match_id} className="new_list_tournament list_game  ">
                                            <td>{post.game}</td>
                                            <td><img className="laddermatchlogo" src= {gamePlatformName(post.platform)}  alt=""/></td>
                                            <td>{post.player1}</td>
                                            <td>{post.date}</td>
                                            <td><NavLink to = {`/single-match/${post.match_id}`}>Join</NavLink></td>
                                        </tr>
                                        )) :<tr><td colSpan="7" align="center"><p>No matches</p></td></tr>}
                                                                                            </table>    
                        </div>
                                        
                                        
                                    </div>
                                    <div className="tab-pane pl-4" id="details4">
                                    <div className="row games-list">
                                <table className="table mt-2 mb-5">
                                            <thead><tr className="new_list_tournament only_headings list_game leadehead">
                                                    <th>Name</th>
                                                    <th>Entries</th>
                                                    <th>Entry Fee</th>
                                                    <th>Prize Pool</th>
                                                    <th>Live in</th>
                                                    <th>Entry ends</th>
                                                    <th>Join</th>
                                            </tr> </thead> 
                                        <tbody> {
                                    this.state.tourdata.length > 0 ? this.state.tourdata.map((post) => (
                                        <tr key={post.tour_id} className="new_list_tournament list_game  ">
                                            <td  className="floatname">{post.tour_name}<img className="laddermatchlogo" src= {gamePlatformName(post.platform)}  alt=""/></td>
                                            <td>{post.joined}</td>
                                            <td><i className="fas fa-coins"></i>{post.price}Envy Bucks</td>
                                            <td>${post.prizepool}</td>
                                            <td>{post.tour_start_date}</td>
                                            <td>{post.reg_close_date}</td>
                                            <td><NavLink to = {`/single-tournament/${post.tour_id}`}>Join</NavLink></td>
                                        </tr>
                                        )) :<tr><td colSpan="7" align="center"><p>No matches</p></td></tr>
                                }  
                                </tbody>   
                                </table>
                                </div>
                                    </div>
                                    <div className="tab-pane" id="details5">
                                        <div className="tab-content leaders">
                                            <div className="player-rank">
                                                <div className="row games-list">
                                                    <table className="table mt-2">
                                                        <thead>
                                                            <tr className="new_list_tournament only_headings list_game rob leadehead">
                                                                <th className="border-top-0">PLAYER IMAGE</th>
                                                                <th className="border-top-0">PLAYER NAME</th>
                                                                <th className="border-top-0">MATCH WON</th>
                                                                <th className="border-top-0">MATCH PLAYED</th>
                                                                <th className="border-top-0">TOTAL {displayname} XP</th>
                                                            </tr>
                                                        </thead>    
                                                        <tbody>
                                                        {
                                                                this.state.leaderboarddata.length > 0 ? this.state.leaderboarddata.map((post) => (
                                                                
                                                                <tr class="table-secondary" key={post.uniquecode}>
                                                                <td><img className="rounded-circle"  src="https://tcgaming.gg/wp-content/uploads/2019/12/tcglogo.png" alt=""/></td>
                                                                <td> {post.nickname}</td>
                                                                {gamewins === 'codawwins'?<td>{post.codawwins}</td>:gamewins === 'codbo3wins'?<td>{post.codbo3wins}</td>:gamewins === 'codmwins'?<td>{post.codmwins}</td>:gamewins === 'codmwwins'?<td>{post.codmwwins}</td>:<td></td>}
                                                                {gametotal === 'codmwtotal'?<td>{post.codmwtotal}</td>:gametotal === 'codawtotal'?<td>{post.codawtotal}</td>:gametotal === 'codbo3total'?<td>{post.codbo3total}</td>:gametotal === 'codmtotal'?<td>{post.codmtotal}</td>:<td></td>}
                                                                {gamescore === 'codmwscore'?<td>{post.codmwscore}</td>:gamescore === 'codawscore'?<td>{post.codawscore}</td>:gamescore === 'codbo3score'?<td>{post.codbo3score}</td>:gamescore === 'codmscore'?<td>{post.codmscore}</td>:<td></td>}
                                                            </tr>
                                                                )) :''
                                                            }
                                                                                                
                                                        </tbody>
                                                    </table>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                        
                                
                                
                                
                                </div>
                        </div>
        </div>
        </div>     
        );
    }
}

const mapStateToProps = (state) => ({
    gamesdata: state.games.singlegamedata,
    allmatchesdata: state.match.data,
    alluserdata: state.userDetails.data,
    alltournamentsdata: state.tournaments.data

})
export default connect(mapStateToProps)(singlegame);