import React, { Component } from 'react';

class dashboard extends Component {
    render() {
        return (
            <>
                <section className="upper_section ext-cls-m">
                    <h4><span className="title_top">Dashboard</span></h4>
                </section>
                <section className="lower_section">
                    <div className="row"> 
                    <div className=" col-md-12">
                        <div className="dashboard-sec-1">
                            <div className="col-md-3 col-sm-6">
                                <div className="mini-stat bg-blue">
                                    <span className="mini-stat-icon"><i className="glyphicon glyphicon-sort-by-order-alt"></i></span>
                                    <div className="mini-stat-info text-right">
                                        <span className="counter">8</span>Numbers
                                        </div>
                                    <h5><a href="buy_number_inner.html" className="pull-left dash-ach">Add Number</a> <a href="buy_number.html" className="pull-right"><i className="glyphicon glyphicon-arrow-right"></i></a></h5>
                                </div>
                            </div>
                            <div className="col-md-3 col-sm-6">
                                <div className="mini-stat bg-purple">
                                    <span className="mini-stat-icon"><i className="glyphicon glyphicon-transfer"></i></span>
                                    <div className="mini-stat-info text-right">
                                        <span className="counter">10</span>Forwarding Rule
                                        </div>
                                    <h5><a href="main_forwardingrule_new.html" className="pull-left dash-ach">Add Rule </a><a href="main_forwardingrule_new.html" className="pull-right"><i className="glyphicon glyphicon-arrow-right"></i></a></h5>
                                </div>
                            </div>
                            <div className="col-md-3 col-sm-6">
                                <div className="mini-stat bg-yellow">
                                    <span className="mini-stat-icon"><i className="glyphicon glyphicon-file"></i></span>
                                    <div className="mini-stat-info text-right">
                                        <span className="counter">5</span>Contacts
                                        </div>
                                    <h5><a href="contacts.html" className="pull-left dash-ach">Add Contact</a> <a href="contacts.html" className="pull-right"><i className="glyphicon glyphicon-arrow-right"></i></a></h5>
                                </div>
                            </div>

                            <div className="col-md-3 col-sm-6">

                                <div className=" mini-stat bg-pink">
                                    <div className="row">
                                    <div className="col-md-6 col-xs-12 team-ext  text-center">
                                        <h4 className="col-md-12 no-padding">User/Extensions</h4>
                                        <span className="mini-stat-icon">20</span>
                                        <h5 className="col-md-12"><a className=" dash-ach" href="#">View </a></h5>
                                    </div>
                                    <div className="col-md-6 col-xs-12 team-ext text-center">
                                        <h4 className="col-md-12 no-padding">Teams</h4>
                                        <span className="mini-stat-icon">8</span>
                                        <h5 className="col-md-12"><a className=" dash-ach" href="#">View </a></h5>
                                    </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                            <div className="portlet">
                                <img src="assets/img/bashboard.png" alt="title" className="img-responsive center-block" />
                            </div>
                        </div>
                    </div>
                </section>
            </>
        );
    }
}

export default dashboard;