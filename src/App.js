import React, { Component } from 'react';
import { Router, Switch } from 'react-router-dom';
import { history } from './store/helpers/history';
import EmptyLayout from './layout/EmptyLayout';
import InnerLayout from './layout/InnerLayout';
import AdminInnerLayout from './layout/AdminInnerLayout';
import { RouteWithLayout } from './layout/RouteWithLayout';
import main from './components/main';
import dashboard from './components/dashboard';
import leaderboard from './components/leaderboard';
import games from './components/games';
import allmatches from './components/allmatches';
import singlematch from './components/singlematch';
import singlegame from './components/singlegame';
import profile from './components/profile';
import contact from './components/contact';
import aboutus from './components/aboutus';
import faq from './components/faq';
import support from './components/support';
import team from './components/team';
import tournaments from './components/tournaments';
import singletournament from './components/singletournament';
import allTournamentandmatches from './components/allTournamentandmatches';
import events from './components/events';
import Login from './components/Login';
import Signup from './components/Signup';
import Wallet from './components/Wallet';
import Rewards from './components/Rewards';
import SingleReward from './components/SingleReward';
import SupportTickets from './components/SupportTickets';
import singleSticket from './components/singleSticket';
import singleTeam from './components/singleTeam';
import allActiveMatches from './components/allActiveMatches';
import cart from './components/cart';
import checkout from './components/checkout';
import stripeTest from './components/stripeTest';
import userOrders from './components/userOrders';
import SingleEvent from './components/SingleEvent';
import Transactions from './admincomponents/Transactions';
import AddEvent from './admincomponents/AddEvent';
import AdminProfile from './admincomponents/AdminProfile';
import AllOrders from './admincomponents/AllOrders';
import AddTournaments from './admincomponents/AddTournaments';
import AllProducts from './admincomponents/AllProducts';
import AllTeams from './admincomponents/AllTeams';
import AllUsers from './admincomponents/AllUsers'; 
import Dashboard from './admincomponents/Dashboard';
import LadderMatches from './admincomponents/LadderMatches';
import LiveChat from './admincomponents/LiveChat';
import Notifications from './admincomponents/Notifications';
import Seo from './admincomponents/Seo';
import AdminSupportTickets from './admincomponents/AdminSupportTickets';
import Tournaments from './admincomponents/Tournaments';
import HttpsRedirect from 'react-https-redirect';
import parseJwt  from './store/helpers/common';
import My404Component from './components/My404Component';

 class App extends Component {
  constructor(props) {
    super(props);
      this.state = {
        role:'',
    }
  }
  componentDidMount() {
    if (localStorage.getItem('token')) {
        const currdetails = parseJwt(localStorage.getItem('token'));
        const role = currdetails.rol;
        this.setState({ role: role});
    }else{
      this.setState({ role: 'loggedout'});
    }
}
  render() {
const{role} = this.state;
    return (
      <HttpsRedirect>
      <Router history={history} >
        {/* <Switch>
          <RouteWithLayout exact={true} layout={InnerLayout} path="/" component={main} />
          <RouteWithLayout exact={true} layout={InnerLayout} path="" component={main} />
          <RouteWithLayout layout={EmptyLayout} path="/login" component={Login} />
          <RouteWithLayout layout={EmptyLayout} path="/Signup" component={Signup} />
          <RouteWithLayout layout={InnerLayout} path='*'  component={My404Component} />
          </Switch> */}
          {
            role === 'user'?
            <Switch>
              <RouteWithLayout exact={true} layout={InnerLayout} path="/" component={main} />
          <RouteWithLayout layout={InnerLayout} path="/dashboard" component={dashboard} />
          <RouteWithLayout layout={InnerLayout} path="/user-wallet" component={Wallet} />
          <RouteWithLayout layout={InnerLayout} path="/leaderboard" component={leaderboard} />
          <RouteWithLayout layout={InnerLayout} path="/games" component={games} />
          <RouteWithLayout layout={InnerLayout} path="/all-matches" component={allmatches} />
          <RouteWithLayout layout={InnerLayout} path="/single-match/:id" component={singlematch} />
          <RouteWithLayout layout={InnerLayout} path="/single-game/:id" component={singlegame} />
          <RouteWithLayout layout={InnerLayout} path="/user-profile" component={profile} />
          <RouteWithLayout layout={InnerLayout} path="/contact-us" component={contact} />
          <RouteWithLayout layout={InnerLayout} path="/about-us" component={aboutus} />
          <RouteWithLayout layout={InnerLayout} path="/user-faq" component={faq} />
          <RouteWithLayout layout={InnerLayout} path="/user-support" component={support} />
          <RouteWithLayout layout={InnerLayout} path="/teams" component={team} />
          <RouteWithLayout layout={InnerLayout} path="/all-tournaments" component={tournaments} />
          <RouteWithLayout layout={InnerLayout} path="/single-tournament/:id" component={singletournament} />
          <RouteWithLayout layout={InnerLayout} path="/events" component={events} />
          <RouteWithLayout layout={InnerLayout} path="/event/:id" component={SingleEvent} />
          <RouteWithLayout layout={InnerLayout} path="/all-tournaments-matches" component={allTournamentandmatches} />
          <RouteWithLayout layout={InnerLayout} path="/rewards" component={Rewards} />
          <RouteWithLayout layout={InnerLayout} path="/reward/:id" component={SingleReward} />
          <RouteWithLayout layout={InnerLayout} path="/support-tickets" component={SupportTickets} />
          <RouteWithLayout layout={InnerLayout} path="/support-ticket/:id" component={singleSticket} />
          <RouteWithLayout layout={InnerLayout} path="/team/:teamname/:id" component={singleTeam} />
          <RouteWithLayout layout={InnerLayout} path="/active-matches" component={allActiveMatches} />
          <RouteWithLayout layout={InnerLayout} path="/my-cart" component={cart} />
          <RouteWithLayout layout={InnerLayout} path="/checkout" component={checkout} />
          <RouteWithLayout layout={InnerLayout} path="/stripetest" component={stripeTest} />
          <RouteWithLayout layout={InnerLayout} path="/my-orders" component={userOrders} />
          <RouteWithLayout layout={InnerLayout} path='*' component={My404Component} />

          </Switch>
          :role === 'admin'?
          <Switch>
            <RouteWithLayout exact={true} layout={InnerLayout} path="/" component={main} />
          <RouteWithLayout layout={AdminInnerLayout} path="/admin-transactions" component={Transactions} />
          <RouteWithLayout layout={AdminInnerLayout} path="/admin-add-event" component={AddEvent} />
          <RouteWithLayout layout={AdminInnerLayout} path="/admin-profile" component={AdminProfile} />
          <RouteWithLayout layout={AdminInnerLayout} path="/admin-all-orders" component={AllOrders} />
          <RouteWithLayout layout={AdminInnerLayout} path="/admin-add-tournaments" component={AddTournaments} />
          <RouteWithLayout layout={AdminInnerLayout} path="/admin-all-products" component={AllProducts} />
          <RouteWithLayout layout={AdminInnerLayout} path="/admin-all-teams" component={AllTeams} />
          <RouteWithLayout layout={AdminInnerLayout} path="/admin-all-users" component={AllUsers} />
          <RouteWithLayout layout={AdminInnerLayout} path="/admin-dashboard" component={Dashboard} />
          <RouteWithLayout layout={AdminInnerLayout} path="/admin-all-ladder-matches" component={LadderMatches} />
          <RouteWithLayout layout={AdminInnerLayout} path="/admin-live-chat" component={LiveChat} />
          <RouteWithLayout layout={AdminInnerLayout} path="/admin-notifications" component={Notifications} />
          <RouteWithLayout layout={AdminInnerLayout} path="/admin-seo" component={Seo} />
          <RouteWithLayout layout={AdminInnerLayout} path="/admin-support-tickets" component={AdminSupportTickets} />
          <RouteWithLayout layout={AdminInnerLayout} path="/admin-tournaments" component={Tournaments} />
          <RouteWithLayout layout={AdminInnerLayout} path="/admin-seo" component={Seo} />
          <RouteWithLayout layout={AdminInnerLayout} path='*' component={My404Component} />
          </Switch>:role === 'loggedout'?
          <Switch>
            <RouteWithLayout exact={true} layout={InnerLayout} path="/" component={main} />
          <RouteWithLayout layout={InnerLayout} path="/dashboard" component={dashboard} />
          <RouteWithLayout layout={InnerLayout} path="/leaderboard" component={leaderboard} />
          <RouteWithLayout layout={InnerLayout} path="/games" component={games} />
          <RouteWithLayout layout={InnerLayout} path="/all-matches" component={allmatches} />
          <RouteWithLayout layout={InnerLayout} path="/single-match/:id" component={singlematch} />
          <RouteWithLayout layout={InnerLayout} path="/single-game/:id" component={singlegame} />
          <RouteWithLayout layout={InnerLayout} path="/contact-us" component={contact} />
          <RouteWithLayout layout={InnerLayout} path="/about-us" component={aboutus} />
          <RouteWithLayout layout={InnerLayout} path="/user-faq" component={faq} />
          <RouteWithLayout layout={InnerLayout} path="/user-support" component={support} />
          <RouteWithLayout layout={InnerLayout} path="/teams" component={team} />
          <RouteWithLayout layout={InnerLayout} path="/all-tournaments" component={tournaments} />
          <RouteWithLayout layout={InnerLayout} path="/single-tournament/:id" component={singletournament} />
          <RouteWithLayout layout={InnerLayout} path="/events" component={events} />
          <RouteWithLayout layout={InnerLayout} path="/event/:id" component={SingleEvent} />
          <RouteWithLayout layout={InnerLayout} path="/all-tournaments-matches" component={allTournamentandmatches} />
          <RouteWithLayout layout={InnerLayout} path="/rewards" component={Rewards} />
          <RouteWithLayout layout={InnerLayout} path="/reward/:id" component={SingleReward} />
          <RouteWithLayout layout={InnerLayout} path="/active-matches" component={allActiveMatches} />
          <RouteWithLayout layout={InnerLayout} path="/my-cart" component={cart} />
          <RouteWithLayout layout={InnerLayout} path='*'  component={My404Component} />
          </Switch>:''
          }
          
          
          
        
      </Router>
      </HttpsRedirect>
    );
  }
}

export default App;