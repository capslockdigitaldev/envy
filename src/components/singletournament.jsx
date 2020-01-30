import React, { Component } from 'react';
import { connect } from 'react-redux';
import {getSingleTour } from './../store/actions/tournamentsActions';
import parseJwt , {gameName , gamePlatformName , gameImages, gametourBanners ,userData}  from './../store/helpers/common';
import { getUserdetails} from "./../store/actions/userActions";


class singletournament extends Component {
    constructor(props) {
        
        super(props);
        this.state = {
            creatorid:'',
            isLoggedIn: false,
            totalItems: '',
            alltourdata:'',
            tour_id: '',
            tour_name: '',
            game: '',
            platform: '',
            price: '',
            type: '',
            bracket_type: '',
            reg_open_date: '',
            reg_close_date:'',
            tour_start_date:'',
            tour_end_date:'',
            brackets: '',
            time:'',
            sponsor_name:'',
            sponsor_image:'',
            joined:'',
            exclusive_tournament:'',
            prizeone: '',
            prizetwo: '',
            prizethree: '',
            prizeimage:'',
            prizepool: '',
            prize_type:'',
            prize:'',
            reward1name:'',
            reward1image:'',
            reward2name:'',
            reward2image:'',
            reward3name:'',
            reward3image:'',
            rules:'',
            description:'',
            facebook:'',
            youtube:'',
            twitter:'',
            instagram:'',
            loggedinuserpsnid:'',
            loggedinuserxboxid:'',
            loggedinuserpccodbo3:'',
            loggedinuserpccodm:'',
            loggedinuserpccodaw:'',
            loggedinuserpccodmw:'',
        };
    }
    componentDidMount() {
        const tourid = this.props.match.params.id;
        document.title = 'match';
        this.props.dispatch(getSingleTour(tourid));
        if (localStorage.getItem('token')) {
            const currdetails = parseJwt(localStorage.getItem('token'));
            const currid = currdetails.sub;
            this.setState({ isLoggedIn: true , creatorid: currid});
            this.props.dispatch(getUserdetails(currid));
        }
    }
    componentWillReceiveProps(nextProps) {
        this.setState({
            loggedinuserpsnid:nextProps.userdata.psnid,
            loggedinuserxboxid:nextProps.userdata.xboxid,
            loggedinuserpccodbo3:nextProps.userdata.pccodbo3,
            loggedinuserpccodm:nextProps.userdata.pccodm,
            loggedinuserpccodaw:nextProps.userdata.pccodaw,
            loggedinuserpccodmw:nextProps.userdata.pccodmw,

            // alltourdata:nextProps.singletournamentdata,
            tour_id: nextProps.singletournamentdata.tour_id,
            tour_name: nextProps.singletournamentdata.tour_name,
            game: nextProps.singletournamentdata.game,
            platform: nextProps.singletournamentdata.platform,
            price: nextProps.singletournamentdata.price,
            type: nextProps.singletournamentdata.type,
            bracket_type: nextProps.singletournamentdata.bracket_type,
            reg_open_date: nextProps.singletournamentdata.reg_open_date,
            reg_close_date:nextProps.singletournamentdata.reg_close_date,
            tour_start_date:nextProps.singletournamentdata.tour_start_date,
            tour_end_date:nextProps.singletournamentdata.tour_end_date,
            brackets: nextProps.singletournamentdata.brackets,
            time:nextProps.singletournamentdata.time,
            sponsor_name:nextProps.singletournamentdata.sponsor_name,
            sponsor_image:nextProps.singletournamentdata.sponsor_image,
            joined:nextProps.singletournamentdata.joined,
            exclusive_tournament:nextProps.singletournamentdata.exclusive_tournament,
            prizeone: nextProps.singletournamentdata.prizeone,
            prizetwo: nextProps.singletournamentdata.prizetwo,
            prizethree: nextProps.singletournamentdata.prizethree,
            prizeimage:nextProps.singletournamentdata.prizeimage,
            prizepool: nextProps.singletournamentdata.prizepool,
            prize_type:nextProps.singletournamentdata.prize_type,
            prize:nextProps.singletournamentdata.prize,
            reward1name:nextProps.singletournamentdata.reward1name,
            reward1image:nextProps.singletournamentdata.reward1image,
            reward2name:nextProps.singletournamentdata.reward2name,
            reward2image:nextProps.singletournamentdata.reward2image,
            reward3name:nextProps.singletournamentdata.reward3name,
            reward3image:nextProps.singletournamentdata.reward3image,
            rules:nextProps.singletournamentdata.rules,
            description:nextProps.singletournamentdata.description,
            facebook:nextProps.singletournamentdata.facebook,
            youtube:nextProps.singletournamentdata.youtube,
            twitter:nextProps.singletournamentdata.twitter,
            instagram:nextProps.singletournamentdata.instagram,
        });
    }
    render() {
        console.log(this.state)
        const {isLoggedIn,tour_id,tour_name,game,platform,price,type,bracket_type,reg_open_date,reg_close_date,tour_start_date,tour_end_date,brackets,time,sponsor_name,sponsor_image,joined,exclusive_tournament,prizeone,prizetwo,prizethree,prizeimage,prizepool,prize_type,prize,reward1name,reward1image,reward2name,reward2image,reward3name,reward3image,rules,description,facebook,youtube,twitter,instagram} = this.state;
        const {loggedinuserpsnid,loggedinuserxboxid,loggedinuserpccodmw , loggedinuserpccodbo3,loggedinuserpccodaw,loggedinuserpccodm, } = this.state;
        return (
<div id="mainpage" className="main_box col-md-12 p-0">
  <div className="main-content frontline mt-3">
        <h2 className="commonheading">{tour_name} - {sponsor_name} <span>Match ID: {tour_id}</span></h2>
            <div className="sponsors">
                <div className="eachsponsorbanner">
                    <img src="https://tcgaming.gg/wp-content/uploads/2019/12/11950293639658785008-1-1.png" alt=""/>
                </div>
            </div>
                       <div className="tabb">
                <div className="tabbable" id="tabs-937228">
                    <ul className="nav nav-tabs">
                        <li className="nav-item">
                            <a className="nav-link active" href="#front1" data-toggle="tab">OVERVIEW</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#front2" data-toggle="tab">REGISTER</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#front3" data-toggle="tab">BRACKETS</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#front4" data-toggle="tab">MEDIA</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#front5" data-toggle="tab">INVITE</a>
                        </li>
                    </ul>
                    <div className="tab-content">
                        <div className="tab-pane active" id="front1">
        				    <div className="tab-dec banner_tour">
        				        
                                <img src={gametourBanners(game)}  alt=""/>                                
                                        <div className=" p-2"><p>{description}</p>
                                </div>
                			</div>
        				</div>
    		            <div className="tab-pane" id="front2">
    					    <div className="tab-dec">
                                {
                                    isLoggedIn ?''
                                    :
                                    <div className="join tournamnet"><p className="error">You Must Be Logged In to Join This Tournament!</p></div>
                                }
    					        
    					    </div>
    					</div>
    					<div className="tab-pane" id="front3">
    				        <div className="tab-dec">
                                <div className="newbrack" id="">
                                    <main id="">    
                                    <a href className="viewbrack">View Bracket</a>
                                                    <div className="col-md-12 col-sm-12 col-12 info_box alltour dark">
                                                        
                                                         <div className="main-content phonemargin">
                                                    <div className ="zoombutton">
                                                        <span className="zoomIn">Zoom In</span>
                                                        <span className="zoomOff">Regular</span>
                                                        <span className="zoomOut">Zoom Out</span>
                                                    </div>
                                            		<div className="dragscroll" id="divpnlChart">
                                            		    <main className="publictours singlebracket">
                                            <div className="publickbrackkrounds roundnumber1">
                                                                                    
                                            <div className="roundinfo">Round 1</div>
                                        <div className="eachbracket topbracket first">
                                ----                                                                                                            
                                    <div className="resultpop-up" id="round1submitresult1">
                                        <input type="text" className="popopen" name="round1submitresult1" value="X" />
                                        <form className="result" action="#" method="post">
                                            <input type="text" className="hidden" name="postid" value="4630" />
                                            <input type="text" className="hidden" name="myresultfield" value="bracket1result" />
                                            <input type="text" className="hidden" name="opponentresultfield" value="bracket2result" />
                                                <input type="text" className="hidden" name="player1result" value="" />
                                                <input type="text" className="hidden" name="player2result" value="" />
                                            <input type="text" className="hidden" name="type" value="single"/>
                                            <input type="text" className="hidden" name="updatefield" value="2bracket1player" />
                                                                                                                                                                
                                            <input type="text" className="playername_in hidden" name="fieldname" value="" readOnly />
                                            <input type="text" className="playername_in" name="playerfullname" value="" readOnly />
                                            <input type="text" name="playerresult1" value=""/>
                                            
                                            <input type="text" className="playername_in hidden" name="fieldname2" value="" readOnly />
                                            <input className="hidden" type="text" name="playerresult2" value="" />
                                            
                                            <input type="submit" className="btnname" value="Submit" name="submitresult" />
                                        </form>
                                    </div>
                                    
                                                                                                                                        </div>
                            <div className="eachbracket lowerbracket">
                                    ----                                                                                                            
                                    <div className="resultpop-up" id="round1submitresult2">
                                            <input type="text" className="popopen" name="round1submitresult2" value="X" />
                                        <form className="result" action="#" method="post">
                                            
                                            <input type="text" className="hidden" name="postid" value="4630"/>
                                            
                                            <input type="text" className="hidden" name="myresultfield" value="bracket2result" />
                                            <input type="text" className="hidden" name="opponentresultfield" value="bracket1result" />
                                                <input type="text" className="hidden" name="player1result" value="" />
                                                <input type="text" className="hidden" name="player2result" value="" />
                                            <input type="text" className="hidden" name="type" value="single" />                
                                            <input type="text" className="hidden" name="updatefield" value="2bracket1player" />
                                                                                                                                                                
                                                <input type="text" className="playername_in" name="playerfullname" value="" readOnly />
                                            <input type="text" className="playername_in hidden" name="fieldname" value="" readOnly />
                                            <input type="text" className="" name="playerresult1" value="" />
                                            
                                            
                                            <input type="text"  className="playername_in hidden" name="fieldname2" value="" readOnly /> 
                                            <input type="text" className="hidden" name="playerresult2" value="" />
                                            
                                            <input type="submit" className="btnname" value="Submit" name="submitresult" />
                                        </form>
                                    </div>
                                    
                                   </div>
                                      <div className="eachbracket topbracket ">
                                ----                                                                                                            
                                    <div className="resultpop-up" id="round1submitresult3">
                                        <input type="text" className="popopen" name="round1submitresult3" value="X" />
                                        <form className="result" action="#" method="post">
                                            
                                            <input type="text" className="hidden" name="postid" value="4630" />
                                            
                                            
                                            <input type="text" className="hidden" name="myresultfield" value="bracket3result" />
                                            <input type="text" className="hidden" name="opponentresultfield" value="bracket4result" />
                                                <input type="text" className="hidden" name="player1result" value="" />
                                                <input type="text" className="hidden" name="player2result" value="" />
                                            <input type="text" className="hidden" name="type" value="single" />
                                            <input type="text" className="hidden" name="updatefield" value="2bracket2player" />
                                                                                                                                                                
                                            <input type="text" className="playername_in hidden" name="fieldname" value="" readOnly />
                                            <input type="text" className="playername_in" name="playerfullname" value="" readOnly />
                                            <input type="text" name="playerresult1" value="" />
                                            
                                            
                                            <input type="text" className="playername_in hidden" name="fieldname2" value="" readOnly />
                                            <input className="hidden" type="text" name="playerresult2" value="" />
                                            
                                            <input type="submit" className="btnname" value="Submit" name="submitresult" />
                                        </form>
                                    </div>
                            </div>
                            <div className="eachbracket lowerbracket">
                                    ----                                                                                                            
                                    <div className="resultpop-up" id="round1submitresult4">
                                            <input type="text" className="popopen" name="round1submitresult4" value="X"  />
                                        <form className="result" action="#" method="post">
                                            
                                            <input type="text" className="hidden" name="postid" value="4630" />
                                            
                                            
                                            <input type="text" className="hidden" name="myresultfield" value="bracket4result" />
                                            <input type="text" className="hidden" name="opponentresultfield" value="bracket3result" />
                                                <input type="text" className="hidden" name="player1result" value="" />
                                                <input type="text" className="hidden" name="player2result" value="" />
                                            <input type="text" className="hidden" name="type" value="single" />
                                             <input type="text" className="hidden" name="updatefield" value="2bracket2player" />
                                                                                                                                                                
                                                <input type="text" className="playername_in" name="playerfullname" value="" readOnly />
                                            <input type="text" className="playername_in hidden" name="fieldname" value="" readOnly />
                                            <input type="text" className="" name="playerresult1" value="" />
                                            
                                            
                                            <input type="text"  className="playername_in hidden" name="fieldname2" value="" readOnly />
                                            <input type="text" className="hidden" name="playerresult2" value="" />
                                            
                                            <input type="submit" className="btnname" value="Submit" name="submitresult" />
                                        </form>
                                    </div>
                                    
                            </div>
                                <div className="eachbracket topbracket ">
                                ----                                                                                                            
                                    <div className="resultpop-up" id="round1submitresult5">
                                        <input type="text" className="popopen" name="round1submitresult5" value="X"  />
                                        <form className="result" action="#" method="post">
                                            
                                            <input type="text" className="hidden" name="postid" value="4630" />
                                            
                                            
                                            <input type="text" className="hidden" name="myresultfield" value="bracket5result" />
                                            <input type="text" className="hidden" name="opponentresultfield" value="bracket6result" />
                                                <input type="text" className="hidden" name="player1result" value="" />
                                                <input type="text" className="hidden" name="player2result" value="" />
                                            <input type="text" className="hidden" name="type" value="single" />
                                            <input type="text" className="hidden" name="updatefield" value="2bracket3player" />
                                                                                                                                                                
                                            <input type="text" className="playername_in hidden" name="fieldname" value="" readOnly />
                                            <input type="text" className="playername_in" name="playerfullname" value="" readOnly />
                                            <input type="text" name="playerresult1" value="" />
                                            
                                            
                                            <input type="text" className="playername_in hidden" name="fieldname2" value="" readOnly />
                                            <input className="hidden" type="text" name="playerresult2" value="" />
                                            
                                            <input type="submit" className="btnname" value="Submit" name="submitresult" />
                                        </form>
                                    </div>
                                    
                                                                                                                                        </div>
                            <div className="eachbracket lowerbracket">
                                    ----                                                                                                            
                                    <div className="resultpop-up" id="round1submitresult6">
                                            <input type="text" className="popopen" name="round1submitresult6" value="X" />
                                        <form className="result" action="#" method="post">
                                            
                                            <input type="text" className="hidden" name="postid" value="4630" />
                                            
                                            
                                            <input type="text" className="hidden" name="myresultfield" value="bracket6result" />
                                            <input type="text" className="hidden" name="opponentresultfield" value="bracket5result" />
                                                <input type="text" className="hidden" name="player1result" value="" />
                                                <input type="text" className="hidden" name="player2result" value="" />
                                            <input type="text" className="hidden" name="type" value="single" />
                                            <input type="text" className="hidden" name="updatefield" value="2bracket3player" />
                                                                                                                                                                
                                                <input type="text" className="playername_in" name="playerfullname" value="" readOnly />
                                            <input type="text" className="playername_in hidden" name="fieldname" value="" readOnly />
                                            <input type="text" className="" name="playerresult1" value="" />
                                            
                                            
                                            <input type="text"  className="playername_in hidden" name="fieldname2" value="" readOnly />
                                            <input type="text" className="hidden" name="playerresult2" value="" />
                                            
                                            <input type="submit" className="btnname" value="Submit" name="submitresult" />
                                        </form>
                                    </div>
                                     
                            </div>
                            <div className="eachbracket topbracket ">
                                ----                                                                                                            
                                    <div className="resultpop-up" id="round1submitresult7">
                                        <input type="text" className="popopen" name="round1submitresult7" value="X"  />
                                        <form className="result" action="#" method="post">
                                            
                                            <input type="text" className="hidden" name="postid" value="4630" />
                                            
                                            
                                            <input type="text" className="hidden" name="myresultfield" value="bracket7result" />
                                            <input type="text" className="hidden" name="opponentresultfield" value="bracket8result" />
                                                <input type="text" className="hidden" name="player1result" value="" />
                                                <input type="text" className="hidden" name="player2result" value="" />
                                            <input type="text" className="hidden" name="type" value="single" />
                                            <input type="text" className="hidden" name="updatefield" value="2bracket4player" />
                                                                                                                                                                
                                            <input type="text" className="playername_in hidden" name="fieldname" value="" readOnly />
                                            <input type="text" className="playername_in" name="playerfullname" value="" readOnly />
                                            <input type="text" name="playerresult1" value="" />
                                            
                                            
                                            <input type="text" className="playername_in hidden" name="fieldname2" value="" readOnly />
                                            <input className="hidden" type="text" name="playerresult2" value="" />
                                            
                                            <input type="submit" className="btnname" value="Submit" name="submitresult" />
                                        </form>
                                    </div>
                                    
                                                                                                                                        </div>
                            <div className="eachbracket lowerbracket">
                                    ----                                                                                                            
                                    <div className="resultpop-up" id="round1submitresult8">
                                            <input type="text" className="popopen" name="round1submitresult8" value="X" />
                                        <form className="result" action="#" method="post">
                                            
                                            <input type="text" className="hidden" name="postid" value="4630" />
                                            
                                            
                                            <input type="text" className="hidden" name="myresultfield" value="bracket8result" />
                                            <input type="text" className="hidden" name="opponentresultfield" value="bracket7result" />
                                                <input type="text" className="hidden" name="player1result" value="" />
                                                <input type="text" className="hidden" name="player2result" value="" />
                                            <input type="text" className="hidden" name="type" value="single" />
                                        <input type="text" className="hidden" name="updatefield" value="2bracket4player" />
                                                                                                                                                                
                                                <input type="text" className="playername_in" name="playerfullname" value="" readOnly />
                                            <input type="text" className="playername_in hidden" name="fieldname" value="" readOnly />
                                            <input type="text" className="" name="playerresult1" value="" />
                                            
                                            
                                            <input type="text"  className="playername_in hidden" name="fieldname2" value="" readOnly />
                                            <input type="text" className="hidden" name="playerresult2" value="" />
                                            
                                            <input type="submit" className="btnname" value="Submit" name="submitresult" />
                                        </form>
                                    </div>
                                  </div>
                                 <div className="eachbracket topbracket ">
                                ----                                                                                                            
                                    <div className="resultpop-up" id="round1submitresult9">
                                        <input type="text" className="popopen" name="round1submitresult9" value="X"  />
                                        <form className="result" action="#" method="post">
                                            
                                            <input type="text" className="hidden" name="postid" value="4630" />
                                            
                                            
                                            <input type="text" className="hidden" name="myresultfield" value="bracket9result" />
                                            <input type="text" className="hidden" name="opponentresultfield" value="bracket10result" />
                                                <input type="text" className="hidden" name="player1result" value="" />
                                                <input type="text" className="hidden" name="player2result" value="" />
                                            <input type="text" className="hidden" name="type" value="single" />
                                            <input type="text" className="hidden" name="updatefield" value="2bracket5player" />
                                                                                                                                                                
                                            <input type="text" className="playername_in hidden" name="fieldname" value="" readOnly />
                                            <input type="text" className="playername_in" name="playerfullname" value="" readOnly />
                                            <input type="text" name="playerresult1" value="" />
                                            
                                            
                                            <input type="text" className="playername_in hidden" name="fieldname2" value="" readOnly />
                                            <input className="hidden" type="text" name="playerresult2" value="" />
                                            
                                            <input type="submit" className="btnname" value="Submit" name="submitresult" />
                                        </form>
                                    </div>
                                    
                                               </div>
                            <div className="eachbracket lowerbracket">
                                    ----                                                                                                            
                                    <div className="resultpop-up" id="round1submitresult10">
                                            <input type="text" className="popopen" name="round1submitresult10" value="X" />
                                        <form className="result" action="#" method="post">
                                            
                                            <input type="text" className="hidden" name="postid" value="4630" />
                                            
                                            
                                            <input type="text" className="hidden" name="myresultfield" value="bracket10result" />
                                            <input type="text" className="hidden" name="opponentresultfield" value="bracket9result" />
                                                <input type="text" className="hidden" name="player1result" value="" />
                                                <input type="text" className="hidden" name="player2result" value="" />
                                            <input type="text" className="hidden" name="type" value="single" />
                                            <input type="text" className="hidden" name="updatefield" value="2bracket5player" />
                                                                                                                                                                
                                                <input type="text" className="playername_in" name="playerfullname" value="" readOnly />
                                            <input type="text" className="playername_in hidden" name="fieldname" value="" readOnly />
                                            <input type="text" className="" name="playerresult1" value="" />
                                            
                                            
                                            <input type="text"  className="playername_in hidden" name="fieldname2" value="" readOnly />
                                            <input type="text" className="hidden" name="playerresult2" value="" />
                                            
                                            <input type="submit" className="btnname" value="Submit" name="submitresult" />
                                        </form>
                                    </div>     
                            </div>
                               <div className="eachbracket topbracket ">
                                ----                                                                                                            
                                    <div className="resultpop-up" id="round1submitresult11">
                                        <input type="text" className="popopen" name="round1submitresult11" value="X"  />
                                        <form className="result" action="#" method="post">
                                            
                                            <input type="text" className="hidden" name="postid" value="4630" />
                                            
                                            
                                            <input type="text" className="hidden" name="myresultfield" value="bracket11result" />
                                            <input type="text" className="hidden" name="opponentresultfield" value="bracket12result" />
                                                <input type="text" className="hidden" name="player1result" value="" />
                                                <input type="text" className="hidden" name="player2result" value="" />
                                            <input type="text" className="hidden" name="type" value="single" />
                                            <input type="text" className="hidden" name="updatefield" value="2bracket6player" />
                                                                                                                                                                
                                            <input type="text" className="playername_in hidden" name="fieldname" value="" readOnly />
                                            <input type="text" className="playername_in" name="playerfullname" value="" readOnly />
                                            <input type="text" name="playerresult1" value="" />
                                            
                                            
                                            <input type="text" className="playername_in hidden" name="fieldname2" value="" readOnly />
                                            <input className="hidden" type="text" name="playerresult2" value="" />
                                            
                                            <input type="submit" className="btnname" value="Submit" name="submitresult" />
                                        </form>
                                    </div>
                                    
                            </div>
                            <div className="eachbracket lowerbracket">
                                    ----                                                                                                            
                                    <div className="resultpop-up" id="round1submitresult12">
                                            <input type="text" className="popopen" name="round1submitresult12" value="X"  />
                                        <form className="result" action="#" method="post">
                                            
                                            <input type="text" className="hidden" name="postid" value="4630" />
                                            
                                            
                                            <input type="text" className="hidden" name="myresultfield" value="bracket12result" />
                                            <input type="text" className="hidden" name="opponentresultfield" value="bracket11result" />
                                                <input type="text" className="hidden" name="player1result" value="" />
                                                <input type="text" className="hidden" name="player2result" value="" />
                                            <input type="text" className="hidden" name="type" value="single" />
                                            <input type="text" className="hidden" name="updatefield" value="2bracket6player" />
                                                                                                                                                                
                                                <input type="text" className="playername_in" name="playerfullname" value="" readOnly />
                                            <input type="text" className="playername_in hidden" name="fieldname" value="" readOnly />
                                            <input type="text" className="" name="playerresult1" value="" />
                                            
                                            
                                            <input type="text"  className="playername_in hidden" name="fieldname2" value="" readOnly />
                                            <input type="text" className="hidden" name="playerresult2" value="" />
                                            
                                            <input type="submit" className="btnname" value="Submit" name="submitresult" />
                                        </form>
                                    </div>
                            </div>
                                    <div className="eachbracket topbracket ">
                                ----                                                                                                            
                                    <div className="resultpop-up" id="round1submitresult13">
                                        <input type="text" className="popopen" name="round1submitresult13" value="X"  />
                                        <form className="result" action="#" method="post">
                                            
                                            <input type="text" className="hidden" name="postid" value="4630" />
                                            
                                            
                                            <input type="text" className="hidden" name="myresultfield" value="bracket13result" />
                                            <input type="text" className="hidden" name="opponentresultfield" value="bracket14result" />
                                            <input type="text" className="hidden" name="player1result" value="" />
                                            <input type="text" className="hidden" name="player2result" value="" />
                                            <input type="text" className="hidden" name="type" value="single" />
                                            <input type="text" className="hidden" name="updatefield" value="2bracket7player" />
                                                                                                                                                                
                                            <input type="text" className="playername_in hidden" name="fieldname" value="" readOnly />
                                            <input type="text" className="playername_in" name="playerfullname" value="" readOnly />
                                            <input type="text" name="playerresult1" value="" />
                                            
                                            
                                            <input type="text" className="playername_in hidden" name="fieldname2" value="" readOnly />
                                            <input className="hidden" type="text" name="playerresult2" value="" />
                                            
                                            <input type="submit" className="btnname" value="Submit" name="submitresult" />
                                        </form>
                                    </div>
                                    
                            </div>
                            <div className="eachbracket lowerbracket">
                                    ----                                                                                                            
                                    <div className="resultpop-up" id="round1submitresult14">
                                            <input type="text" className="popopen" name="round1submitresult14" value="X"  />
                                        <form className="result" action="#" method="post">
                                            
                                            <input type="text" className="hidden" name="postid" value="4630" />
                                            
                                            
                                            <input type="text" className="hidden" name="myresultfield" value="bracket14result" />
                                            <input type="text" className="hidden" name="opponentresultfield" value="bracket13result" />
                                                <input type="text" className="hidden" name="player1result" value="" />
                                                <input type="text" className="hidden" name="player2result" value="" />
                                            <input type="text" className="hidden" name="type" value="single" />
                                            <input type="text" className="hidden" name="updatefield" value="2bracket7player" />
                                                                                                                                                                
                                                <input type="text" className="playername_in" name="playerfullname" value="" readOnly />
                                            <input type="text" className="playername_in hidden" name="fieldname" value="" readOnly />
                                            <input type="text" className="" name="playerresult1" value="" />
                                            
                                            
                                            <input type="text"  className="playername_in hidden" name="fieldname2" value="" readOnly />
                                            <input type="text" className="hidden" name="playerresult2" value="" />
                                            
                                            <input type="submit" className="btnname" value="Submit" name="submitresult" />
                                        </form>
                                    </div>
                                    
                            </div>
                            <div className="eachbracket topbracket ">
                                ----                                                                                                            
                                    <div className="resultpop-up" id="round1submitresult15">
                                        <input type="text" className="popopen" name="round1submitresult15" value="X" />
                                        <form className="result" action="#" method="post">
                                            
                                            <input type="text" className="hidden" name="postid" value="4630" />
                                            
                                            
                                            <input type="text" className="hidden" name="myresultfield" value="bracket15result" />
                                            <input type="text" className="hidden" name="opponentresultfield" value="bracket16result" />
                                                <input type="text" className="hidden" name="player1result" value="" />
                                                <input type="text" className="hidden" name="player2result" value="" />
                                            <input type="text" className="hidden" name="type" value="single" />
                                            <input type="text" className="hidden" name="updatefield" value="2bracket8player" />
                                                                                                                                                                
                                            <input type="text" className="playername_in hidden" name="fieldname" value="" readOnly />
                                            <input type="text" className="playername_in" name="playerfullname" value="" readOnly />
                                            <input type="text" name="playerresult1" value="" />
                                            
                                            
                                            <input type="text" className="playername_in hidden" name="fieldname2" value="" readOnly />
                                            <input className="hidden" type="text" name="playerresult2" value="" />
                                            
                                            <input type="submit" className="btnname" value="Submit" name="submitresult" />
                                        </form>
                                    </div>
                                    
                            </div>
                            <div className="eachbracket lowerbracket">
                                    ----                                                                                                            
                                    <div className="resultpop-up" id="round1submitresult16">
                                            <input type="text" className="popopen" name="round1submitresult16" value="X"  />
                                        <form className="result" action="#" method="post">
                                            
                                            <input type="text" className="hidden" name="postid" value="4630" />
                                            
                                            
                                            <input type="text" className="hidden" name="myresultfield" value="bracket16result" />
                                            <input type="text" className="hidden" name="opponentresultfield" value="bracket15result" />
                                                <input type="text" className="hidden" name="player1result" value="" />
                                                <input type="text" className="hidden" name="player2result" value="" />
                                            <input type="text" className="hidden" name="type" value="single" />
                                            <input type="text" className="hidden" name="updatefield" value="2bracket8player" />
                                                                                                                                                                
                                                <input type="text" className="playername_in" name="playerfullname" value="" readOnly />
                                            <input type="text" className="playername_in hidden" name="fieldname" value="" readOnly />
                                            <input type="text" className="" name="playerresult1" value="" />
                                            
                                            
                                            <input type="text"  className="playername_in hidden" name="fieldname2" value="" readOnly />
                                            <input type="text" className="hidden" name="playerresult2" value="" />
                                            
                                            <input type="submit" className="btnname" value="Submit" name="submitresult" />
                                        </form>
                                    </div>
                            </div>
           </div>
            <div className="publickbrackkets bracketnumber1">
                    <div className="roundinfo bra">Round</div>
                        <img className="eachbracketimage1" src="https://workkforce.gg/wp-content/uploads/2019/08/bracket1.png" alt=""/>
                        <img className="eachbracketimage2" src="https://workkforce.gg/wp-content/uploads/2019/08/bracket1.png"  alt=""/>
                        <img className="eachbracketimage3" src="https://workkforce.gg/wp-content/uploads/2019/08/bracket1.png" alt="" />
                        <img className="eachbracketimage4" src="https://workkforce.gg/wp-content/uploads/2019/08/bracket1.png" alt="" />
                    </div> 
                    <div className="publickbrackkrounds roundnumber2">

            <div className="roundinfo">Round 2</div>
                <div className="eachbracket topbracket first">
                                ----                                                                                                            
                                    <div className="resultpop-up" id="round2submitresult1">
                                        <input type="text" className="popopen" name="round2submitresult1" value="X"  />
                                        <form className="result" action="#" method="post">
                                            
                                            <input type="text" className="hidden" name="postid" value="4630" />
                                            
                                            
                                            <input type="text" className="hidden" name="myresultfield" value="2bracket1result" />
                                            <input type="text" className="hidden" name="opponentresultfield" value="2bracket2result" />
                                                <input type="text" className="hidden" name="player1result" value="" />
                                                <input type="text" className="hidden" name="player2result" value="" />
                                            <input type="text" className="hidden" name="type" value="single" />
                                            <input type="text" className="hidden" name="updatefield" value="3bracket1player" />
                                                                                                                                                                
                                            <input type="text" className="playername_in hidden" name="fieldname" value="" readOnly />
                                            <input type="text" className="playername_in" name="playerfullname" value="" readOnly />
                                            <input type="text" name="playerresult1" value="" />
                                            
                                            
                                            <input type="text" className="playername_in hidden" name="fieldname2" value="" readOnly />
                                            <input className="hidden" type="text" name="playerresult2" value="" />
                                            
                                            <input type="submit" className="btnname" value="Submit" name="submitresult" />
                                        </form>
                                    </div>
                                    
                                 </div>
                            <div className="eachbracket lowerbracket">
                                    ----                                                                                                            
                                    <div className="resultpop-up" id="round2submitresult2">
                                            <input type="text" className="popopen" name="round2submitresult2" value="X" />
                                        <form className="result" action="#" method="post">
                                            
                                            <input type="text" className="hidden" name="postid" value="4630" />
                                            
                                            
                                            <input type="text" className="hidden" name="myresultfield" value="2bracket2result" />
                                            <input type="text" className="hidden" name="opponentresultfield" value="2bracket1result" />
                                                <input type="text" className="hidden" name="player1result" value="" />
                                                <input type="text" className="hidden" name="player2result" value="" />
                                            <input type="text" className="hidden" name="type" value="single" />
                                            <input type="text" className="hidden" name="updatefield" value="3bracket1player" />
                                                                                                                                                                
                                                <input type="text" className="playername_in" name="playerfullname" value="" readOnly />
                                            <input type="text" className="playername_in hidden" name="fieldname" value="" readOnly />
                                            <input type="text" className="" name="playerresult1" value="" />
                                            
                                            
                                            <input type="text"  className="playername_in hidden" name="fieldname2" value="" readOnly />
                                            <input type="text" className="hidden" name="playerresult2" value="" />
                                            
                                            <input type="submit" className="btnname" value="Submit" name="submitresult" />
                                        </form>
                                    </div> 
                            </div>
                                 <div className="eachbracket topbracket ">
                                ----                                                                                                            
                                    <div className="resultpop-up" id="round2submitresult3">
                                        <input type="text" className="popopen" name="round2submitresult3" value="X" />
                                        <form className="result" action="#" method="post">
                                            
                                            <input type="text" className="hidden" name="postid" value="4630" />
                                            
                                            
                                            <input type="text" className="hidden" name="myresultfield" value="2bracket3result" />
                                            <input type="text" className="hidden" name="opponentresultfield" value="2bracket4result" />
                                                <input type="text" className="hidden" name="player1result" value="" />
                                                <input type="text" className="hidden" name="player2result" value="" />
                                            <input type="text" className="hidden" name="type" value="single" />
                                            <input type="text" className="hidden" name="updatefield" value="3bracket2player" />
                                                                                                                                                                
                                            <input type="text" className="playername_in hidden" name="fieldname" value="" readOnly />
                                            <input type="text" className="playername_in" name="playerfullname" value="" readOnly />
                                            <input type="text" name="playerresult1" value="" />
                                            
                                            
                                            <input type="text" className="playername_in hidden" name="fieldname2" value="" readOnly />
                                            <input className="hidden" type="text" name="playerresult2" value="" />
                                            
                                            <input type="submit" className="btnname" value="Submit" name="submitresult" />
                                        </form>
                                    </div>
                                    
                                                                                                                                        </div>
                            <div className="eachbracket lowerbracket">
                                    ----                                                                                                            
                                    <div className="resultpop-up" id="round2submitresult4">
                                            <input type="text" className="popopen" name="round2submitresult4" value="X" />
                                        <form className="result" action="#" method="post">
                                            
                                            <input type="text" className="hidden" name="postid" value="4630" />
                                            
                                            
                                            <input type="text" className="hidden" name="myresultfield" value="2bracket4result" />
                                            <input type="text" className="hidden" name="opponentresultfield" value="2bracket3result" />
                                                <input type="text" className="hidden" name="player1result" value="" />
                                                <input type="text" className="hidden" name="player2result" value="" />
                                            <input type="text" className="hidden" name="type" value="single" />
                                            <input type="text" className="hidden" name="updatefield" value="3bracket2player" />
                                                                                                                                                                
                                                <input type="text" className="playername_in" name="playerfullname" value="" readOnly />
                                            <input type="text" className="playername_in hidden" name="fieldname" value="" readOnly  />
                                            <input type="text" className="" name="playerresult1" value="" />
                                            
                                            
                                            <input type="text"  className="playername_in hidden" name="fieldname2" value="" readOnly />
                                            <input type="text" className="hidden" name="playerresult2" value="" />
                                            
                                            <input type="submit" className="btnname" value="Submit" name="submitresult" />
                                        </form>
                                    </div>
                            </div>
                                  <div className="eachbracket topbracket ">
                                ----                                                                                                            
                                    <div className="resultpop-up" id="round2submitresult5">
                                        <input type="text" className="popopen" name="round2submitresult5" value="X" />
                                        <form className="result" action="#" method="post">
                                            
                                            <input type="text" className="hidden" name="postid" value="4630" />
                                            
                                            
                                            <input type="text" className="hidden" name="myresultfield" value="2bracket5result" />
                                            <input type="text" className="hidden" name="opponentresultfield" value="2bracket6result" />
                                                <input type="text" className="hidden" name="player1result" value="" />
                                                <input type="text" className="hidden" name="player2result" value="" />
                                            <input type="text" className="hidden" name="type" value="single" />
                                            <input type="text" className="hidden" name="updatefield" value="3bracket3player" />
                                                                                                                                                                
                                            <input type="text" className="playername_in hidden" name="fieldname" value="" readOnly />
                                            <input type="text" className="playername_in" name="playerfullname" value="" readOnly />
                                            <input type="text" name="playerresult1" value="" />
                                            
                                            
                                            <input type="text" className="playername_in hidden" name="fieldname2" value="" readOnly />
                                            <input className="hidden" type="text" name="playerresult2" value="" />
                                            
                                            <input type="submit" className="btnname" value="Submit" name="submitresult"  />
                                        </form>
                                    </div>
                                    
                                                                                                                                        </div>
                            <div className="eachbracket lowerbracket">
                                    ----                                                                                                            
                                    <div className="resultpop-up" id="round2submitresult6">
                                            <input type="text" className="popopen" name="round2submitresult6" value="X"  />
                                        <form className="result" action="#" method="post">
                                            
                                            <input type="text" className="hidden" name="postid" value="4630" />
                                            
                                            
                                            <input type="text" className="hidden" name="myresultfield" value="2bracket6result" />
                                            <input type="text" className="hidden" name="opponentresultfield" value="2bracket5result" />
                                                <input type="text" className="hidden" name="player1result" value="" />
                                                <input type="text" className="hidden" name="player2result" value="" />
                                            <input type="text" className="hidden" name="type" value="single" />
                                            <input type="text" className="hidden" name="updatefield" value="3bracket3player" />
                                                                                                                                                                
                                                <input type="text" className="playername_in" name="playerfullname" value="" readOnly />
                                            <input type="text" className="playername_in hidden" name="fieldname" value="" readOnly />
                                            <input type="text" className="" name="playerresult1" value="" />
                                            
                                            
                                            <input type="text"  className="playername_in hidden" name="fieldname2" value="" readOnly />
                                            <input type="text" className="hidden" name="playerresult2" value="" />
                                            
                                            <input type="submit" className="btnname" value="Submit" name="submitresult" />
                                        </form>
                                    </div>
                            </div>
                                    <div className="eachbracket topbracket ">
                                ----                                                                                                            
                                    <div className="resultpop-up" id="round2submitresult7">
                                        <input type="text" className="popopen" name="round2submitresult7" value="X" />
                                        <form className="result" action="#" method="post">
                                            
                                            <input type="text" className="hidden" name="postid" value="4630" />
                                            
                                            
                                            <input type="text" className="hidden" name="myresultfield" value="2bracket7result" />
                                            <input type="text" className="hidden" name="opponentresultfield" value="2bracket8result"  />
                                                <input type="text" className="hidden" name="player1result" value="" />
                                                <input type="text" className="hidden" name="player2result" value="" />
                                            <input type="text" className="hidden" name="type" value="single" />
                                            <input type="text" className="hidden" name="updatefield" value="3bracket4player" />
                                                                                                                                                                
                                            <input type="text" className="playername_in hidden" name="fieldname" value="" readOnly />
                                            <input type="text" className="playername_in" name="playerfullname" value="" readOnly />
                                            <input type="text" name="playerresult1" value="" />
                                            
                                            
                                            <input type="text" className="playername_in hidden" name="fieldname2" value="" readOnly />
                                            <input className="hidden" type="text" name="playerresult2" value="" />
                                            
                                            <input type="submit" className="btnname" value="Submit" name="submitresult" />
                                        </form>
                                    </div>
                                    
                                                                                                                                        </div>
                            <div className="eachbracket lowerbracket">
                                    ----                                                                                                            
                                    <div className="resultpop-up" id="round2submitresult8">
                                            <input type="text" className="popopen" name="round2submitresult8" value="X"  />
                                        <form className="result" action="#" method="post">
                                            
                                            <input type="text" className="hidden" name="postid" value="4630" />
                                            
                                            
                                            <input type="text" className="hidden" name="myresultfield" value="2bracket8result" />
                                            <input type="text" className="hidden" name="opponentresultfield" value="2bracket7result" />
                                                <input type="text" className="hidden" name="player1result" value="" />
                                                <input type="text" className="hidden" name="player2result" value="" />
                                            <input type="text" className="hidden" name="type" value="single" />
                                            <input type="text" className="hidden" name="updatefield" value="3bracket4player" />
                                                                                                                                                                
                                                <input type="text" className="playername_in" name="playerfullname" value="" readOnly />
                                            <input type="text" className="playername_in hidden" name="fieldname" value="" readOnly />
                                            <input type="text" className="" name="playerresult1" value="" />
                                            
                                            
                                            <input type="text"  className="playername_in hidden" name="fieldname2" value="" readOnly />
                                            <input type="text" className="hidden" name="playerresult2" value="" />
                                            
                                            <input type="submit" className="btnname" value="Submit" name="submitresult" />
                                        </form>
                                    </div>  
                            </div>
                                                                                                            
                            </div>
                    <div className="publickbrackkets bracketnumber2">
                        <div className="roundinfo bra">Round</div>
                            <img className="eachbracketimage1" src="https://workkforce.gg/wp-content/uploads/2019/08/bracket2.png" alt="" />
                            <img className="eachbracketimage2" src="https://workkforce.gg/wp-content/uploads/2019/08/bracket2.png" alt="" />
                            </div> 
                        <div className="publickbrackkrounds roundnumber3">

<div className="roundinfo">Round 3</div>
                    <div className="eachbracket topbracket first">
                                ----                                                                                                            
                                    <div className="resultpop-up" id="round3submitresult1">
                                        <input type="text" className="popopen" name="round3submitresult1" value="X"  />
                                        <form className="result" action="#" method="post">
                                            
                                            <input type="text" className="hidden" name="postid" value="4630" />
                                            
                                            
                                            <input type="text" className="hidden" name="myresultfield" value="3bracket1result" />
                                            <input type="text" className="hidden" name="opponentresultfield" value="3bracket2result" />
                                                <input type="text" className="hidden" name="player1result" value="" />
                                                <input type="text" className="hidden" name="player2result" value="" />
                                            <input type="text" className="hidden" name="type" value="single" />
                                            <input type="text" className="hidden" name="updatefield" value="4bracket1player" />
                                                                                                                                                                
                                            <input type="text" className="playername_in hidden" name="fieldname" value="" readOnly />
                                            <input type="text" className="playername_in" name="playerfullname" value="" readOnly />
                                            <input type="text" name="playerresult1" value="" />
                                            
                                            
                                            <input type="text" className="playername_in hidden" name="fieldname2" value="" readOnly      />
                                            <input className="hidden" type="text" name="playerresult2" value="" />
                                            
                                            <input type="submit" className="btnname" value="Submit" name="submitresult" />
                                        </form>
                                    </div>
                                    
                                        </div>
                            <div className="eachbracket lowerbracket">
                                    ----                                                                                                            
                                    <div className="resultpop-up" id="round3submitresult2">
                                            <input type="text" className="popopen" name="round3submitresult2" value="X" />
                                        <form className="result" action="#" method="post">
                                            
                                            <input type="text" className="hidden" name="postid" value="4630" />
                                            
                                            
                                            <input type="text" className="hidden" name="myresultfield" value="3bracket2result" />
                                            <input type="text" className="hidden" name="opponentresultfield" value="3bracket1result" />
                                                <input type="text" className="hidden" name="player1result" value="" />
                                                <input type="text" className="hidden" name="player2result" value="" />
                                            <input type="text" className="hidden" name="type" value="single" />
                                            <input type="text" className="hidden" name="updatefield" value="4bracket1player" />
                                                                                                                                                                
                                                <input type="text" className="playername_in" name="playerfullname" value="" readOnly />
                                            <input type="text" className="playername_in hidden" name="fieldname" value="" readOnly />
                                            <input type="text" className="" name="playerresult1" value="" />
                                            
                                            
                                            <input type="text"  className="playername_in hidden" name="fieldname2" value="" readOnly />
                                            <input type="text" className="hidden" name="playerresult2" value="" />
                                            
                                            <input type="submit" className="btnname" value="Submit" name="submitresult" />
                                        </form>
                                    </div>   
                            </div>
                                <div className="eachbracket topbracket ">
                                ----                                                                                                            
                                    <div className="resultpop-up" id="round3submitresult3">
                                        <input type="text" className="popopen" name="round3submitresult3" value="X" />
                                        <form className="result" action="#" method="post">
                                            
                                            <input type="text" className="hidden" name="postid" value="4630" />
                                            
                                            
                                            <input type="text" className="hidden" name="myresultfield" value="3bracket3result" />
                                            <input type="text" className="hidden" name="opponentresultfield" value="3bracket4result" />
                                            <input type="text" className="hidden" name="player1result" value="" />
                                            <input type="text" className="hidden" name="player2result" value="" />
                                            <input type="text" className="hidden" name="type" value="single" />
                                            <input type="text" className="hidden" name="updatefield" value="4bracket2player" />
                                                                                                                                                                
                                            <input type="text" className="playername_in hidden" name="fieldname" value="" readOnly />
                                            <input type="text" className="playername_in" name="playerfullname" value="" readOnly  />
                                            <input type="text" name="playerresult1" value="" />
                                            
                                            
                                            <input type="text" className="playername_in hidden" name="fieldname2" value="" readOnly />
                                            <input className="hidden" type="text" name="playerresult2" value="" />
                                            
                                            <input type="submit" className="btnname" value="Submit" name="submitresult" />
                                        </form>
                                    </div>
                                    
                                    </div>
                            <div className="eachbracket lowerbracket">
                                    ----                                                                                                            
                                    <div className="resultpop-up" id="round3submitresult4">
                                            <input type="text" className="popopen" name="round3submitresult4" value="X"  />
                                        <form className="result" action="#" method="post">
                                            
                                            <input type="text" className="hidden" name="postid" value="4630" />
                                            
                                            
                                            <input type="text" className="hidden" name="myresultfield" value="3bracket4result" />
                                            <input type="text" className="hidden" name="opponentresultfield" value="3bracket3result" />
                                                <input type="text" className="hidden" name="player1result" value="" />
                                                <input type="text" className="hidden" name="player2result" value="" />
                                            <input type="text" className="hidden" name="type" value="single" />
                                                                                                                                                                <input type="text" className="hidden" name="updatefield" value="4bracket2player"/>
                                                                                                                                                                
                                                <input type="text" className="playername_in" name="playerfullname" value="" readOnly />
                                            <input type="text" className="playername_in hidden" name="fieldname" value="" readOnly />
                                            <input type="text" className="" name="playerresult1" value="" />
                                            
                                            
                                            <input type="text"  className="playername_in hidden" name="fieldname2" value="" readOnly />
                                            <input type="text" className="hidden" name="playerresult2" value="" />
                                            
                                            <input type="submit" className="btnname" value="Submit" name="submitresult" />
                                        </form>
                                    </div>
                            </div>
                                                                                                            
            </div>
            <div className="publickbrackkets bracketnumber3">
                    <div className="roundinfo bra">Round</div>
                            <img className="eachbracketimage1" src="https://workkforce.gg/wp-content/uploads/2019/08/bracket3.png"  alt=""/>
                    </div> 
                
                    <div className="publickbrackkrounds roundnumber4">

            <div className="roundinfo">Round 4</div>
                            <div className="eachbracket topbracket first">
                                ----                                                                                                            
                                    <div className="resultpop-up" id="round4submitresult1">
                                        <input type="text" className="popopen" name="round4submitresult1" value="X"  />
                                        <form className="result" action="#" method="post">
                                            
                                            <input type="text" className="hidden" name="postid" value="4630" />
                                            
                                            
                                            <input type="text" className="hidden" name="myresultfield" value="4bracket1result" />
                                            <input type="text" className="hidden" name="opponentresultfield" value="4bracket2result" />
                                            <input type="text" className="hidden" name="player1result" value="" />
                                            <input type="text" className="hidden" name="player2result" value="" />
                                            <input type="text" className="hidden" name="type" value="single" />
                                            <input type="text" className="hidden" name="updatefield" value="winner" />
                                                                                                                                                                
                                            <input type="text" className="playername_in hidden" name="fieldname" value="" readOnly />
                                            <input type="text" className="playername_in" name="playerfullname" value="" readOnly />
                                            <input type="text" name="playerresult1" value="" />
                                            
                                            
                                            <input type="text" className="playername_in hidden" name="fieldname2" value="" readOnly />
                                            <input className="hidden" type="text" name="playerresult2" value="" />
                                            
                                            <input type="submit" className="btnname" value="Submit" name="submitresult" />
                                        </form>
                                    </div>
                                    
                                    </div>
                            <div className="eachbracket lowerbracket">
                                    ----                                                                                                            
                                    <div className="resultpop-up" id="round4submitresult2">
                                            <input type="text" className="popopen" name="round4submitresult2" value="X" />
                                        <form className="result" action="#" method="post">
                                            
                                            <input type="text" className="hidden" name="postid" value="4630" />
                                            
                                            
                                            <input type="text" className="hidden" name="myresultfield" value="4bracket2result" />
                                            <input type="text" className="hidden" name="opponentresultfield" value="4bracket1result" />
                                                <input type="text" className="hidden" name="player1result" value="" />
                                                <input type="text" className="hidden" name="player2result" value=""  />
                                            <input type="text" className="hidden" name="type" value="single" />
                                            <input type="text" className="hidden" name="updatefield" value="winner" />
                                                                                                                                                                
                                                <input type="text" className="playername_in" name="playerfullname" value="" readOnly />
                                            <input type="text" className="playername_in hidden" name="fieldname" value="" readOnly />
                                            <input type="text" className="" name="playerresult1" value="" />
                                            
                                            
                                            <input type="text"  className="playername_in hidden" name="fieldname2" value="" readOnly />
                                            <input type="text" className="hidden" name="playerresult2" value="" />
                                            
                                            <input type="submit" className="btnname" value="Submit" name="submitresult" />
                                        </form>
                                    </div>
                            </div>
                                                                                                            
            </div>
                                                                                                
                <div className="publickbrackkets finalroundsingle finalsingle16">
                    <div className="roundinfo bra">Round</div>
                        <img src="https://workkforce.gg/wp-content/uploads/2019/08/bracket1.png" alt="" />
                </div>

                <div className="publickbrackkrounds winneroutersingle finalsingle16">
                        <div className="roundinfo">Final</div>
                        <div className="eachbracket finalwinnersingle">
                                    ---   
                                        <p className='resultnow win'> <i className="fa fa-trophy" aria-hidden="true"></i></p>
                            </div>
                    </div>                                                      
                                   </main>    
                                    </div>
                                       </div>
                                                        
                                      </div>
                                   
                                     </main>   
                                  </div>
                           
                            
    					</div>
    		            </div>
    		            <div className="tab-pane" id="front4">
        					<div className="tab-dec mediatab">
        					    <img className="full_media" src="https://res.cloudinary.com/dnv0dij0y/image/upload/v1576242172/game%20gallery/Link_to_pexels-photo-1174746_alrmui.jpg" alt="" />
        					    <img className="half_media" src="https://res.cloudinary.com/dnv0dij0y/image/upload/v1576242410/game%20gallery/blur-close-up-device-display-442576_wg8bpu.jpg"  alt=""/>
        					    <img className="half_media" src="https://res.cloudinary.com/dnv0dij0y/image/upload/v1576242173/game%20gallery/Link_to_man-holding-black-game-controller-133579_b9ykcg.jpg" alt="" />
        					 <img className="full_media" src="https://res.cloudinary.com/dnv0dij0y/image/upload/v1576242171/game%20gallery/Link_to_pexels-photo-735911_ujlr0h.jpg"  alt=""/>
        					</div>
    					</div>
    					<div className="tab-pane" id="front5">
                        {
                                    isLoggedIn ?
                                    <div class="tab-dec">
                                    <p class="mt-1 p-2">INVITE FRIENDS</p>
                                                <label>Invite User</label>
                                                <input type="text" name="inviuser" placeholder="Email or Username" required />
                                                <input type="text" Placeholder="(000)-000-0000" name="phone" required />
                                                <input type="Submit" name="sendinvi" Value="Invite" />
                                    </div>
                                    :
                                    <div className="screenloggedout">
                                <p>You must be logged in to Invite Your Friends!</p>
                                <a id="modal-464146" href="#modal-container-464146" role="button" data-toggle="modal">LOGIN</a>
                                <a id="modal-509828" href="#modal-container-509828" role="button" data-toggle="modal">REGISTER</a>
                            </div>
                        }
    					    
                        </div>
                       
                    </div>
                    
    			</div>
                <div className="tabbable details" id="tabs-937229">
                	<ul className="nav nav-tabs mb-3">
                		<li className="nav-item">
                			<a className="nav-link active" href="#details1" data-toggle="tab">DETAILS</a>
                		</li>
                		<li className="nav-item">
                			<a className="nav-link" href="#details2" data-toggle="tab">RULES</a>
                		</li>
                		<li className="nav-item">
                			<a className="nav-link" href="#details3" data-toggle="tab">PRIZES</a>
                		</li>
                		<li className="nav-item">
                			<a className="nav-link" href="#details4" data-toggle="tab">SCHEDULE</a>
                		</li>
                		<li className="nav-item">
                			<a className="nav-link" href="#details5" data-toggle="tab">HELP</a>
                		</li>
                	</ul>
                	
                	<div className="tab-content lowertournaments">
                            
                            <div className="tab-pane active pl-4" id="details1">
                                <div className="col-md-12 pl-0"> 
                                
                                <div className="blocks">
                                    <h2>Game & Platform</h2>
                                    <h3>{gameName(game)}</h3>
                                    <p>{gamePlatformName(platform)}</p>
                                </div>
                                
                                <div className="blocks">
                                    <h2>Date and Time</h2>
                                    <h3>{tour_start_date}</h3>
                                    <p>{time}</p>
                                </div> 
                                
                                <div className="blocks">
                                    <h2>Format</h2>
                                    <h3>{bracket_type} Elimination</h3>
                                    <p>Registerations Open</p>
                                </div>
                                    
                                </div>
                            </div>
                            
                	    	<div className="tab-pane pl-4" id="details2">
                	        	
                    	            	 <div className="blocks">
                                				<h2 className="pl-4">Game Rules</h2>
                                			<p>{rules}</p>
                                		</div>
                    	            	 <div className="blocks">
                                				<h2 className="pl-4">Tournament Rules</h2>
                                				<p>{rules}</p>
                                			<p></p>
                                		</div>
                    	            	 <div className="blocks">
                                				<h2 className="pl-4">Platform Rules</h2>
                                				<p>{rules}</p>
                                			<p></p>
                                		</div>
                		    </div>
                            <div className="tab-pane pl-4" id="details3">
                            {
                                prize === 'cash'?
                                <>
                                 <div className="blocks">
                            				<h2 className="pl-4">1st Prize</h2>
                            				<h6>{prizeone}</h6>
                            				<img className="rewardimages" src={`https://xrsports.gg/team/public/tournament/${prizeimage}`}  alt=""/>
                                           
                                        </div>
                                        <div className="blocks">
                            				<h2 className="pl-4">2nd Prize</h2>
                            				<h6>{prizetwo}</h6>
                            				<img className="rewardimages" src={`https://xrsports.gg/team/public/tournament/${prizeimage}`} alt="" />
                                           
                                        </div>
                                        <div className="blocks">
                            				<h2 className="pl-4">3rd Prize</h2>
                            				<h6>{prizethree}</h6>
                            			    <img className="rewardimages" src={`https://xrsports.gg/team/public/tournament/${prizeimage}`} alt="" />
                                           
                                        </div>
                                </>:
                                <>
                                 <div className="blocks">
                            				<h2 className="pl-4">1st Prize</h2>
                            				<h6>{reward1name}</h6>
                            				<img className="rewardimages" src={`https://xrsports.gg/team/public/tournament/${reward1image}`}  alt=""/>
                                           
                                        </div>
                                        <div className="blocks">
                            				<h2 className="pl-4">2nd Prize</h2>
                            				<h6>{reward2name}</h6>
                            				<img className="rewardimages" src={`https://xrsports.gg/team/public/tournament/${reward2image}`} alt="" />
                                           
                                        </div>
                                        <div className="blocks">
                            				<h2 className="pl-4">3rd Prize</h2>
                            				<h6>{reward3name}</h6>
                            			    <img className="rewardimages" src={`https://xrsports.gg/team/public/tournament/${reward3image}`} alt="" />
                                           
                                        </div>
                                </>
                            }
                			
                                        
                                       
                			</div>
                			<div className="tab-pane pl-4" id="details4">
                					<div className="blocks">
                            				<h2 className="pl-4">Registeration Dates</h2>
                            				<h4>Registeration Start Date:</h4>
                            				<h5>{reg_open_date}</h5>
                            				<h4>Registeration Closing Date:</h4>
                            				<h5>{reg_close_date}</h5>
                            		</div>
                            		<div className="blocks">
                            				<h2 className="pl-4">Tournament Dates</h2>
                            			<h4>Tournament Start Date:</h4>
                                            <h5>{tour_start_date}</h5>
                            				<h4>Tournament End Date:</h4>
                            				<h5>{tour_end_date}</h5>
                            		</div>
                            		<div className="blocks">
                            				<h2 className="pl-4">Time</h2>
                            			<h4>Tournament Start Time:</h4>
                            				<h5>{time}</h5>
                            		</div>
                				
                            </div>
                			<div className="tab-pane" id="details5">
                			   <div className="blocks">
                				<h2 className="pl-4">How To Play</h2>
                				<ul className="social-links">
                					<li>Sign in or Register for Free</li>
                					<li>Update Your Gamertags.</li>
                					<li>Start Playing!</li>
                				</ul>
                				</div>
                			  <div className="blocks">
                				<h2 className="pl-4">Social Links</h2>
                				<ul className="sociall-linkss">
                					<li> <a href={`https://www.facebook.com/${facebook}`}><i className="fab fa-facebook-f"></i></a> </li>
                					<li> <a href={`https://twitter.com/${twitter}`}><i className="fab fa-twitter"></i></a> </li>
                					<li> <a href={`https://www.instagram.com/${instagram}`}><i className="fab fa-instagram"></i></a> </li>
                					<li> <a href={`https://www.youtube.com/user/${youtube}`}><i className="fab fa-youtube"></i></a> </li>
                				</ul>
                				</div>
                			   <div className="blocks">
                				<h2 className="pl-4">Contact</h2>
                				<a className="reportissuetourr">Live Chat</a><br/>
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
    singletournamentdata: state.tournaments.data,
    userdata: state.userDetails.data
})
export default connect(mapStateToProps)(singletournament);