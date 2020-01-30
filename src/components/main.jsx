import React, { Component } from 'react';
import { connect } from 'react-redux';
import { NavLink} from 'react-router-dom';
class main extends Component {

    render() {
        return (

  
           
            <div className="pannel">
            <div className="container-fluid">
            <div className="row">
            <div className="fullwidth homebanner">
               <div className="container">

             <div className="dallas-empire">
            <h3>OFFICIAL <br></br>COMMUNITY GAMING<br></br> PLATFORM FOR THE</h3>
            <h1><span>DALLAS EMPIRE</span></h1>
            <div className="mt-5 mb-5">
               <img className="img-fluid" src="/assets/img/ jack.png"></img>
            </div>

            </div>  
            <div className="enter-btn float-left w-100">
            <NavLink to="/games" ><img src="assets/img/ Enter.png" alt=""/></NavLink>

            </div>
            </div>
            </div>
           <div className="fullwidthback">
            <div className="container">
            <div className="fullwidthbackground">
            <div className="fullwidth" id="topbannr">
            <div className="toes">
            <div className="fortypercent">
            <h2>Community Tournaments</h2>
            {/* <p>The TeamConnor Childhood Cancer Foundation&#8217;s mission is to raise funds for national childhood cancer research projects, to build awareness of the limited government funding for childhood cancer research, and to support patient programs.</p> */}
            <div className ="row my-4">
           <div className="col-lg-4 col-md-6 col-sm-12 p-0">
            <div className="commu-tour row tour-prizes">
                <div className="col-md-4 p-0">
                <img className="homegame1" src="https://res.cloudinary.com/dnv0dij0y/image/upload/v1576302272/homepage/fifa20asset_is9rm7.png" alt=""/>
                </div>
            <div className="col-md-8">
            <h2 className="color-white text-left"><b>3V3</b>Search and destroy 1ND</h2>
            <div className="text-left time-zone">
               <p>May 4, 3:00 AM EST</p>
               <ul className="mb-0">
                  <li>
                     <span>ENTRY/PLAYER</span>
                     <h2 className="text-center px-1 my-2 w-100">
                     10 credits
                  </h2></li>
                  <li>
                     <span>TEAM SIZE</span>
                     <h2 className="text-center px-1 my-2 w-100">1 vs 1</h2>
                  </li>
                  <li>
                     <span>SKILL LEVEL</span>
                     <h2 className="text-center px-1 my-2 w-100">ALL</h2>
                  </li>
               </ul>
               <ul>
                  <li>
                     <span>MAX TEAMS</span>
                     <h2 className="text-center px-1 my-2 w-100">
                     64
                  </h2></li>
                  <li>
                     <span>ENROLLED</span>
                     <h2 className="text-center px-1 my-2 w-100">0</h2>
                  </li>
                  <li>
                     <span>SKILL LEVEL</span>
                     <h2 className="text-center px-1 my-2 w-100">ALL</h2>
                  </li>
               </ul>
            </div>

            {/* <div className="prizess">
            <h2>PRIZE</h2>
            <div className="dollar">$700</div>
         </div> */}
         </div>
         <div className="float-right w-100">
         <a className="btn btn-primary mb-4" type="button" href="/games/">View Tournament</a>
           </div>
            </div>
           </div>


           <div className="col-lg-4 col-md-6 col-sm-12 p-0 des-id">
            <div className="commu-tour row tour-prizes">
                <div className="col-md-4 p-0">
                <img className="homegame1" src="https://res.cloudinary.com/dnv0dij0y/image/upload/v1576302272/homepage/fifa20asset_is9rm7.png" alt=""/>
                </div>
            <div className="col-md-8">
            <h2 className="color-white text-left"><b>3V3</b>Search and destroy 1ND</h2>
            <div className="text-left time-zone">
               <p>May 4, 3:00 AM EST</p>
               <ul className="mb-0">
                  <li>
                     <span>ENTRY/PLAYER</span>
                     <h2 className="text-center px-1 my-2 w-100">
                     10 credits
                  </h2></li>
                  <li>
                     <span>TEAM SIZE</span>
                     <h2 className="text-center px-1 my-2 w-100">1 vs 1</h2>
                  </li>
                  <li>
                     <span>SKILL LEVEL</span>
                     <h2 className="text-center px-1 my-2 w-100">ALL</h2>
                  </li>
               </ul>
               <ul>
                  <li>
                     <span>MAX TEAMS</span>
                     <h2 className="text-center px-1 my-2 w-100">
                     64
                  </h2></li>
                  <li>
                     <span>ENROLLED</span>
                     <h2 className="text-center px-1 my-2 w-100">0</h2>
                  </li>
                  <li>
                     <span>SKILL LEVEL</span>
                     <h2 className="text-center px-1 my-2 w-100">ALL</h2>
                  </li>
               </ul>
            </div>
         </div>
         <div className="float-right w-100">
         <a className="btn btn-primary mb-4" type="button" href="/games/">View Tournament</a>
           </div>
            </div>
           </div>
           <div className="col-lg-4 col-md-6 col-sm-12 p-0 search">
            <div className="commu-tour row tour-prizes">
                <div className="col-md-4 p-0">
                <img className="homegame1" src="https://res.cloudinary.com/dnv0dij0y/image/upload/v1576302272/homepage/fifa20asset_is9rm7.png" alt=""/>
                </div>
            <div className="col-md-8">
            <h2 className="color-white text-left"><b>3V3</b>Search and destroy 1ND</h2>
            <div className="text-left time-zone">
               <p>May 4, 3:00 AM EST</p>
               <ul className="mb-0">
                  <li>
                     <span>ENTRY/PLAYER</span>
                     <h2 className="text-center px-1 my-2 w-100">
                     10 credits
                  </h2></li>
                  <li>
                     <span>TEAM SIZE</span>
                     <h2 className="text-center px-1 my-2 w-100">1 vs 1</h2>
                  </li>
                  <li>
                     <span>SKILL LEVEL</span>
                     <h2 className="text-center px-1 my-2 w-100">ALL</h2>
                  </li>
                  
               </ul>

               <ul>
                  <li>
                     <span>MAX TEAMS</span>
                     <h2 className="text-center px-1 my-2 w-100">
                     64
                  </h2></li>
                  <li>
                     <span>ENROLLED</span>
                     <h2 className="text-center px-1 my-2 w-100">0</h2>
                  </li>
                  <li>
                     <span>SKILL LEVEL</span>
                     <h2 className="text-center px-1 my-2 w-100">ALL</h2>
                  </li>
               </ul>
            </div>

            {/* <div className="prizess">
            <h2>PRIZE</h2>
            <div className="dollar">$700</div>
         </div> */}
         </div>
         <div className="float-right w-100">
         <a className="btn btn-primary mb-4" type="button" href="/games/">View Tournament</a>
           </div>
            </div>
           </div>
            </div>
            </div>
            
         




            {/* <div className="sixtypercent">
            <a href="single-game/fifa20"><img className="homegame1" src="https://res.cloudinary.com/dnv0dij0y/image/upload/v1576302272/homepage/fifa20asset_is9rm7.png" alt=""/></a>
            <a href="single-game/rocketleague"><img className="homegame2" src="https://res.cloudinary.com/dnv0dij0y/image/upload/v1576302272/homepage/rocketleagueasset_fp2tgj.png" alt=""/></a>
            <a href="single-game/fortnite"><img className="homegame3" src="https://res.cloudinary.com/dnv0dij0y/image/upload/v1576302272/homepage/fortniteasset_ctmdwx.png" alt=""/></a>
            </div>
            <div className="fullwid">
            <img src="https://res.cloudinary.com/dnv0dij0y/image/upload/v1575906102/homepage/Tcgamingassets_3_fxru2h.png" alt=""/>
            </div> */}
            </div>

            <div className="reward-prizes pt-5">
              <h2 className="mb-4 px-4">Compete For Exclusive Rewards & Prizes</h2>

              <div className="col-md-12 p-0 xr-deliver upper ">
                 <div className="row no-gutters px-4">
                  <div className="col-lg-4 col-md-6 col-sm-12 pl-0">
                     <div className="emmpirre">
                      <img src="/assets/img/ shirt.png"></img>
                    <p>Empire Merch</p>  
                    </div>
                  </div>   
                  <div className="col-lg-4 col-md-6 col-sm-12">
                  <div className="emmpirre">
                    <img src="/assets/img/ ticket.png"></img>

                      <p>VIP Event Access</p> 
                      </div>
                  </div> 
                  <div className="col-lg-4 col-md-6 col-sm-12 pr-0">
                  <div className="emmpirre">

               <img src="/assets/img/ loot.png"></img>

                     <p>Loot</p> 
                     </div>
                  </div> 
              
                     
                 </div>
                 <hr className="float-left w-100"></hr>
                 <div className="empire-leaderboard">
                 <h2 className="mb-4 mt-2 float-left w-100">Climb the Empire Leaderboard</h2>
                <div className="row mt-5 float-left">
                <div className="col-lg-4 col-md-6 col-sm-12 mt-lg-5 mb-sm-5 white">
                     <div className="climb-ranks white">
                       <div className="climb-details d-flex">
                          <div className="anna-sthesia">
                          <img className="img-fluid mb-2" src="https://res.cloudinary.com/dnv0dij0y/image/upload/v1576302272/homepage/fifa20asset_is9rm7.png" alt=""></img>
                           <br></br><h2>Anna Sthesia</h2>
                          </div>
                      
                       <div className="float-right"><span>Rank<br></br><b>2</b></span></div>
                       
                       </div>
                       <div className="xp-earned">
                        <span className="pull-left">
                        <p>
                        3016 XP Earned
                        <br></br>
                        <small>11/25 - 12/02</small>
                        </p>
                        </span>
                        <span className="pull-right">
                         +30 <small>Credits</small>
                        </span>
                       </div>
        

                     </div>
                     <div className="float-right rank">
         <a className="btn btn-primary mb-4" type="button" href="/leaderboard/">View Profile</a>
      </div>
                    </div>   
                <div className="col-lg-4 col-md-6 col-sm-12 mb-sm-5 gold">
                <div className="climb-ranks gold">
                <div className="climb-details d-flex">
                          <div className="anna-sthesia">
                          <img className="img-fluid mb-2" src="https://res.cloudinary.com/dnv0dij0y/image/upload/v1576302272/homepage/fifa20asset_is9rm7.png" alt=""></img>
                           <br></br><h2>Anna Sthesia</h2>
                          </div>
                      
                       <div className="float-right"><span>Rank<br></br><b>1</b></span></div>
                       
                       </div>
                       <div className="xp-earned">
                        <span className="pull-left">
                        <p>
                        3016 XP Earned
                        <br></br>
                        <small>11/25 - 12/02</small>
                        </p>
                        </span>
                        <span className="pull-right">
                         +30 <small>Credits</small>
                        </span>
                       </div>
    

                     </div>
                     <div className="float-right rank">
         <a className="btn btn-primary mb-4" type="button" href="/leaderboard/">View Profile</a>
      </div>
                    </div> 
                <div className="col-lg-4 col-md-6 col-sm-12 mt-5 mb-sm-5 orange">
                <div className="climb-ranks orange">
                <div className="climb-details d-flex">
                          <div className="anna-sthesia">
                          <img className="img-fluid mb-2" src="https://res.cloudinary.com/dnv0dij0y/image/upload/v1576302272/homepage/fifa20asset_is9rm7.png" alt=""></img>
                           <br></br><h2>Anna Sthesia</h2>
                          </div>
                      
                       <div className="float-right"><span>Rank<br></br><b>3</b></span></div>
                       
                       </div>
                       <div className="xp-earned">
                        <span className="pull-left">
                        <p>
                        3016 XP Earned
                        <br></br>
                        <small>11/25 - 12/02</small>
                        </p>
                        </span>
                        <span className="pull-right">
                         +30 <small>Credits</small>
                        </span>
                       </div>
      
                     </div>
                     <div className="float-right rank">
         <a className="btn btn-primary mb-4" type="button" href="/leaderboard/">View Profile</a>
      </div>
                    </div>  
                </div>

                 </div>
             </div>
            </div>

            <div className="code-ladder py-4 px-4">
             {/* <h2 className="mb-4">Join a CoD Ladder Today - <b>FREE</b></h2> */}
            <div className="row no-gutters">

               <div className="col-md-12">
                <img src="/assets/img/destroy.png"></img>

               </div>
                {/* <div className="col-lg-3 col-md-6 col-sm-12 pl-0">
         <img className="" src="https://res.cloudinary.com/dnv0dij0y/image/upload/v1576302272/homepage/rocketleagueasset_fp2tgj.png" alt=""/>

                </div>
                <div className="col-lg-3 col-md-6 col-sm-12">
               <img className="" src="https://res.cloudinary.com/dnv0dij0y/image/upload/v1576302272/homepage/rocketleagueasset_fp2tgj.png" alt=""/>

                </div>
                <div className="col-lg-3 col-md-6 col-sm-12">
                <img className="" src="https://res.cloudinary.com/dnv0dij0y/image/upload/v1576302272/homepage/rocketleagueasset_fp2tgj.png" alt=""/>

                </div>
                <div className="col-lg-3 col-md-6 col-sm-12 pr-0">
               <img className="" src="https://res.cloudinary.com/dnv0dij0y/image/upload/v1576302272/homepage/rocketleagueasset_fp2tgj.png" alt=""/>

                </div> */}
            </div>
            </div>

            </div>
     
            </div>
            </div>
            </div>
            </div>
            </div>
            <div className="home-team">
            <div className="container">
            <div className="col-md-12 text-center py-5 float-left w-100">
               <h1>Run with The Home Team</h1>
               <div className="my-4">
                  <img src="/assets/img/teamm.png"></img>
               </div>
               <h3>Contender? Start your path to pro today! </h3>
               <div className="my-4">
               <a className="btn btn-outline-secondary" href="/game/">GET STARTED</a>
               </div>
            </div>
            </div>

            </div>

            <div className="shop-merch">
               {/* <img src="/assets/img/ foot-bg.png"></img> */}
            <div className="container">
            <div className="col-md-12 text-center py-5 float-left w-100">
              
               <div className="my-4">
               <a className="btn btn-outline-secondary" href="/games/">SHOP MERCH</a>
               </div>
            </div>
            </div>

            </div>





            </div>

           

        );
    }
}

export default connect()(main);