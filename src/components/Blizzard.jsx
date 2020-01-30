import React, { Component } from 'react';
import { withRouter } from 'react-router'
import { OauthSender } from 'react-oauth-flow';
import axios from 'axios';
class Blizzard extends Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         token: '',
    //     }
    // }
    // componentDidMount() {
    //         let request;
    //         request = {
    //             method: 'POST',
    //             url: `https://xrsports.gg/team/public/signup-blizzard`,
    //             headers: { 'Content-Type': 'application/json'},
    //           };
    //         axios(request).then( (response) => {
    //             // console.log(response.data)
    //           this.setState({
    //             token: response.data,
    //           });
    //         })
    //         .catch( (error) => {
    //           console.log(error);
    //         });
    // }
    render() {
        // const {token} = this.state;
        return (
          <OauthSender
          authorizeUrl="https://us.battle.net/oauth/authorize"
          clientId="c9399694dda34650b09dce597a2cc2ba"
          redirectUri="http://localhost:3000/games/"
          state={{ from: '/settings' }}
          render={({ url }) => <a href={url}>Login Using Blizzard</a>}
        />
        );
    }
}

export default withRouter(Blizzard);