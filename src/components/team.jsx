import React, { Component } from 'react';
import { connect } from 'react-redux';
import Select2 from 'react-select2-wrapper';
import 'react-select2-wrapper/css/select2.css';
import { FormGroup, FormControl, FormLabel } from 'react-bootstrap';
import SimpleReactValidator from 'simple-react-validator';
import { getUsersdetail} from "./../store/actions/userActions";
import { getAllTeams} from "./../store/actions/teamsActions";
import $ from "jquery";
import parseJwt from './../store/helpers/common';
import axios from 'axios';
import {NavLink } from 'react-router-dom';

import toastr from "reactjs-toastr";

class team extends Component {
    constructor(props) {
        super(props);
        this.teamValidator = new SimpleReactValidator();
        this.state = {
            totalItems:'',
            totalteams:'',
            userData:[],
            user_id:[],
            teamname:'',
            teamdisplaypicture:'',
            currid:'',
            loggedin:false
        }
    }
    componentDidMount() {
        if (localStorage.getItem('token')) {
            const currdetails = parseJwt(localStorage.getItem('token'));
            const currid = currdetails.sub;
            this.props.dispatch(getAllTeams(currid));
            this.setState({ currid: currid,loggedin:true});
            this.props.dispatch(getUsersdetail());
        }
        
    }
    componentWillReceiveProps(nextProps) {
        this.setState({
            userData: nextProps.usersdata,
            totalteams: nextProps.teams
        });
    }
    validateTeamForm = (e) => {
        e.preventDefault();

        let validate = this.teamValidator;
        if (validate.allValid()) {

        } else {
            validate.showMessages();
            this.forceUpdate();
        }
        this.setState({ [e.target.name]: e.target.value });
    }
      groupValue = ()=>{
        this.setState({user_id:$('#user_id').val()});
      }
      
      removeGroupValue = ()=>{
        this.setState({user_id:$('#user_id').val()});
      }

      createTeam = (e) => {
                    const {teamname, currid, user_id} = this.state;
                    let request;
                    let formData = new FormData();
                    formData.append('teamdisplaypicture', $('#teamdisplaypicturee')[0].files[0]);
                    formData.append('currid', currid);
                    formData.append('teamname', teamname);
                    formData.append('user_id', user_id);
                       request = {
                        method: 'POST',
                        url: `https://xrsports.gg/team/public/user/create-team`,
                        headers: { 'Content-Type': 'application/json', 'X-Auth-Token': `${localStorage.getItem('token')}` },
                        data: formData
                      };
                    
                    axios(request).then((data) => {
                      if (data.data.ResponseCode === "1") {
                        document.getElementById("close").click();
                        toastr.success(data.data.ResponseText, { displayDuration: 1500 })
                        this.props.dispatch(getAllTeams(currid));
                         }else {
                        toastr.error(data.data, { displayDuration: 1500 })
                      }
                    });
    }

