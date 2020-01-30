import React, { Component } from 'react';
import { connect } from 'react-redux';
import Pagination from './../store/helpers/Pagination';
import { getSupportTickets} from "./../store/actions/sticketsActions";
import parseJwt from './../store/helpers/common';
import {NavLink } from 'react-router-dom';

class SupportTickets extends Component {
    constructor(props) {
        super(props);
        const currdetails = parseJwt(localStorage.getItem('token'));
        const currid = currdetails.sub;
        this.state = {
            userData:'',
            currid:currid,
            sortOrderBy: 'asc',
            pageOfItems: [],
        }
    }
    componentDidMount() {
        const currdetails = parseJwt(localStorage.getItem('token'));
        const currid = currdetails.sub;
        this.props.dispatch(getSupportTickets(currid));
    }
    onChangePage = (pageOfItems) => {
        this.setState({ pageOfItems: pageOfItems });
    }
    componentWillReceiveProps(nextProps) {
        this.setState({
            userData: nextProps.stickets,
        });
    }
    render() {
        let i = 1;
        return (
<div id="mainpage" className="main_box p-0 col-md-12">

	    <div className="main-content about-us mt-4">
	<h2 className="commonheading">SUPPORT TICKETS</h2>
    <div className="col-md-4 col-sm-4 col-xs-12 ">
                        &nbsp;{this.state.userData.length > 0 ? <Pagination items={this.state.userData} onChangePage={this.onChangePage} /> : ''}
    </div>
     <div className="showallteams">
             	<p className="merch_p">Support Tickets</p>
                    <table className="table ranking mt-2 " id="allsupporttickets">
					<thead>
						<tr className="new_list_tournament only_headings list_game robbb">
                        <th>S no</th>
							<th>Ticket Id</th>
							<th>Status</th>	                        
							<th>View</th>		                        
						</tr>
					</thead>
					<tbody>
                    {
                            this.state.userData.length > 0 ? this.state.pageOfItems.map((post) => (
                                <tr key={post.ticket_id}>
                                    <td>{i++}</td>
                                    <td>{post.ticket_id}</td>
                                    <td>{post.status}</td>
                                    <td><NavLink to = {`/support-ticket/${post.ticket_id}`}>View</NavLink></td>
                                </tr>
                                )) :<tr><td colSpan="7" align="center"><p>No support tickets</p></td></tr>
                    }
                	 </tbody>
		            </table>
                    
         </div>
	</div>
    </div>  
    );
    }
}


const mapStateToProps = (state) => ({
   stickets: state.stickets.data,
})
export default connect(mapStateToProps)(SupportTickets);