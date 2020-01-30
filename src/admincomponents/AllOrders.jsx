
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getallusersorders} from "./../store/actions/ordersActions";

class AllOrders extends Component {
    constructor(props) {
        super(props);
        this.state = {
            allorders:'',
        }
    }
    componentDidMount() {
            this.props.dispatch(getallusersorders());
    }
    componentWillReceiveProps(nextProps) {
        this.setState({
            allorders: nextProps.orders,
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

                    <table className="table table-striped">
					<tbody>
                    <tr className="heading">
							<th>Order by</th>
							<th>Date</th>
							<th>Email</th>
                            <th>Phone</th>
							<th>Subtotal</th>	                        
							<th>status</th>                       
							<th>Change Status</th>                       
						</tr>
                    {
                    this.state.allorders.length > 0 ? this.state.allorders.map((post) => (
                        <tr>
                            <td>{post.name}</td>
                            <td>{post.date}</td>
                            <td>{post.email}</td>
                            <td>{post.phone}</td>
                            <td>{post.subtotal}</td>
                            <td>{post.order_status}</td>
                            <td>{post.order_status}</td>
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
    orders: state.orders.allusersorders,
 })
 export default connect(mapStateToProps)(AllOrders);