import React, { Component } from 'react';
import { connect } from 'react-redux';

class aboutus extends Component {

    render() {
        return (
            <div className="container">
                 <div className="games-list">
            <div id="mainpage" className="main_box about col-md-12 p-0">
            <div className="main-content about-us mt-4">
                
            <h2 className="commonheading">ABOUT US</h2>
                <p className="mt-4 w-100 float-left">Envy Gaming, Inc. is the owner and operator of global esports franchise Team Envy and the Dallas Fuel franchise in the Overwatch League. Founded as a professional Call of Duty team in 2007, the Dallas-based organization has grown into one of the largest and most-winning esports groups in the world. Today, Envy Gaming competes, streams and produces content across multiple gaming titles including Overwatch, Call of Duty, CS:GO, Fortnite, Paladins, and PUBG. In 2019, Forbes ranked Envy Gaming among the Top 10 Most Valuable Esports Franchises in the world.</p>
    <p> </p>
    <p className="mt-4">The internationally diverse Team Envy and Dallas Fuel rosters feature top professional gamers from around the globe. Envy provides dedicated coaching staffs, team managers, personal fitness trainers and mental health coaches to support its network of professional esports teams. In 2016, Envy was named Esports Team of the Year.</p>
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

export default connect()(aboutus);