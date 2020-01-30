
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getUsersdetail} from "./../store/actions/userActions";

class AllUsers extends Component {
    constructor(props) {
        super(props);
        this.state = {
            totalItems:'',
        }
    }
    componentDidMount() {
            this.props.dispatch(getUsersdetail());
        }
        componentWillReceiveProps(nextProps) {
            this.setState({
                totalItems: nextProps.usersdata,
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

                    <table className="table table-striped">
					<tbody>
                    <tr className="heading">
							<th>User Id</th>
							<th>Username</th>
							<th>Name</th>
                            <th>E-Mail</th>
							<th>Phone</th>	                        
							<th>Envy Bucks</th>                       
							<th>View</th>                       
						</tr>
                    {
                    this.state.totalItems.length > 0 ? this.state.totalItems.map((post) => (
                        <tr key ={post.user_id}>
                            <td>TEG{post.user_id}</td>
                            <td>{post.nickname}</td>
                            <td>{post.firstname}</td>
                            <td>{post.email}</td>
                            <td>{post.phone}</td>
                            <td>{post.wallet}</td>
                            <td>View</td>
                        </tr>
                    )):''
                    }
                	</tbody>
                    </table>

                    
                    </div>
                </div>
            </div>
            </div>
        </div>
                );
            }
        }
       
const mapStateToProps = (state) => ({
    usersdata: state.userDetails.data,
})
export default connect(mapStateToProps)(AllUsers);