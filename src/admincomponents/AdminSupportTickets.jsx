
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getAllUsersSupportTickets} from "./../store/actions/sticketsActions";

class AdminSupportTickets extends Component {
    constructor(props) {
        super(props);
        this.state = {
            sticket:'',
        }
    }
    componentDidMount() {
        this.props.dispatch(getAllUsersSupportTickets());
    }
    componentWillReceiveProps(nextProps) {
        this.setState({
            sticket: nextProps.stickets,
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
		                        <th>Raised By</th>
		                        <th>ticketid</th>
                                <th>status</th>
                                <th>Change Status</th>
                                <th>View</th>
		                        
							</tr>
                        {
                            this.state.sticket.length > 0 ? this.state.sticket.map((post) => (
                                <tr key={post.ticket_id}> 
                            <td>{post.raised_by}</td>
                            <td>{post.ticket_id}</td>
                            <td>{post.status}</td>
                            <td>
                                <select name="changeticketstatus">
                                    <option value={post.status}>{post.status}</option>
                                    <option value="pending">Pending</option>
                                    <option value="proccessing">Proccessing</option>
                                    <option value="complete">Complete</option>
                                </select>
                                <input type="submit" name="changestatus" value="Change"/>
                            </td>
                                                
                            <td>View</td>
	                    </tr>
                                )) :<tr><td colSpan="7" align="center"><p>No support tickets</p></td></tr>
                    }			
						
														
						</tbody>
					
                    </table>
                                            <div class="pagenav">
                        <div class="alignleft"></div>
                        <div class="alignright"></div>
                        </div>
                        
                                                
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
    stickets: state.stickets.alluserstickets,
 })
 export default connect(mapStateToProps)(AdminSupportTickets);