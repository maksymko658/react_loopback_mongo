import React, { Component } from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';

class EditMeetup extends Component {
  constructor(props){
    super(props);
    this.state = {
      id:'',
      name:'',
      city:'',
      adress:''
    }
  }
  componentWillMount(){
    this.getMeetupDetails();
  }
  getMeetupDetails(){
  let meetupId = this.props.match.params.id;
      axios.get(`http://localhost:3000/api/meetups/${meetupId}`)
    .then(response => {
      this.setState({
        id: response.data.id,
        name: response.data.name,
        city: response.data.city,
        adress: response.data.adress
      }, () => {
        console.log(this.state);
      });
    })
    .catch(err => console.log(err));
}

    onSubmit(e){
    const newMeetup = {
      name: this.refs.name.value,
      city: this.refs.city.value,
      adress: this.refs.adress.value,
    }
    this.editMeetup(newMeetup)
    e.preventDefault();
  }

    render() {
        return (
          <div>
            <br />
          <Link className="btn grey" to="/">Back</Link>
            <h1>Edit</h1>
               <form onSubmit={this.onSubmit.bind(this)}>
              <div className="input-field">
              <input type="text" name="name" ref="name" />
              <label htmlFor="name">Name</label>
              </div>

                 <div className="input-field">
              <input type="text" name="city" ref="city" />
              <label htmlFor="city">City</label>
              </div>

                   <div className="input-field">
              <input type="text" name="adress" ref="adress" />
              <label htmlFor="adress">Address</label>
              </div>
                <input type="submit" value="Save" className="btn" />
              </form>
          </div>
        );
    }
}

export default EditMeetup;
