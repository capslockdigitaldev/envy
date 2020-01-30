import React, { Component } from 'react';
import { connect } from 'react-redux';
import {getSingleReward} from './../store/actions/rewardsActions';
import { getUserdetails} from "./../store/actions/userActions";
import parseJwt from './../store/helpers/common';
import { FormGroup, FormControl, FormLabel } from 'react-bootstrap';
import SimpleReactValidator from 'simple-react-validator';
import toastr from "reactjs-toastr";
import axios from 'axios';

class SingleReward extends Component {
    constructor(props) {
        super(props);
        this.profileValidator = new SimpleReactValidator();
        this.state = {
            totalItems: '',
            usersdata:'',
            isLoggedIn: false,
            name:'',
            price:'',
            sub_heading:'',
            product_image:'',
            variable_product:'',
            variable_product_type:'',
            description:'',
            product_id:'',
            productsize:'free',
            userid:'',
            username:'',
            userphone:'',
            useremail:'',
            currusercart:'',
            curruser_vxp:'',

        };
    }
    changeValue = (e) =>{
        this.setState({ [e.target.name]: e.target.value });
    }
    componentDidMount() {
        const rewardid = this.props.match.params.id;
        document.title = 'rewards';
        this.props.dispatch(getSingleReward(rewardid));
        if (localStorage.getItem('token')) {
            const currdetails = parseJwt(localStorage.getItem('token'));
            const currid = currdetails.sub;
            this.setState({currid:currid , isLoggedIn:true});
            this.props.dispatch(getUserdetails(currid));
        }
    }
    componentWillReceiveProps(nextProps) {
        this.setState({
            totalItems: nextProps.singlereward,
            product_id:nextProps.singlereward.product_id,
            name:nextProps.singlereward.name,
            price:nextProps.singlereward.price,
            sub_heading:nextProps.singlereward.sub_heading,
            product_image:nextProps.singlereward.product_image,
            variable_product:nextProps.singlereward.variable_product,
            variable_product_type:nextProps.singlereward.variable_product_type,
            description:nextProps.singlereward.description,
            usersdata :nextProps.userdata,
            userid:nextProps.userdata.user_id,
            username:nextProps.userdata.nickname,
            currusercart:nextProps.userdata.cart,
            curruser_vxp:nextProps.userdata.vxp
        });
    }
    openmodal = (e) =>{
            const element = document.getElementById('redeemgiftcard'); 
            element.style.setProperty('display', 'block');
    }
    validateLoginForm = (e) => {
        let validate = this.profileValidator;
        if (validate.allValid()) {
        } else {
            validate.showMessages();
            this.forceUpdate();
        }
        this.setState({ [e.target.name]: e.target.value });
        e.preventDefault();
    }
    addToCart =(e) =>{
        const {userid ,name,curruser_vxp, currusercart, product_id,product_image,productsize,price} = this.state;
        const randno = Math.floor(Math.random()*90000) + 10000;

        if(currusercart === '' || currusercart === null){
            var cartdata  = [];
        }else if(currusercart !== '' || currusercart !== null){
            var cartdata  = currusercart;
        }
        var today = new Date();
        var dd = String(today.getDate()).padStart(2, '0');
        var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
        var yyyy = today.getFullYear();
        today = dd + '-' + mm + '-' + yyyy;
        cartdata.push({ 'unique':randno,'image': product_image,'product_name': name, 'sku': product_id, "size": productsize, "price": price , 'date':today });
        let request;
        let formData = new FormData();
        formData.append('userid',userid );
        formData.append('name',name );
        formData.append('cartdata', JSON.stringify(cartdata));
           request = {
            method: 'POST',
            url: `https://xrsports.gg/team/public/user/add-to-cart`,
            headers: { 'Content-Type': 'application/json', 'X-Auth-Token': `${localStorage.getItem('token')}` },
            data: formData
          };
        
        axios(request).then((data) => {
          if (data.data.ResponseCode === "1") {
            document.getElementById("close").click();
            toastr.success(data.data.ResponseText, { displayDuration: 1500 })
             }else {
            toastr.error(data, { displayDuration: 1500 })
          }
        });
        
    }
    redeemNow =(e) =>{
        e.preventDefault();
        const {userid,username , userphone , useremail ,product_image,price ,product_id, name} = this.state;
         const randno = Math.floor(Math.random()*90000) + 10000;
        const cartdata  = [];
        var today = new Date();
        var dd = String(today.getDate()).padStart(2, '0');
        var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
        var yyyy = today.getFullYear();
        today = dd + '-' + mm + '-' + yyyy;
        cartdata.push({ 'unique':randno,'image': product_image,'product_name': name, 'sku': product_id, "size": 'free', "price": price , 'date':today });
        let request;
        let formData = new FormData();
        formData.append('price',price );
        formData.append('username',username );
        formData.append('product_id', product_id);
        formData.append('userphone',userphone );
        formData.append('useremail',useremail );
        formData.append('userid',userid );
        formData.append('name',name );
        formData.append('cartdata', JSON.stringify(cartdata));
           request = {
            method: 'POST',
            url: `https://xrsports.gg/team/public/user/redeem-now`,
            headers: { 'Content-Type': 'application/json', 'X-Auth-Token': `${localStorage.getItem('token')}` },
            data: formData
          };
        
        axios(request).then((data) => {
          if (data.data.ResponseCode === "1") {
            toastr.success(data.data.ResponseText, { displayDuration: 1500 })
             }else {
            toastr.error(data, { displayDuration: 1500 })
          }
        });
    }
    render() {
        console.log(this.state);
        const{name,price,isLoggedIn,curruser_vxp,product_image,variable_product_type , description} =  this.state;
        return (
            <div className="container">
			<div className="games-list">
<div id="mainpage" className="main_box col-md-12 mt-4 p-0">
       

 <div className="prodinfoo mt-5">
    <div className="col-md-6 proimgpart">
        <div className="tiles">
                <img src={`https://xrsports.gg/team/public/rewards/${product_image}`} alt=""/>              
               <div className="tile" data-scale="2.4" data-image="img"></div>
        </div>
    </div>
    <div className="col-md-6 prodescrip">
        <h1><b>{name}</b> </h1>
        <br/>
        <h3><b>{price} XP </b></h3>
        <br/>
        <h2><b>Description :</b></h2>
        <h3>{description}</h3>
    
        <div className="right_hand buyyy">
        	    {variable_product_type === 'merch'?
        	        <select name="productsize" onChange={(e)=>this.changeValue(e)}>
        	            <option value="">Select Size</option>
        	            <option value="S">S</option>
        	            <option value="M">M</option>
        	            <option value="L">L</option>
        	            <option value="XL">XL</option>
        	            <option value="XXL">XXL</option>
        	        </select>
        	        :variable_product_type === 'shoes'?
        	        <select name="productsize" onChange={(e)=>this.changeValue(e)}>
        	            <option value="">Select Size</option>
        	            <option value="6">US 6</option>
        	            <option value="7">US 7</option>
        	            <option value="8">US 8</option>
        	            <option value="9">US 9</option>
        	            <option value="10">US 10</option>
        	            <option value="11">US 11</option>
        	        </select>:''}
        </div>	

<br/>


                {
                isLoggedIn ? 
                    curruser_vxp === price || curruser_vxp > price ?
                            variable_product_type === 'giftcard'?
                                <button type="button" name="buygiftcard" className="buynow" onClick={(e)=>this.openmodal(e)} id="redeemnow">Redeem Now</button> 
                                :
                                <input type="submit" name="buynow" className="buynow" onClick={(e)=>this.addToCart(e)}  id="addtocartt" value="Add to Cart"/>
                    :
                        <div className="right_hand buyyy">
                                <p>OOPS!! You don't have sufficient XP.</p>
                        </div>
                        :
                    <div className="right_hand buyyy">
                        <p>You must be logged In to add this to cart.</p>
                    </div>
                
                }
                { }
        
        <div id="redeemgiftcard">
           
                <FormGroup className="buygiftcard">
                    <FormLabel>Phone:</FormLabel>
                    <FormControl type="text" name="userphone" placeholder="Enter Your phonenumber" value={this.state.userphone} onChange={e => this.validateLoginForm(e)} />
                    {this.profileValidator.message('userphone', this.state.userphone, 'required')}
                </FormGroup>
                <FormGroup className="buygiftcard">
                    <FormLabel>Email:</FormLabel>
                    <FormControl type="email" name="useremail" placeholder="Enter Your Email" value={this.state.useremail} onChange={e => this.validateLoginForm(e)} />
                    {this.profileValidator.message('useremail', this.state.useremail, 'required|email')}
                </FormGroup>
                <FormGroup className="buygiftcard">
                    <FormLabel></FormLabel>
                    <input type="submit" onClick={(e)=>this.redeemNow(e)} className="buygiftcardss"/>
                </FormGroup>
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
    singlereward: state.rewards.data,
    userdata: state.userDetails.data

})
export default connect(mapStateToProps)(SingleReward);
