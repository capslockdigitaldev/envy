import React, { Component } from 'react';
import { connect } from 'react-redux';
import {userData} from './../store/helpers/common';
class dashboard extends Component {
    render() {
		let test;
		userData('yyy', 'nickname').then(function(data) {
			console.error("%c %s", "font-size:50px; color:olive;","response data-- ", data);
			return test = data;
		});

		console.log("%c %s", "font-size:50px; color:aqua;",test);
        return (
            <>
			<div className="container">
<div id="mainpage" className="main_box col-md-12 p-0">
		<div className="main-content support frontline text-left mt-3 pt-4">
		
			<h2 className="commonheading">MY DASHBOARD</h2>
		
		{/* <div className="main-content frontline mt-2">
			<div className="leader-brd">
				<h3 className="mb-0">Welcome 
				                </h3>
			</div>
		</div> */}
	<div className="">
	<h3 className="text-center w-100 py-4 float-left">WELCOME - ZACK LEE</h3>
		
			    <div className="tcs">
			    <div className="tcthings text-center">
                 <div className="tcthingsone">
			            <h3>XP &nbsp;<div className="tooltipp"><i className="fa fa-info-circle" aria-hidden="true"></i>
                        <span className="tooltipptext">XP's are the Experience Points, User gets XP's When he/she wins or particiate in a ladder match or tournament.</span>
                        </div></h3>
			        </div>			        
			        <div className="tcthingstwo">
			            <h1>	<strong>0  XP</strong></h1> 
    					
			        </div>
			        <div className="tcthingsthree">
			            <a href="/games">Challenge</a>
			            </div>
			    </div>
			    <div className="tcthings text-center">
                 <div className="tcthingsone">
			            <h3>Redeemable XP &nbsp;<div className="tooltipp"><i className="fa fa-info-circle" aria-hidden="true"></i>
                                  <span className="tooltipptext">Redeemable XP's can be used to purchase rewards.</span>
                                </div></h3>
			        </div>			        
			        <div className="tcthingstwo">
			            <h1><strong>0</strong></h1> 
    					
			        </div>
			        <div className="tcthingsthree">
			           <a href="/rewards">Redeem</a>
			            </div>
			    </div>
			    <div className="tcthings text-center">
                 <div className="tcthingsone">
			            <h3>Envy Bucks</h3>
			        </div>			        
			        <div className="tcthingstwo">
			            <h1><strong>0</strong></h1> 
    				
			        </div>
			        <div className="tcthingsthree">
			        <a id="modal-509828" href="#modal-container-509823" role="button" data-toggle="modal">Add</a>
			            </div>
			    </div>
			     <div className="tcthings text-center">
                 <div className="tcthingsone">
			            <h3>Prime Membership</h3>
			        </div>			        
			        <div className="tcthingstwo">
			            <h1><strong>Inactive</strong></h1> 
			        </div>
			        <div className="tcthingsthree">
			      <a href="JavaScript:void(0);" disable="true">Add Frame</a>
			            </div>
			    </div>
			    </div>
			
		<div className="fullwidthback recent my-5">
            <div className="main-content frontline">
                <div className="leader-brd">
                    <h3 className="mb-0">Recent Notification</h3>
                </div>
            </div>
    	
    		            <div className="pagenav">
                        <div className="alignleft"></div>
                        <div className="alignright"><a href="page/2/index.html" >See More</a></div>
                        </div>
    		
    	</div>
    	<div className="fullwidthback recent mr-0 my-5">
            <div className="main-content frontline">
                <div className="leader-brd">
                    <h3 className="mb-0">Recent Invites</h3>
                </div>
            </div>
            <table className="table cashflow mt-0">
                <tbody></tbody>
            </table>
    	</div>
	
  </div>
 

</div>
</div>
</div>
            </>
        );
    }
}

export default connect()(dashboard);