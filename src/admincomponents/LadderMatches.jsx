
import React, { Component } from 'react';
import { connect } from 'react-redux';
import {allMatch} from './../store/actions/matchActions';
import {gameName , gamePlatformIcons}  from './../store/helpers/common';

class LadderMatches extends Component {
    constructor(props) {
        super(props);
        this.state = {
            totalItems: '',
        };
    }
    componentDidMount() {
        this.props.dispatch(allMatch());
    }
    componentWillReceiveProps(nextProps) {
        this.setState({
            totalItems: nextProps.allmatchdata,
        });
    }
    render() {
        console.log(this.state)
        return (
<div className="adminright">
            <div className="row">
                <div className="col-lg-12">
                <div className="ibox ">
                    <div className="ibox-title">
                    </div>
                    <div className="ibox-content">

                    <div class="table-responsive">
                    <table class="table table-striped">
                   		<tbody>
                           <tr class="heading">
		                        <th>Game</th>
		                        <th>Match Id</th>
		                        <th>Platform</th>
		                        <th>Challenged By</th>
		                        <th>Accepted By</th>
		                        <th>Created on </th>
		                        <th>Winner</th>
		                        <th>View</th>
		                        <th>Edit</th>
							</tr>
                        {
                                this.state.totalItems.length > 0 ? this.state.totalItems.map((post) => (
                                    <tr key={post.match_id}>
                                        <td>{gameName(post.game)}</td>
                                        <td>{post.match_id}</td>
                                        <td><img className="laddermatchlogo" src={gamePlatformIcons(post.platform)} alt = "" /></td>
                                        <td>{post.player1}</td>
                                        <td>{post.player2}</td>
                                        <td>{post.date}</td>
                                        <td>{post.winner}</td>
                                        <td>view</td>
                                        <td>edit</td>
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
    allmatchdata: state.match.data,

})
export default connect(mapStateToProps)(LadderMatches);