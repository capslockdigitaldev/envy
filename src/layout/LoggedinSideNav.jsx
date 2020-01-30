import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getUserdetails} from "../store/actions/userActions";
import parseJwt from '../store/helpers/common';


class LoggedinSideNav extends Component {
    constructor(props) {
        super(props);
        this.state = {
            sidenavcurruserdata: '',
            propic:'',
            wallet:'',
            xp:'',
            creatorid:'',
            creator:''
            
        };
    }
    logout = () => {
        localStorage.clear('token');
        this.setState({ isLoggedIn: !this.state.isLoggedIn, });
        window.location.reload()
    
        };
    componentDidMount() {
       if (localStorage.getItem('token')) {
            const currdetails = parseJwt(localStorage.getItem('token'));
            const currid = currdetails.sub;
            const username = currdetails.nik;
            this.setState({creator:username , creatorid: currid });
            this.props.dispatch(getUserdetails(currid));
        }
    }
    componentWillReceiveProps(nextProps) {
        this.setState({
            sidenavcurruserdata: nextProps.sidenavuserdata,
            propic:nextProps.sidenavuserdata.profile_pic,
            wallet:nextProps.sidenavuserdata.wallet,
            xp:nextProps.sidenavuserdata.xp
        });
    }
    render() {
        return (
            <div className="profileinfo text-center">
            <div className="_bucks">
                <div className="profile-left">
                    <div className="outter">
                        <div className="inner">
                        {this.state.propic === '' || this.state.propic === null ||this.state.propic === '0' || this.state.propic === 'undefined'?<img className="gunimage" src="https://res.cloudinary.com/dnv0dij0y/image/upload/v1574946624/profile-picture_smlers.png"  alt=""/>:<img className="gunimage" src = {`https://xrsports.gg/team/public/profileimages/${this.state.propic}`}  alt=""/>} 
                       </div> 
                    </div> 
                </div>
                
                <div className="profile-right">
                     <h2 className="user_name"><strong>{this.state.creator}</strong>
                    </h2>  
                    <br></br> 
                </div>
            
            </div>	
            <div className="_bucks" id="bck">
            <p> NV Bucks
            <div className="tooltippp"><i className="fa fa-info-circle ml-2" aria-hidden="true"></i>
                  <span className="tooltippptext">You can add NV Bucks to your wallet using a credit/debit card that can be used to play tournaments and win exciting rewards.</span>
                </div>
                </p>
                    <h2>
                        <strong> {this.state.wallet === '' || this.state.wallet === 'null' || this.state.wallet === '0'?'0':`${this.state.wallet}`} </strong>
                    </h2>
            </div>
            <div className="_bucks">
                <p>XP
                <div className="tooltipp"><i className="fa fa-info-circle ml-2" aria-hidden="true"></i>
                  <span className="tooltipptext">XP's are the Experience Points, User gets XP's When he/she wins or particiate in a ladder match or tournament.</span>
                </div>
                </p>
                <h2>{this.state.xp === '' || this.state.xp === 'null'|| this.state.xp === '0'?'0':`${this.state.xp}`}</h2>
              </div>
             <div className="_bucks mt-4">
             <div className="mt-3" onClick={() => this.logout()}>
<i className="fas fa-power-off"></i>
</div>

             </div>
    </div>
        );
    }
}


const mapStateToProps = (state) => ({
    sidenavuserdata: state.userDetails.data,
})
export default connect(mapStateToProps)(LoggedinSideNav);