import React, { Component } from 'react';
import { connect } from 'react-redux';
import StripeCheckout from 'react-stripe-checkout';
import toastr from "reactjs-toastr";
import parseJwt from './../store/helpers/common';
import { getUserdetails} from "./../store/actions/userActions";
import { getAllTransacs} from "./../store/actions/transactionsActions";


function handleToken(token , addresses){
    const charge = document.getElementById("xpcredits").value;
    const currid = document.getElementById("creatorid").value;
    const username = document.getElementById("loggedinusername").value;
    const fname = document.getElementById("loggedinuserfname").value;
    const email = document.getElementById("loggedinuseremail").value;
const tokenn = token.id;
            const request = new Request('https://xrsports.gg/team/public/user/check-stripe', {
                method: 'POST',
                body: JSON.stringify({ tokenn,addresses,charge,currid ,username,fname,email}),
                headers: new Headers({
                    "Content-Type": "application/json",
                    "X-Auth-Token": `${localStorage.getItem("token")}`
                  })
            })
                return fetch(request).then(res => res.json())
                .then((data) => {
                   
                   const request = new Request('https://xrsports.gg/team/public/user/transactions', {
                        method: 'POST',
                        body: JSON.stringify({ tokenn,addresses,charge,currid ,username,fname,email}),
                        headers: new Headers({
                            "Content-Type": "application/json",
                            "X-Auth-Token": `${localStorage.getItem("token")}`
                          })
                    })
                        return fetch(request).then(res => res.json())
                        .then((data) => {
                            if (data.ResponseCode === '1') {
                                toastr.success(data.ResponseText, {displayDuration:1500})
                                if (localStorage.getItem('token')) {
                                    const currdetails = parseJwt(localStorage.getItem('token'));
                                    const currid = currdetails.sub;
                                    this.props.dispatch(getAllTransacs(currid));
                                }
                                document.getElementById("close").click();
                            } else {
                                toastr.error(data, {displayDuration:1500})        
                            }
                        }).catch((err) => {
                            console.log(err)
                        })
                    
                }).catch((err) => {
                    const request = new Request('https://xrsports.gg/team/public/user/transactions', {
                        method: 'POST',
                        body: JSON.stringify({ tokenn,addresses,charge,currid ,username,fname,email}),
                        headers: new Headers({
                            "Content-Type": "application/json",
                            "X-Auth-Token": `${localStorage.getItem("token")}`
                          })
                    })
                        return fetch(request).then(res => res.json())
                        .then((data) => {
                            if (data.ResponseCode === '1') {
                                toastr.success(data.ResponseText, {displayDuration:1500})
                                if (localStorage.getItem('token')) {
                                    document.getElementById("close").click();
                                    const currdetails = parseJwt(localStorage.getItem('token'));
                                    const currid = currdetails.sub;
                                    this.props.dispatch(getAllTransacs(currid));
                                    this.props.dispatch(getUserdetails(currid));
                                }
                                document.getElementById("close").click();

                            } else {
                                toastr.error(data, {displayDuration:1500})        
                            }
                        }).catch((err) => {
                            console.log(err)
                        })
                })


                

    }