    render() {
        if(this.state.loggedin){
            const {userData , totalteams} = this.state;
            let i = 1;
            return (
                <>
                <div className="container">
    <div id="mainpage" className="main_box p-0 col-md-12">
    
            <div className="main-content support frontline text-left mt-3">
            <div className="position-relative border-0">
                   
        <h2 className="commonheading">TEAMS</h2>
          
             <div className="showallteams games-list">
             <div className="matchbox pl-4 my-4">
            <a id="modal-50997896" href="#modal-container-50997896" role="button" data-toggle="modal"> Create Team <i className="fas fa-chevron-right"></i></a>
            </div>
                     {/* <p className="merch_p">All Teams</p> */}
                 <table className="table mb-4 mt-2" id="allteams">
                        <thead>
                            <tr className="new_list_tournament only_headings list_game leadehead">
                                <th>S no</th>
                                <th>Team Icon</th>
                                <th>Team Name</th>	                        
                                <th>Total Members</th>	                        
                                <th>View</th>	                        
                            </tr>
                        </thead>
                        <tbody>
                        {
                                    this.props.teamloading?
                                    <tr className="tableloader" colSpan="7"><img className="spinnerloader" src="https://res.cloudinary.com/dg3sjwu2p/image/upload/v1580215115/envy/loader/loading-gif-png-5_q7dgtv.gif"/> </tr>
                                    :
                                    totalteams.length > 0 ? totalteams.map((post) => (
                                        <tr key={post.team_id} classNmae="table-secondary">
                                            <td>{i++}</td>
                                            <td><img src={`https://xrsports.gg/team/public/teamprofiles/${post.displaypicture}`} alt=""/></td>
                                            <td>{post.teamname}</td>
                                            <td>{post.teammembers.split(',').length}</td>
                                            <td><NavLink to = {`/team/${post.teamname}/${post.team_id}`}>View</NavLink></td>
                                        </tr>
                                        )) :<tr classNmae="table-secondary"><td colSpan="7" align="center"><p>No matches</p></td></tr>
                        }
                        
                                                 </tbody>
                        </table>
             </div>
        </div>
        </div>
        
        </div> 
        </div>
        <div className="modal fade" id="modal-container-50997896" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
        <button type="button" className="close" id="close" data-dismiss="modal">&times;</button>
        <div className="logo-image text-center">
        <img class="img-fluid footer_logo" src="/assets/img/games/foot-logo.png" alt=""></img>
            {/* <img src="https://res.cloudinary.com/dnv0dij0y/image/upload/v1574922448/logo/tcgaminglogo_l1jssw.png" alt="" className="img-fluid" /> */}
        </div>
        <div className="login team modal-dialog" role="document">
            <div className="login modal-content rob">
                <div className="login modal-header text-center">
                     <h5 className="modal-titl text-center w-100 creategametitle" id="myModalLabel">Create your Team</h5>
                </div>
                <div className="modal-body create_team">
                       
                        <FormGroup>
                        <FormLabel>Team Name</FormLabel>
                            <FormControl type="text" name="teamname" value={this.state.teamname} onChange={e => this.validateTeamForm(e)} />
                            {this.teamValidator.message('teamname', this.state.teamname, 'required')}
                        </FormGroup>
    
                        <FormGroup>
                        <FormLabel className="ml-2">Display Picture</FormLabel>
                        <FormLabel className="fileContainer">
                            <FormControl type="file" name="teamdisplaypicture" id="teamdisplaypicturee" className="teamdisplaypicture" value={this.state.teamdisplaypicture} onChange={e => this.validateTeamForm(e)} />
                            {this.teamValidator.message('teamdisplaypicture', this.state.teamdisplaypicture, 'required')}
                            </FormLabel>
                        </FormGroup>
    
                        <FormGroup>
                        <FormLabel>Add Users</FormLabel>
                        {
                            this.props.usersdatateamloading ?
                            <div className="loaderdiv"><img className="spinnerloader" src="https://res.cloudinary.com/dg3sjwu2p/image/upload/v1580215115/envy/loader/loading-gif-png-5_q7dgtv.gif"></img></div>
                            :
                        <Select2
                            multiple
                            className="form-control"
                            name="user_id"
                            value={this.state.user_id}
                            data={userData && userData.map(({user_id,nickname})=>({text:nickname,id:user_id}))}
                            options={{
                                placeholder: 'Choose Team Members',
                            }}
                            onSelect={this.groupValue}
                            onUnselect={this.removeGroupValue}
                            // onChange={e => this.validateTeamForm(e)}
                            id="user_id"
                        />
                        }
                        
                            {this.teamValidator.message('user_id', this.state.user_id, 'required')}
                        </FormGroup>
                        <div class="text-center wrapper mt-4"><button type="submit"  onClick={(e) => this.createTeam(e)} disabled={this.state.isSubmitcred} className="btn btn-red btn-block btn-lg profilebuttons">{this.state.isSubmitcred ? 'PLEASE WAIT..' : 'UPDATE'}</button></div>
                        
                </div>
            </div>
        </div>
    </div>
        </>        
            );
        }else{
            return (
            <>
            <div className="container">
                <div id="mainpage" className="main_box p-0 col-md-12">
                    <h1>You have to be loggedin to create your team</h1>
                </div>
            </div>
            </>
            )
        }
       
    }
}

const mapStateToProps = (state) => ({
    usersdata: state.userDetails.data,
    usersdatateamloading : state.userDetails.loading,
    teams: state.team.data,
    teamloading : state.team.loading,
})
export default connect(mapStateToProps)(team);