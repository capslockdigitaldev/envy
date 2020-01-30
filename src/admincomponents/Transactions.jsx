
import React, { Component } from 'react';
import { connect } from 'react-redux';

import { getAllUsersTransacs} from "./../store/actions/transactionsActions";

class Transactions extends Component {
    constructor(props) {
        super(props);
        this.state = {
            alltransacs:''
        }
    }
    componentDidMount() {
            this.props.dispatch(getAllUsersTransacs());
    }
    componentWillReceiveProps(nextProps) {
        this.setState({
            alltransacs:nextProps.alltransactions,
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

                        <div className="table-responsive">
                    <table className="table table-striped table-bordered table-hover dataTables-example">
                   		
						<tbody>
                            <tr className="heading">
		                        <th>User</th>
		                        <th>Email</th>
								<th>Type</th>
		                        <th>Amount</th>
		                        <th>IP</th>
								<th>Date &amp; Time</th>
							</tr>
                        {
                        this.state.alltransacs.length ? this.state.alltransacs.map((post) => (
                        <tr key={post.uniquecode}>
                            <td>{post.amount} Envy Bucks purchased For ${post.amount/100} USD</td>
                            <td>{post.email}</td>
                            <td>wallet transaction</td>
                            <td>${post.amount/100}</td>
                            <td>{post.ip}</td>
                            <td>{post.time}</td>
                            
                        </tr>
                            ))
                            :<tr className="history_t"><td className="righthis"><p>NO TRANSACTIONS</p></td></tr>
                        }
                      </tbody>
                        
						</table>
                        
                        <div className="pagenav">
                        <div className="alignleft"></div>
                        <div className="alignright"></div>
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
    alltransactions : state.transactions.allusertansacs

})
export default connect(mapStateToProps)(Transactions);