class Wallet extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoggedIn:false,
            creatorid:'',
            xpdollar:'10',
            xpcredits:1000,
            loggedinusername:'',
            loggedinuserfname:'',
            loggedinuseremail:'',
            alltransacs:''
        }
    }
    componentDidMount() {
        if (localStorage.getItem('token')) {
            const currdetails = parseJwt(localStorage.getItem('token'));
            const currid = currdetails.sub;
            this.setState({ isLoggedIn: true , creatorid: currid });
            this.props.dispatch(getUserdetails(currid));
            this.props.dispatch(getAllTransacs(currid));
        }
    }
    dataChange =(e) =>{
        this.setState({ [e.target.name]: e.target.value });
        if(e.target.value === '10'){
            this.setState({ xpcredits: 1000 });
        }else if(e.target.value === '20'){
            this.setState({ xpcredits: 2000 });
        }else if(e.target.value === '50'){
            this.setState({ xpcredits: 5000 });
        }
        e.preventDefault();
    }
    componentWillReceiveProps(nextProps) {
        this.setState({
            alltransacs:nextProps.alltransactions,
            alluserdata:nextProps.userdata,
            loggedinusername:nextProps.userdata.nickname,
            loggedinuserfname:nextProps.userdata.firstname,
            loggedinuseremail:nextProps.userdata.email,
        });
    }
    render() {
        return (
        <>
        <div className="container">
        <div id="mainpage" className="main_box col-md-12 p-0">
        <div className="main-content support main-content mt-3">
        <div className="leader-brd wallet">
            <div className="walletcreds mb-4 mt-4">
                <div className="text-right">
                    <div className="save-reset text-center">
                        <a type="button" className="btn btn-primary mb-2" id="modal-509828" href="#modal-container-509823" role="button" data-toggle="modal">Add Bucks</a>
                    </div>
                </div>
                <div className="buckets">
                <p>Envy Bucks</p>
                <h3 className="w-100 text-left float-left                                                    ">61900</h3>
                </div>
            </div>
        </div>
	<table className="table cashflow mt-0">
		<tbody>
			<tr className="transhead">
				<td>
				    Transaction History
				</td>
			</tr>
			<tr className="history_t">
                <td className="righthis">Description</td>
                <td className="righthis">Amount USD</td>
                <td className="righthis">Time</td>
                <td className="lefthis">IP</td>
            </tr>

            {
                this.state.alltransacs.length ? this.state.alltransacs.map((post) => (
            <tr className="history_t" key={post.uniquecode}>
                <td className="righthis"><p>{post.amount} Envy Bucks purchased For ${post.amount/100} USD</p></td>
                <td className="righthis">${post.amount/100}</td>
                <td className="righthis">{post.time}</td>
                <td className="lefthis">{post.ip}</td>
            </tr>
                ))
                :<tr className="history_t"><td className="righthis"><p>NO TRANSACTIONS</p></td></tr>
            }
			
        </tbody>
	</table>
	
    </div>
    </div>
    </div>
    <div className="modal fade signup" id="modal-container-509823" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
    <button type="button" className="close" id="close" data-dismiss="modal">&times;</button>
    <div className="logo-image text-center">
    <img class="img-fluid footer_logo" src="/assets/img/games/foot-logo.png" alt=""></img>
        {/* <img src="https://res.cloudinary.com/dnv0dij0y/image/upload/v1574922448/logo/tcgaminglogo_l1jssw.png" alt="" className="img-fluid" /> */}
    </div>
    <div className="login team modal-dialog" role="document">
        <div className="login modal-content rob">
            <div className="login modal-header text-center">
                <h5 className="modal-titl text-center w-100" id="myModalLabel">ADD Envy Bucks</h5>
            </div>
        <div className="modal-body d-flex">
            <div className="col-md=12">
                <script src="https://js.stripe.com/v3/"></script>
                <div className="full" id="walletonee">
                <div className="form-row">
                    <div className="amtt">
                        <p className="frontamt txtamt" id="xrcredits">
                        $ USD
                        </p>
                        {/* <p className="x"></p> */}
                        <p className="frontamt txtamt" id="xrcredits">
                        Envy Bucks
                        </p>
                    </div>
                <div className="amtt">
                    <select className="frontamt form-control" id="xpdollar" name="xpdollar" onChange={(e)=>this.dataChange(e)}> 
                    <option value="10">$10</option>
                    <option value="20">$20</option>
                    <option value="50">$50</option>
                    </select>
                    {/* <p className="x">X</p> */}
                    <p className="frontamt" id="xrcredits">
                    <input className="form-control" type="text" id="xpcredits" value={this.state.xpcredits} readOnly />
                    <input className="form-control" type="hidden" id="loggedinusername" value={this.state.loggedinusername} readOnly />
                    <input className="form-control" type="hidden" id="loggedinuserfname" value={this.state.loggedinuserfname} readOnly />
                    <input className="form-control" type="hidden" id="loggedinuseremail" value={this.state.loggedinuseremail} readOnly />
                    <input className="form-control" type="hidden" id="creatorid" value={this.state.creatorid} readOnly />
                    </p>
                </div>
                <div className="payment-card mt-2 float-left">
                <label class="pl-0 credit-card" htmlFor="card-element">
                Credit or debit card
                </label>
                
				<StripeCheckout className="float-left"
                stripeKey="pk_test_V1XxztzpqnVCoxNWCUjGAuMm00EPPuJuA2"
                token={handleToken}
                name="ADD Envy Bucks"
                email="asmitawalia15@gmail.com"
                // xpdollar={this.state.xpdollar}
                amount = {this.state.xpcredits}
                />
                </div>
                </div>
                {/* <button className="btn btn-primary mb-2" id="addfccoins">Add Bucks</button> */}
                </div>
            </div>
        </div>
        </div>
    </div>
</div>
        </>        
        );
    }
}


const mapStateToProps = (state) => ({
    userdata: state.userDetails.data,
    alltransactions : state.transactions.data

})
export default connect(mapStateToProps)(Wallet);