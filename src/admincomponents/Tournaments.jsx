
import React, { Component } from 'react';
import { connect } from 'react-redux';
import {getTournaments} from './../store/actions/tournamentsActions';
import {gameName , gamePlatformIcons}  from './../store/helpers/common';

class Tournaments extends Component {
    constructor(props) {
        super(props);
        this.state = {
            totalItems: '',
        };
    }
    componentDidMount() {
        this.props.dispatch(getTournaments());
    }
    componentWillReceiveProps(nextProps) {
        this.setState({
            totalItems: nextProps.alltournamentsdata,
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
                           <tr class="heading">
                                <th>Name</th>
                                <th>Platform</th>
                                <th>Entry Fee</th>
                                <th>Prize Pool</th>
                                <th>View</th>
                                <th>Edit</th>
                                <th>Update Brackets</th>
							</tr>
                        {
                            this.state.totalItems.length > 0 ? this.state.totalItems.map((post) => (
                                 <tr key={post.tour_id}>
                                  <td className="">{post.tour_name}</td>  
                                  <td><img className="laddermatchlogo mr-2" src={gamePlatformIcons(post.platform)} /></td> 
                                  <td>{post.price}Envy Bucks</td> 
                                  <td>${post.prizepool}</td> 
                                  <td>view</td> 
                                  <td>{post.reg_close_date}</td> 
                                  <td>update</td> 

                                 </tr>
                                 )) :<tr><td colSpan="7" align="center"><p>No matches</p></td></tr>
                                 
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
    alltournamentsdata: state.tournaments.data,
})
export default connect(mapStateToProps)(Tournaments);