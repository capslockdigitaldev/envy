
import React, { Component } from 'react';
import { FormGroup, FormControl, FormLabel } from 'react-bootstrap';
import SimpleReactValidator from 'simple-react-validator';
import {getAllgames} from './../store/actions/gamesActions';
import { connect } from 'react-redux';
import $ from "jquery";
import toastr from "reactjs-toastr";
import axios from 'axios';
class AddTournaments extends Component {
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
    componentWillReceiveProps(nextProps) {
        this.setState({
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
        return (
<div className="adminright">
            <div className="row">
                <div className="col-lg-12">
                <div className="ibox ">
                    <div className="ibox-title">
                    </div>
                    <div className="ibox-content">
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
        </div>
                );
            }
        }
       
const mapStateToProps = (state) => ({
    gamesdata: state.games.data,
})
export default connect(mapStateToProps)(AddTournaments);