import React, { Component } from 'react';
// import '@progress/kendo-theme-default/dist/all.css';
import { Router, Switch } from 'react-router-dom';
import { history } from './store/helpers/history';
import EmptyLayout from './layout/EmptyLayout';
import InnerLayout from './layout/InnerLayout';
import { RouteWithLayout } from './layout/RouteWithLayout';
import login from './components/login';
import dashboard from './components/dashboard';


 class App extends Component {
  render() {
    return (
      <Router history={history} >
        <Switch>
          <RouteWithLayout exact={true} layout={EmptyLayout} path="/" component={login} />
          {/* <RouteWithLayout layout={EmptyLayout} path="/signup" component={Signup} />
          <RouteWithLayout layout={EmptyLayout} path="/Set-password/token=:id" component={SetPassword} /> */}
          <RouteWithLayout layout={InnerLayout} path="/dashboard" component={dashboard} />
          {/* <RouteWithLayout layout={InnerLayout} path="/buy-number" component={BuyNumber} />
          <RouteWithLayout layout={InnerLayout} path="/extensions" component={Extensions} />
          <RouteWithLayout layout={InnerLayout} path="/support/:id" component={Support} /> */}
          {/* <RouteWithLayout layout={InnerLayout} path="/trial" component={Trial} /> */}
          {/* <RouteWithLayout layout={InnerLayout} path="/team" component={TeamsInner} />
          <RouteWithLayout layout={InnerLayout} path="/buy-did-number" component={BuyNumberInner} />
          <RouteWithLayout layout={InnerLayout} path="/reports" component={Reports} />
          <RouteWithLayout layout={InnerLayout} path="/live-calls" component={LiveCalls} />
          <RouteWithLayout layout={InnerLayout} path="/transactions" component={Transactions} />
          <RouteWithLayout layout={InnerLayout} path="/phone-system" component={PhoneSystem} />
          <RouteWithLayout layout={InnerLayout} path="/teams" component={Teams} />
          <RouteWithLayout layout={InnerLayout} path="/sms" component={SmsMms} />
          <RouteWithLayout layout={InnerLayout} path="/contacts" component={Contacts} />
          <RouteWithLayout layout={InnerLayout} path="" component="" /> */}

        </Switch>
      </Router>
    );
  }
}

export default App;