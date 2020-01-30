import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getorders} from "./../store/actions/ordersActions";
import parseJwt from './../store/helpers/common';

class userOrders extends Component {
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
        if(localStorage.getItem('token')){
            const currdetails = parseJwt(localStorage.getItem('token'));
            const currid = currdetails.sub;
            this.props.dispatch(getorders(currid));
        }
    }
    onChangePage = (pageOfItems) => {
        this.setState({ pageOfItems: pageOfItems });
    }
    componentWillReceiveProps(nextProps) {
        this.setState({
            userData: nextProps.orders,
        });
    }
    render() {
        let i = 1;
        return (
    <div id="mainpage" class="main_box col-md-12 p-0">
       
        <div class="orderdetailss">
        {
            this.state.userData.length > 0 ? this.state.userData.map((post) => (
                <>
                <div class="row">
                    <p class="transid">{post.transaction_id}</p> 
                </div>
                {post.ordertype === 'merchshoes'?
                JSON.parse(post.products).map((postt) => (
                    <div class="row ordersumm">
                             
                    <div class="col-lg-3"><img class="rounded-circle cartproductimage" src={`https://xrsports.gg/team/public/rewards/${postt.image}`} alt="" /></div> 
                    <div class="col-lg-3">{postt.product_name}</div> 
                    <div class="col-lg-3">{postt.size} </div> 
                <div class="col-lg-3"> {postt.price} XP</div> 
                    </div>
                ))
                :
                JSON.parse(post.products).map((postt) => (
                    <div class="row ordersumm">
                    <div class="col-lg-6"><img class="cartproductimagegift" src={`https://xrsports.gg/team/public/rewards/${postt.image}`} alt=""/></div> 
                <div class="col-lg-6"><h4>{postt.product_name}</h4></div>
                </div>
                ))
                }
                <div class="row">
            <div class="orderpoints"> <p class="partdate">Placed On: {post.date}</p></div>
            <div class="orderpoints"> <p class="orstatus">Status:  {post.order_status}</p>  </div>
                    <div class="orderpoints"> <p class="ordertotall">Subtotal : {post.subtotal} XP</p> </div>
                </div>
                </>
                )) :<div><h3>No Orders...!!</h3></div>
        }               
                      </div>
    
    </div>
    );
    }
}


const mapStateToProps = (state) => ({
   orders: state.orders.data,
})
export default connect(mapStateToProps)(userOrders);