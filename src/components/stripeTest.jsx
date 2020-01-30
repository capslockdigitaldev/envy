
import React, { Component } from 'react';
import StripeCheckout from 'react-stripe-checkout';
import {CardElement, injectStripe} from 'react-stripe-elements';

import toastr from "reactjs-toastr";

function handleToken(token , addresses){
    console.log(token);
    console.log(addresses);
const tokenn = token.id;
console.log(tokenn);
    // const {creatorid,gametype, gameplatform,game,player1gamertag,player1username} = this.state;
            const request = new Request('https://xrsports.gg/team/public/user/check-stripe', {
                method: 'POST',
                body: JSON.stringify({ tokenn,addresses}),
                headers: new Headers({
                    "Content-Type": "application/json",
                    "X-Auth-Token": `${localStorage.getItem("token")}`
                  })
            })
                toastr.error('Please Update Your Gamertag',  {displayDuration:1500})
                return fetch(request).then(res => res.json())
                .then((data) => {
                    if (data.ResponseCode === '1') {
                        document.getElementById("close").click();
                        toastr.success(data.ResponseText,  {displayDuration:1500})
                    } else {
                        toastr.error(data,  {displayDuration:1500})        
                    }
                }).catch((err) => {
                    console.log(err)
                })

    }
class stripeTest extends Component {
    constructor(props) {
        super(props);
        this.state = {complete: false};
        this.submit = this.submit.bind(this);
      }
      
      
      
      async submit(ev) {
        
      
        // if (response.ok) this.setState({complete: true});
      }
    render() {
        return (
        //     <div id="mainpage" className="main_box col-md-12 p-0">
		// 	<div className="main-content contact-us mt-4">
        //     <label>
        //         Card details
        //         {/* <CardElement className="MyCardElement" style={style} /> */}
        //     </label>
        //         <StripeCheckout
        //         stripeKey="pk_test_V1XxztzpqnVCoxNWCUjGAuMm00EPPuJuA2"
        //         token={handleToken}
        //         email="asmitawalia15@gmail.com"
        //         />
		// 	</div>
	
        // </div>
        <div className="checkout">
        <p>Would you like to complete the purchase?</p>
        <CardElement />
        <button onClick={this.submit}>Purchase</button>
      </div>
        );
    }
}

// export default connect()(stripeTest);
export default injectStripe(stripeTest);