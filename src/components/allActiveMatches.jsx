import React, { Component } from 'react';
import { connect } from 'react-redux';
import Pagination from './../store/helpers/Pagination';
import {NavLink } from 'react-router-dom';
import {allActiveMatch} from './../store/actions/matchActions';
import parseJwt , {gameName , gamePlatformIcons}  from './../store/helpers/common';
import SimpleReactValidator from 'simple-react-validator';

class allActiveMatches extends Component {
    
    constructor(props) {
        super(props);
        this.matchValidator = new SimpleReactValidator();
        this.state = {
            totalItems: '',
            sortOrderBy: 'asc',
            pageOfItems: [],
            creator:'',
            currid:''
        };
    }
    componentDidMount() {
        document.title = 'match';
        this.props.dispatch(allActiveMatch());
        if (localStorage.getItem('token')) {
            const currdetails = parseJwt(localStorage.getItem('token'));
            const currid = currdetails.sub;
            this.setState({ currid: currid});
        }

    }
    sortOrder = (field, order = 'asc') => {

        this.state.totalItems.sort((a, b) => {
            let first = typeof a[field] === 'number' ? a[field] : a[field].toUpperCase();
            let last = typeof b[field] === 'number' ? b[field] : b[field].toUpperCase();
            let comparison = 0;
            if (first < last) {
                comparison = -1;
            }

            if (first > last) {
                comparison = 1;
            }

            if (order === 'desc') {
                comparison = comparison * -1;
                this.setState({ sortOrderBy: 'asc' });
            } else {
                this.setState({ sortOrderBy: 'desc' });
            }
            return comparison;
        });
        this.setState({ pageOfItems: this.state.totalItems.slice(0, 10) });
    };
    onChangePage = (pageOfItems) => {
        this.setState({ pageOfItems: pageOfItems });
    }

    componentWillReceiveProps(nextProps) {
        this.setState({
            totalItems: nextProps.allmatchesdata,
        });
    }
    render() {
        const {currid} = this.state;
        return (
      <>   
      	<div className="container">
       <div id="mainpage" className="main_box col-md-12 p-0">
        <div className="main-content support main-content mt-3">
        <div className="position-relative">
            <div className="player-rank games-list">
                    <div className="col-md-4 col-sm-4 col-xs-12 ">
                        &nbsp;{this.state.totalItems.length > 0 ? <Pagination items={this.state.totalItems} onChangePage={this.onChangePage} /> : ''}
                    </div>
                <div className="row">
                    <table className="table mb-4 mt-2">
                         <tbody>        
                        <tr className="new_list_tournament only_headings list_game leadehead">
                            <th>Game &nbsp;&nbsp;<a href="" onClick={() => this.sortOrder('game', this.state.sortOrderBy)} ><i className="fa fa-sort"  ></i></a></th>

                            <th>Platform </th>
                            <th>Created By &nbsp;&nbsp;<a href="" onClick={() => this.sortOrder('player1username', this.state.sortOrderBy)} ><i className="fa fa-sort"  ></i></a></th>
                            <th>Created On &nbsp;&nbsp;<a href="" onClick={() => this.sortOrder('date', this.state.sortOrderBy)} ><i className="fa fa-sort"  ></i></a></th>
                                <th>Join</th>
                        </tr> 
                            {
                            this.state.totalItems.length > 0 ? 
                            this.state.pageOfItems.map((post) => (
                
                                (post.player1 === currid || post.player2 === currid) && post.status === 'active'?
                                <tr key={post.match_id} className="table-secondary">
                                    <td>{gameName(post.game)}</td>
                                    <td><img className="laddermatchlogo" src={gamePlatformIcons(post.platform)} alt = "" /></td>
                                    <td>{post.player1username}</td>
                                    <td>{post.date}</td>
                                    <td><NavLink to = {`/single-match/${post.match_id}`}>Join</NavLink></td>
                                </tr>:''
                                )) 
                                :
                                <tr className="table-secondary"><td colSpan="7" align="center"><p>No matches</p></td></tr>
                            }                  
                        </tbody>   
                        </table>    
                </div>
            </div>
                    
        </div>
    
    </div>
    </div>   
    </div>
         </>
        );
    }
}
const mapStateToProps = (state) => ({
    allmatchesdata: state.match.data
})
export default connect(mapStateToProps)(allActiveMatches);