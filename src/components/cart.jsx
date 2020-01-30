import React, { Component } from 'react';
import { connect } from 'react-redux';
import parseJwt from './../store/helpers/common';
import { getUserdetails} from "./../store/actions/userActions";
import toastr from "reactjs-toastr";
import axios from 'axios';

class cart extends Component {
    constructor(props) {
        super(props);
        this.state = {
            usersdata:'',
            isLoggedIn: false,
            currid:'',
            currusercart:'',
            curruser_vxp:'',
            username:'',
        };
    }
    componentDidMount() {
        if (localStorage.getItem('token')) {
            const currdetails = parseJwt(localStorage.getItem('token'));
            const currid = currdetails.sub;
            this.setState({currid:currid , isLoggedIn:true});
            this.props.dispatch(getUserdetails(currid));
        }
    }
    componentWillReceiveProps(nextProps) {
        this.setState({
            usersdata :nextProps.userdata,
            username:nextProps.userdata.nickname,
            currusercart:nextProps.userdata.cart,
            curruser_vxp:nextProps.userdata.vxp
        });
    }
    removeFromCart = (unique) =>{
        const {currusercart} = this.state;
        for( var i = 0; i < currusercart.length; i++){ 
            if ( currusercart[i].unique === unique) {
                currusercart.splice(i, 1); 
            }
         }
         this.setState({currusercart:currusercart});
         const currcarttt = this.state.currusercart;
         const currid = this.state.currid;
         let request;
         let formData = new FormData();
         formData.append('currid',currid );
         formData.append('currusercart', JSON.stringify(currcarttt));
            request = {
             method: 'POST',
             url: `https://xrsports.gg/team/public/user/remove-from-cart`,
             headers: { 'Content-Type': 'application/json', 'X-Auth-Token': `${localStorage.getItem('token')}` },
             data: formData
           };
         axios(request).then((data) => {
           if (data.data.ResponseCode === "1") {
             toastr.success(data.data.ResponseText, { displayDuration: 1500 })
             this.props.dispatch(getUserdetails(currid));
              }else {
             toastr.error(data, { displayDuration: 1500 })
           }
         });
    }

    render() {
        const {currusercart,isLoggedIn ,curruser_vxp} = this.state;
       
        if( currusercart === null || currusercart === ''){
            return (
                <div id="mainpage" className="main_box col-md-12 p-0">
                <div className="row">
                                <img src="https://res.cloudinary.com/dnv0dij0y/image/upload/v1575621923/New_Project_57_ipahtu.png" className="emptycart" name=" empty cart" alt=""/><br/>
                                <h3>OOPS..!! Your cart is empty..</h3>
                            </div>
               </div>
            );
        }else{
            if(currusercart.length ){
                var sum = 0;
                for(var i=0; i < currusercart.length; i++){
                sum += parseInt(currusercart[i].price);
                }
                const totalsum = sum;
                const remainingbal = curruser_vxp -totalsum;
                return (
                    <div id="mainpage" className="main_box col-md-12 p-0">
                     
                     {
                         isLoggedIn ?
                         currusercart === null || currusercart === ''?
                            <div className="row">
                                <img src="https://res.cloudinary.com/dnv0dij0y/image/upload/v1575621923/New_Project_57_ipahtu.png" className="emptycart" name=" empty cart" alt=""/><br/>
                                <h3>OOPS..!! Your cart is empty..</h3>
                            </div>
                            :
                            <>
                            <div className="row">
                                <table className="table ranking mt-2 leaderbrd leaderboard mt-2">
                                    <thead>
                                        <tr className="new_list_tournament only_headings list_game leadehead">
                                            <th className="border-top-0">Product Image</th>
                                            <th className="border-top-0">Title</th>
                                            <th className="border-top-0">Price</th>
                                            <th className="border-top-0">Size</th>
                                            <th className="border-top-0">Quantity</th>
                                            <th className="border-top-0">Remove</th>
                                        </tr>
                                        </thead>
                                        <tbody>
                                                {currusercart.length?currusercart.map((post) => (
                                                    <tr key={post.unique} className="table-secondary">
                                                        <td><img className="rounded-circle cartproductimage" src={`https://xrsports.gg/team/public/rewards/${post.image}`} alt=""/></td>
                                                        <td>{post.product_name}</td>
                                                        <td>{post.price}</td>
                                                        <td>{post.size}</td>
                                                        <td>1</td>
                                                        <td><button onClick={()=>this.removeFromCart(post.unique)}>Remove</button></td>
                                                    </tr>
                                                )):'Cart is empty'}
                                               
                                        </tbody>
                                </table>
                            </div> 
                            <div className="row">
                         <div className="leftside">
                      {curruser_vxp === totalsum || curruser_vxp > totalsum?
                    
                    <>
                        <div className="cartcal">
                                <div className="floatleft-text"><h5>Redeemable XP Balance:</h5> <p>{curruser_vxp}</p></div>
                                <div className="floatleft-text"><h5>Oder Total:</h5> <p>{totalsum}</p></div>
                                <div className="floatleft-text"><h5>Remaining XP:</h5> <p>{curruser_vxp} XP - {totalsum} XP = {remainingbal} XP</p></div>
                        </div>
                        <h2>Cart Total: {totalsum} XP</h2>  </>:''}
                        </div> 
                         <div className="rightside">
                             {curruser_vxp === totalsum || curruser_vxp > totalsum?
                                   <a href="/checkout" name="checkout" className="checkoutbtnn">Checkout</a>
                                    :
                                   <>
                                   <span>OOPS...!!</span>
                                   <span>You don't have sufficient XP Credits in your account</span>
                                   </>
                               }
                             
                         </div>
                     </div>
                            </>
                          :
                         <div className="row">
                            <h3>please Login</h3>
                        </div>
                    
                     }
                     
                    
                    </div>
                    
                            );
            }
        }
      
    }
}
const mapStateToProps = (state) => ({
    userdata: state.userDetails.data
})
export default connect(mapStateToProps)(cart);