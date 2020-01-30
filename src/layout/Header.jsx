import React, { Component } from 'react';
import { Redirect,NavLink } from 'react-router-dom';
import {history} from './../store/helpers/history';
import swal from "sweetalert";
import $ from "jquery";

class Header extends Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         isLoggedIn: false,
    //     }
    // }
    // componentDidMount() {
    //     $( document ).ready(function() {
    //         //$('#call-dailer').modal();
    //         });
    //         $(".num").click(function () {
    //             var number = $(this).data('number');
    //             $("#phoneNumber").val(function() {
    //                 return this.value + number;
    //             });
    //         });
    
    //     setTimeout(() => { localStorage.removeItem('alert') }, 10000);
    // }
    // loadCredentials=()=> {
    //     txtDisplayName = "tauseef.ashher@capanicus.com";
    //     txtPrivateIdentity = "tauseef.ashher@capanicus.com"
    //     txtPublicIdentity = "sip:athos63858@sip.telnyx.com";
    //     txtPassword = "1111111";
    //     txtRealm = 'sip.telnyx.com'; // mandatory: domain name
    //     };

    // componentWillMount() {
        
    //      if (localStorage.getItem('token')) {
    //         this.setState({ isLoggedIn: true });
    //     }
    // }
    // clearNumber =()=>{
    //     $('#phoneNumber').val('');

    // }
    // logOut=()=>{
    //     document.logoutForm.submit(); 
    //  }
    // getDynaminTitle = () => {
    //     const activeUrl = window.location.pathname;
    //     if (activeUrl === '/user') {
    //         return "User";
    //     } else if (activeUrl === '/product') {
    //         return "Products";
    //     } else if (activeUrl === '/category') {
    //         return "Category";
    //     } else if (activeUrl === '/sub-category') {
    //         return "Sub Category";
    //     } else if (activeUrl === '/slider-images') {
    //         return "Slider Images";
    //     } else if (activeUrl === '/rates') {
    //         return "Rates";
    //     } else if (activeUrl === '/orders') {
    //         return "Orders";
    //     } else if (activeUrl === '/payments') {
    //         return "Payments";
    //     }
    // };

    // logout = () => {
    //     localStorage.clear('token');
    //     this.setState({ isLoggedIn: !this.state.isLoggedIn, });
    // };

    render() {
        const activeUrl = history.location.pathname
        return (
            <>
<header>
    <div className="container-fluid">
        <div className="row">
            <div className="col-md-12">
                <nav className="navbar navbar-toggleable p-0 rob">
                <span className="sidetogglenav"></span>
                <a className="navbar-brand" href="../index.htm"l><img className="nav_logo" src="../../res.cloudinary.com/dnv0dij0y/image/upload/v1574946527/logowhite_jtqw8c.png"/></a>
                <ul className="navbar-nav onlydesk">
                <li className="nav-item ">
                <a className="nav-link" href="../games-list/index.html">PLAY</a>
                </li>
                <li className="nav-item ">
                <a className="nav-link" href="../all-matches/index.html">LADDERS</a>
                </li>
                <li className="nav-item ">
                <a className="nav-link" href="../all-tournaments/index.html">"TOURNAMENTS"</a>
                </li>
                <li className="nav-item ">
                <a className="nav-link" href="../user-leaderboards/index.html">LEADERBOARDS</a>
                </li>
                <li className="nav-item ">
                <a className="nav-link" href="../user-support/index.html">SUPPORT</a>
                </li>
                <li className="nav-item">
                <a className="nav-link" href="../rewards/index.html">REWARDS</a>
                </li>
                </ul>
                <ul className="navbar-nav right onlydesk">
                <li className="nav-item log">
                <a type="button" className="btn btn-outline-secondary" id="modal-464146" href="#modal-container-464146" role="button" data-toggle="modal">LOGIN</a>
                </li>
                <li className="nav-item reg">
                <a type="button" className="btn btn-primary" id="modal-509828" href="#modal-container-509828" role="button" data-toggle="modal">REGISTER</a>
                </li>
                </ul>
                </nav>
            </div>
        </div>
    </div>
</header>
          
      
            </>
        );
    }
}

export default Header;