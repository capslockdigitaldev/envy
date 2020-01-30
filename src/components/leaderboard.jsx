import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getallUserdetails} from "./../store/actions/userActions";
import {getAllgames} from './../store/actions/gamesActions';

class leaderboard extends Component {
   constructor(props) {
      super(props);
      this.state = {
          totaluserItems: '',
          totalgamesdata:'',
          gamename:'CALL OF DUTY MORDERN WARFARE',
          gametotal:'codmwtotal',
          gamewins:'codmwwins',
          gamescore:'codmwscore'
      }
  }
  getleaderdata = (e) => {
   if (e === "codm"){
     this.setState({gamename:"CALL OF DUTY MOBILE",gametotal:e+'total',gamewins:e+'wins', gamescore:e+'score'});
   }
   else if (e === "codaw"){
    this.setState({gamename:"CALL OF DUTY ADVANCE WARFARE",gametotal:e+'total',gamewins:e+'wins', gamescore:e+'score'});
   }
   else if (e === "codbo3"){
     this.setState({gamename:"CALL OF DUTY BLACK OPS 3",gametotal:e+'total',gamewins:e+'wins', gamescore:e+'score'});
   }
   else if (e === "codmw"){
      this.setState({gamename:"CALL OF DUTY MORDERN WARFARE",gametotal:e+'total',gamewins:e+'wins', gamescore:e+'score'});
   } 
   const val = e+'score';
   this.props.dispatch(getallUserdetails(val));
  }
  componentDidMount() {
      this.props.dispatch(getallUserdetails());
      this.props.dispatch(getAllgames());
   }
   componentWillReceiveProps(nextProps) {
      this.setState({
         totaluserItems: nextProps.alluserdata,
         totalgamesdata:nextProps.allgameslist
         });
      }
    render() {
       const {gamewins ,gametotal,gamescore ,gamename } = this.state;
        return (
<div id="mainpage" className="main_box col-md-12 p-0">
    <p id="opensideright"><i className="fas fa-chevron-left"></i> <i className="far fa-comments"></i></p>
    <div className="main-content">
       <div className="container">
          <div className="games-list">
        <div className="tabbable mt-4" id="tabs-937228">
        <ul className="nav nav-tabs">
        {
            this.state.totalgamesdata.length > 0 ? this.state.totalgamesdata.map((post) => (
            <li key={post.game_id} className="nav-item">
               <a className="leader nav-link active" onClick={(e) => this.getleaderdata(post.game_name)} data-toggle="tab">{post.game_title}</a>
            </li>
            )) :''
         }   
            </ul>
            <div className="game-player py-4 mt-4">
               <div className="container">
               <div className="row py-4">
               <div className="col-lg-4 col-md-6 col-sm-12 mt-5">
                  <div className="play-profile second">
                  <div className="text-center">
                  <img className="img-fluid" src="https://res.cloudinary.com/dg3sjwu2p/image/upload/v1580217199/envy/leaderboard%20placeholder/photo_exkawu.png" alt=""/>
                  <h2 className="text-center">IRA MEMBRIT</h2>
                  
                  <div className="mt-2">
                     <span className="pull-left">
                     Games Played<br></br><h2>152</h2>
                     </span>
                     <span className="pull-right">
                      XP Earned<br></br><h2>7682</h2>
                     </span>
                  </div>
                  </div>

                  </div>

                  </div>

                  <div className="col-lg-4 col-md-6 col-sm-12 ">
                  <div className="play-profile third">
                  <div className="text-center">
                  <img className="img-fluid" src="https://res.cloudinary.com/dg3sjwu2p/image/upload/v1580217096/envy/leaderboard%20placeholder/unnamed_v8yrr6.png" alt=""/>
                  <h2 className="text-center">BARRY WINE</h2>
                  
                  <div className="mt-2">
                     <span className="pull-left">
                     Games Played<br></br><h2>152</h2>
                     </span>
                     <span className="pull-right">
                      XP Earned<br></br><h2>7682</h2>
                     </span>
                  </div>
                  </div>

                   </div>
                  </div>
                  <div className="col-lg-4 col-md-6 col-sm-12 mt-5">
                   <div className="play-profile one">
                      <div className="text-center">
                   <img className="img-fluid" src="https://res.cloudinary.com/dg3sjwu2p/image/upload/v1580217236/envy/leaderboard%20placeholder/59489270cc142_thumb900_hfcfzh.jpg" alt=""/>
                  <h2 className="text-center">ROCK O'SHEA</h2>
                 
                  <div className="mt-2">
                     <span className="pull-left">
                     Games Played<br></br><h2>152</h2>
                     </span>
                     <span className="pull-right">
                      XP Earned<br></br><h2>7682</h2>
                     </span>
                  </div>
                  </div>
                   </div>
                  </div>
               </div>
               </div>
            </div>

            <div className="tab-content leaders">
                
                  <div className="tab-pane active" id="fortnite">
                   <div className="player-rank">
                       <div className="row">
                         <table className="table mt-2">
                           
                            <thead>
                               <tr className="new_list_tournament only_headings list_game leadehead">
                            
                                  <th className="border-top-0">PLAYER IMAGE</th>
                                  <th className="border-top-0">PLAYER NAME</th>
                                  <th className="border-top-0">MATCH WON</th>
                                  <th className="border-top-0">MATCH PLAYED</th>
                                  <th className="border-top-0">TOTAL {gamename} XP</th>
                                  </tr>
                                  </thead>
                                 <tbody>
                                    {
                                       this.props.alluserdataloading? 
                                       <tr className="tableloader" colSpan="7"><img className="spinnerloader" src="https://res.cloudinary.com/dg3sjwu2p/image/upload/v1580215115/envy/loader/loading-gif-png-5_q7dgtv.gif"/> </tr>
                                       :
                                       this.state.totaluserItems.length > 0 ? this.state.totaluserItems.map((post) => (
                                          <tr className="table-secondary" key={post.uniquecode}>
                                          <td><img className="rounded-circle"  src="https://res.cloudinary.com/dnv0dij0y/image/upload/v1574946624/profile-picture_smlers.png" alt=""/></td>
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
        <div className="game-list-bg"><img src="/assets/img/games/Bg.jpg" /></div>

    </div>
    </div>
</div>
</div>
         
        );
    }
}

const mapStateToProps = (state) => ({
   alluserdata: state.userDetails.data,
   alluserdataloading : state.userDetails.loading,
   allgameslist:state.games.data
})
export default connect(mapStateToProps)(leaderboard);