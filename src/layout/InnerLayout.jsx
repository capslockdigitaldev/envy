import React, { Component } from 'react';
import Header from './Header';
import Footer from './Footer';
import SideNavBar from './SideNavBar';
// import { ToastContainer } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

class InnerLayout extends Component {
    render() {
        return (
            <>
                <Header />
                <div id="page_container">
                    <SideNavBar />
                    <div className="main_container">
                        <div className="page_content">
                            {this.props.children}
                        </div>
                    </div>
                </div>
                <Footer/>
            </>
        );
    }
}

export default InnerLayout;