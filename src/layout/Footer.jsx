import React, { Component } from 'react';
import $ from 'jquery';

class Footer extends Component {
    // componentDidMount(){
        
    //         let win_height = $(window).outerHeight();
    //         let header_height = $('#header nav').outerHeight();
    //         let footer_height = $('#footer').outerHeight();
    //         let min_height = win_height - footer_height;
    //         $('#page_container').css('min-height', min_height + 'px');
    //         $('#alert_message').fadeOut(10000);
            
       
    // }
    
    render() {
        // const footerStyle = {
        //     clear: 'both'
        //   };
        return (
            <footer class="pt-4 pb-4 rob">
            <div class="container-fluid">
            <div class="row">
            <div class="col-md-12">
            <div class="custom_foot">
            <h2>PLAY</h2>
            <ul>
            <li>
            <i class="far fa-circle"></i><a href="games-list/index.html">View Games</a>
            </li>
            <li>
            <i class="far fa-circle"></i><a id="modal-509222" href="#modal-container-509222" role="button" data-toggle="modal">Matchfinder</a>
            </li>
            <li>
            <i class="far fa-circle"></i><a href="all-matches/index.html">All Matches</a>
            </li>
            <li>
            <i class="far fa-circle"></i><a href="all-tournaments/index.html">All Tournaments</a>
            </li>
            <li>
            <i class="far fa-circle"></i><a href="user-leaderboards/index.html">Leaderboards</a>
            </li>
            <li>
            <i class="far fa-circle"></i><a href="events/index.html">Events</a>
            </li>
            </ul>
            </div>
            <div class="custom_foot">
            <h2>LEARN</h2>
            <ul>
            <li>
            <i class="far fa-circle"></i><a href="user-about/index.html">About</a>
            </li>
            <li>
            <i class="far fa-circle"></i><a href="user-faq/index.html">Rules</a>
            </li>
            <li>
            <i class="far fa-circle"></i><a href="user-faq/index.html">FAQ'S</a>
            </li>
            <li>
            <i class="far fa-circle"></i><a href="user-support/index.html">Support</a>
            </li>
            <li>
            <i class="far fa-circle"></i><a href="user-contact/index.html">Contact</a>
            </li>
            <li>
            <i class="far fa-circle"></i>
            <a href="#">Affiliate Program</a>
            </li>
            </ul>
            </div>
            <div class="custom_foot">
            <h2>POPULAR GAMES</h2>
            <ul>
            <li>
            <i class="far fa-circle"></i><a href="fortnite/index.html">Fortnite</a>
            </li>
            <li>
            <i class="far fa-circle"></i><a href="nascar-heat-4/index.html">Nascar Heat 4</a>
            </li>
            <li>
            <i class="far fa-circle"></i><a href="madden-20/index.html">Madden 20</a>
            </li>
            <li>
            <i class="far fa-circle"></i><a href="fifa20/index.html">FIFA 20</a>
            </li>
            <li>
            <i class="far fa-circle"></i><a href="rocket-league/index.html">Rocket League</a>
            </li>
            <li>
            <i class="far fa-circle"></i><a href="nba2k20/index.html">NBA 2K20</a>
            </li>
            <li>
            <i class="far fa-circle"></i><a href="super-smash-bros/index.html">Super Smash Bros</a>
            </li>
            </ul>
            </div>
            <div class="custom_foot">
            <h2>CONNECT</h2>
            <ul>
            <li>
            <i class="far fa-circle"></i><a href="user-faq/index.html">My Stream</a>
            </li>
            <li>
            <i class="far fa-circle"></i><a href="user-faq/index.html">Team Stream</a>
            </li>
            <li>
            <i class="far fa-circle"></i><a href="bracket-generator/index.html">Bracket Generator</a>
            </li>
            <li>
            <i class="far fa-circle"></i><a href="my-tournaments/index.html">View Brackets</a>
            </li>
            </ul>
            </div>
            <div class="lowerfooter">
            <div class="right_footer text-center">
            <img class="img-fluid m-4 footer_logo" src="../res.cloudinary.com/dnv0dij0y/image/upload/v1576156671/logo/menu-icon-4_4_2_r6cwcz.png"/>
            </div>
            <div class="left_footer">
            <div class="footer_socials">
            <h2>SOCIAL</h2>
            <ul>
            <li>
            <a target="_blank" href="https://twitter.com/TeamConnor1"><i class="fab fa-twitter"></i></a>
            </li>
            <li>
            <a target="_blank" href="https://www.facebook.com/TeamConnor"><i class="fab fa-facebook-f"></i></a>
            </li>
            <li>
            <a target="_blank" href="https://www.twitch.tv/"><i class="fab fa-twitch"></i></a>
            </li>
            <li>
            <a target="_blank" href="https://www.youtube.com/user/"><i class="fab fa-youtube"></i></a>
            </li>
            <li>
            <a target="_blank" href="https://www.instagram.com/"><i class="fab fa-instagram"></i></a>
            </li>
            </ul>
            </div>
            </div>
            </div>
            </div>
            </div>
            </div>
            <div class="copy-right">
            <span class="pull-left">
            <p><small>© 2019 TEAM CONNOR</small></p>
            </span>
            <span class="pull-right">
            </span>
            </div>
            </footer>
        
        );
    }
}

export default Footer;