import React, { Component } from 'react';
import { connect } from 'react-redux';
import SimpleReactValidator from 'simple-react-validator';
import { FormGroup, FormControl } from 'react-bootstrap';
import { Link } from 'react-router-dom'

class login extends Component {

    render() {
        return (

         
            <div className="pannel">
            <div className="container-fluid">
            <div className="row"><div className="fullwidth homebanner">
            <h2>OFFICIAL GAMING COMMUNITY FOR</h2>
            <h1>TeamConnor</h1>
            <h3>Presented By - Northwestern Mutual</h3>
            <a className="enterbutton" href="games-list/index.html"><img src="wp-content/uploads/2019/12/New-Project-4.png"/></a>
            </div>
            <div className="fullwidthbackground">
            <div className="fullwidth" id="topbannr">
            <div className="toes">
            <div className="fortypercent">
            <h2>COMPETE FOR A CAUSE</h2>
            <p>The TeamConnor Childhood Cancer Foundation&#8217;s mission is to raise funds for national childhood cancer research projects, to build awareness of the limited government funding for childhood cancer research, and to support patient programs.</p>
            </div>
            <div className="sixtypercent">
            <a href="games/fifa20/index.html"><img className="homegame1" src="../res.cloudinary.com/dnv0dij0y/image/upload/v1576302272/homepage/fifa20asset_is9rm7.png"/></a>
            <a href="games/fortnite/index.html"><img className="homegame2" src="../res.cloudinary.com/dnv0dij0y/image/upload/v1576302272/homepage/rocketleagueasset_fp2tgj.png"/></a>
            <a href="games/rocket-league/index.html"><img className="homegame3" src="../res.cloudinary.com/dnv0dij0y/image/upload/v1576302272/homepage/fortniteasset_ctmdwx.png"/></a>
            </div>
            <div className="fullwid">
            <img src="../res.cloudinary.com/dnv0dij0y/image/upload/v1575906102/homepage/Tcgamingassets_3_fxru2h.png"/>
            </div>
            </div>
            </div>
            <div className="fullwidth" id="midbannr">
            <div className="leftban">
            <a href="all-tournaments/index.html"><img src="../res.cloudinary.com/dnv0dij0y/image/upload/v1576302694/homepage/playforcustomprize_i2mmu3_s4eks5.png"/></a>
            </div>
            <div className="rightban">
            <img src="../res.cloudinary.com/dnv0dij0y/image/upload/v1576302694/homepage/privatecommunity_rcphl2_qtj9hi.png"/>
            <a href="user-about/index.html" className="learnmoredash">LEARN MORE</a>
            <a href="user-leaderboards/index.html"><img src="../res.cloudinary.com/dnv0dij0y/image/upload/v1576302694/homepage/climbtheleaderboard_rfsa6z_cj2hg4.png"/></a>
            </div>
            </div>
            <div className="fullwidth">
            <a href="games-list/index.html"><img className="sidways" src="../res.cloudinary.com/dnv0dij0y/image/upload/v1576302694/homepage/gettingstarted_hbxwlt_1_pvleku.png"/></a>
            </div>
            </div>
            </div>
            </div>
            </div>
        );
    }
}

export default connect()(login);