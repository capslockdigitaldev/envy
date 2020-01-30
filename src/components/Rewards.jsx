import React, { Component } from 'react';
import { connect } from 'react-redux';
import {getRewards} from './../store/actions/rewardsActions';
import Pagination from './../store/helpers/Pagination';
import {NavLink } from 'react-router-dom';

class Rewards extends Component {
    constructor(props) {
        super(props);
        this.state = {
            totalItems: '',
            sortOrderBy: 'asc',
            pageOfItems: []
        };
    }
    componentDidMount() {
        document.title = 'rewards';
        this.props.dispatch(getRewards());
    }
    onChangePage = (pageOfItems) => {
        this.setState({ pageOfItems: pageOfItems });
    }
    componentWillReceiveProps(nextProps) {
        this.setState({
            totalItems: nextProps.allrewards,
        });
    }
    render() {
        return (
            <div className="container">
			<div className="games-list">
<div id="mainpage" className="main_box col-md-12 p-0">
        <div className="col-md-4 col-sm-4 col-xs-12 ">
            &nbsp;{this.state.totalItems.length > 0 ? <Pagination items={this.state.totalItems} onChangePage={this.onChangePage} /> : ''}
        </div>
        <div className="main-content about-us mt-4">
        {
           this.state.totalItems.length > 0 ? this.state.pageOfItems.map((post) => (
            <div className="col-md-merch" key={post.product_id}>
            <div className="merch">
                  <img src={`https://xrsports.gg/team/public/rewards/${post.product_image}`} alt=""/>
                <div className="info">
                    <p className="merchname">{post.name}</p>
                    <p className="merchprice">{post.price}</p>
                    <NavLink to = {`/reward/${post.product_id}`}>Redeem</NavLink> 
                </div>
            </div>
        </div>
            )) :<p>No Products</p>
        }
		         
		</div>
</div>
</div>
</div>
	
        );
    }
}

const mapStateToProps = (state) => ({
    allrewards: state.rewards.data
})
export default connect(mapStateToProps)(Rewards);
