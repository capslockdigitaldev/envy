import React, { Component } from 'react';
import {NavLink } from 'react-router-dom';
import {history} from './../store/helpers/history';
import $ from 'jquery';

// $(function(){$(".sidetogglenav").click(function(){$("#mySidenav").css("width","250px");$(".showafterfsec").delay(400).fadeIn()});$(".closebtn").click(function(){$(".showafterfsec").hide();$("#mySidenav").css("width","0px")})});

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoggedIn: false,
            // loading: true,
        }
    }
    // componentDidMount(){
    //     this.isLoading = setTimeout(()=>{this.setState({loading: false})}, 1000);
    //   }
    //   componentWillUnmount() {
    //      clearTimeout(this.isLoading);
    //   }
    //   timer = () => setTimeout(()=>{
    //     this.setState({loading: false})
    //   }, 1000);
    componentWillMount() {
        
         if (localStorage.getItem('token')) {
            this.setState({ isLoggedIn: true });
        }
    }
    logout = () => {
        localStorage.clear('token');
        this.setState({ isLoggedIn: !this.state.isLoggedIn, });
        window.location.reload();
    };

    

    render() {
        const activeUrl = history.location.pathname
        const {loading} = this.state;

        
        if(this.state.isLoggedIn === true && activeUrl === '/'){
            return (
                <>
                <header className="homeheader">
                        <div className="container-fluid">
                            <div className="row">
                                <div className="col-md-12">
                                <a className="navbar-brand homelogo" href="/"><img src="/assets/img/ foot-logo.png"  alt=""/></a>
                                <ul className="new_home_menu">
                                    <li>
                                        <a id="logoutlink" title="Logout" onClick={() => this.logout()}>Logout</a>
                                    </li>
                                    <NavLink to="/games" ><li>
                                        <a className="taketour">Let's Play !</a>
                                    </li></NavLink>
                                
                                </ul>
                                </div>
                            </div>
                        </div>
                    </header>
          
                </>
            );

        }else if(this.state.isLoggedIn === false && activeUrl === '/'){
            return (
                <>
       <header className="homeheader">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-12">
                    <a className="navbar-brand homelogo" href="/"><img src="/assets/img/ foot-logo.png"  alt=""/></a>
                    <ul className="new_home_menu">
                        <li>
                            <a className="taketour" id="modal-509828" href="#modal-container-509828" role="button" data-toggle="modal">REGISTER</a>
                        </li>
                        <li>
                            <a className="taketour" id="modal-464146" href="#modal-container-464146" role="button" data-toggle="modal">LOGIN</a>
                        </li>
                    </ul>
                    </div>
                </div>
            </div>
        </header>
          
                </>
            );

        }else if(this.state.isLoggedIn === false && activeUrl !== '/'){
            return (
                <>
    <div className="sponsor">
    <img className="img-fluid spon" src="https://res.cloudinary.com/dnv0dij0y/image/upload/v1578307312/REACT%20LOCAL/View_Games_copy_qjjwoa.jpg" alt=""/>
    </div>
        <header>
        <div className="container-fluid">
        <img className="img-fluid spon" src="https://res.cloudinary.com/dnv0dij0y/image/upload/v1578307312/REACT%20LOCAL/a_m57l25.png"  alt=""/>

            <div className="row">
            <div className="col-md-12">
                <div className="play-actions text-center w-100">
                <NavLink to="/games" className="btn btn-outline-secondary">Play</NavLink>
                <NavLink to="/leaderboard" className="btn btn-outline-secondary">Leaderboard</NavLink>
                <NavLink to="/user-support" className="btn btn-outline-secondary">Support</NavLink>
                <NavLink to="/rewards" className="btn btn-outline-secondary">Swag</NavLink>
                </div>
                    </div>
            </div>
        </div>
    </header>
            
          
                </>
            );
        }else if(this.state.isLoggedIn === true && activeUrl !== '/'){
            return (
                <>
                {/* {loading ? <div className="loadload">loadinggggg...........</div>:''} */}
                <div className="sponsor">
                <img className="img-fluid spon" src="https://res.cloudinary.com/dnv0dij0y/image/upload/v1578307312/REACT%20LOCAL/View_Games_copy_qjjwoa.jpg" alt=""/>
                </div>
                    <header>
                    <div className="container-fluid">
                    <img className="img-fluid spon" src="https://res.cloudinary.com/dnv0dij0y/image/upload/v1578307312/REACT%20LOCAL/a_m57l25.png"  alt=""/>
            
                        <div className="row">
                        <div className="col-md-12">
                            <div className="play-actions text-center w-100">
                            <NavLink to="/games" className="btn btn-outline-secondary">Play</NavLink>
                            <NavLink to="/leaderboard" className="btn btn-outline-secondary">Leaderboard</NavLink>
                            <NavLink to="/user-support" className="btn btn-outline-secondary">Support</NavLink>
                            <NavLink to="/rewards" className="btn btn-outline-secondary">Swag</NavLink>
                            </div>
                                </div>
                        </div>
                    </div>
                </header>
                        
                      
                            </>
            );
        }
        
    }
}

export default Header;