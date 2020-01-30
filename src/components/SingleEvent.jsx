import React, { Component } from 'react';
import { connect } from 'react-redux';
import {getSingleevents} from './../store/actions/eventsActions';

class SingleEvent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            totalItems: '',
            title:'',
            description:'',
            start:'',                      
            end:'',
            time:'' ,
            location:'',                      
            price:'' ,                     
            per:'',                    
            contact_phone:'',
            contact_email:'',
            image:''
        };
    }
    componentDidMount() {
        const eventid = this.props.match.params.id;
        console.log(eventid , 'sdhkhsaujd')
        this.props.dispatch(getSingleevents(eventid));
    }
    componentWillReceiveProps(nextProps) {
        this.setState({
            totalItems: nextProps.singleeventdata,
            title:nextProps.singleeventdata.title,
            description:nextProps.singleeventdata.description,
            start:nextProps.singleeventdata.start,                      
            end:nextProps.singleeventdata.end,
            time:nextProps.singleeventdata.time ,
            location:nextProps.singleeventdata.location,                      
            price:nextProps.singleeventdata.price ,                     
            per:nextProps.singleeventdata.per,                    
            contact_phone:nextProps.singleeventdata.contact_phone,
            contact_email:nextProps.singleeventdata.contact_email,
            image:nextProps.singleeventdata.image
        });
    }
    
    render() {
        const {title,description,start,end,time ,location,price ,per,contact_phone,contact_email,image} = this.state;
        return (
            <div class="container">
<div id="mainpage" class="main_box p-0 col-md-12">
    <div class="main-content support frontline text-left mt-3">
    <div className="row">		
        <div className="col-md-12 p-4">
                        		            <div className="even_banner">
            	<div className="left_hand eventimage">
            		<img src={`https://xrsports.gg/team/public/events/${image}`} alt=""/>  
            	</div>
            	<div className="right_hand">
            		<h3>{title}</h3>
            	</div>	
            </div>
            <div className="each_event_description">
        <p>{description}</p>
        <p><i className="far fa-clock"></i>{time}</p>
        <p><i className="fas fa-map-marker-alt"></i> {location}</p> 
        <p><i className="far fa-clock"></i> {start}</p> 
            </div>
            <div className="each_event_descript">
                            </div>
            <div className="each_event_descript eventcontact">
    <h4>Contact</h4><p><i className="far fa-envelope"></i> {contact_email}</p><p><i className="fas fa-phone-alt"></i>{contact_phone}</p>                
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
    singleeventdata: state.events.singleevent,

})
export default connect(mapStateToProps)(SingleEvent);
