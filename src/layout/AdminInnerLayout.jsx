import React, { Component } from 'react';
import AdminHeader from './AdminHeader';
import AdminFooter from './AdminFooter';
import AdminSideNavBar from './AdminSideNavBar';
// import './../../public/assets/css/adminstyle.css';
// import { ToastContainer } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

class AdminInnerLayout extends Component {
    render() {
        return (
            <>
                <AdminHeader/>
                <div id="wrapper">
                    <AdminSideNavBar />
                            {this.props.children}
                </div>
                <AdminFooter/>
            </>
        );
    }
}

export default AdminInnerLayout;