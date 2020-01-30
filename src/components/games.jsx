import React, { Component } from 'react';
import { connect } from 'react-redux';
import {gameImages} from './../store/helpers/common';
import {getAllgames} from './../store/actions/gamesActions';
import { NavLink} from 'react-router-dom';

class games extends Component {
    constructor(props) {
        super(props);
        this.state = {
            totalItems: '',
            flipped:false,
            game:'',
            platform:''
            
        };
    }
    componentDidMount() {
        document.title = 'match';
        this.props.dispatch(getAllgames());
        const string = this.props.location.search;
        if(string){
            var mySubString = string.substring(
                string.lastIndexOf("?") + 1, 
                string.lastIndexOf("&")
            );
            const newstr = mySubString;
            var code = newstr.substring(
                newstr.lastIndexOf("=") + 1, 
            );
            console.log(code)
            if(code){
                console.log('yyy');
            }else{
                console.log('nnn');
            }
        }
        
    }
    flipitright = (yy , gname) => {
        this.setState({game: gname});
        var id = yy.target.id;
        // document.getElementById(id).className += " flipped";
        document.getElementById(id).classList.toggle('flipped');

    }
    componentWillReceiveProps(nextProps) {
        this.setState({
            totalItems: nextProps.gamesdata,
        });
    }
    chooseplat = (plat) =>{
        const gname = this.state.game;
        this.setState({platform : plat});
        localStorage.setItem('game', gname);
        localStorage.setItem('platform', plat);
    }
    render() {
        let i = 0;
        
        return (
            <div className="main-content w-100 mt-2 text-center">
                <div className="container">
                    <div className="games-list">
                    {this.props.loading ?
                    <div className="loaderdiv"><img className="spinnerloader" src="https://res.cloudinary.com/dg3sjwu2p/image/upload/v1580215115/envy/loader/loading-gif-png-5_q7dgtv.gif"></img></div>
                    :''}
            {
                this.state.totalItems.length > 0 ?this.state.totalItems.map((post) => (
                    
                    <div className="col-md-2 m-0 p-1 gamecardmain mt-4" key={post.game_id}>
                    <div className="flip-card">
                        <p className="hidden">{i++}</p>
                        <div id={i} className={`flip-card-inner card cara${i}`}>
                            <div className="flip-card-front front">
                                        <img className ="flipfront" src={gameImages(post.game_name)} alt=""/>
                                   
                            </div>
                            <div className={`flip-card-back back flipback car${i}`} id={i}>
                                    <p className="gamename">{post.game_title}</p>
                                    <ul>
                                    <NavLink to="/all-tournaments-matches" ><li className="text-center enabled" onClick={()=>this.chooseplat('ps4')}>
                                            <img className="img-fluid game enabled gameplaticons" src="https://res.cloudinary.com/dnv0dij0y/image/upload/v1574920944/platformicons/ps4round_lr6eam.png" alt=""/><p>PS4</p>
                                        </li></NavLink>
                                        <NavLink to="/all-tournaments-matches" ><li className="text-center enabled"  onClick={()=>this.chooseplat('xbox')}>
                                            <img className="img-fluid game enabled gameplaticons" src="https://res.cloudinary.com/dnv0dij0y/image/upload/v1574920944/platformicons/xboxround_vfxcix.png" alt=""/><p>XBOX</p>
                                        </li></NavLink>
                                        <NavLink to="/all-tournaments-matches" ><li className="text-center enabled "  onClick={()=>this.chooseplat('pc')}>
                                            <img className="img-fluid game gameplaticons" src="https://res.cloudinary.com/dnv0dij0y/image/upload/v1574920944/platformicons/pcround_pkhude.png" alt=""/><p>PC</p>
                                        </li></NavLink> 
                                        <li className="text-center disabled"><img className="img-fluid game gameplaticons" src="https://res.cloudinary.com/dnv0dij0y/image/upload/v1574920944/platformicons/stadiaround_qtkcqi.png" alt=""/><p>STADIA</p></li>
                                        <li className="text-center disabled"><img className="img-fluid game gameplaticons" src="https://res.cloudinary.com/dnv0dij0y/image/upload/v1574920944/platformicons/arcaderound_zilmfa.png" alt=""/><p>ARCADE</p></li>
                                        <li className="text-center disabled"><img className="img-fluid game gameplaticons" src="https://res.cloudinary.com/dnv0dij0y/image/upload/v1574920944/platformicons/steamround_pyl8ol.png" alt=""/><p>STEAM</p></li>
                                    </ul>
                                    
                            
                                
                            </div>
                        </div>
                        <a type="button" className="gamebutton" id={i}  onClick={(e) => this.flipitright(e, post.game_name)}>PLAY
                        {/* <br></br><i className="fas fa-chevron-right"></i> */}
                        </a>
                    </div>
                </div>
                
                    )) :''
            }
                <div className="game-list-bg">
                    <img src="/assets/img/games/Bg.jpg"  alt=""></img>
                    </div>    
            </div>
            </div>
            </div>
        );
    }
}


const mapStateToProps = (state) => ({
    gamesdata: state.games.data,
    loading : state.games.loading,
})
export default connect(mapStateToProps)(games);