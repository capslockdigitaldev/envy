import React, { Component } from 'react';
import { NavLink,withRouter } from 'react-router-dom';
class AdminSideNavBar extends Component {

    render() {
        return (
            <>
                <div className="adminleftside" role="navigation">
                    <div className="sidebar-collapse">
                        <ul className="admin-side-menu">
                            <li className="admin-header">
                                <div className="dropdown profile-element">

                                    <img className="propic" src="https://tcgaming.gg/wp-content/uploads/2019/12/man-holding-black-game-controller-133579-2-scaled.jpg" alt="" />
                                    <span className="block m-t-xs font-bold">Welcome Team Envy Admin</span>
                                </div>
                                
                            </li>
                            <div className="menu-admin-menu-container">
                                <ul class="sidemenu">
                                <li><NavLink to="/admin-dashboard"><i className="fas fa-tachometer-alt"></i> Dashboard</NavLink></li>
                                <li><NavLink to="/admin-transactions"><i className="fas fa-file-invoice-dollar"></i> Transactions</NavLink></li>
                                <li><NavLink to="/admin-all-orders"><i className="fas fa-cart-arrow-down"></i> All Orders</NavLink></li>
                                <li><NavLink to="/admin-all-users"><i className="fas fa-user"></i> Users</NavLink></li>
                                <li><NavLink to="/admin-support-tickets"><i className="fas fa-headset"></i> Support Tickets</NavLink></li>
                                <li><NavLink to="/admin-all-ladder-matches"><i className="fas fa-trophy"></i> Ladder Matches</NavLink></li>
                                <li><NavLink to="/admin-tournaments"><i className="fas fa-trophy"></i> Tournaments</NavLink></li>
                                <li><NavLink to="/admin-add-tournaments"><i className="fas fa-gamepad"></i> Add Tournament</NavLink></li>
                                <li><NavLink to="/admin-all-teams"><i className="fas fa-users"></i> Teams</NavLink></li>
                                <li><NavLink to="/admin-tournaments"><i className="fas fa-comments"></i> Live Chat</NavLink></li>
                                <li><NavLink to="/admin-add-event"><i className="far fa-calendar-alt"></i> Add Event</NavLink></li>
                                <li><NavLink to="/admin-add-event"><i className="far fa-calendar-alt"></i> All Events</NavLink></li>
                                <li><NavLink to="/admin-seo"><i className="fab fa-searchengin"></i> SEO</NavLink></li>
                                <li><NavLink to="/admin-seo"><i className="fas fa-chart-pie"></i> Analytics</NavLink></li>
                                <li><NavLink to="/admin-all-products"><i className="fab fa-product-hunt"></i> All Products</NavLink></li>
                                <li><NavLink to="/admin-all-products"><i className="fas fa-fire-alt"></i> Custom Modules</NavLink></li>
                                <li><NavLink to="/admin-profile"><i className="fas fa-user-cog"></i> Profile</NavLink></li>
                                <li><NavLink to="/admin-profile"><i className="fas fa-question-circle"></i> Help</NavLink></li>
                                <li><NavLink to="/">Settings</NavLink></li>
                                <li><NavLink to="/"><i className="fas fa-bell"></i> Notifications</NavLink></li>
                            </ul>
                            </div>

                        </ul>
                    </div>
                </div>

            </>
        );
    }
}

export default withRouter(AdminSideNavBar);


