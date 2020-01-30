import React, { Component } from 'react';
import { connect } from 'react-redux';
import parseJwt from './../store/helpers/common';
import SimpleReactValidator from 'simple-react-validator';
import { getUserdetails} from "./../store/actions/userActions";
import { FormGroup, FormControl, FormLabel } from 'react-bootstrap';
import toastr from "reactjs-toastr";
import axios from 'axios';

class checkout extends Component {
    constructor(props) {
        super(props);
        this.loginValidator = new SimpleReactValidator();
        this.state = {
            usersdata:'',
            isLoggedIn: false,
            currid:'',
            currusercart:'',
            curruser_vxp:'',
            username:'',

            name:'',
            email:'',
            phone:'',
            address:'',
            pincode:'',
            ordernotes:''
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
    validateLoginForm = (e) => {
        let validate = this.loginValidator;
        if (validate.allValid()) {

        } else {
            validate.showMessages();
            this.forceUpdate();
        }
        this.setState({ [e.target.name]: e.target.value });
        e.preventDefault();
    }
    placeOrder = () =>{
        const {currid ,currusercart,curruser_vxp, username, name,email,phone,address,pincode,ordernotes} = this.state;
        var sum = 0;
                for(var i=0; i < currusercart.length; i++){
                sum += parseInt(currusercart[i].price);
                }
                const totalsum = sum;
                const remainingbal = curruser_vxp -totalsum;        
                
                let request;
        let formData = new FormData();
        formData.append('currid',currid );
        formData.append('remainingbal' , remainingbal);
        formData.append('price' , totalsum);
        formData.append('email',email );
        formData.append('username',username );
        formData.append('phone',phone );
        formData.append('address',address );
        formData.append('pincode',pincode );
        formData.append('ordernotes',ordernotes );
        formData.append('name',name );
        formData.append('cartdata', JSON.stringify(currusercart));
           request = {
            method: 'POST',
            url: `https://xrsports.gg/team/public/user/checkout-order`,
            headers: { 'Content-Type': 'application/json', 'X-Auth-Token': `${localStorage.getItem('token')}` },
            data: formData
          };
        
        axios(request).then((data) => {
          if (data.data.ResponseCode === "1") {
            toastr.success(data.data.ResponseText, { displayDuration: 1500 })
             }else{
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
                         <div className="checkoutform">
        <FormGroup>
            <FormLabel>Name:</FormLabel>
            <FormControl type="text" name="name" placeholder="" value={this.state.name} onChange={e => this.validateLoginForm(e)} />
        </FormGroup>
        <FormGroup>
            <FormLabel>Email:</FormLabel>
            <FormControl type="text" name="email" placeholder="" value={this.state.email} onChange={e => this.validateLoginForm(e)} />
        </FormGroup>
        <FormGroup>
            <FormLabel>Phone:</FormLabel>
            <FormControl type="text" name="phone" placeholder="" value={this.state.phone} onChange={e => this.validateLoginForm(e)} />
        </FormGroup>
        <FormGroup>
            <FormLabel>Delivery Address:</FormLabel>
            <FormControl type="text" name="address" placeholder="" value={this.state.address} onChange={e => this.validateLoginForm(e)} />
        </FormGroup>
        <FormGroup>
            <FormLabel>Pincode:</FormLabel>
            <FormControl type="text" name="pincode" placeholder="" value={this.state.pincode} onChange={e => this.validateLoginForm(e)} />
        </FormGroup>
        <FormGroup>
            <FormLabel>Order Notes:</FormLabel>
            <FormControl type="text" name="ordernotes" placeholder="" value={this.state.ordernotes} onChange={e => this.validateLoginForm(e)} />
        </FormGroup>
        
        <input type="submit" name="placeorder" id="placeorderfinal" onClick={(e)=>this.placeOrder(e)} value="Place Order"/>
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
export default connect(mapStateToProps)(checkout);