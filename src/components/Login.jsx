import React, { Component } from 'react';
import SimpleReactValidator from 'simple-react-validator';
import { withRouter } from 'react-router'
import { FormGroup, FormControl } from 'react-bootstrap';
import Blizzard from './Blizzard';
import parseJwt from './../store/helpers/common';
import axios from 'axios';
const qs = require('query-string');

class Login extends Component {
    constructor(props) {
        super(props);
        this.loginValidator = new SimpleReactValidator();
        this.state = {
            email: '',
            password: '',
            isSubmit: false,
            loggedIn: false,
        }
    }
    componentDidMount() {
        if (localStorage.getItem('token')) {
            this.setState({ loggedIn: true });
        }
    }

    validateLoginForm = (e) => {
        let validate = this.loginValidator;
        if (validate.allValid()) {

        } else {
            validate.showMessages();
            this.forceUpdate();
        }
        this.setState({ [e.target.name]: e.target.value });
        e.preventDefault();
    }



    loginForm = (e) => {
        e.preventDefault();
        let validate = this.loginValidator;
        if (validate.allValid()) {
            this.setState({ isSubmit: true });
            const { email, password } = this.state;
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
                        const currdetails = parseJwt(localStorage.getItem('token'));
                        const role = currdetails.rol;
                        if(role === 'user'){
                            this.props.history.push('/games');
                            // document.getElementById("close").click();
                            window.location.reload();
                        }else{
                            this.props.history.push('/admin-transactions');
                            // document.getElementById("close").click();
                            window.location.reload();
                        }
                        window.location.reload();
                       
                    } else {
                        this.setState({ isSubmit: false , loggedIn: false});
                    }
                }).catch((err) => {
                    console.log(err)
                })

        } else {
            validate.showMessages();
            this.forceUpdate();
        }

    }

    loginWithBlizzard = () =>{
        console.log("loginWithBlizzard");
        let request;
        // https://us.battle.net/oauth/authorize?access_type=online&client_id=2551880e979642db877151662e7d6742&redirect_uri=https:%2F%2Fteamenvy.herokuapp.com%2F&response_type=code                    let request;
                    const params = {
                        response_type:'code',
                        client_id:'2551880e979642db877151662e7d6742',
                        redirect_uri: 'https://teamenvy.herokuapp.com/',
                        access_type:"online"
                        
                    }
            request = {
                method: 'GET',
                url: `https://us.battle.net/oauth/authorize`,
                params: params
              };
            axios(request).then( (response) => {
                console.log(response)
            //   this.setState({
            //     token: response.data,
            //   });
            })
            .catch( (error) => {
              console.log(error);
            });
           
            // const postData = {
            //     client_id: "2551880e979642db877151662e7d6742",
            //     client_secret: "Gu8QNWxssxcGxhp6RvmqCaJnp0eZ0RD9",
            //     grant_type: "authorization_code",
            //     code:"US7A3BV9IFZXNYAW5VETKP85EPIOKC9U0I",
            //     redirect_uri	:"https://teamenvy.herokuapp.com/games"
            //   };
            //   const axiosConfig = {
            //     headers: {
            //       "Content-Type": "application/x-www-form-urlencoded"
            //     }
            //   };
            //   const url =
            //     "https://us.battle.net/oauth/token";
            //   axios.post(url, qs.stringify(postData), axiosConfig).then(res => {
            //       console.log("res", res);
            //     // const tokenData = {
            //     //   client_id: "react-test-client",
            //     //   grant_type: "refresh_token",
            //     //   refresh_token: res && res.data.refresh_token
            //     // }
          
            //     // axios.post(url, qs.stringify(tokenData), axiosConfig).then(response =>{
            //     //   localStorage.setItem("access_token", res && res.data.access_token)
            //     //   this.checkAuth();
            //     //   // this.props.history.push('/XrayDetails');
            //     // }).catch(error => {
            //     //   alert("Something went wrong, Please try again")
            //     // })
          
            //   })
            //   .catch((err) => {
            //       console.log("err", err);
            //     // alert("Something went wrong, Please try again")
            //   })
            }

    render() {
        return (

            <div className="modal fade" id="modal-container-464146" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
     
     <button type="button" className="close" id="close" data-dismiss="modal">&times;</button>
    <div className="container">
        <div className="row">
    <div className="col-md-12">
    <div className="login modal-dialog" role="document">
        <div className="login modal-content">
            <Blizzard/>
            <div className="login modal-header text-center">
                <h5 className="modal-titl text-center w-100" id="myModalLabel">
                LOGIN
                </h5>
            </div>
        <div className="modal-body">
			{/* <button className="btn" onClick={()=> this.loginWithBlizzard()} >Login with blizzard</button> */}
			<button className="btn" > <a target="_blank" href="https://us.battle.net/oauth/authorize?access_type=online&client_id=2551880e979642db877151662e7d6742&redirect_uri=https:%2F%2Fteamenvy.herokuapp.com%2F&response_type=code"> Login Heroku</a></button>
			<button className="btn" > <a target="_blank" href="https://us.battle.net/oauth/authorize?access_type=online&client_id=2551880e979642db877151662e7d6742&redirect_uri=http:%2F%2Flocalhost:3000%2F&response_type=code"> Login localhost</a></button>
            
            <FormGroup controlId="username">
                <label>E-MAIL</label>
                <FormControl type="text" name="email" placeholder="Enter Your Email" value={this.state.email} onChange={e => this.validateLoginForm(e)} />
                {this.loginValidator.message('email', this.state.email, 'required|email')}
            </FormGroup>
            <FormGroup>
            <label>PASSWORD</label>
                <FormControl type="password" placeholder="******" name="password" value={this.state.password} onChange={e => this.validateLoginForm(e)} />
                {this.loginValidator.message('password', this.state.password, 'required|alpha_num')}
            </FormGroup>
			
                <label className="text-center w-100 py-3 mb-0"><input name="rememberme" type="checkbox" id="rememberme" value="forever" /> Remember Me</label>
            {/* <button type="submit" onClick={(e) => this.loginForm(e)} disabled={this.state.isSubmit} className="btn btn-red btn-block btn-lg">{this.state.isSubmit ? 'PLEASE WAIT..' : 'LOGIN TO YOUR ACCOUNT'}</button> */}
			
            <div className="form-group text-center mt-0 mb-4">
            <p>By clicking below, you accept to our and <a href="/">Terms of Use</a> and <a href="/">Privacy Policy</a></p>
            </div>
            <div className="text-center wrapper">
            <button type="submit" onClick={(e) => this.loginForm(e)} disabled={this.state.isSubmit} className="btn btn-red btn-lg">{this.state.isSubmit ? 'PLEASE WAIT..' : 'LOGIN'}</button>
            </div>
           
        </div>
        </div>
        <div className="form-group text-center footer login_text">
            <p className="mt-3"> Forgot Password?</p>
            <div className="form-group text-center mt-3">
            <p>Don't have an account  <a className="" id="modal-509828" href="#modal-container-509828" role="button" data-toggle="modal">REGISTER</a></p>
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

export default withRouter(Login);