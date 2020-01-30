import React, { Component } from 'react';
import { connect } from 'react-redux';
import Pagination from './../store/helpers/Pagination';
import {NavLink } from 'react-router-dom';
import {allMatch} from './../store/actions/matchActions';
import {getAllTourMatchs} from './../store/actions/tournamentsActions';
import { getUserdetails} from "./../store/actions/userActions";
import {getAllgames} from './../store/actions/gamesActions';
import parseJwt , {gameName , gamePlatformIcons}  from './../store/helpers/common';
import toastr from "reactjs-toastr";
import { FormGroup, FormControl, FormLabel } from 'react-bootstrap';
import SimpleReactValidator from 'simple-react-validator';
import { sendMessage} from "./../store/actions/messageActions";
class allmatches extends Component {
    
    constructor(props) {
        super(props);
        this.matchValidator = new SimpleReactValidator();
        this.state = {
            games:'',
            totalItems: '',
            alluserdata: '',
            sortOrderBy: 'asc',
            pageOfItems: [],
            creator:'',
            creatorid:'',
            gametype:'',
            gameplatform:'',
            game:'',
            isSubmit:false,
            isLoggedIn:false,
            loggedinuserpsnid:'',
            loggedinuserxboxid:'',
            loggedinuserpccodbo3:'',
            loggedinuserpccodm:'',
            loggedinuserpccodaw:'',
            loggedinuserpccodmw:'',
            player1username:'',
            player1gamertag:'',
            searchplatform:'',
            searchgame:'',
            search:false


        };
    }
    componentDidMount() {
        if (localStorage.getItem('token')) {
            const currdetails = parseJwt(localStorage.getItem('token'));
            const currid = currdetails.sub;
            const username = currdetails.nik;
            this.setState({ isLoggedIn: true,creator:username , creatorid: currid });
            this.props.dispatch(getUserdetails(currid));
        }
        document.title = 'match';
        this.props.dispatch(allMatch());
        this.props.dispatch(getAllgames());

    }
    dataChange(e) {
        let validate = this.matchValidator;
        if (validate.allValid()) {

        } else {
            validate.showMessages();
            this.forceUpdate();
        }
        if(e.target.name === 'gameplatform'){
            if(e.target.value === 'ps4'){
                this.setState({ player1gamertag: this.state.loggedinuserpsnid });  
            }else if(e.target.value === 'xbox'){
                this.setState({ player1gamertag: this.state.loggedinuserxboxid }); 
            }else if(e.target.value === 'pc'){
            }
        }
            if(this.state.gameplatform === 'pc'){
                if(e.target.name === 'game'){ 
                    if(e.target.value === 'codbo3'){
                        this.setState({ player1gamertag: this.state.loggedinuserpccodbo3 });
                    }else if(e.target.value === 'codm'){
                        this.setState({ player1gamertag: this.state.loggedinuserpccodm });
                    }else if(e.target.value === 'codaw'){
                        this.setState({ player1gamertag: this.state.loggedinuserpccodaw });
                    }else if(e.target.value === 'codmw'){
                        this.setState({ player1gamertag: this.state.loggedinuserpccodmw });
                    }
                }
            }
       
        this.setState({ [e.target.name]: e.target.value });
        e.preventDefault();
      }
    sortOrder = (field, order = 'asc') => {

        this.state.totalItems.sort((a, b) => {
            let first = typeof a[field] === 'number' ? a[field] : a[field].toUpperCase();
            let last = typeof b[field] === 'number' ? b[field] : b[field].toUpperCase();
            let comparison = 0;
            if (first < last) {
                comparison = -1;
            }

            if (first > last) {
                comparison = 1;
            }

            if (order === 'desc') {
                comparison = comparison * -1;
                this.setState({ sortOrderBy: 'asc' });
            } else {
                this.setState({ sortOrderBy: 'desc' });
            }
            return comparison;
        });
        this.setState({ pageOfItems: this.state.totalItems.slice(0, 10) });
    };


