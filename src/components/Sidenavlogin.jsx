import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getUserdetails} from "./../store/actions/userActions";
import parseJwt from './../store/helpers/common';
import { NavLink} from 'react-router-dom';

class Sidenavlogin extends Component {
    constructor(props) {
        super(props);
        this.state = {
            totalItems: ''
        }
    }
    componentDidMount() {
        const currdetails = parseJwt(localStorage.getItem('token'));
        const currid = currdetails.sub;
        this.setState({currid:currid});
        this.props.dispatch(getUserdetails(currid));
    }
    componentWillReceiveProps(nextProps) {
        this.setState({ totalItems: nextProps.userdata,});
    }
    render() {
        const img = '';
        const wallet = '';
        const name = '';
        const xp = '';

        return (
            <div className="left-sec rob mt-2 d-lg-block d-md-block d-sm-none d-none">
                    <div className="loggoutbtn" onClick={() => this.logout()}><a id="wp-submit" title="Logout">
                   LOGOUT <i className="fas fa-power-off"></i>
                </a></div>
                    <div className="profileinfo text-center">
                            <div className="_bucks">
                                
                                <div className="profile-left">
                                    <div className="outter">
                                        <div className="inner">
                                        {img === '' || img === 'null' || img === 'undefined'?<img className="gunimage" src="https://res.cloudinary.com/dnv0dij0y/image/upload/v1574946624/profile-picture_smlers.png" alt=""/>:<img className="gunimage" src = {`'dfdfgdf'${img}`} alt=""/>} 
                                       </div> 
                                    </div> 
                                </div>
                                
                                <div className="profile-right">
                                     <h4 className="user_name"><strong>{name}</strong>
        				            </h4>   
                                </div>
                            
                            </div>	
                            <div className="_bucks" id="bck">
                                        <span>
                                            <strong> {wallet === '' || wallet === 'null'?'0':`${wallet}`} </strong>
                                        </span>
                                        <span>
                                        Envy Bucks
                                         </span>
                                         <div className="tooltippp"><i className="fa fa-info-circle" aria-hidden="true"></i>
                                  <span className="tooltippptext">You can add Envy Bucks to your wallet using a credit/debit card that can be used to play tournaments and win exciting rewards.</span>
                                </div>
                            </div>
                            <div className="_bucks">
                                <span>{xp === '' || xp === 'null'?'0':`${xp}`} XP&nbsp;<div className="tooltipp"><i className="fa fa-info-circle" aria-hidden="true"></i>
                                  <span className="tooltipptext">XP's are the Experience Points, User gets XP's When he/she wins or particiate in a ladder match or tournament.</span>
                                </div></span>
                                
                                 
                             </div>
                    </div>
                    
                    <ul className="usermenutwo">
                        
                    <NavLink to="/user-profile" ><li className="d-flex">
                            <h4>PROFILE</h4>
                        </li></NavLink>
                        <NavLink to="/dashboard" ><li className="d-flex">
                            <h4>DASHBOARD</h4><p></p>
                        </li></NavLink>
                        <NavLink to="/teams" ><li className="d-flex">
                            <h4>TEAMS</h4>
                        </li></NavLink>
                        <NavLink to="/active-matches" ><li className="d-flex">
                            <h4>ACTIVE MATCHES</h4><p></p>
                        </li></NavLink>
                        <NavLink to="/user-wallet" ><li className="d-flex">
                            <h4>WALLET</h4>
                        </li></NavLink>
                     
                        
                    </ul>
                </div>	
        );
    }
}

const mapStateToProps = (state) => ({
    userdata: state.userDetails.data
})
export default connect(mapStateToProps)(Sidenavlogin);