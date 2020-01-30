import React, { Component } from 'react';
import { withRouter } from 'react-router';
import {NavLink} from 'react-router-dom';
import Login from '../components/Login';
import Signup from '../components/Signup';
import Matchfinder from '../components/Matchfinder';
class Footer extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    refreshIt = (e)=>{
        this.props.history.push(e)
        window.location.reload()
    } 
    render() {
        const d = new Date();
        const n = d.getFullYear();
        const activeUrl = this.props.location.pathname;
        return (
            <>
            {
                activeUrl  === '/'?
<footer className="pt-0 pb-0 rob">
            <div className="container">
            <div className="footer-border-sec">
            <div className="row">
           
                
            <div className="custom_foot col-lg-3 col-md-6 col-sm-6">
            <h2><i className="fa fa-square-full"></i>PLAY</h2>
            <ul>
            <li>
            <NavLink to="/games" >View Games</NavLink>
            </li>
            <li>
            {/* <NavLink to="/all-matches" ><i className="far fa-circle"></i>Matchfinder</NavLink> */}
           <a id="modal-509222" href="#modal-container-509222" role="button" data-toggle="modal">Matchfinder</a>
            </li>
            <li>
            <NavLink to="/all-matches" >All Matches</NavLink>
            </li>
            <li>
            <NavLink to="/all-tournaments" >All Tournaments</NavLink>
            </li>
            <li>
            <NavLink to="/leaderboard" >Leaderboards</NavLink>
            </li>
            <li>
            <NavLink to="/events" >Events</NavLink>
            </li>
            </ul>
            </div>
            
            <div className="custom_foot col-lg-3 col-md-6 col-sm-6">
            <h2><i className="fa fa-square-full"></i>LEARN</h2>
            <ul>
            <li>
            <NavLink to="/about-us" >About</NavLink>
            </li>
            <li>
            <NavLink to="/user-faq" >Rules</NavLink>
            </li>
            <li>
            <NavLink to="/user-faq" >FAQ'S</NavLink>
            </li>
            <li>
            <NavLink to="/user-support" >Support</NavLink>
            </li>
            <li>
            <NavLink to="/contact-us" >Contact</NavLink>
            </li>
            <li>
            <NavLink to="/user-faq" >Affiliate Program</NavLink>
            </li>
            </ul>
            </div>
            <div className="custom_foot col-lg-3 col-md-6 col-sm-6">
            <h2><i className="fa fa-square-full"></i>POPULAR GAMES</h2>
            <ul>
            <li>
            <NavLink to="/single-game/codmw" onClick={()=>this.refreshIt('/single-game/codmw')}>Call of Duty Modern Warfare</NavLink>
            </li>
            <li>
            <NavLink to="/single-game/codaw" onClick={()=>this.refreshIt('/single-game/codaw')}>Call of Duty Advance Warfare</NavLink>
            </li>
            <li>
            <NavLink to="/single-game/codm" onClick={()=>this.refreshIt('/single-game/codm')}>Call of Duty Mobile</NavLink>
            </li>
            <li>
            <NavLink to="/single-game/codbo3" onClick={()=>this.refreshIt('/single-game/codbo3')}>Call of Duty Black Ops 3</NavLink>
            </li>
            </ul>
            </div>
            <div className="custom_foot col-lg-3 col-md-6 col-sm-6">
            <h2><i className="fa fa-square-full"></i>CONNECT</h2>
            <ul>
            <li>
            <NavLink to="/dashboard" > My Stream</NavLink>
            </li>
            <li>
            <NavLink to="/dashboard" > Team Stream</NavLink>
            </li>
            <li>
            <NavLink to="/dashboard" >Bracket Generator</NavLink>
            </li>
            <li>
            <NavLink to="/dashboard" >View Brackets</NavLink>
            </li>
            </ul>
            </div>
            <div className="lowerfooter py-2 align-items-center d-flex justify-content-center">
            <div className="left_footer">
            <div className="footer_socials w-100">
            {/* <h2>SOCIAL</h2> */}
            <ul className="align-items-center d-flex justify-content-center text-center mb-0">
            <li>
            <a target="_blank" href="https://twitter.com/envy"><i className="fab fa-twitter"></i></a>
            </li>
            <li>
            <a target="_blank" href="https://www.facebook.com/Envy"><i className="fab fa-facebook-f"></i></a>
            </li>
            <li>
            <a target="_blank" href="https://www.twitch.tv/team/teamenvyus"><i className="fab fa-twitch"></i></a>
            </li>
            <li>
            <a target="_blank" href="https://www.youtube.com/user/TeamEnVyUs"><i className="fab fa-youtube"></i></a>
            </li>
            <li>
            <a target="_blank" href="https://www.instagram.com/teamenvy"><i className="fab fa-instagram"></i></a>
            </li>
            </ul>
            </div>
            </div>
            <div className="right_footer text-center">
            <img className="img-fluid m-4 footer_logo" src="/assets/img/games/foot-logo.png" alt=""/>
            </div>
      
            </div>
            </div>
            </div>
            <div className="copy-right">
            <div className="pull-left  align-items-center d-flex justify-content-center mt-2">
            <p><small>© {n} TEAM ENVY</small></p>
            </div>
            <span className="pull-right  align-items-center d-flex justify-content-center">
                <ul className="pl-0">
                    <li><a href="">Contact</a></li>
                    <li><a href="">About</a></li>
                    <li><a href="">Join Us</a></li>
                    <li><a href="">Terms Of Service</a></li>
                    <li><a href="">Privacy Policy</a></li>


                </ul>
            </span>
            </div>
            </div>
       
            </footer>:
            <footer className="pt-0 pb-0 rob">
            <div className="container">
            <div className="footer-border-sec">
            <div className="row">
           
                
            <div className="custom_foot col-lg-3 col-md-6 col-sm-12">
            <h2><i className="fa fa-square-full"></i>PLAY</h2>
            <ul>
            <li>
            <NavLink to="/games" >View Games</NavLink>
            </li>
            <li>
            {/* <NavLink to="/all-matches" ><i className="far fa-circle"></i>Matchfinder</NavLink> */}
           <a id="modal-509222" href="#modal-container-509222" role="button" data-toggle="modal">Matchfinder</a>
            </li>
            <li>
            <NavLink to="/all-matches" >All Matches</NavLink>
            </li>
            <li>
            <NavLink to="/all-tournaments" >All Tournaments</NavLink>
            </li>
            <li>
            <NavLink to="/leaderboard" >Leaderboards</NavLink>
            </li>
            <li>
            <NavLink to="/events" >Events</NavLink>
            </li>
            </ul>
            </div>
            
            <div className="custom_foot col-lg-3 col-md-6 col-sm-12">
            <h2><i className="fa fa-square-full"></i>LEARN</h2>
            <ul>
            <li>
            <NavLink to="/about-us" >About</NavLink>
            </li>
            <li>
            <NavLink to="/user-faq" >Rules</NavLink>
            </li>
            <li>
            <NavLink to="/user-faq" >FAQ'S</NavLink>
            </li>
            <li>
            <NavLink to="/user-support" >Support</NavLink>
            </li>
            <li>
            <NavLink to="/contact-us" >Contact</NavLink>
            </li>
            <li>
            <NavLink to="/user-faq" >Affiliate Program</NavLink>
            </li>
            </ul>
            </div>
            <div className="custom_foot col-lg-3 col-md-6 col-sm-12">
        
            <h2><i className="fa fa-square-full"></i>POPULAR GAMES</h2>
            <ul>
            <li>
            <NavLink to="/single-game/codmw" onClick={()=>this.refreshIt('/single-game/codmw')}>Call of Duty Modern Warfare</NavLink>
            </li>
            <li>
            <NavLink to="/single-game/codaw" onClick={()=>this.refreshIt('/single-game/codaw')}>Call of Duty Advance Warfare</NavLink>
            </li>
            <li>
            <NavLink to="/single-game/codm" onClick={()=>this.refreshIt('/single-game/codm')}>Call of Duty Mobile</NavLink>
            </li>
            <li>
            <NavLink to="/single-game/codbo3" onClick={()=>this.refreshIt('/single-game/codbo3')}>Call of Duty Black Ops 3</NavLink>
            </li>
            </ul>
            </div>
            <div className="custom_foot col-lg-3 col-md-6 col-sm-12">
            <h2><i className="fa fa-square-full"></i>CONNECT</h2>
            <ul>
            <li>
            <NavLink to="/dashboard" > My Stream</NavLink>
            </li>
            <li>
            <NavLink to="/dashboard" > Team Stream</NavLink>
            </li>
            <li>
            <NavLink to="/dashboard" >Bracket Generator</NavLink>
            </li>
            <li>
            <NavLink to="/dashboard" >View Brackets</NavLink>
            </li>
            </ul>
            </div>
            <div className="lowerfooter py-2 align-items-center d-flex justify-content-center">
            <div className="left_footer">
            <div className="footer_socials w-100">
            {/* <h2>SOCIAL</h2> */}
            <ul className="align-items-center d-flex justify-content-center text-center mb-0">
            <li>
            <a target="_blank" href="https://twitter.com/envy"><i className="fab fa-twitter"></i></a>
            </li>
            <li>
            <a target="_blank" href="https://www.facebook.com/Envy"><i className="fab fa-facebook-f"></i></a>
            </li>
            <li>
            <a target="_blank" href="https://www.twitch.tv/team/teamenvyus"><i className="fab fa-twitch"></i></a>
            </li>
            <li>
            <a target="_blank" href="https://www.youtube.com/user/TeamEnVyUs"><i className="fab fa-youtube"></i></a>
            </li>
            <li>
            <a target="_blank" href="https://www.instagram.com/teamenvy"><i className="fab fa-instagram"></i></a>
            </li>
            </ul>
            </div>
            </div>
            <div className="right_footer text-center">
            <img className="img-fluid m-4 footer_logo" src="/assets/img/games/foot-logo.png" alt=""/>
            </div>
      
            </div>
            </div>
            </div>
            <div className="copy-right">
            <div className="pull-left  align-items-center d-flex justify-content-center mt-2">
            <p><small>© {n} TEAM ENVY</small></p>
            </div>
            <span className="pull-right  align-items-center d-flex justify-content-center">
                <ul className="pl-0">
                    <li><a href="">Contact</a></li>
                    <li><a href="">About</a></li>
                    <li><a href="">Join Us</a></li>
                    <li><a href="">Terms Of Service</a></li>
                    <li><a href="">Privacy Policy</a></li>


                </ul>
            </span>
            </div>
            </div>
       
            </footer>
            }
            


<div className="modal fade" id="modal-container-509789999" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
    <div className="logo-image text-center">
    <img className="img-fluid footer_logo" src="/assets/img/games/foot-logo.png" alt=""></img>
        {/* <img src="https://res.cloudinary.com/dnv0dij0y/image/upload/v1574922448/logo/tcgaminglogo_l1jssw.png" alt="" className="img-fluid"/> */}
    </div>
    <div className="login team modal-dialog ladder-filter" role="document">
        <div className="login modal-content">
            <div className="login modal-header text-center">
                <h5 className="modal-titl text-center w-100 creategametitle" id="myModalLabel">Submit Result</h5>
            </div>
        <div className="modal-body list_game">
            <form method="post" action="/user-support/">
                <div className="cg-step-1">
                    <p>Select a Game</p>
                    <div className="ressub" id="toursubmitres"><input type="hidden" className="selectedmatchtour" name="selectedmatch" value="tournament" disabled /><h2><i className="fas fa-trophy"></i> Tournament</h2></div>
                    <div className="ressub" id="laddersubmitres"><input type="hidden" className="selectedmatchladder" name="selectedmatch" value="ladder" disabled /><h2><i className="fas fa-gamepad"></i> Ladder Match</h2></div>
                </div>
            <div className="cg-step-2">
                <div className="postTitleOuter">
                    <label>Tournament Id</label>
                    <input type="text" name="tourid" className="tourid" required />
                    <input type="hidden" name="submittedby" />
                </div>
                <div className="postTitleOuter">
                    <label>Round Number</label>
                    <input type="number" name="roundno" className="roundno" required />
                </div>
                <div className="postTitleOuter">
                    <label>Score</label>
                    <input type="number" name="tourscore" className="tourscore" required />
                </div>
                <div className="postTitleOuter">
                    <label></label>
                    <input type="submit" id="toursubmitresbtn" name="submitscore" disabled />
                </div>
            </div>
            <div className="cg-step-3">
                <div className="postTitleOuter">
                    <label>Match Id</label>
                    <input type="text" name="matchid" className="matchid" required />
                    <input type="hidden" name="submittedby" />
                </div>
                <div className="postTitleOuter">
                    <label>Score</label>
                    <input type="number" name="matchscore" className="matchscore" required />
                </div>
                <div className="postTitleOuter">
                    <label></label>
                    <input type="submit" id="laddersubmitresbtn" name="submitscore" disabled />
                </div>
            </div>
            </form>
        </div>
        </div>
    </div>
</div>
<div className="modal fade" id="modal-container-50778" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
    <div className="logo-image text-center">
    <img className="img-fluid footer_logo" src="/assets/img/games/foot-logo.png" alt=""></img>
        {/* <img src="https://res.cloudinary.com/dnv0dij0y/image/upload/v1574922448/logo/tcgaminglogo_l1jssw.png" alt="" className="img-fluid" /> */}
    </div>
    <div className="modal-dialog" role="document">
        <div className="modal-content rob">
            <div className="modal-header text-center">
                <h5 className="modal-titl text-center w-100 creategametitle" id="myModalLabel">Report an issue</h5>
            </div>
        <div className="modal-body create_match">
   
            <form method="post" name="supportform" action="">
            <div className="postTitleOuter">
            <label>Username</label>
            <input type="hidden" name="support_raisedby" value="" />
            <input type="text" name="support_username" value="" readOnly />
            <br/>
            <label>Type</label>
            <select name="matchtype" className="matchtype">
                <option value="match">Ladder Match</option>
                <option value="tournament">Tournament</option>
                <option value="other">Other</option>
            </select>
            <br/>
            <div id="ticketmatchid">
            <label>Match/Tournament ID</label>
            <input type="text" name="support_matchid" />
            {/* <input type="text" name="support_matchid"  readOnly />
            <input type="text" name="support_matchid"  readOnly /> */}
            </div>
            <label>Describe the Issue</label>
            <input type="text" id="supportissue" name="support_issue" placeholder="Go ahead we are listening..." />
            <input type="Submit" name="submitticket" />
            </div>
            </form>
        </div>
        </div>
    </div>
</div>

<Matchfinder/>
<Login/>
<Signup/>

        </>
        );
    }
}

export default withRouter(Footer);