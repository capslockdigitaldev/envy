
import React, { Component } from 'react';
import { connect } from 'react-redux';

class My404Component extends Component {

    render() {
        return (
            <div className="container">
                 <div className="games-list">
            <div id="mainpage" className="main_box about col-md-12 p-0">
            <div className="main-content about-us mt-4">
                <div className="pagenotfound">
                    <h1>404 Page not found!</h1>
                </div>
          
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

export default connect()(My404Component);