import React, { Component } from 'react';
import { NavLink, withRouter } from 'react-router-dom';
import parseJwt from './../store/helpers/common';
import axios from 'axios';
import LoggedinSideNav from './LoggedinSideNav';
class SideNavBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoggedIn: false,
            fetchUser:'',
            propic:'',
            xp:'',
            wallet:'',
            nickname:'',
        }
    }
    componentWillMount() {
        if (localStorage.getItem('token')) {
           this.setState({ isLoggedIn: true });
       }
   }
   
   componentDidMount() {
    const currdetails = parseJwt(localStorage.getItem('token'));
    if (localStorage.getItem('token')) {
        const currid = currdetails.sub;
        let request;
        request = {
            method: 'GET',
            url: `https://xrsports.gg/team/public/user/get-user/${currid}`,
            headers: { 'Content-Type': 'application/json', 'X-Auth-Token': `${localStorage.getItem('token')}` },
          };
        axios(request).then( (response) => {
          this.setState({
            fetchUser: response.data.data,
            propic:response.data.data.profile_pic,
            xp:response.data.data.xp,
            wallet:response.data.data.wallet,
            nickname:response.data.data.nickname
          });
        })
        .catch( (error) => {
          console.log(error);
        });
    }else{}
}

   logout = () => {
    localStorage.clear('token');
    this.setState({ isLoggedIn: !this.state.isLoggedIn, });
    window.location.reload()

    };
    render() {        
        // const activeUrll = window.location.pathname;
        const activeUrl = this.props.location.pathname;
        if(this.state.isLoggedIn === true && activeUrl === '/'){
            return ( <></>);
        }else if(this.state.isLoggedIn === false && activeUrl === '/') {
            return ( <></>);
        }else if(this.state.isLoggedIn === false && activeUrl !== '/'){
            return (
                <>
                    <div className="col-md-12 p-0">
                                <div className="left-sec rob mt-2 d-lg-block d-md-block d-sm-none d-none loggedoutpc">
                                <ul className="logoutuserbar pt-5 pb-4">
                                <NavLink to="/all-matches">
                                <img src="/assets/img/games/View-Games.png" alt=""/>
                                    <li className="d-flex">
                                    
                                <span className="pull-left pr-1"><h4 className="mb-1">PLAY <br/>A MATCH</h4><p>CREATE A MATCH AND <br/>START A COMPETING</p></span>
                                </li></NavLink>
                                <NavLink to="/all-tournaments">
                                <img src="/assets/img/games/View-Games2.png" alt=""/>
                                    
                                    <li className="d-flex">
                                        
                                            <span className="pull-left pr-1"><h4 className="mb-1">JOIN <br/>TOURNAMENT</h4><p>BROWSE OUR UPCOMING<br/>TOURNAMENTS</p></span>
                                        
                                    </li></NavLink>
                                    <NavLink to="/teams" >
                                    <img src="/assets/img/games/View-Games3.png" alt=""/>
                                        <li className="d-flex">
                                     
                                        <span className="pull-left pr-1"><h4 className="mb-1">BUILD <br/>A SQUAD</h4><p>CREATE A TEAM AND <br/>INVITE PLAYERS</p></span>
                                    
                                    </li></NavLink>
                                    <NavLink to="/events" >
                                    <img src="/assets/img/games/View-Games4.png" alt=""/>
                                        <li className="d-flex">
                                        
                                            <span className="pull-left pr-1"><h4 className="mb-1">EVENTS</h4><p>ATTEND LOCAL COMMUNITY<br/> EVENTS IN YOUR CITY</p></span>
                                        
                                    </li></NavLink>
                                    <NavLink to="/rewards" >
                                    <img src="/assets/img/games/View-Games5.png" alt=""/>
                                    <li className="d-flex">
                                    
                                        <span className="pull-left pr-1"><h4 className="mb-1">EXCLUSIVE</h4><p>COMPLETE FOR THE BEST <br/>REWARDS, EVER!</p></span>
                                    
                                    </li></NavLink>
                                </ul>
                                <div className="view-games text-center">

                    <a href={activeUrl} type="button" className="btn btn-outline-primary">{activeUrl === '/games'?'GAMES'
                    :activeUrl === '/all-matches'?'LADDER MATCHES'
                    :activeUrl === '/all-tournaments-matches'?'TOURNAMENT & MATCHES'
                    :activeUrl === '/all-tournaments'?'TOURNAMENTS'
                    :activeUrl === '/teams'?'TEAMS' 
                    :activeUrl === '/active-matches'?'ACTIVE MATCHES' 
                    :activeUrl === '/user-wallet'?'WALLET'
                    :this.props.match.path === '/single-game/:id'?this.props.match.params.id 
                    :activeUrl === '/about-us'?'ABOUT US' 
                    :activeUrl === '/user-faq'?'FAQ' 
                    :activeUrl === '/user-support'?'SUPPORT' 
                    :activeUrl === '/contact-us'?'CONTACT US' 
                    :activeUrl === '/events'?'EVENTS' 
                    :this.props.match.path === '/reward/:id'?'SWAG'
                    :activeUrl === '/leaderboard'?'LEADERBOARD'
                    :activeUrl === '/rewards'?'SWAG' 
                    :activeUrl === '/my-cart'?'MY CART'
                    :activeUrl === '/checkout'?'CHECKOUT'
                    :activeUrl === '/user-profile'?'PROFILE'
                    :activeUrl === '/my-orders'?'MY ORDERS'
                    :activeUrl === '/dashboard'?'DASHBOARD' :''}</a>
                                </div>
                            </div>
                            <div className="left-sec loggedoutphone rob mt-2 d-xl-none d-md-none d-sm-block d-block ">
                               <div id="mySidenav" className="sidenav">
                                <ul className="showafterfsec">
                                   
                                    <span className="pull-left pr-1"><h4><a href="javascript:void(0)" className="closebtn" onClick="closeNav()">&times;</a></h4></span>
                                  
                                    <NavLink to="/all-matches" > <li className="d-flex">
                                          
                                        <span className="pull-left pr-1"><h4>PLAY <br/>A MATCH</h4><p>CREATE A MATCH AND <br/>START A COMPETING</p></span><span className="pull-right"><img src="https://res.cloudinary.com/dnv0dij0y/image/upload/v1574918697/logoutscreenicons/playmatch_w116q6.png" alt=""/></span>
                                    
                                    </li></NavLink>
                                    <NavLink to="/all-tournaments" ><li className="d-flex">
                                        
                                            <span className="pull-left pr-1"><h4>JOIN <br/>TOURNAMENT</h4><p>BROWSE OUR UPCOMING<br/>TOURNAMENTS</p></span><span className="pull-right"><img src="https://res.cloudinary.com/dnv0dij0y/image/upload/v1574918697/logoutscreenicons/jointournament_xsfg71.png" alt=""/></span>
                                        
                                    </li></NavLink>
                                    <NavLink to="/teams" > <li className="d-flex">
                                     
                                        <span className="pull-left pr-1"><h4>BUILD <br/>A SQUAD</h4><p>CREATE A TEAM AND <br/>INVITE PLAYERS</p></span><span className="pull-right"><img src="https://res.cloudinary.com/dnv0dij0y/image/upload/v1574918697/logoutscreenicons/buildsquad_he7gyw.png" alt=""/></span>
                                    
                                    </li></NavLink>
                                    <NavLink to="/events" ><li className="d-flex">
                                        
                                            <span className="pull-left pr-1"><h4>EVENTS</h4><p>ATTEND LOCAL COMMUNITY<br/> EVENTS IN YOUR CITY</p></span><span className="pull-right"><img src="https://res.cloudinary.com/dnv0dij0y/image/upload/v1574918697/logoutscreenicons/events_jictsk.png" alt=""/></span>
                                        
                                    </li></NavLink>
                                    <NavLink to="/rewards" ><li className="d-flex">
                                    
                                        <span className="pull-left pr-1"><h4>EXCLUSIVE</h4><p>COMPLETE FOR THE BEST <br/>REWARDS, EVER!</p></span><span className="pull-right"><img src="https://res.cloudinary.com/dnv0dij0y/image/upload/v1574918697/logoutscreenicons/exclusive_z2lggz.png" alt=""/></span>
                                    
                                    </li></NavLink>
                               
                                    <li className="d-flex lsbuttons">
                                        <a id="modal-464146" href="#modal-container-464146" role="button" data-toggle="modal">Log in</a> 
                                        <a id="modal-509828" href="#modal-container-509828" role="button" data-toggle="modal">Sign up</a>
                                    </li>
                                </ul>
                                </div>
                            </div>
                </div>
                
                </>
            );
        }else if(this.state.isLoggedIn === true && activeUrl !== '/'){
            return (
                <>
                 <div className="container">
            <div className="left-sec rob mt-2 d-lg-block d-md-block d-sm-none d-none">
                {/* <LoggedinSideNav/> */}
                    <div className="profileinfo text-center">
                            <div className="_bucks">
                                <div className="profile-left">
                                    <div className="outter">
                                        <div className="inner">
                                        {this.state.propic === '' || this.state.propic === null ||this.state.propic === '0' || this.state.propic === 'undefined'?<img className="gunimage" src="https://res.cloudinary.com/dnv0dij0y/image/upload/v1574946624/profile-picture_smlers.png"  alt=""/>:<img className="gunimage" src = {`https://xrsports.gg/team/public/profileimages/${this.state.propic}`}  alt=""/>} 
                                       </div> 
                                    </div> 
                                </div>
                                
                                <div className="profile-right">
                                     <h2 className="user_name"><strong>{this.state.nickname}</strong>
        				            </h2>  
                                    <br></br> 
                                </div>
                            
                            </div>	
                            <div className="_bucks" id="bck">
                                <div className="nv-bucks">
                            NV Bucks
                            <div className="tooltippp"><i className="fa fa-info-circle ml-2" aria-hidden="true"></i>
                                  <span className="tooltippptext">You can add NV Bucks to your wallet using a credit/debit card that can be used to play tournaments and win exciting rewards.</span>
                                </div>
                                
                                    <h2>
                                        <strong> {this.state.wallet === '' || this.state.wallet === 'null' || this.state.wallet === '0'?'0':`${this.state.wallet}`} </strong>
                                    </h2>
                            </div>
                            </div>
                            <div className="_bucks">
                            <div className="nv-bucks">
                                XP
                                <div className="tooltipp"><i className="fa fa-info-circle ml-2" aria-hidden="true"></i>
                                  <span className="tooltipptext">XP's are the Experience Points, User gets XP's When he/she wins or particiate in a ladder match or tournament.</span>
                                </div>
                                
                                <h2>{this.state.xp === '' || this.state.xp === 'null'|| this.state.xp === '0'?'0':`${this.state.xp}`}</h2>
                              </div>
                              </div>
                             <div className="_bucks mt-4">
                             <div className="mt-3" onClick={() => this.logout()}>
     <i className="fas fa-power-off"></i>
                </div>

                             </div>
                    </div>
                    
                    <ul className="usermenutwo">
                        
                    <NavLink to="/user-profile"><li className="d-flex align-items-center justify-content-center">
                            PROFILE
                        </li></NavLink>
                        <NavLink to="/dashboard" ><li className="d-flex align-items-center justify-content-center">
                         DASHBOARD<p></p>
                        </li></NavLink>
                        <NavLink to="/teams" ><li className="d-flex align-items-center justify-content-center">
                        TEAMS
                        </li></NavLink>
                        <NavLink to="/active-matches" ><li className="d-flex align-items-center justify-content-center">
                          ACTIVE MATCHES<p></p>
                        </li></NavLink>
                        <NavLink to="/user-wallet" ><li className="d-flex align-items-center justify-content-center">
                           WALLET
                        </li></NavLink>
                     
                        
                    </ul>
            <div className="view-games text-center"><a href={activeUrl} type="button" className="btn btn-outline-primary">{activeUrl === '/games'?'GAMES'
        :activeUrl === '/all-matches'?'LADDER MATCHES'
        :activeUrl === '/all-tournaments-matches'?'TOURNAMENT & MATCHES'
        :activeUrl === '/all-tournaments'?'TOURNAMENTS'
        :activeUrl === '/teams'?'TEAMS' 
        :activeUrl === '/active-matches'?'ACTIVE MATCHES' 
        :activeUrl === '/user-wallet'?'WALLET'
        :this.props.match.path === '/single-game/:id'?this.props.match.params.id === 'codmw'?'call of duty modern warfare': this.props.match.params.id === 'codaw'?'call of duty advance warfare': this.props.match.params.id === 'codm'?'call of duty mobile':'call of duty black ops III'
        // :this.props.match.path === '/single-game/codmw'?'call of duty modern warfare'
        :this.props.match.path === '/reward/:id'?'SWAG'
        :activeUrl === '/about-us'?'ABOUT US' 
        :activeUrl === '/user-faq'?'FAQ' 
        :activeUrl === '/user-support'?'SUPPORT' 
        :activeUrl === '/contact-us'?'CONTACT US' 
        :activeUrl === '/events'?'EVENTS' 
        :activeUrl === '/leaderboard'?'LEADERBOARD'
        :activeUrl === '/rewards'?'SWAG' 
        :activeUrl === '/my-cart'?'MY CART'
        :activeUrl === '/my-orders'?'MY ORDERS'
        :activeUrl === '/checkout'?'CHECKOUT'
        :activeUrl === '/user-profile'?'PROFILE'
        :activeUrl === '/dashboard'?'DASHBOARD' :''}</a></div>
                </div>	
                </div>
       </>
       );   
    }
        
    }
}

export default withRouter(SideNavBar);


