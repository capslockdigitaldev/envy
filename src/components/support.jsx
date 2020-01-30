import React, { Component } from 'react';
import { connect } from 'react-redux';
import SimpleReactValidator from 'simple-react-validator';
import { FormGroup, FormControl, FormLabel } from 'react-bootstrap';
import toastr from 'reactjs-toastr';
import parseJwt from './../store/helpers/common';
import axios from 'axios';

class support extends Component {
	constructor(props) {
		super(props)
		this.ticketValidator = new SimpleReactValidator();
		this.state = {
		  support_username: '',
		  support_usernameid: '',
		  matchtype: '',
		  support_matchid:'',
		  support_issue:''
		}
	  }
	  componentDidMount() {
        if (localStorage.getItem('token')) {
            const currdetails = parseJwt(localStorage.getItem('token'));
			const currid = currdetails.sub;
			const currentusername = currdetails.nik;
            this.setState({ support_username: currentusername , support_usernameid: currid });
        }
    }
	  openModal = (e) =>{
		this.setState({
			matchtype: '',
			support_matchid:'',
			support_issue:''
		  })
	  }
	  dataChange(ev) {
		this.setState({
		  [ev.target.name]: ev.target.value
		})
	  }
	  validateLoginForm = (e) => {
		let validate = this.ticketValidator;
		if (validate.allValid()) {
	
		} else {
			validate.showMessages();
			this.forceUpdate();
		}
		this.setState({ [e.target.name]: e.target.value });
		e.preventDefault();
	}
	createTicket =(ev) => {
		ev.preventDefault();
		let validate = this.ticketValidator;
		if (validate.allValid()) {
			const {support_usernameid, matchtype ,support_matchid, support_issue} = this.state;
				const data = [];
				var today = new Date();
				var dd = String(today.getDate()).padStart(2, '0');
				var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
				var yyyy = today.getFullYear();
				today = dd + '-' + mm + '-' + yyyy;
                data.push({ 'senderid': support_usernameid, 'date': today, "message": support_issue });
				let request;
				let formData = new FormData();
				formData.append('support_usernameid',support_usernameid );
				formData.append('matchtype', matchtype);
				formData.append('support_matchid', support_matchid);
				formData.append('support_issue', support_issue);
				formData.append('data', JSON.stringify(data));
				   request = {
					method: 'POST',
					url: `https://xrsports.gg/team/public/user/create-sticket`,
					headers: { 'Content-Type': 'application/json', 'X-Auth-Token': `${localStorage.getItem('token')}` },
					data: formData
				  };
				
				axios(request).then((data) => {
				  if (data.data.ResponseCode === "1") {
					document.getElementById("close").click();
					toastr.success(data.data.ResponseText, { displayDuration: 1500 })
					 }else {
					toastr.error(data, { displayDuration: 1500 })
				  }
				});
		} else {
			validate.showMessages();
			this.forceUpdate();
		}
	  }
    render() {
        return (
			<>
			   <div className="container">
                 <div className="games-list">
<div id="mainpage" className="main_box p-0 col-md-12">
				<div className="main-content support text-left mb-4 mt-3 px-4">
           <h2 className="commonheading">SUPPORT</h2>
           <br/>
					<p className="suppthank">Thanks for contacting Support, You Can Start at Frequently Asked</p>
					<div className="row supp mt-4 py-5">
					    <div className="col-lg-3 supportoptions">
					        <div className="supportucp">
					          <a id="modal-509789999" href="#modal-container-509789999" role="button" data-toggle="modal">
					               <div className="suppcupimage">
    					         <img className="ucpp" src="https://res.cloudinary.com/dnv0dij0y/image/upload/v1574919874/support%20icons/submitresults_za3nr9.png"  alt=""/>
    					          </div>
    					         <div className="suppcuptext">
    					         <p>Submit Game<br/> Results</p>
    					         </div>
					         </a>
					        </div>
					    </div>
					    <div className="col-lg-3 supportoptions">
					         <div className="supportucp">
					          <a id="modal-50778" href="#modal-container-50778" role="button" data-toggle="modal" onClick={(e)=>this.openModal(e)}>
					               <div className="suppcupimage">
    					         <img className="ucpp" src="https://res.cloudinary.com/dnv0dij0y/image/upload/v1574919874/support%20icons/opensupporticket_bnuvfc.png"  alt=""/>
    					          </div>
    					         <div className="suppcuptext">
    					        <p>Open Support<br/> Ticket</p>
    					       </div>
					         </a>
					        </div>
					    </div>
					    <div className="col-lg-3 supportoptions">
					          <div className="supportucp">
					          <a id="modal-50778" href="#modal-container-50778" role="button" data-toggle="modal">
					              <div className="suppcupimage">
    					         <img className="ucpp" src="https://res.cloudinary.com/dnv0dij0y/image/upload/v1574919874/support%20icons/reportaproblem_vboptz.png"  alt=""/>
    					         </div>
    					         <div className="suppcuptext">
                                 <p>Report <br/> A Problem</p>
                                 </div>
                                 </a>
					        </div>
					          
					    </div>
					    <div className="col-lg-3 supportoptions">
					           <div className="supportucp">
					          <a href="../live-chat/index.html">
					               <div className="suppcupimage">
    					         <img className="ucpp" src="https://res.cloudinary.com/dnv0dij0y/image/upload/v1574919874/support%20icons/livechat_tpusir.png"  alt=""/>
    					          </div>
    					         <div className="suppcuptext">
                                 <p>Begin<br/> Live Chat</p>
                                 </div>
                                 </a>
					        </div>
					          
					         
					    </div>
					</div>
				</div>
				
				<br/>
        </div>
<div className="modal fade" id="modal-container-50778" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
<button type="button" className="close" id="close" data-dismiss="modal">&times;</button>
    <div className="logo-image text-center">
	<img class="img-fluid footer_logo" src="/assets/img/games/foot-logo.png" alt=""></img>
        {/* <img src="https://res.cloudinary.com/dnv0dij0y/image/upload/v1574922448/logo/tcgaminglogo_l1jssw.png" alt="" className="img-fluid" /> */}
    </div>
    <div className="login team modal-dialog" role="document">
        <div className="login modal-content rob">
            <div className="login modal-header text-center">
                <h5 className="modal-titl text-center w-100 creategametitle" id="myModalLabel">Report an issue</h5>
            </div>
        <div className="modal-body create_match">
		<FormGroup>
			<FormLabel>Username</FormLabel>
			<FormControl type="text" name="support_username" value={this.state.support_username} readOnly />
			{this.ticketValidator.message('support_username', this.state.support_username, 'required')}
		</FormGroup>

		<FormGroup>
			<FormLabel>Type</FormLabel>
			<select name="matchtype" className="matchtype" value={this.state.matchtype} onChange={e => this.validateLoginForm(e)}>
                <option value="match">Ladder Match</option>
                <option value="tournament">Tournament</option>
                <option value="other">Other</option>
            </select>
			{this.ticketValidator.message('matchtype', this.state.matchtype, 'required')}
		</FormGroup>
{
	this.state.matchtype === 'other'?'':
        <FormGroup>
			<FormLabel>Match/Tournament ID</FormLabel>
			<FormControl type="text" name="support_matchid" value={this.state.support_matchid} onChange={e => this.validateLoginForm(e)} />
			{/* {this.ticketValidator.message('support_matchid', this.state.support_matchid, 'required')} */}
		</FormGroup>
}
		

		<FormGroup>
			<FormLabel>Describe the Issue</FormLabel>
			<FormControl type="text" id="supportissue" name="support_issue" placeholder="Go ahead we are listening..." value={this.state.support_issue} onChange={e => this.validateLoginForm(e)} />
			{this.ticketValidator.message('support_issue', this.state.support_issue, 'required')}
		</FormGroup>
		<div className="text-center wrapper mt-5">
		<button type="submit" onClick={(ev) => this.createTicket(ev)}  className="btn btn-red btn-block btn-lg">SUBMIT</button>
        </div>
        </div>
        </div>
    </div>
</div>
<div className="game-list-bg">
                    <img src="/assets/img/games/Bg.jpg"  alt=""></img>
                    </div>  
</div>
</div>

		</>
         
        );
    }
}

export default connect()(support);