
import React, { Component } from 'react';
import { FormGroup, FormControl, FormLabel } from 'react-bootstrap';
import SimpleReactValidator from 'simple-react-validator';
import axios from 'axios';
import toastr from "reactjs-toastr";
import $ from "jquery";
class AddEvent extends Component {
    constructor(props) {
        super(props);
        this.eventsValidator = new SimpleReactValidator();
        this.state = {
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
                image:'' ,
        }
      }
      validateeventForm = (e) =>{
        let validate = this.eventsValidator;
        if (validate.allValid()) {
        } else {
            validate.showMessages();
            this.forceUpdate();
        }
        this.setState({ [e.target.name]: e.target.value });
        e.preventDefault();
      }
      addEvent =() =>{
        const {title,description,start, end,time ,location, price , per, contact_phone, contact_email,image} = this.state;
        let request;
        let formData = new FormData();
        formData.append('image', $('#eventimage')[0].files[0]);
        formData.append('title', title);
        formData.append('description', description);
        formData.append('end', end);
        formData.append('time', time);
        formData.append('start', start);
        formData.append('location', location);
        formData.append('price', price);
        formData.append('per', per);
        formData.append('contact_phone', contact_phone);
        formData.append('contact_email', contact_email);
           request = {
            method: 'POST',
            url: `https://xrsports.gg/team/public/user/create-event`,
            headers: { 'Content-Type': 'application/json', 'X-Auth-Token': `${localStorage.getItem('token')}` },
            data: formData
          };
        axios(request).then((data) => {
          if (data.data.ResponseCode === "1") {
            toastr.success(data.data.ResponseText, { displayDuration: 1500 })
            this.setState({title:'',description:'',start:'',end:'',time:'' ,location:'',price:'' ,per:'', contact_phone:'',contact_email:'',image:''})
             }else {
            toastr.error(data.data, { displayDuration: 1500 })
          }
        });
    }
    render() {
        return (
        <div className="adminright">
            <div className="row">
                <div className="col-lg-12">
                <div className="ibox ">
                    <div className="ibox-title">
                    </div>
                    <div className="ibox-content">
                    <div class="my-4 px-4">
                        <h2 class="mb-4">create an event</h2>
                        <FormGroup >
                            <FormLabel>title</FormLabel>
                            <FormControl type="text" name="title" placeholder="Enter the Title of the Event" value={this.state.title} onChange={(e) => this.validateeventForm(e)} />
                            {this.eventsValidator.message('title', this.state.title, 'required')}
                        </FormGroup>
                        <FormGroup >
                            <FormLabel>Description</FormLabel>
                            <FormControl as="textarea" name="description" placeholder="Enter Description" value={this.state.description} onChange={(e) => this.validateeventForm(e)} />
                            {this.eventsValidator.message('description', this.state.description, 'required')}
                        </FormGroup>
                        <FormGroup >
                            <FormLabel>Start Date</FormLabel>
                            <FormControl type="date" name="start" placeholder="Enter Start Date" value={this.state.start} onChange={(e) => this.validateeventForm(e)} />
                            {this.eventsValidator.message('start', this.state.start, 'required')}
                        </FormGroup>
                        <FormGroup >
                            <FormLabel>End Date</FormLabel>
                            <FormControl type="date" name="end" placeholder="Enter End Date" value={this.state.end} onChange={(e) => this.validateeventForm(e)} />
                        </FormGroup>
                        <FormGroup >
                            <FormLabel>Time</FormLabel>
                            <FormControl type="text" name="time" placeholder="Enter Time" value={this.state.time} onChange={(e) => this.validateeventForm(e)} />
                            {this.eventsValidator.message('time', this.state.time, 'required')}
                        </FormGroup>
                        <FormGroup >
                            <FormLabel>Location</FormLabel>
                            <FormControl type="text" name="location" placeholder="Enter Location" value={this.state.location} onChange={(e) => this.validateeventForm(e)} />
                            {this.eventsValidator.message('location', this.state.location, 'required')}
                        </FormGroup>
                        <FormGroup >
                            <FormLabel>Price</FormLabel>
                            <FormControl type="text" name="price" placeholder="Enter the Price" value={this.state.price} onChange={(e) => this.validateeventForm(e)} />
                            {this.eventsValidator.message('price', this.state.price, 'required')}
                        </FormGroup>
                        <FormGroup >
                            <FormLabel>Per Person</FormLabel>
                            <FormControl type="text" name="per" placeholder="Enter the Per Person Price" value={this.state.per} onChange={(e) => this.validateeventForm(e)} />
                            {this.eventsValidator.message('per', this.state.per, 'required')}
                        </FormGroup>
                        <FormGroup >
                            <FormLabel>Phone</FormLabel>
                            <FormControl type="text" name="contact_phone" placeholder="Enter the Phone number" value={this.state.contact_phone} onChange={(e) => this.validateeventForm(e)} />
                            {this.eventsValidator.message('contact_phone', this.state.contact_phone, 'required')}
                        </FormGroup>
                        <FormGroup >
                            <FormLabel>E-Mail</FormLabel>
                            <FormControl type="text" name="contact_email" placeholder="Enter the E-Mail" value={this.state.contact_email} onChange={(e) => this.validateeventForm(e)} />
                            {this.eventsValidator.message('contact_email', this.state.contact_email, 'required')}
                        </FormGroup>
                        <FormGroup >
                            <FormLabel>Image</FormLabel>
                            <FormControl type="file" name="image" id="eventimage" value={this.state.image} onChange={(e) => this.validateeventForm(e)} />
                            {this.eventsValidator.message('image', this.state.image, 'required')}
                        </FormGroup>
                        <FormGroup >
                            <button type="submit"  onClick={(e) => this.addEvent(e)} className="btn btn-red btn-block btn-lg profilebuttons">CREATE</button>
                        </FormGroup>
                    </div> 
                    </div>
                </div>
            </div>
            </div>
        </div>
                );
            }
        }
       
export default AddEvent;