
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getAllUsersTeams} from "./../store/actions/teamsActions";

class AllTeams extends Component {
    constructor(props) {
        super(props);
        this.state = {
            allteams:'',
        }
    }
    componentDidMount() {
            this.props.dispatch(getAllUsersTeams());
        }
        componentWillReceiveProps(nextProps) {
            this.setState({
                allteams: nextProps.teamsdata,
            });
        }
    render() {
        return (
    <div className="adminright">
            <div className="row">
                <div className="col-lg-12">
                <div className="ibox ">
                    <div className="ibox-title">
                    </div>
                    <div className="ibox-content">
                    <div class="table-responsive">
                    <table class="table table-striped table-bordered table-hover dataTables-example">
                    <tbody>
                    <tr className="heading">
                        	<th>Team Id</th>
							<th>Team Icon</th>
							<th>Team Name</th>	                        
							<th>Created By</th>	                        
							<th>Created On</th>	                        
							<th>Total Members</th>	                        
                    </tr>
                    { this.state.allteams.length > 0 ? this.state.allteams.map((post) => (
                            <tr key={post.team_id}>
                                <td>{post.team_id}</td>
                                <td><img src={`https://xrsports.gg/team/public/teamprofiles/${post.displaypicture}`} alt=""/></td>
                                <td>{post.teamname}</td>
                                <td>{post.createdby}</td>
                                <td>{post.teammembers.split(',').length}</td>
                                <td>View</td>
                            </tr>
                            )) :<tr><td colSpan="7" align="center"><p>No matches</p></td></tr>
                        } 
 				
                	    </tbody>
		            </table>
                        </div>

                    </div>
                </div>
            </div>
            </div>
        </div>
                );
            }
        }
       
const mapStateToProps = (state) => ({
    teamsdata: state.team.allusersteams,
})
export default connect(mapStateToProps)(AllTeams);