import React, { Component } from 'react';
import { withRouter } from 'react-router';
import toastr from 'reactjs-toastr';
import 'reactjs-toastr/lib/toast.css';
import SimpleReactValidator from 'simple-react-validator';
import { FormGroup, FormControl, FormLabel } from 'react-bootstrap';
import PhoneInput from 'react-phone-number-input';
import 'react-phone-number-input/style.css';

class Signup extends Component {
  constructor(props) {
    super(props)
    this.loginValidator = new SimpleReactValidator();
    this.state = {
      firstname: '',
      nickname: '',
      phone:'',
      email: '',
      password: '',
      loading: false,
      message: '',
      cpassword:''
    }
  }

  dataChange(ev) {
    this.setState({
      [ev.target.name]: ev.target.value
    })
  }
  validateLoginForm = (e) => {
    let validate = this.loginValidator;
    if (validate.allValid()) {} else {
        validate.showMessages();
        this.forceUpdate();
    }
    this.setState({ [e.target.name]: e.target.value });
    e.preventDefault();
}
  postData =(ev) => {
    ev.preventDefault();
    let validate = this.loginValidator;
    if (validate.allValid()) {
        this.setState({ isSubmit: true });
        const {firstname, nickname, phone, email, password ,cpassword } = this.state;
        const message = 'you have successfully regisered on team envy, Welcome to team envy family.'
        const request = new Request('https://xrsports.gg/team/public/signup', {
            method: 'POST',
            body: JSON.stringify({ firstname, nickname, phone, email, password, message}),
            headers: new Headers({ 'Content-Type': 'application/json' }),
        })
        if (password !== cpassword) {
            toastr.error('Passwords Dont Match', { displayDuration: 1500 });                
        } else {
            return fetch(request).then(res => res.json())
            .then((data) => {
                if (data.ResponseCode === '1') {
                    toastr.success(data.ResponseText,  {displayDuration:1500})
                    // this.props.dispatch(sendMessage(phone,invitemessage));
                    const request = new Request('https://xrsports.gg/team/public/user/login', {
                method: 'POST',
                body: JSON.stringify({ email, password }),
                headers: new Headers({ 'Content-Type': 'application/json' }),
            })
            return fetch(request).then(res => res.json())
                .then((data) => {
                    if (data.token) {
                        localStorage.setItem('token', data.token);
                        this.setState({ isSubmit: true , loggedIn: true});
                        this.props.history.push('/games')
                        document.getElementById("close").click();
                        window.location.reload()
                    } else {
                        this.setState({ isSubmit: false , loggedIn: false});
                    }
                }).catch((err) => {
                    console.log(err)
                })
                } else {
                    toastr.error(data,  {displayDuration:1500})        
                }
            }).catch((err) => {
                console.log(err)
            })
        }
    } else {
        validate.showMessages();
        this.forceUpdate();
    }
  }


  render() {
    return (

        <div className="modal fade signup" id="modal-container-509828" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
     
        <button type="button" className="close" id="close" data-dismiss="modal">&times;</button>
       <div className="container">
           <div className="row">
       <div className="col-md-12">
          
        <div className="login modal-dialog" role="document">
        <div className="login modal-content">
            <div className="login modal-header text-center">
                <h5 className="modal-titl text-center w-100" id="myModalLabel">
                CREATE ACCOUNT
                </h5>
            </div>
        <div className="modal-body px-0">
        <div className="col-md-12 neupp">
                <form id="adduser" className="user-forms newform" action="" autoComplete="on" method="post" name="reg_form">
                    <div className="form-group">
                        <FormGroup className="w-100" controlId="firstname">
                        <FormLabel>First Name*</FormLabel>
                        <FormControl type="text" name="firstname" placeholder="Enter Your Firstname" value={this.state.firstname} onChange={e => this.validateLoginForm(e)} />
                        {this.loginValidator.message('firstname', this.state.firstname, 'required')}
                        </FormGroup>
                    </div>
                    <div className="form-group">
                    <FormGroup className="w-100" controlId="nickname">
                        <FormLabel>Username*</FormLabel>
                        <FormControl type="text" name="nickname" placeholder="Enter Your nickname" value={this.state.nickname} onChange={e => this.validateLoginForm(e)} />
                        {this.loginValidator.message('nickname', this.state.nickname, 'required')}
                        </FormGroup>
                    </div>
                    <div className="form-group">
                        <FormGroup className="w-100" controlId="email">
                        <FormLabel>Email*</FormLabel>
                        <FormControl type="email" name="email" placeholder="Enter Your E_Mail" value={this.state.email} onChange={e => this.validateLoginForm(e)} />
                        {this.loginValidator.message('email', this.state.email, 'required|email')}
                        </FormGroup>
                    </div>
                    <div className="form-group">
                        <FormGroup className="w-100" controlId="phone">
                        <FormLabel>Phone*</FormLabel>
                        {/* <FormControl type="text" name="phone" placeholder="Enter Your Phone" value={this.state.phone} onChange={e => this.validateLoginForm(e)} /> */}
                        <PhoneInput defaultCountry="US" internationalIcon={()=><span ><i className="fa fa-phone  icon-circle bg-danger"></i></span> }  type="text" value={ this.state.phone } onChange={phone => this.setState({ phone })} maxLength = "15" className="form-control " placeholder="Phone" />
                        {this.loginValidator.message('phone', this.state.phone, 'required')}
                        </FormGroup>
                    </div>
                    <div className="form-group">
                        <FormGroup className="w-100" controlId="password">
                        <FormLabel>Password*</FormLabel>
                        <FormControl type="password" name="password" placeholder="Enter Your Password" value={this.state.password} onChange={e => this.validateLoginForm(e)} />
                        {this.loginValidator.message('password', this.state.password, 'required|alpha_num')}
                        </FormGroup>
                    </div>
                    <div className="form-group">
                        <FormGroup className="w-100" controlId="cpassword">
                        <FormLabel>Confirm Password*</FormLabel>
                        <FormControl type="password" name="cpassword" placeholder="Confirm Password" value={this.state.cpassword} onChange={e => this.validateLoginForm(e)} />
                        {this.loginValidator.message('cpassword', this.state.cpassword, 'required|alpha_num')}
                        </FormGroup>
                    </div>
                    <div className="notgroup full text-left">
                        <p><input className="form-check-input" type="checkbox" required/>I've read and agree to the <a href="/">Terms and Conditions</a></p>
                    </div>
                    <div className="notgroup full text-left">
                        <p><input className="form-check-input" type="checkbox" required/>I've read and agree to the <a href="/">Privacy Poilicy</a>
                        I understand my right and how my information will be collected and used as laid out by our <a href="/">Privacy Poilicy.</a></p>
                    </div>
                    <div className="text-center wrapper py-5 mt-2" id="disableitornot" >
                    <button type="submit" onClick={(ev) => this.postData(ev)}  className="btn btn-red btn-lg">SIGNUP</button>
                    </div>
                </form>
            </div>
           
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
export default withRouter(Signup);