    createMatch = (e) => {
        e.preventDefault();
        let validate = this.matchValidator;
        if (validate.allValid()) {
            this.setState({ isSubmit: true });
            const {creatorid,gametype, gameplatform,game,player1gamertag,player1username} = this.state;
            const request = new Request('https://xrsports.gg/team/public/user/create-match', {
                method: 'POST',
                body: JSON.stringify({ creatorid,gametype, gameplatform,game,player1gamertag,player1username }),
                headers: new Headers({
                    "Content-Type": "application/json",
                    "X-Auth-Token": `${localStorage.getItem("token")}`
                  })
            })
            if(player1gamertag === '' || player1gamertag === null || player1gamertag === '0'){
                toastr.error('Please Update Your Gamertag',  {displayDuration:1500})
            }else{
                return fetch(request).then(res => res.json())
                .then((data) => {
                    if (data.ResponseCode === '1') {
                        // $('#mainpage').click();
                        document.getElementById("close").click();
                        this.setState({ isSubmit: false });
                        toastr.success(data.ResponseText,  {displayDuration:1500})
                        this.props.dispatch(allMatch());
                        // this.props.dispatch(sendMessage('+919646623567','hey there , wassup?'));
                    } else {
                        toastr.error(data,  {displayDuration:1500})        
                    }
                }).catch((err) => {
                    console.log(err)
                })
            }
               
            } else {
                validate.showMessages();
                // rerender to show messages for the first time
                this.forceUpdate();
            }
    };


