import React, { Component } from 'react';
import { connect } from 'react-redux';
import {getMatcheByid} from './../store/actions/matchActions';
import parseJwt , {gameName , gamePlatformName , gametourBanners}  from './../store/helpers/common';
import { getUserdetails} from "./../store/actions/userActions";
import toastr from "reactjs-toastr";
import { FormGroup, FormControl } from 'react-bootstrap';


class singlematch extends Component {
    constructor(props) {
        super(props);
        this.state = {
            creatorid:'',
            isLoggedIn: false,
            totalItems: '',
            game:'',
            date:'',
            matchid:'',
            platform:'',
            status:'',
            player1:'',
            player2:'',
            player1score:'',
            player1scoree:'',
            player2score:'',
            player2scoree:'',
            chat_id:'',
            winner:'',
            new_challenge:'',
            new_challenge_id:'',
            new_challenge_by:'',
            loggedinusername:'',
            loggedinuserpsnid:'',
            loggedinuserxboxid:'',
            loggedinuserpccodbo3:'',
            loggedinuserpccodaw:'',
            loggedinuserpccodm:'',
            loggedinuserpccodmw:'',
            player1username:'',
            player1gamertag:'',
            player2username:'',
            player2gamertag:'',
            currusergamertag:''

        };
    }
    componentDidMount() {
        if (localStorage.getItem('token')) {
            const currdetails = parseJwt(localStorage.getItem('token'));
            const currid = currdetails.sub;
            const currentusername = localStorage.getItem('name');
            this.props.dispatch(getUserdetails(currid));
            this.setState({ isLoggedIn: true , creatorid: currid , loggedinusername:currentusername});
        }
        const matchid = this.props.match.params.id;
        document.title = 'match';
        this.props.dispatch(getMatcheByid(matchid));
    }
    validatesticketmessageForm = (e) => {
		
		this.setState({ [e.target.name]: e.target.value });
		e.preventDefault();
    }
    submitResult = (e) =>{
        e.preventDefault();
            const {player1scoree,player2scoree , player1 , player2,matchid ,game} = this.state;

            const request = new Request('https://xrsports.gg/team/public/user/submit-score', {
                method: 'POST',
                body: JSON.stringify({player1scoree,player2scoree , player1 , player2,matchid,game}),
                headers: new Headers({
                    "Content-Type": "application/json",
                    "X-Auth-Token": `${localStorage.getItem("token")}`
                  })
            })
                return fetch(request).then(res => res.json())
                .then((data) => {
                    if (data.ResponseCode === '1') {
                        toastr.success(data.ResponseText,  {displayDuration:1500})
                        this.props.dispatch(getMatcheByid(matchid));
                    } else {
                        toastr.error(data,  {displayDuration:1500})        
                    }
                }).catch((err) => {
                    console.log(err)
                })
    }
    joinmatch = (e) => {
        e.preventDefault();
        if(this.state.platform === 'ps4'){
            var gamertag =   this.state.loggedinuserpsnid ;  
        }else if(this.state.platform === 'xbox'){
            var gamertag =   this.state.loggedinuserxboxid ; 
        }
        if(this.state.platform === 'pc'){
        if(this.state.game === 'codbo3'){
            var gamertag =  this.state.loggedinuserpccodbo3; 
        }else if(this.state.game === 'codm'){
            var gamertag =   this.state.loggedinuserpccodm;
        }else if(this.state.game === 'codaw'){
            var gamertag =   this.state.loggedinuserpccodaw;
        }else if(this.state.game === 'codmw'){
            var gamertag =   this.state.loggedinuserpccodmw;
        }
    }
         const player2gamertag = gamertag;
            const {matchid,creatorid , loggedinusername} = this.state;

            const request = new Request('https://xrsports.gg/team/public/user/join-match', {
                method: 'POST',
                body: JSON.stringify({matchid,creatorid, loggedinusername , player2gamertag}),
                headers: new Headers({
                    "Content-Type": "application/json",
                    "X-Auth-Token": `${localStorage.getItem("token")}`
                  })
            })
            if(player2gamertag === '' || player2gamertag === 0 || player2gamertag === '0'){
                toastr.error('Update your gamertag',  {displayDuration:1500})
            }else{
                return fetch(request).then(res => res.json())
                .then((data) => {
                    if (data.ResponseCode === '1') {
                        toastr.success(data.ResponseText,  {displayDuration:1500});
                        this.props.dispatch(getMatcheByid(matchid));
                    } else {
                        toastr.error(data,  {displayDuration:1500})        
                    }
                }).catch((err) => {
                    console.log(err)
                })
            }
               
    }
    openmodal = (e) =>{
        console.log(e)
        if(e == 1){
            const element = document.getElementById('playeroneres'); 
            element.style.setProperty('display', 'block');
        }else if(e == 2){
            const element = document.getElementById('playertwores'); 
            element.style.setProperty('display', 'block');
        }   
    }
    closemodal = (e) =>{
        console.log(e)
        if(e == 1){
            const element = document.getElementById('playeroneres'); 
            element.style.setProperty('display', 'none');
        }else if(e == 2){
            const element = document.getElementById('playertwores'); 
            element.style.setProperty('display', 'none');
        }
    }
    componentWillReceiveProps(nextProps) {
        this.setState({
            alluserdata:nextProps.userdata,

            loggedinuserpsnid:nextProps.userdata.psnid,
            loggedinuserxboxid:nextProps.userdata.xboxid,
            loggedinuserpccodbo3:nextProps.userdata.pccodbo3,
            loggedinuserpccodaw:nextProps.userdata.pccodaw,
            loggedinuserpccodm:nextProps.userdata.pccodm,
            loggedinuserpccodmw:nextProps.userdata.pccodmw,

            totalItems: nextProps.singlematch,
            matchid:nextProps.singlematch.match_id,
            date:nextProps.singlematch.date,
            game:nextProps.singlematch.game,
            platform:nextProps.singlematch.platform,
            status:nextProps.singlematch.status,
            player1:nextProps.singlematch.player1,
            player2:nextProps.singlematch.player2,
            player1score:nextProps.singlematch.player1score,
            player2score:nextProps.singlematch.player2score,
            chat_id:nextProps.singlematch.chat_id,
            winner:nextProps.singlematch.winner,
            new_challenge:nextProps.singlematch.new_challenge,
            new_challenge_id:nextProps.singlematch.new_challenge_id,
            new_challenge_by:nextProps.singlematch.new_challenge_by,
            player1username:nextProps.singlematch.player1username,
            player1gamertag:nextProps.singlematch.player1gamertag,
            player2username:nextProps.singlematch.player2username,
            player2gamertag:nextProps.singlematch.player2gamertag
           
        });
        if(this.state.platform === 'ps4'){
            this.setState({ currusergamertag: this.state.loggedinuserpsnid });  
        }else if(this.state.platform === 'xbox'){
            this.setState({ currusergamertag: this.state.loggedinuserxboxid }); 
        }
        if(this.state.platform === 'pc'){
                if(this.state.game === 'codm'){
                    this.setState({ currusergamertag: this.state.loggedinuserpccodm }); 
                }else if(this.state.game === 'codbo3'){
                    this.setState({ currusergamertag: this.state.loggedinuserpccodbo3 });
                }else if(this.state.game === 'codaw'){
                    this.setState({ currusergamertag: this.state.loggedinuserpccodaw });
                }else if(this.state.game === 'codmw'){
                    this.setState({ currusergamertag: this.state.loggedinuserpccodmw });
                }
        }
    }
    runItAgain =(e) =>{
        e.preventDefault();


    if(this.state.creatorid === this.state.player1){
        var gamertag = this.state.player1gamertag;
    }else if(this.state.creatorid === this.state.player1){
        var gamertag = this.state.player2gamertag;
    }
        const {game,platform , creatorid , loggedinusername , new_challenge , matchid } = this.state;
        const gtag = gamertag;
        const request = new Request('https://xrsports.gg/team/public/user/run-it-back', {
            method: 'POST',
            body: JSON.stringify({game,platform, creatorid , loggedinusername ,gtag , new_challenge , matchid}),
            headers: new Headers({
                "Content-Type": "application/json",
                "X-Auth-Token": `${localStorage.getItem("token")}`
              })
        })
            return fetch(request).then(res => res.json())
            .then((data) => {
                if (data.ResponseCode === '1') {
                    toastr.success(data.ResponseText,  {displayDuration:1500})
                    this.props.dispatch(getMatcheByid(matchid));
                } else {
                    toastr.error(data.ResponseText,  {displayDuration:1500})        
                }
            }).catch((err) => {
                console.log(err)
            })
    }
    render() {
        const {player1username,new_challenge,player2username,player1gamertag,player2gamertag,loggedinusername , isLoggedIn,creatorid,date,matchid,game,platform,player1,player2,player1score,player2score , winner} = this.state;
        const {loggedinuserpsnid,loggedinuserxboxid,loggedinuserpccodmw , loggedinuserpccodbo3,loggedinuserpccodaw,loggedinuserpccodm, } = this.state;
        return (
            <>
             <div className="main-content w-100 mt-2 text-center">
                <div className="container">
                    <div className="games-list">
                    <div id="mainpage" className="main_box col-md-12 p-0">
                        {
                             this.props.loading ?
                            <div className="singlematchloaderdiv"><img className="spinnerloader" src="https://res.cloudinary.com/dg3sjwu2p/image/upload/v1580215115/envy/loader/loading-gif-png-5_q7dgtv.gif"></img></div>
:

      <>  <p id="opensideright"><i className="fas fa-chevron-left"></i> <i className="far fa-comments"></i></p>
       
        
<div className="even_banner match mb-2" >
        <div className="left_hand">
      <img className ="featuretournament" src={gametourBanners(game)} alt="" />
        </div>
    	<div className="right_hand">
    		<h3> {gameName(game)} - {gamePlatformName(platform)}
                ( Match Id - {matchid} )    		</h3>
    		<p>Created By - {player1} | {date}    		</p>
    		<p><strong>Winning XP - 50 </strong></p>
    		<p><strong>Participation XP - 10 </strong></p>
    	</div>	
        
        <div className="each_event_description match_info">
                {isLoggedIn && (new_challenge === '0' || new_challenge === 0) && (winner != '0' || winner != 0)?<input type="submit" value="Run it Back" className="runitback" onClick={(e)=>this.runItAgain(e)} name="createanothermatch"/>:''} 
               
              <div className="row no-gutters mt-5">
              <div className="col-md-6 pr-2">
              <div className={ (player1score != 0 || player1score != '0') && (player2score != 0 || player2score != '0') && player1score > player2score ?
                'playingparties rob matchboxone winner':'playingparties rob matchboxone'
               }>
                <div className="join">
                    
                {/* <?php if($player1 == $winner){ echo "<p className='wintag'>winner</p>"; } ?> <?php if($winner == "draw"){ echo "<p className='wintag'>Draw</p>"; } ?> */}
                    <h3 className="jdm">Open Ladder Challenge</h3>
                    <div className="half_single">
                        <h4>Game</h4>
                        <p>{gameName(game)}</p>
                    </div>
                    <div className="half_single">
                        <h4>Platform</h4>
                        <p>{gamePlatformName(platform)}</p>
                    </div>
                    <div className="half_single">    
                        <h4>Created by</h4>
                           <p>{player1username}</p>
                    </div>
                    <div className="half_single">        
                        <h4>{gamePlatformName(platform)}</h4>
                        <p>
                            {player2 === '' || player2 === 0 || player2 === '0'?
                            `Accept the Challenge to See This Field`: 
                        `${player1gamertag}`}           
                         </p>
                    </div> 

                    <div className="matchresult">
                        {creatorid === player2 && (player2score != '' || player2score != 0) && (player1score != '' || player1score != 0)?
                    `Players Score : ${player1score}` : `` }

                   {creatorid === player1 ?
                            player2 === '' || player2 === 0 || player2 === '0'?
                                 `Match Status : Open`:
                                        player1score === '' || player1score === 0 || player1score === '0' ? 
                                        <>
                                        <input type="submit" name="submitsinglematch1score" className="submitsinglematch1score"  onClick ={(e)=>this.openmodal('1')} value="Submit Score"/>
                                               <div className="playeroneres" id="playeroneres">
                                                   <div className="logo-image-result text-center">
                                               <img src="https://res.cloudinary.com/dnv0dij0y/image/upload/v1574946527/logowhite_jtqw8c.png" className="img-fluid" alt=""/>
                                               </div>
                                                   <div className="closethis" onClick={(e)=>this.closemodal('1')}><p>X</p></div>
                                                   <h5 className="modal-titl text-center w-100" id="myModalLabel">  SUBMIT RESULT </h5>
                                                   {/* <input type="text" name="player1result" placeholder="Input Your Score Here"/>
                                                   <input type="submit" name="submitresult" className="submitladderresult" value="Submit"/> */}
                                                   <FormGroup>
                                                    <FormControl type="text" id="wattheresult1" name="player1scoree" placeholder="Input Your Score Her" value={this.state.player1scoree} onChange={e => this.validatesticketmessageForm(e)} />
                                                    </FormGroup>
                                                    <button type="submit" onClick={(ev) => this.submitResult(ev)}  className="btn btn-red btn-block btn-lg">Submit</button>
        
                                            </div>
                                        
                                        </>
                                        :
                                        `Your Score : ${player1score}`
                    :``}
                    </div>
                              
                    { (player1 != '' || player1 != 0 || player1 != '0') && (player2 != '' || player2 != 0 || player2 != '0')&& player2 === creatorid && (player1score === '' ||player1score === 0 ||player1score === '0') && (player2score === '' ||player2score === 0 || player2score === '0')?
                         <>                          
                         <input name="msngr" className="hidden" type="text" value="Hi <?php echo $playername; ?> , I am <?php echo $currentusername; ?> waiting for you to start <?php echo $gamename; ?> of Match Id # <?php echo $matchid; ?> on <?php echo $platforum; ?>. my username on <?php echo $platforu; ?> is <?php echo $psn; ?>"/>
                          <input name="numbr" className="hidden" type="text" value="<?php echo $opponumber; ?>"/>
                          <input type="submit" value="give a buzz" name="sendreminderr"/> 
                          <div className="tooltipp"><i className="fa fa-info-circle" aria-hidden="true"></i>
                           <span className="tooltipptext">SMS Notification Will be sent to the opponent that you are waiting online to start the Match. Your Name, Username and PSN/Gamertag/Game Username will be shared with the opponent via SMS.</span>
                          </div>
                      </>:''
                    }
                  
                          



            </div>
        </div>
              </div>
              <div className="col-md-6 pl-2">
              <div className={ (player1score != 0 || player1score != '0') && (player2score != 0 || player2score != '0') && player1score < player2score ?
                'playingparties rob matchboxtwo winner':'playingparties rob matchboxtwo'
               }>
            {
                player2 === '' || player2 === 0 || player2 === '0'?
                    isLoggedIn?
                        
                            creatorid === player1?
                            <><h3 className="jdm">Join This Match</h3>
                        <img src="/assets/img/ oops.png" className="img-fluid" alt=""/>

                             
                            <div className='cant_accept'><p className='oo'>OOPS</p>
                            You are Awesome, Don't Challenge Yourself!</div></>
                            :
                            <>
                                    <input type="text" className="hidden" value="<?php echo $id; ?>" name="match_id"/>
                                    <input type="text" name="user_id" className="hidden" value="<?php $userid = get_current_user_id(); echo $userid; ?>"/>
                                    <div className="half_single">   
                                    <h4>Game</h4>
                                    <p>{gameName(game)}</p>
                                    </div>
                                    <div className="half_single">  
                                    <h4> Platform</h4>
                                    <input className="noedit yay" type="" value={gamePlatformName(platform)} readonly />
                                    </div>
                                    <div className="half_single">
                                    <h4>Username</h4>
                                    <input className="noedit yay hidden" type="text" value={creatorid} name="player_name" readonly />
                                    {/* <p>{creatorid}</p> */}
                                    <p>{loggedinusername}</p>
                                    </div>
                                    <div className="half_single">
                                    <h4>{gamePlatformName(platform)}</h4>
                                    <input className="noedit yay" type="" value={
                                    platform === "ps4"? loggedinuserpsnid :platform === "xbox"? loggedinuserxboxid :platform === "pc"?
                                    game === "codaw"?loggedinuserpccodaw 
                                    :game === "codm"?loggedinuserpccodm
                                    :game === "codbo3"?loggedinuserpccodbo3
                                    :game === "codmw"?loggedinuserpccodmw:''
                                    : ""} name="player_gamertag" id="player_gamertag" readonly />
                                                            </div>
                                                            
                        <input type="submit" value="Accept Challenge" onClick={(e) => this.joinmatch(e)} name="joinmatch"></input>
                            </>
                                                       
                        :
                        <div className='cant_accept'><p className='oo'>OOPS!</p>
                        You Must Be Logged in to Accept This Challenge!
                        <a className="cmlogin" id="modal-464146" href="#modal-container-464146" role="button" data-toggle="modal">Log in</a>
                        <a className="cmsignup" id="modal-509828" href="#modal-container-509828" role="button" data-toggle="modal">New User? Sign up</a>
                        </div>
                    
                :
                <div className="join">
                        {/* <?php if($player2 == $winner){ echo "<p className='wintag'>winner</p>"; } ?> <?php if($winner == "draw"){ echo "<p className='wintag'>Draw</p>"; } ?> */}
                        <h3 className="jdm">Challenge Accepted</h3>
                        
                        <div className="half_single">
                            <h4>Game</h4>
                            <p>{gameName(game)}</p>
                        </div>
                        <div className="half_single">
                            <h4>Platform</h4>
                            <p>{gamePlatformName(platform)}</p>
                        </div>
                        <div className="half_single">
                            <h4>Challenge Accepted By</h4>
                               <p>{player2username}</p>
                        </div>
                        <div className="half_single">
                        <h4>{gamePlatformName(platform)}</h4>
                        <p>{player2gamertag} </p>
                        </div>
                        
                        <div className="matchresult">
                            {
                                creatorid === player1 && (player1score != '' || player1score != 0 || player1score != '0') && (player2score != '' || player2score != 0 || player2score != '0')?
                                `Players Score : ${player2score}`:``
                            }
                            {creatorid === player2 ?
                               player2score === '' || player2score === 0 || player2score === '0'?
                               <>
                               <input type="submit" name="submitsinglematch2score" className="submitsinglematch2score" onClick ={(e)=>this.openmodal('2')} value="Submit Score"/>
                                <div className="playertwores" id="playertwores">
                                    <div className="logo-image-result text-center">
                                <img src="https://res.cloudinary.com/dnv0dij0y/image/upload/v1574946527/logowhite_jtqw8c.png" className="img-fluid" alt=""/>
                                </div>
                                    <div className="closethis" onClick={(e)=>this.closemodal('2')}><p>X</p></div>
                                <h5 className="modal-titl text-center w-100" id="myModalLabel">  SUBMIT RESULT </h5>
                                        {/* <input type="text" id="wattheresult" name="player2result" placeholder="Input Your Score Here"/>
                                        <input type="submit" name="submittworesult" className="submitladderresult" value="Submit"/> */}
                                        <FormGroup>
                                        <FormControl type="text" id="wattheresult" name="player2scoree" placeholder="Input Your Score Her" value={this.state.player2scoree} onChange={e => this.validatesticketmessageForm(e)} />
                                        </FormGroup>
                                        <button type="submit" onClick={(ev) => this.submitResult(ev)}  className="btn btn-red btn-block btn-lg">Submit</button>
        
                                </div>
                               </>
                               :
                               `Your Score : ${player2score}`
                            :
                            ``
                            } 
                        </div>
                        { (player1 != '' || player1 != 0 || player1 != '0') && (player2 != '' || player2 != 0 || player2 != '0') && player1 === creatorid && (player1score === '' ||player1score === 0 ||player1score === '0') && (player2score === '' ||player2score === 0 ||player2score === '0')?
                              <>
                                   <input name="msngr" className="hidden" type="text" value="Hi <?php echo $playername; ?> , I am <?php echo $currentusername; ?> waiting for you to start <?php echo $gamename; ?> of Match Id #  <?php echo $match_id; ?>  on <?php echo $platforum; ?>. my username on <?php echo $platforu; ?> is <?php echo $psn; ?>"/>
                                   <input name="numbr" className="hidden" type="text" value="<?php echo $opponumber; ?>"/>
                                   <input type="submit" value="give a buzz" name="sendreminder"/> 
                                   
                                   <div className="tooltipp"><i className="fa fa-info-circle" aria-hidden="true"></i>
                                        <span className="tooltipptext">SMS Notification Will be sent to the opponent that you are waiting online to start the Match. Your Name, Username and PSN/Gamertag/Game Username will be shared with the opponent via SMS.</span>
                                    </div></>
                             :``}
                           
                            
                            
                    </div>
            }
             </div>

              </div>
        

              </div>
      
       
        </div> 
   



</div>
      
        <div className="playingparties rob matchboxfour">
        </div>    
    </>
                        } 
                        </div>

           <div className="ladders_list_latest">
          </div>
          </div>
          </div>
          </div>
                  </>
                    
        );
    }
}

const mapStateToProps = (state) => ({
    singlematch: state.match.data,
    loading : state.match.loading,
    userdata: state.userDetails.data
})
export default connect(mapStateToProps)(singlematch);
