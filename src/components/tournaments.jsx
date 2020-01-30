import React, { Component } from 'react';
import { connect } from 'react-redux';
import {getTournaments} from './../store/actions/tournamentsActions';
import {getAllgames} from './../store/actions/gamesActions';
import Pagination from './../store/helpers/Pagination';
import {NavLink } from 'react-router-dom';
import { FormGroup, FormControl, FormLabel } from 'react-bootstrap';
import SimpleReactValidator from 'simple-react-validator';
import toastr from "reactjs-toastr";
import axios from 'axios';
import $ from "jquery";

class tournaments extends Component {
    constructor(props) {
        super(props);
        this.tourValidator = new SimpleReactValidator();
        this.state = {
            totalItems: '',
            sortOrderBy: 'asc',
            isSubmit: false,
            pageOfItems: [],
            tourtitle:'',
            price:'',
            exclusive_tournament:'',
            prize:'',
            prize_type:'',
            platform:'',
            game:'',
            theme:'',
            reg_open_date:'',
            reg_close_date:'',
            tour_start_date:'',
            tour_end_date:'',
            time:'',
            prizepool:'',
            prizeone:'',
            prizetwo:'',
            prizethree:'',
            prizeimage:'',
            reward1name:'',
            reward2name:'',
            reward3name:'',
            reward1image:'',
            reward2image:'',
            reward3image:'',
            brackets:'',
            type:'',
            description:'',
            rules:'',
            facebook:'',
            twitter:'',
            instagram:'',
            youtube:'',
            allgames:''
        };
    }
    componentDidMount() {
        document.title = 'tournaments';
        this.props.dispatch(getTournaments());
        this.props.dispatch(getAllgames());
    }
    validateTourForm = (e) => {
        e.preventDefault();

        let validate = this.tourValidator;
        if (validate.allValid()) {

        } else {
            validate.showMessages();
            this.forceUpdate();
        }
        this.setState({ [e.target.name]: e.target.value });
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

            if (order == 'desc') {
                comparison = comparison * -1;
                this.setState({ sortOrderBy: 'asc' });
            } else {
                this.setState({ sortOrderBy: 'desc' });
            }
            return comparison;
        });
        this.setState({ pageOfItems: this.state.totalItems.slice(0, 10) });
    };

    onChangePage = (pageOfItems) => {
        this.setState({ pageOfItems: pageOfItems });
    }

    componentWillReceiveProps(nextProps) {
        this.setState({
            totalItems: nextProps.alltournamentsdata,
            allgames: nextProps.gamesdata
        });
    }
    createTour = (e) =>{
        
        e.preventDefault();
        let validate = this.tourValidator;
        if (validate.allValid()) {
            this.setState({ isSubmit: true });
           const{tourtitle,price,exclusive_tournament,prize,prize_type,platform,game,theme,reg_open_date,
                reg_close_date,tour_start_date,tour_end_date,time,prizepool, prizeone,prizetwo,prizethree,
                reward1name,reward2name,reward3name,brackets,
                type,description,rules,facebook,twitter,instagram,youtube} = this.state;
                let request;
                let formData = new FormData();
                formData.append('reward1image', $('#reward1image')[0].files[0]);
                formData.append('reward2image', $('#reward2image')[0].files[0]);
                formData.append('reward3image', $('#reward3image')[0].files[0]);
                formData.append('prizeimage', $('#prizeimage')[0].files[0]);
                formData.append('tourtitle', tourtitle);
                formData.append('price', price);
                formData.append('exclusive_tournament', exclusive_tournament);
                formData.append('prize', prize);
                formData.append('prize_type', prize_type);
                formData.append('platform', platform);
                formData.append('game', game);
                formData.append('reg_open_date', reg_open_date);
                formData.append('reg_close_date', reg_close_date);
                formData.append('tour_start_date', tour_start_date);
                formData.append('tour_end_date', tour_end_date);
                formData.append('time', time);
                formData.append('prizepool', prizepool);
                formData.append('prizeone', prizeone);
                formData.append('prizetwo', prizetwo);
                formData.append('prizethree', prizethree);
                formData.append('reward1name', reward1name);
                formData.append('reward2name', reward2name);
                formData.append('reward3name', reward3name);
                formData.append('brackets', brackets);
                formData.append('type', type);
                formData.append('description', description);
                formData.append('rules', rules);
                formData.append('facebook', facebook);
                formData.append('twitter', twitter);
                formData.append('instagram', instagram);
                formData.append('youtube', youtube);
                formData.append('theme', theme);
               request = {
                method: 'POST',
                url: `https://xrsports.gg/team/public/user/create-tournament`,
                headers: { 'Content-Type': 'application/json', 'X-Auth-Token': `${localStorage.getItem('token')}` },
                data: formData
              };
            
            axios(request).then((data) => {
              if (data.data.ResponseCode === "1") {
                document.getElementById("close").click();
                toastr.success(data.data.ResponseText, { displayDuration: 1500 })
                this.props.dispatch(getTournaments());
                 }else {
                toastr.error(data.data, { displayDuration: 1500 })
              }
            });
            } else {
                validate.showMessages();
                // rerender to show messages for the first time
                this.forceUpdate();
            }
    }
    render() {
        console.log(this.state)
        return (
            <>
            <div id="mainpage" className="main_box col-md-12 p-0">
         
                 
                <div className="main-content">
               
                <div className="container">
                 

                    
          <div className="games-list">
          <a id="modal-50997896" href="#modal-container-50997896" role="button" data-toggle="modal"> Create Team <i className="fas fa-chevron-right"></i></a>

        <div className="tabbable mt-4" id="tabs-937228">

            <div className="tab-content leaders">
            <div className="search-filter align-items-center justify-content-center d-flex">
                  <input type="text" placeholder="Search Tournament" className="form-control"></input><i className="fas fa-times"></i><button type="button" className="btn btn-outline-secondary"><i className="fas fa-search"></i></button>
     
                </div> 
                <div className="table-filters search-filter border-0 mt-4">
                    <div className="row">

            <div className="col-md-3 border-right">
                Currency<i className="far fa-question-circle ml-3"></i><br></br>

            <div className="mt-2">
                
             <div className="pull-left"> 
             <label className="switch mr-2"><input type="checkbox" checked></input><span className="slider round"></span></label>Coins
             </div>  
            
        <div className="pull-left">
        <label className="switch mx-2"><input type="checkbox" checked></input><span className="slider round"></span></label>
          US Dollars  
            </div>
            </div>
            </div>
            <div className="col-md-3 border-right">
             Filters<i className="far fa-question-circle ml-3"></i>
             <div className="mt-2">
             <span className="pull-left">
             <label className="switch mr-2"><input type="checkbox" checked></input><span className="slider round"></span></label>
                 Hide Full Tournament </span>  
               
            </div>
             </div>
             <div className="col-md-3 border-right">
             Entry Fee<i className="far fa-question-circle ml-3"></i>
              <div className="mt-2 text-center">
             <span className="pull-left"><select>
                <option value="volvo">Volvo</option>
                <option value="saab">Saab</option>
                <option value="opel">Opel</option>
                <option value="audi">Audi</option>
                </select></span>  
                <span>to</span>
                <span className="pull-right"><select>
                <option value="volvo">Volvo</option>
                <option value="saab">Saab</option>
                <option value="opel">Opel</option>
                <option value="audi">Audi</option>
                </select></span>                 
            </div>
            </div>
            <div className="col-md-3">
             Entry Fee<i className="fas fa-dollar-sign ml-3"></i><i className="far fa-question-circle ml-3"></i>
             <div className="mt-2 text-center">
             <span className="pull-left"><select>
  <option value="volvo">Volvo</option>
  <option value="saab">Saab</option>
  <option value="opel">Opel</option>
  <option value="audi">Audi</option>
</select></span>  
<span>to</span>
             <span className="pull-right"><select>
  <option value="volvo">Volvo</option>
  <option value="saab">Saab</option>
  <option value="opel">Opel</option>
  <option value="audi">Audi</option>
</select></span>  
            </div>

             </div>
            </div>
                 
           </div>
                  <div className="tab-pane active" id="fortnite">
                   <div className="player-rank">
                       <div className="row">
                         <table className="table fortnite mt-5">
                            <thead>
                               <tr className="new_list_tournament only_headings list_game leadehead">
                                  <th className="border-top-0">CONTESTS NAME&nbsp;&nbsp;<a href="javascript:void(0)" onClick={() => this.sortOrder('game', this.state.sortOrderBy)} ><i className="fa fa-sort"  ></i></a></th>
                                  <th className="border-top-0">ENTRIES</th>
                                  <th className="border-top-0">ENTRY FEE&nbsp;&nbsp;<a href="javascript:void(0)" onClick={() => this.sortOrder('game', this.state.sortOrderBy)} ><i className="fa fa-sort"  ></i></a></th>
                                  <th className="border-top-0">PRIZE POOL&nbsp;&nbsp;<a href="javascript:void(0)" onClick={() => this.sortOrder('game', this.state.sortOrderBy)} ><i className="fa fa-sort"  ></i></a></th>
                                  <th className="border-top-0">LIVE&nbsp;&nbsp;<a href="javascript:void(0)" onClick={() => this.sortOrder('game', this.state.sortOrderBy)} ><i className="fa fa-sort"  ></i></a></th>
                                  <th className="border-top-0">ENTRY CLOSE IN&nbsp;&nbsp;<a href="javascript:void(0)" onClick={() => this.sortOrder('game', this.state.sortOrderBy)} ><i className="fa fa-sort"  ></i></a></th>
                                  <th></th>


                                  </tr>
                                  </thead>
                                 <tbody>

                                 {
                            this.state.totalItems.length > 0 ? this.state.pageOfItems.map((post) => (
                                 <tr key={post.tour_id} className="new_list_tournament list_game robb ">
                                  <td className="">{post.platform === 'ps4'? <img className="laddermatchlogo mr-2" src="https://res.cloudinary.com/dnv0dij0y/image/upload/v1574920962/platformicons/PSN_mwgnrg.png" />:post.platform === 'xbox'?<img className="laddermatchlogo mr-2" src="https://res.cloudinary.com/dnv0dij0y/image/upload/v1574920962/platformicons/XBOX_pjbe6s.png" />:<img className="laddermatchlogo mr-2" src="https://res.cloudinary.com/dnv0dij0y/image/upload/v1574920962/platformicons/PC_baza0t.png" />}{post.tour_name}<br></br><span className="label label-success float-left">Featured</span>
                                </td>  
                                  <td>{post.joined}</td> 
                                  <td>{post.price}Envy Bucks</td> 
                                  <td>${post.prizepool}</td> 
                                  <td className="d-flex live-label"><i className="fas fa-wifi mr-2"></i>
                                  
                                  {post.tour_start_date}</td> 
                                  <td>{post.reg_close_date}</td> 
                                  <td className="entry-btnn"><NavLink type="button" className="btn btn-warning" to = {`/single-tournament/${post.tour_id}`}>Join</NavLink></td> 

                                 </tr>
                                 )) :<tr><td colSpan="7" align="center"><p>No matches</p></td></tr>
                                 
                                }  
                                
                                 
                                 {/* {
                            this.state.totalItems.length > 0 ? this.state.pageOfItems.map((post) => (
                                <tr key={post.tour_id}>
                                    <td  className="floatname">{post.tour_name}{post.platform === 'ps4'? <img className="laddermatchlogo" src="https://res.cloudinary.com/dnv0dij0y/image/upload/v1574920962/platformicons/PSN_mwgnrg.png" />:post.platform === 'xbox'?<img className="laddermatchlogo" src="https://res.cloudinary.com/dnv0dij0y/image/upload/v1574920962/platformicons/XBOX_pjbe6s.png" />:<img className="laddermatchlogo" src="https://res.cloudinary.com/dnv0dij0y/image/upload/v1574920962/platformicons/PC_baza0t.png" />}</td>
                                    <td>{post.joined}</td>
                                    <td><i className="fas fa-coins"></i>{post.price}Envy Bucks</td>
                                    <td>${post.prizepool}</td>
                                    <td>{post.tour_start_date}</td>
                                    <td>{post.reg_close_date}</td>
                                    <td><NavLink to = {`/single-tournament/${post.tour_id}`}>Join</NavLink></td>
                                </tr>
                                )) :<tr><td colSpan="7" align="center"><p>No Tournaments</p></td></tr>
                        }  */}
                                 </tbody>
                         </table>

                        </div>
                        <div>
                        &nbsp;{this.state.totalItems.length > 0 ? <Pagination items={this.state.totalItems} onChangePage={this.onChangePage} /> : ''}
                    </div>
                   </div>
                </div>
          </div>
        </div>
        <div className="game-list-bg"><img src="/assets/img/games/Bg.jpg" alt=""/></div>

    </div>
    </div>




                {/* <div className="main-content support frontline text-left mt-3">
                    <h2 className="commonheading">All Tournaments</h2>
                </div>
                <div className="col-md-5 col-sm-4 col-xs-12 m-t-15 "><b><div className="summary">Total Records: <b>{this.state.totalItems.length}</b></div> </b></div> */}
{/* 
                <div className="tab-content">
                      <div className="row">    
                                <form method="post" action="#" className="filtertourss">
                                        <div className="row searchProduct">
                                            <div className="new_search">
                                                <div className="form-group">
                                                    <label className="col-form-label" htmlFor="customer">Exclusive Tournament</label>
                                                    <select name="exclusive" id="exclusive" className="form-control">
                                                         <option>Select Tournament</option>
                                                         <option value="no">No</option>
                                                         <option value="yes">Yes</option>
                                                    </select>
                                                </div>
                                        </div>
                                            <div className="new_search">
                                                <div className="form-group">
                                                    <label className="col-form-label" htmlFor="customer">Prize</label>
                                                    <select name="prize" id="exclusive" className="form-control">
                                                         <option>Select Prize</option>
                                                         <option value="cash">Cash</option>
                                                         <option value="rewards">Rewards</option>
                                                    </select>
                                                </div>
                                        </div>
                                            <div className="new_search">
                                                <div className="form-group">
                                                    <label className="col-form-label" htmlFor="customer">Entry Fee</label><br/>
                                                     <input  className="form-control" type="text" id="amount" readonly/>
                                                     <input  className="form-control" type="hidden" id="price_from" name="price_from"/>
                                                     <input  className="form-control" type="hidden" id="price_to" name="price_to"/>
                                                   <div id="slider-range"></div>
                                                </div>
                                        </div>
                                            <div className="new_search">
                                                <div className="form-group">
                                                    <label className="col-form-label" htmlFor="customer">Prize Pool</label><br/>
                                                      <input  className="form-control" type="text" id="prizeamount" readonly/>
                                                     <input  className="form-control" type="hidden" id="prize_from" name="prize_from"/>
                                                     <input  className="form-control" type="hidden" id="prize_to" name="prize_to"/>
                                                   <div id="slider-prize-range"></div>
                                                </div>
                                        </div>
                                            <div className="new_search">
                                                 <div className="form-group">
                                                      <label className="col-form-label" htmlFor="customer">Filter Tournaments</label><br/>
                                                    <input  className="form-control filtertourrr" type="submit" name="filterit"  value="Search"/>
                                                </div>
                                        </div>
                                        </div>
                               
                                </form>
                            </div>
                            <div className="col-md-4 col-sm-4 col-xs-12 ">
                        &nbsp;{this.state.totalItems.length > 0 ? <Pagination items={this.state.totalItems} onChangePage={this.onChangePage} /> : ''}
                    </div>
                     <div className="row">
                                <table className="table tournamentonly ranking mt-3 tourbody">
                                    
                                            <tr className="new_list_tournament only_headings list_game robb">
                                                    <th>Name&nbsp;&nbsp;<a href="javascript:void(0)" onClick={() => this.sortOrder('game', this.state.sortOrderBy)} ><i className="fa fa-sort"  ></i></a></th>
                                                    <th>Entries</th>
                                                    <th>Entry Fee&nbsp;&nbsp;<a href="javascript:void(0)" onClick={() => this.sortOrder('game', this.state.sortOrderBy)} ><i className="fa fa-sort"  ></i></a></th>
                                                    <th>Prize Pool&nbsp;&nbsp;<a href="javascript:void(0)" onClick={() => this.sortOrder('game', this.state.sortOrderBy)} ><i className="fa fa-sort"  ></i></a></th>
                                                    <th>Live in&nbsp;&nbsp;<a href="javascript:void(0)" onClick={() => this.sortOrder('game', this.state.sortOrderBy)} ><i className="fa fa-sort"  ></i></a></th>
                                                    <th>Entry ends&nbsp;&nbsp;<a href="javascript:void(0)" onClick={() => this.sortOrder('game', this.state.sortOrderBy)} ><i className="fa fa-sort"  ></i></a></th>
                                                    <th>Join</th>
                                            </tr> 

                        {
                            this.state.totalItems.length > 0 ? this.state.pageOfItems.map((post) => (
                                <tr key={post.tour_id} className="new_list_tournament list_game robb ">
                                    <td  className="floatname">{post.tour_name}{post.platform === 'ps4'? <img className="laddermatchlogo" src="https://res.cloudinary.com/dnv0dij0y/image/upload/v1574920962/platformicons/PSN_mwgnrg.png" />:post.platform === 'xbox'?<img className="laddermatchlogo" src="https://res.cloudinary.com/dnv0dij0y/image/upload/v1574920962/platformicons/XBOX_pjbe6s.png" />:<img className="laddermatchlogo" src="https://res.cloudinary.com/dnv0dij0y/image/upload/v1574920962/platformicons/PC_baza0t.png" />}</td>
                                    <td>{post.joined}</td>
                                    <td><i className="fas fa-coins"></i>{post.price}Envy Bucks</td>
                                    <td>${post.prizepool}</td>
                                    <td>{post.tour_start_date}</td>
                                    <td>{post.reg_close_date}</td>
                                    <td><NavLink to = {`/single-tournament/${post.tour_id}`}>Join</NavLink></td>
                                </tr>
                                )) :<tr><td colSpan="7" align="center"><p>No matches</p></td></tr>
                        }  
                                
        </table>
        </div>
        </div> */}
            </div>
            
        </div>
        <div className="modal fade" id="modal-container-50997896" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
    <button type="button" className="close" id="close" data-dismiss="modal">&times;</button>
    <div className="logo-image text-center">
    <img class="img-fluid footer_logo" src="/assets/img/games/foot-logo.png" alt=""></img>
        {/* <img src="https://res.cloudinary.com/dnv0dij0y/image/upload/v1574922448/logo/tcgaminglogo_l1jssw.png" alt="" className="img-fluid" /> */}
    </div>
    <div className="login team team-maim modal-dialog" role="document">
        <div className="login modal-content rob">
            <div className="login modal-header text-center">
                 <h5 className="modal-titl text-center w-100 creategametitle" id="myModalLabel">Create your Team</h5>
            </div>
            <div className="modal-body create_team">
                   <FormGroup>
                          <FormLabel htmlFor="title">Tournament Title
                          </FormLabel>
                          <br/>
                          <FormControl type="text" id="tourtitle" tabIndex="1" size="20" name="tourtitle" onChange={e => this.validateTourForm(e)} />
                          {this.tourValidator.message('tourtitle', this.state.tourtitle, 'required')}
                        </FormGroup>
                        <FormGroup>
                          <FormLabel htmlFor="title">Tournament Price</FormLabel>
                          <br />
                          <FormControl type="text" id="price" tabIndex="1" size="20" name="price" onChange={e => this.validateTourForm(e)}/>
                          {this.tourValidator.message('price', this.state.price, 'required')}
                        </FormGroup>
                        <FormGroup>
                          <FormLabel htmlFor="title">Exclusive Tournament</FormLabel>
                          <br />
                          <select name="exclusive_tournament" onChange={e => this.validateTourForm(e)}>
                          <option value="">Exclusive Tournament?</option>
                            <option value="no">No</option>
                            <option value="yes">Yes</option>
                          </select>
                          {this.tourValidator.message('exclusive_tournament', this.state.exclusive_tournament, 'required')}
                        </FormGroup>
                        <FormGroup>
                          <FormLabel htmlFor="title">Prize</FormLabel>
                          <br />
                          <select name="prize" id="tourprize" onChange={e => this.validateTourForm(e)}>
                          <option value="">Selwct prize method</option>
                                <option value="cash">Cash</option>
                                <option value="rewards">Rewards</option>
                          </select>
                          {this.tourValidator.message('prize', this.state.prize, 'required')}
                        </FormGroup>
                        <FormGroup id="prizetypetag">
                          <FormLabel htmlFor="title">Prize type</FormLabel>
                          <br />
                          <select name="prize_type" id="prize_type" onChange={e => this.validateTourForm(e)}>
                                 <option value="">prize type</option>
                                <option value="merch">Merch</option>
                                <option value="shoes">Shoes</option>
                                <option value="freesize">Free size</option>
                          </select>
                          {this.tourValidator.message('prize_type', this.state.prize_type, 'required')}
                        </FormGroup>
                        {/* <p>
                          <FormLabel htmlFor="title">Sponsor Name</FormLabel>
                          <br />
                          <FormControl type="text" id="sponsorname" tabIndex="1" size="20" name="sponsorname" onChange={e => this.validateTourForm(e)}/>
                        </p>
                        <p>
                          <FormLabel htmlFor="title">Sponsor Image</FormLabel>
                          <br />
                          <FormControl type="file" id="sponsorimage" tabIndex="1" size="20" name="sponsorimage"onChange={e => this.validateTourForm(e)} />
                        </p> */}
                       
                        <FormGroup>
                          <FormLabel htmlFor="title">Tournament Platfrom</FormLabel>
                          <br />
                          <select name="platform" onChange={e => this.validateTourForm(e)}>
                            <option value="ps4">PlayStation 4</option>
                            <option value="xbox">XBOX</option>
                            <option value="pc">PC</option>
                          </select>
                          {this.tourValidator.message('platform', this.state.platform, 'required')}
                        </FormGroup>
                        <FormGroup>
                          <FormLabel htmlFor="title">Game
                          </FormLabel>
                          <br />
                          <select name="game" onChange={e => this.validateTourForm(e)}>
                              <option>Choose Game</option>
                              { this.state.allgames.length > 0?this.state.allgames.map((post) => (
                                                        <option value={post.game_name} key={post.game_name}>{post.game_title}</option>
                                                        )):''}
                              
                          </select>
                          {this.tourValidator.message('game', this.state.game, 'required')}
                        </FormGroup>
                        <FormGroup>
                          <FormLabel htmlFor="title">Theme
                          </FormLabel>
                          <br />
                          <select name="theme" onChange={e => this.validateTourForm(e)}>
                                <option>Choose a Theme</option>
                                <option value="dark">Dark</option>
                                <option>Light</option>
                          </select>
                          {this.tourValidator.message('theme', this.state.theme, 'required')}
                        </FormGroup>
                        <FormGroup>
                          <FormLabel htmlFor="title">Registeration Start Date
                          </FormLabel>
                          <br />
                          <FormControl type="date" id="reg_open_date"   required pattern="(?:19|20)[0-9]{2}-(?:(?:0[1-9]|1[0-2])/(?:0[1-9]|1[0-9]|2[0-9])|(?:(?!02)(?:0[1-9]|1[0-2])/(?:30))|(?:(?:0[13578]|1[02])-31))" name="reg_open_date" onChange={e => this.validateTourForm(e)}/>
                          {this.tourValidator.message('reg_open_date', this.state.reg_open_date, 'required')}
                        </FormGroup>
                        <FormGroup>
                          <FormLabel htmlFor="title">Registeration Close Date
                          </FormLabel>
                          <br />
                          <FormControl type="date" id="reg_close_date" required pattern="(?:19|20)[0-9]{2}-(?:(?:0[1-9]|1[0-2])/(?:0[1-9]|1[0-9]|2[0-9])|(?:(?!02)(?:0[1-9]|1[0-2])/(?:30))|(?:(?:0[13578]|1[02])-31))"  name="reg_close_date" onChange={e => this.validateTourForm(e)}/>
                          {this.tourValidator.message('reg_close_date', this.state.reg_close_date, 'required')}
                        </FormGroup>
                        <FormGroup>
                          <FormLabel htmlFor="title">Tournament Start Date
                          </FormLabel>
                          <br />
                          <FormControl type="date" id="tour_start_date" required pattern="(?:19|20)[0-9]{2}-(?:(?:0[1-9]|1[0-2])/(?:0[1-9]|1[0-9]|2[0-9])|(?:(?!02)(?:0[1-9]|1[0-2])/(?:30))|(?:(?:0[13578]|1[02])-31))"  name="tour_start_date" onChange={e => this.validateTourForm(e)}/>
                          {this.tourValidator.message('tour_start_date', this.state.tour_start_date, 'required')}
                        </FormGroup>
                        <FormGroup>
                          <FormLabel htmlFor="title">Tournament Close Date
                          </FormLabel>
                          <br />
                          <FormControl type="date" id="tour_end_date" required pattern="(?:19|20)[0-9]{2}-(?:(?:0[1-9]|1[0-2])/(?:0[1-9]|1[0-9]|2[0-9])|(?:(?!02)(?:0[1-9]|1[0-2])/(?:30))|(?:(?:0[13578]|1[02])-31))"  name="tour_end_date" onChange={e => this.validateTourForm(e)}/>
                          {this.tourValidator.message('tour_end_date', this.state.tour_end_date, 'required')}
                        </FormGroup>
                         <FormGroup>
                          <FormLabel htmlFor="title">Tournament Start Time
                          </FormLabel>
                          <br />
                          <FormControl type="time" id="time" required pattern="(?:19|20)[0-9]{2}-(?:(?:0[1-9]|1[0-2])/(?:0[1-9]|1[0-9]|2[0-9])|(?:(?!02)(?:0[1-9]|1[0-2])/(?:30))|(?:(?:0[13578]|1[02])-31))"  name="time" onChange={e => this.validateTourForm(e)}/>
                          {this.tourValidator.message('time', this.state.time, 'required')}
                        </FormGroup>
                        <FormGroup  id="prizepool">
                          <FormLabel htmlFor="title">prize pool
                          </FormLabel>
                          <br />
                          <FormControl type="text" name="prizepool" onChange={e => this.validateTourForm(e)}/>
                          {this.tourValidator.message('prizepool', this.state.prizepool, 'required')}
                        </FormGroup>
                        <FormGroup  id="firstprizee">
                          <FormLabel htmlFor="title">First prize
                          </FormLabel>
                          <br />
                          <FormControl type="text" name="prizeone" onChange={e => this.validateTourForm(e)}/>
                          {this.tourValidator.message('prizeone', this.state.prizeone, 'required')}
                        </FormGroup>
                        <FormGroup  id="secondprize">
                          <FormLabel htmlFor="title">Second prize
                          </FormLabel>
                          <br />
                          <FormControl type="text" name="prizetwo" onChange={e => this.validateTourForm(e)}/>
                          {this.tourValidator.message('prizetwo', this.state.prizetwo, 'required')}
                        </FormGroup>
                        <FormGroup  id="thirddprize">
                          <FormLabel htmlFor="title">Third prize
                          </FormLabel>
                          <br />
                          <FormControl type="text" name="prizethree" onChange={e => this.validateTourForm(e)}/>
                          {this.tourValidator.message('prizethree', this.state.prizethree, 'required')}
                        </FormGroup>
                        <FormGroup  id="prizethumb">
                          <FormLabel htmlFor="title">Prize Image
                          </FormLabel>
                          <br />
                          <FormControl type="file" name="prizeimage" id="prizeimage" onChange={e => this.validateTourForm(e)}/>
                          {this.tourValidator.message('prizeimage', this.state.prizeimage, 'required')}
                        </FormGroup>
                        <FormGroup id="rew1name">
                          <FormLabel htmlFor="title">Reward for 1st Player
                          </FormLabel>
                          <br />
                          <FormControl type="text" name="reward1name" onChange={e => this.validateTourForm(e)}/>
                          {this.tourValidator.message('reward1name', this.state.reward1name, 'required')}
                        </FormGroup>
                          <FormGroup id="rew1image">
                          <FormLabel htmlFor="title">Reward 1st Image
                          </FormLabel>
                          <br />
                          <FormControl type="file" name="reward1image" id="reward1image" onChange={e => this.validateTourForm(e)}/>
                          {this.tourValidator.message('reward1image', this.state.reward1image, 'required')}
                        </FormGroup>
                         <FormGroup id="rew2name">
                          <FormLabel htmlFor="title">Reward for 2nd Player
                          </FormLabel>
                          <br />
                          <FormControl type="text" name="reward2name" onChange={e => this.validateTourForm(e)}/>
                          {this.tourValidator.message('reward2name', this.state.reward2name, 'required')}
                        </FormGroup>
                          <FormGroup id="rew2image">
                          <FormLabel htmlFor="title">Reward 2nd Image
                          </FormLabel>
                          <br />
                          <FormControl type="file" name="reward2image" id="reward2image" onChange={e => this.validateTourForm(e)}/>
                          {this.tourValidator.message('reward2image', this.state.reward2image, 'required')}
                        </FormGroup>
                        <FormGroup id="rew3name">
                          <FormLabel htmlFor="title">Reward for 3rd Player
                          </FormLabel>
                          <br />
                          <FormControl type="text" name="reward3name" onChange={e => this.validateTourForm(e)} />
                          {this.tourValidator.message('reward3name', this.state.reward3name, 'required')}
                        </FormGroup>
                          <FormGroup id="rew3image">
                          <FormLabel htmlFor="title">Reward 3rd Image
                          </FormLabel>
                          <br />
                          <FormControl type="file" name="reward3image" id="reward3image" onChange={e => this.validateTourForm(e)}/>
                          {this.tourValidator.message('reward3image', this.state.reward3image, 'required')}
                        </FormGroup>
                        <FormGroup>
                          <FormLabel htmlFor="title">Total Players
                          </FormLabel>
                          <br />
                          <select name="brackets" onChange={e => this.validateTourForm(e)}>
                             <option value="4">4</option>
                             <option value="8">8</option>
                             <option value="16">16</option>
                             <option value="32">32</option>
                             <option value="64">64</option>
                          </select>
                          {this.tourValidator.message('brackets', this.state.brackets, 'required')}
                        </FormGroup>
                        <FormGroup>
                          <FormLabel htmlFor="title">Tournament type
                          </FormLabel>
                          <br />
                          <select name="type" onChange={e => this.validateTourForm(e)}>
                            <option value="single">Single Elimination
                            </option>
                            <option value="double">Double Elimination
                            </option>
                          </select>
                          {this.tourValidator.message('type', this.state.type, 'required')}
                        </FormGroup>
                        <FormGroup>
                          <FormLabel htmlFor="description">Tournament Description
                          </FormLabel>
                          <br />
                          <textarea className="w-100" id="description" tabIndex="3" name="description" cols="50" rows="6" onChange={e => this.validateTourForm(e)}>
                          </textarea>
                          {this.tourValidator.message('description', this.state.description, 'required')}
                        </FormGroup>
                         <FormGroup>
                          <FormLabel htmlFor="rules">Tournament Rules
                          </FormLabel>
                          <br />
                          <textarea  className="w-100" id="rules" tabIndex="3" name="rules" cols="50" rows="6" onChange={e => this.validateTourForm(e)}>
                          </textarea>
                          {this.tourValidator.message('rules', this.state.rules, 'required')}
                        </FormGroup>
                        <h3>Social Media Links</h3>
                         <FormGroup>
                          <FormLabel htmlFor="fb">Facebook
                          </FormLabel>
                          <br />
                          <FormControl type="text" name="facebook" onChange={e => this.validateTourForm(e)}/>
                          {this.tourValidator.message('facebook', this.state.facebook, 'required')}
                        </FormGroup>
                        <FormGroup>
                          <FormLabel htmlFor="insta">Instagram
                          </FormLabel>
                          <br />
                          <FormControl type="text" name="instagram" onChange={e => this.validateTourForm(e)}/>
                          {this.tourValidator.message('instagram', this.state.instagram, 'required')}
                        </FormGroup>
                        <FormGroup>
                          <FormLabel htmlFor="twitter">Twitter
                          </FormLabel>
                          <br />
                          <FormControl type="text" name="twitter" onChange={e => this.validateTourForm(e)}/>
                          {this.tourValidator.message('twitter', this.state.twitter, 'required')}
                        </FormGroup>
                         <FormGroup>
                          <FormLabel htmlFor="youtube">Youtube
                          </FormLabel>
                          <br />
                          <FormControl type="text" name="youtube" onChange={e => this.validateTourForm(e)}/>
                          {this.tourValidator.message('youtube', this.state.youtube, 'required')}
                        </FormGroup>
                    
                        {/* <button type="submit"  onClick={(e) => this.createTour(e)}  className="btn btn-red btn-block btn-lg profilebuttons">CREATE</button> */}
                        <div className="text-center wrapper">
                    <button type="submit"  onClick={(e) => this.createTour(e)} disabled={this.state.isSubmit} className="btn btn-red btn-block btn-lg profilebuttons">{this.state.isSubmit ? 'PLEASE WAIT..' : 'CREATE'}</button>
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
    alltournamentsdata: state.tournaments.data,
    gamesdata: state.games.data,
})
export default connect(mapStateToProps)(tournaments);
