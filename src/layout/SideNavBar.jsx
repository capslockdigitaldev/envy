import React, { Component } from 'react';
import { NavLink, withRouter } from 'react-router-dom';

class SideNavBar extends Component {

    render() {
        const activeUrl = this.props.location.pathname;
        return (
            <>
                <aside id="aside">
                    <ul className="nav">
                        <li className={activeUrl === '/dashboard' ? 'active' : ''}><NavLink to="/dashboard" ><i className="icon-home icons"></i><span>Dashboard</span></NavLink></li>
                        <li className={activeUrl === '/buy-number' ? 'active' : ''} ><NavLink to="/buy-number" ><i className="icon-equalizer icons"></i><span>Buy Number</span></NavLink></li>
                        <li className={activeUrl === '/extensions' ? 'active' : ''} ><NavLink to="/extensions"><i className="icon-people icons"></i><span>Teams/User</span></NavLink></li>
                        <li className={activeUrl === '/phone-system' ? 'active' : ''} ><NavLink to="/phone-system"><i className="icon-phone icons"></i><span>Phone System</span></NavLink></li>
                        <li className={activeUrl === '/contacts' ? 'active' : ''} ><NavLink to="/contacts"><i className="icon-notebook icons"></i><span>Contacts</span></NavLink></li>
                        <li className={activeUrl === '/sms' ? 'active' : ''} ><NavLink to="/sms"><i className="icon-notebook icons"></i><span>SMS/MMS</span></NavLink></li>
                    </ul>
                </aside>
            </>

        );
    }
}

export default withRouter(SideNavBar);