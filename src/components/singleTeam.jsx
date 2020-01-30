import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getAllTeamUsers , getSingleTeam} from "./../store/actions/teamsActions";

class singleTeam extends Component {
    constructor(props) {
        super(props);
        this.state = {
            totalUsers: '',
            teamdata:'',
            teamnamee:'',
            displaypicture:'',
            createdon:'',
            createdby:''
        };
    }
    componentDidMount() {
        const teamid = this.props.match.params.id;
        const teamname = this.props.match.params.teamname;
        this.setState({ teamnamee: teamname});
        this.props.dispatch(getAllTeamUsers(teamid));
        this.props.dispatch(getSingleTeam(teamid));
    }
    componentWillReceiveProps(nextProps) {
        this.setState({
            totalUsers: nextProps.teamusers,
            teamdata:nextProps.teamdataa,
        });
    }

    render() {
      console.log(this.state)
      const{teamnamee , totalUsers} = this.state;
        return (
<div id="mainpage" className="main_box col-md-12 p-0">
       <div className="col-md-12 col-sm-12 col-lg-12 teambanner">
               <div className="even_banner match mb-2">
        <div className="left_hand">
              <img className="featureteamdp" src="https://tcgaming.gg/wp-content/uploads/2019/12/fortnite.png" alt=""/>                           
                             
    	</div>
    	<div className="right_hand">
        <h3>{teamnamee}</h3>
    		<p>Created By - esportsusers | 06-12-2019	</p>
    	</div>	
</div> 
    	</div>
    	
        <div className="col-md-12 col-sm-12 col-lg-12 teammembers">
        { totalUsers.length > 0 ? totalUsers.map((post) => (
                         <div className="col-lg-3 singleteamm" key={post.user_id}>
                         <div className="supportucp">
                             {
                                 post.profile_pic === '' || post.profile_pic === null?
                                 <img className="rounded-circle sinplayerimage" src='https://res.cloudinary.com/dnv0dij0y/image/upload/v1574946624/profile-picture_smlers.png' alt=""/>:
                                 <img className="rounded-circle sinplayerimage" src={`https://xrsports.gg/team/public/profileimages/${post.profile_pic}`} alt=""/>
                             }
                              <hr/>
                                <p> {post.nickname}</p> 
                              <p>   </p> 
                         </div>
                     </div>
                        )) :
                        ''
                    } 
    	</div>
</div>
	
        );
    }
}

const mapStateToProps = (state) => ({
    teamusers: state.team.dataa,
    teamdataa: state.team.daataa,

})
export default connect(mapStateToProps)(singleTeam);