    onChangePage = (pageOfItems) => {
        this.setState({ pageOfItems: pageOfItems });
    }
    searchMatches = (e) => {
        this.setState({ search: true });
        const {searchgame , searchplatform} = this.state;
       if(searchgame === ''){
           var game = 0;
       }else{
        var game = searchgame;
       }
       if(searchplatform === ''){
        var plat = 0;
        }else{
        var plat = searchplatform;
        }
        this.props.dispatch(getAllTourMatchs(game,plat));
    }
    componentWillReceiveProps(nextProps) {
        if(this.state.search){
            if(nextProps.allsearchedmatchesdata !== []){
                this.setState({
                    totalItems: nextProps.allsearchedmatchesdata,
                    // pageOfItems :nextProps.allsearchedmatchesdata
                });
            }else{
                this.setState({
                    totalItems: '',
                });
            } 
        }else{
            this.setState({
                totalItems: nextProps.allmatchesdata,
            });
        }
        
        

        this.setState({
            games: nextProps.gamesdata,
            alluserdata:nextProps.userdata,
            player1username:nextProps.userdata.nickname,
            loggedinuserpsnid:nextProps.userdata.psnid,
            loggedinuserxboxid:nextProps.userdata.xboxid,
            loggedinuserpccodbo3:nextProps.userdata.pccodbo3,
            loggedinuserpccodm:nextProps.userdata.pccodm,
            loggedinuserpccodaw:nextProps.userdata.pccodaw,
            loggedinuserpccodmw:nextProps.userdata.pccodmw,
        });
    }
    render() {
        console.log(this.state)
        return (
      <>      
        <div id="mainpage" className="main_box col-md-12 p-0">
            <div className="container databox">
                <div className="player-rank games-list">
                                    <div className="row searchProduct">
                                    <div className="col-md-3">
                                        <div className="form-group">
                                            <label className="col-form-label" htmlFor="customer">Platform</label>
                                            <select name="searchplatform" id="exclusive" className="form-control" onChange={this.dataChange.bind(this)}>
                                                <option value="">Select Platform</option>
                                                <option value="pc">PC</option>
                                                <option value="ps4">PS4</option>
                                                <option value="xbox">XBOX</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="col-md-3">
                                        <div className="form-group">
                                            <label className="col-form-label" htmlFor="customer">Game</label><br/>
                                            <select name="searchgame" id="exclusive" className="form-control" onChange={this.dataChange.bind(this)}>
                                                <option value="">Select Game</option>
                                                { this.state.games.length > 0?this.state.games.map((post) => (
                                                        <option value={post.game_name} key={post.game_name}>{post.game_title}</option>
                                                        )):''}
                                            </select>
                                        </div>
                                    </div>
                                    <div className="col-md-3">
                                        <div className="form-group">
                                            <label className="col-form-label" htmlFor="customer">Filter Ladder</label><br/>
                                            <input  className="form-control filtermatchh" type="submit" onClick={(e)=>this.searchMatches(e)} name="filterit"  value="Search"/>
                                        </div>
                                    </div>
                                    <div className="col-md-3">
                                        <div className="form-group">
                                            <label className="col-form-label" htmlFor="customer">Start a Challenge</label><br/>
                                            <a id="modal-50999" href="#modal-container-50999" role="button" data-toggle="modal"> Create Match and Start Challenging <i className="fas fa-chevron-right"></i></a>
                                        </div>
                                    </div>
                                    
                                </div>
                    <table className="table mt-2">
                        <thead>       
                            <tr className="new_list_tournament only_headings list_game leadehead">
                                    <th>Game &nbsp;&nbsp;<a onClick={() => this.sortOrder('game', this.state.sortOrderBy)} ><i className="fa fa-sort"  ></i></a></th>
                                    <th>Platform </th>
                                    <th>Created By &nbsp;&nbsp;<a href="javascript:void(0)" onClick={() => this.sortOrder('player1', this.state.sortOrderBy)} ><i className="fa fa-sort"  ></i></a></th>
                                    <th>Created On &nbsp;&nbsp;<a href="javascript:void(0)" onClick={() => this.sortOrder('date', this.state.sortOrderBy)} ><i className="fa fa-sort"  ></i></a></th>
                                    <th>Join</th>
                            </tr>
                        </thead>     
                            <tbody>
                                {
                                    this.props.matchloading?
                                    <tr className="tableloader" colSpan="7"><img className="spinnerloader" src="https://res.cloudinary.com/dg3sjwu2p/image/upload/v1580215115/envy/loader/loading-gif-png-5_q7dgtv.gif"/> </tr>
                                    :
                                    this.state.totalItems.length > 0 ? this.state.pageOfItems.map((post) => (
                                        <tr key={post.match_id} className="table-secondary">
                                            <td>{gameName(post.game)}</td>
                                            <td><img className="laddermatchlogo" src={gamePlatformIcons(post.platform)} alt = "" /></td>
                                            <td>{post.player1}</td>
                                            <td>{post.date}</td>
                                            <td><NavLink to = {`/single-match/${post.match_id}`}>Join</NavLink></td>
                                        </tr>
                                        )) :<tr><td colSpan="7" align="center"><p>No matches</p></td></tr>
                                }                 
                            </tbody>   
                        </table>    
                    <div className="pagination">
                        &nbsp;{this.state.totalItems.length > 0 ? <Pagination items={this.state.totalItems} onChangePage={this.onChangePage} /> : ''}
                    </div>
                </div>
            </div>
        </div>
    <div className="modal fade" id="modal-container-50999" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
    <button type="button" className="close" id="close" data-dismiss="modal">&times;</button>
    <div className="logo-image text-center">
    <img class="img-fluid footer_logo" src="/assets/img/games/foot-logo.png" alt=""></img>
        {/* <img src="https://res.cloudinary.com/dnv0dij0y/image/upload/v1574922448/logo/tcgaminglogo_l1jssw.png" className="img-fluid" alt=""/> */}
    </div>
    <div className="login team modal-dialog" role="document">
        <div className="login modal-content rob">
            <div className="login modal-header text-center">
                <h5 className="modal-titl text-center w-100 creategametitle" id="myModalLabel">Create a Ladder Match</h5>
            </div>
            <div className="modal-body create_match">
                

            <FormGroup>
                <FormLabel>Platform</FormLabel>
                <FormControl as="select" name="gameplatform" id="chooseplatform" required="" value={this.state.gameplatform} onChange={this.dataChange.bind(this)}>
                <option value="">Choose Platform</option>
                {this.state.alluserdata.psnid === '' || this.state.alluserdata.psnid === undefined?<option value="ps4" disabled={true}> PlayStation 4 </option>:<option value="ps4"> PlayStation 4 </option>}
                {this.state.alluserdata.xboxid === '' || this.state.alluserdata.xboxid === undefined?<option value="xbox" disabled={true}> Xbox</option>:<option value="xbox"> Xbox </option>}
                {this.state.alluserdata.pccodmw !== '' || this.state.alluserdata.pccodaw !== '' || this.state.alluserdata.pccodm !== '' || this.state.alluserdata.pccodbo3 !== '' ?<option value="pc" > PC</option>:<option value="pc" disabled={true}> PC </option>}

                </FormControl>
                {this.matchValidator.message('gameplatform', this.state.gameplatform, 'required')}
            </FormGroup>
            <FormGroup>
                <FormLabel>Game</FormLabel>
                <FormControl as="select" name="game" required="" value={this.state.game} onChange={this.dataChange.bind(this)}>
                <option value="">Choose Game</option>
                {this.state.gameplatform === 'pc'?<option value="codmw" disabled={this.state.alluserdata.pccodmw === '' || this.state.alluserdata.pccodmw === undefined?'true':''}>Call of Duty Modern Warfare</option>:<option value="codmw">Call of Duty Modern Warfare</option>}
                {this.state.gameplatform === 'pc'?<option value="codaw" disabled={this.state.alluserdata.pccodaw === '' || this.state.alluserdata.pccodaw === undefined?'true':''}>Call of Duty Advance Warfare</option>:<option value="codaw">Call of Duty Advance Warfare</option>}
                {this.state.gameplatform === 'pc'?<option value="codm" disabled={this.state.alluserdata.pccodm === '' || this.state.alluserdata.pccodm === undefined?'true':''}>Call of Duty Mobile</option>:<option value="codm">Call of Duty Mobile</option>}
                {this.state.gameplatform === 'pc'?<option value="codbo3" disabled={this.state.alluserdata.pccodbo3 === '' || this.state.alluserdata.pccodbo3 === undefined?'true':''}>Call of Duty Black Ops 3</option>:<option value="codbo3">Call of Duty Black Ops 3</option>}
             </FormControl>
                {this.matchValidator.message('game', this.state.game, 'required')}
            </FormGroup>
            <FormGroup>
                <FormLabel>Match Type</FormLabel>
                <FormControl as="select" name="gametype" id="gametype" required="" value={this.state.gametype} onChange={this.dataChange.bind(this)}>
                <option value="">Choose Type</option>
                <option value="solo">Single Player</option>
                </FormControl>
                {this.matchValidator.message('gametype', this.state.gametype, 'required')}
            </FormGroup>
            <FormGroup controlId="firstname">
                <FormLabel>Challenging Player</FormLabel>
                <FormControl type="text" className="creator" readOnly="" name="creator" value={this.state.creator} onChange={this.dataChange.bind(this)} />
                <FormControl type="hidden" className="creatorid hidden" name="creatorid" readOnly="" value={this.state.creatorid} onChange={this.dataChange.bind(this)} />
                 {this.matchValidator.message('creatorid', this.state.creatorid, 'required')}
            </FormGroup>
            <div className="text-center wrapper">
<button type="submit"  onClick={(e) => this.createMatch(e)} disabled={this.state.isSubmit} className="btn btn-red btn-block btn-lg profilebuttons">{this.state.isSubmit ? 'PLEASE WAIT..' : 'Create Match'}</button>
</div>
</div>
        </div>
    </div>
</div>
         </>
        );
    }
}
const mapStateToProps = (state) => ({
    allmatchesdata: state.match.data,
    matchloading : state.match.loading,
    userdata: state.userDetails.data,
    gamesdata: state.games.data,
    allsearchedmatchesdata : state.tournaments.matchdata,

})
export default connect(mapStateToProps)(allmatches);