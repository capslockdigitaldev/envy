import React, { Component } from 'react';
import { connect } from 'react-redux';
import {getAllTourMatchs} from './../store/actions/tournamentsActions';
import Pagination from './../store/helpers/Pagination';
import {gameName , gamePlatformIcons , gamePlatformName}  from './../store/helpers/common';
import {NavLink } from 'react-router-dom';

class allTournamentandmatches extends Component {
    constructor(props) {
        super(props);
        this.state = {
            totaltours: '',
            totalmatches:'',
            sortOrderBy: 'asc',
            pageOfTours: [],
            pageOfMatches: [],
        };
    }
    componentDidMount() {
        document.title = 'tournaments';
        if(localStorage.getItem('game') && localStorage.getItem('platform')){
            const game = localStorage.getItem('game');
            const platform = localStorage.getItem('platform');
            this.props.dispatch(getAllTourMatchs(game,platform));
        }else{
            const game = 0;
            const platform = 0;
            this.props.dispatch(getAllTourMatchs(game,platform));
        }
    }
    showAll = ()=>{
        console.log('yayayyayaya')
        localStorage.clear('game');
        localStorage.clear('platform');
    window.location.reload();
    }
    sortOrdertour = (field, order = 'asc') => {

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

            if (order == 'desc') {
                comparison = comparison * -1;
                this.setState({ sortOrderBy: 'asc' });
            } else {
                this.setState({ sortOrderBy: 'desc' });
            }
            return comparison;
        });
        this.setState({ pageOfTours: this.state.totaltours.slice(0, 10) });
    };
    sortOrdermatch = (field, order = 'asc') => {

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

            if (order == 'desc') {
                comparison = comparison * -1;
                this.setState({ sortOrderBy: 'asc' });
            } else {
                this.setState({ sortOrderBy: 'desc' });
            }
            return comparison;
        });
        this.setState({ pageOfMatches: this.state.totalmatches.slice(0, 10) });
    };
    onChangetoursPage = (pageOfTours) => {
        this.setState({ pageOfTours: pageOfTours });
    }
    onChangematchesPage = (pageOfMatches) => {
        this.setState({ pageOfMatches: pageOfMatches });
    }
    componentWillReceiveProps(nextProps) {
        this.setState({
            totaltours: nextProps.alltournamentsdata,
            totalmatches:nextProps.allmatchesdata
        });
    }
    render() {
        const gamenam = localStorage.getItem('game');
            const platformnam = localStorage.getItem('platform');
        return (
    <div className="container">
            
        <div className="games-list">
    <div className="main-content">
        {
           gamenam ||  platformnam?
        <div className="row mt-5">
        <div className="showdet">
        <p>Selected Game:-</p>
        <div className="vals"><p>{gameName(gamenam)}</p></div>
        </div>
        <div className="showdet">
        <p>Selected Platform:-</p>
        <div className="vals"><p>{gamePlatformName(platformnam)}</p></div>
        </div>
        <div className="showdet">
        <p>Change Game/Platform:-</p>
        <NavLink to="/games"><div className="vals" id="valsbtn"><p>Change</p></div></NavLink> 
        </div>
        <div className="showdet">
        <p>Show All:-</p>
        <div className="vals" id="valsbtn" onClick={()=>this.showAll()}><p>Show All</p></div>  
        </div>
        </div> :''
        }
         
            <ul className="nav nav-tabs">
                        <li className="nav-item">
                        <a className="nav-link active" href="#tab1" data-toggle="tab">TOURNAMENTS</a>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link" href="#tab2" data-toggle="tab">LADDER MATCHES</a>
                        </li>
            </ul>
            <div className="tab-content">
                <div className="tab-pane active" id="tab1">
                        <div className="player-rank">
                        
                        <div className="row games-list entry-fee">
                            <table className="table entry-fee mt-3 mb-5">
                            
                                <thead>
                                <tr className="new_list_tournament only_headings list_game leadehead">
                                    <th className="border-top-0">CONTESTS NAME&nbsp;&nbsp;<a href="javascript:void(0)" onClick={() => this.sortOrdermatch('tour_name', this.state.sortOrderBy)} ><i className="fa fa-sort"  ></i></a></th>
                                    <th className="border-top-0">ENTRIES&nbsp;&nbsp;<a href="javascript:void(0)" onClick={() => this.sortOrdermatch('joined', this.state.sortOrderBy)} ><i className="fa fa-sort"  ></i></a></th>
                                    <th className="border-top-0">ENTRY FEE&nbsp;&nbsp;<a href="javascript:void(0)" onClick={() => this.sortOrdermatch('price', this.state.sortOrderBy)} ><i className="fa fa-sort"  ></i></a></th>
                                    <th className="border-top-0">PRIZE POOL&nbsp;&nbsp;<a href="javascript:void(0)" onClick={() => this.sortOrdermatch('prizepool', this.state.sortOrderBy)} ><i className="fa fa-sort"  ></i></a></th>
                                    <th className="border-top-0">LIVE</th>
                                    <th className="border-top-0">ENTRY CLOSE IN</th>
                                    {/* <th></th> */}


                                    </tr>
                                    </thead>
                                    
                                    <tbody>
                                        {
                                this.state.totaltours.length > 0 ? this.state.pageOfTours.map((post) => (
                                    <tr key={post.tour_id}>
                                        <td  className="floatname">{post.tour_name}-<img className="laddermatchlogo" src={gamePlatformIcons(post.platform)} alt = "" /></td>
                                        <td>{post.joined}</td>
                                        <td><i className="fas fa-coins mr-4"></i>{post.price}Envy Bucks</td>
                                        <td>${post.prizepool}</td>
                                        <td>{post.tour_start_date}</td>
                                        <td>{post.reg_close_date}</td>
                                        <td><NavLink to = {`/single-tournament/${post.tour_id}`}>Join</NavLink></td>
                                    </tr>
                                    )) :<tr><td colSpan="7" align="center"><p>No matches</p></td></tr>
                            }  
                                    </tbody>
                            </table>

                            </div>
                            <div>
                            &nbsp;{this.state.totaltours.length > 0 ? <Pagination items={this.state.totaltours} onChangePage={this.onChangetoursPage} /> : ''}
                        </div>
                    </div>
                </div>  
                <div className="tab-pane" id="tab2">
                    <div className="player-rank">
                        <div className="row games-list">
                            <table className="table mt-3 mb-5">
                            <thead>
                                        <tr className="new_list_tournament only_headings list_game leadehead">
                                                    <th>Game&nbsp;&nbsp;<a href="javascript:void(0)" onClick={() => this.sortOrdermatch('game', this.state.sortOrderBy)} ><i className="fa fa-sort"  ></i></a></th>
                                                    <th>Platform&nbsp;&nbsp;<a href="javascript:void(0)" onClick={() => this.sortOrdermatch('platform', this.state.sortOrderBy)} ><i className="fa fa-sort"  ></i></a></th>
                                                    <th>Created By&nbsp;&nbsp;<a href="javascript:void(0)" onClick={() => this.sortOrdermatch('player1username', this.state.sortOrderBy)} ><i className="fa fa-sort"  ></i></a></th>
                                                    <th>Created On&nbsp;&nbsp;<a href="javascript:void(0)" onClick={() => this.sortOrdermatch('date', this.state.sortOrderBy)} ><i className="fa fa-sort"  ></i></a></th>
                                                    <th>Join</th>
                                        </tr> 
                            </thead> 
                            <tbody>
                                        {
                                this.state.totalmatches.length > 0 ? this.state.pageOfMatches.map((post) => (
                                    <tr key={post.match_id} className="new_list_tournament list_game rob ">
                                        <td>{gameName(post.game)}</td>
                                        <td><img className="laddermatchlogo" src={gamePlatformIcons(post.platform)} alt = "" /></td>
                                        <td>{post.player1username}</td>
                                        <td>{post.date}</td>
                                        <td><NavLink to = {`/single-match/${post.match_id}`}>Join</NavLink></td>
                                    </tr>
                                    )) :<tr><td colSpan="7" align="center"><p>No matches</p></td></tr>} 
                        </tbody>
                        </table> 
                        </div>
                        <div>
                            &nbsp;{this.state.totalmatches.length > 0 ? <Pagination items={this.state.totalmatches} onChangePage={this.onChangematchesPage} /> : ''}
                        </div>
                    </div>
                </div>
            </div>
            
            
        </div>
        
    </div>	
    </div>   
        );
    }
}

const mapStateToProps = (state) => ({
    alltournamentsdata: state.tournaments.tourdata,
    allmatchesdata : state.tournaments.matchdata,
})
export default connect(mapStateToProps)(allTournamentandmatches);