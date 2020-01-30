import React, { Component } from 'react';
import { connect } from 'react-redux';
import SimpleReactValidator from 'simple-react-validator';
import { getSingleSupportTicket} from "./../store/actions/sticketsActions";
import { FormGroup, FormControl } from 'react-bootstrap';
import axios from 'axios';
import parseJwt from './../store/helpers/common';
import toastr from 'reactjs-toastr';

class singleSticket extends Component {
    constructor(props) {
        super(props);
        this.sticketValidator = new SimpleReactValidator();

        this.state = {
            userData:'',
            sortOrderBy: 'asc',
            messages:[],
            ticket_id:'',
            newmessage:'',
            current_id:''
        }
    }
    componentDidMount() {
        const ticketid = this.props.match.params.id;
        this.props.dispatch(getSingleSupportTicket(ticketid));
        if (localStorage.getItem('token')) {
            const currdetails = parseJwt(localStorage.getItem('token'));
            const currid = currdetails.sub;
            this.setState({current_id:currid});
        }
    }
    validatesticketmessageForm = (e) => {
		let validate = this.sticketValidator;
		if (validate.allValid()) {
	
		} else {
			validate.showMessages();
			this.forceUpdate();
		}
		this.setState({ [e.target.name]: e.target.value });
		e.preventDefault();
	}

    componentWillReceiveProps(nextProps) {
        this.setState({
            userData: nextProps.singlesticket,
            messages:nextProps.singlesticket.messages,
            ticket_id:nextProps.singlesticket.ticket_id
        });
    }
    sendMessage = (e) =>{
		e.preventDefault();
		let validate = this.sticketValidator;
		if (validate.allValid()) {
			const {ticket_id, messages , newmessage,current_id} = this.state;
                console.log(messages);
            var today = new Date();
            var dd = String(today.getDate()).padStart(2, '0');
            var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
            var yyyy = today.getFullYear();
            today = dd + '-' + mm + '-' + yyyy;
                const mess = messages;
                mess.push({ 'senderid': current_id, 'date': today, "message": newmessage });
				let request;
				let formData = new FormData();
				formData.append('ticket_id',ticket_id );
				formData.append('messages', JSON.stringify(mess));
				   request = {
					method: 'POST',
					url: `https://xrsports.gg/team/public/user/update-sticket-message`,
					headers: { 'Content-Type': 'application/json', 'X-Auth-Token': `${localStorage.getItem('token')}` },
					data: formData
				  };
				
				axios(request).then((data) => {
				  if (data.data.ResponseCode === "1") {
                    toastr.success(data.data.ResponseText, { displayDuration: 1500 });
                    this.props.dispatch(getSingleSupportTicket(ticket_id));
                    document.getElementById('newmessage').value = ''
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
        console.log(this.state)
        let {messages} = this.state;
        let i =0;
        
        return (
            <div id="mainpage" className="main_box p-0 col-md-12">
            <div className="jio">
            <div className="supportmessages" id="supportmessages">

                        {messages.map((post) => (
                            post.senderid === 'admin'? 
                                <div className="singlelinechat">
                                <div className="chatleft">
                                    <h4> {post.message} </h4>
                                </div> 
                            </div> :
                            <div className="singlelinechat">
                                <div className="chatright">
                                    <h4> {post.message} </h4>
                                </div> 
                            </div>
                            
                        ))}

                        </div>
                  </div>
                  <div className="textsupport">
                       <span className="sendpicture"><i className="far fa-images"></i></span>
                       <span className="sendtext"><i className="fas fa-font"></i></span>
            <FormGroup>
			    <FormControl type="text" id="newmessage" name="newmessage" placeholder="type here...." value={this.state.newmessage} onChange={e => this.validatesticketmessageForm(e)} />
			    {this.sticketValidator.message('newmessage', this.state.newmessage, 'required')}
            </FormGroup>
            <button type="submit" onClick={(ev) => this.sendMessage(ev)}  className="btn btn-red btn-block btn-lg">SEND</button>
        </div>
       </div>
    );
    }
}


const mapStateToProps = (state) => ({
   singlesticket: state.stickets.data,
})
export default connect(mapStateToProps)(singleSticket);