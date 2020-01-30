import React, { Component } from 'react';
import { connect } from 'react-redux';

class contact extends Component {

    render() {
        return (
			<div className="container">
			<div className="games-list">
            <div id="mainpage" className="main_box col-md-12 p-0">
			<div className="main-content about-us mt-4">
				<h2 className="commonheading">CONTACT US</h2>
                    <div class="w-100 float-left mt-4">
					<div className="contact text-center mb-4 "><i className="fas fa-user"></i><span><b>Name</b><small>Team Envy</small></span></div>
					<div className="contact text-center mb-4"><i className="fas fa-phone"></i><span><b>Phone</b><small>+1 719-373-1240</small></span></div>
					<div className="contact text-center mb-4"><i className="fas fa-map-marker-alt"></i><span><b>Headquarters</b><small> abc street, Ste. 1235 , USA</small></span></div>
				    <div className="contact text-center mb-4"><i className="fas fa-envelope"></i><span><b>Mail</b><small>abc@teamenvy.gg</small></span></div>
					</div>
				<br/>
			</div>
	
		</div>
		<div className="game-list-bg">
                    <img src="/assets/img/games/Bg.jpg"  alt=""></img>
                    </div>  
		</div>
	
	</div>
        );
    }
}

export default connect()(contact);