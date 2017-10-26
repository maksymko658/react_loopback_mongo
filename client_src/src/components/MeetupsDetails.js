import React, { Component } from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';

class MeetupsDetails extends Component {
	constructor(props){
		super(props);
		this.state = {
			details: ''
		}
	}
  componentWillMount(){
    this.getMeetup();
  }
getMeetup(){
  let meetupId = this.props.match.params.id;
      axios.get(`http://localhost:3000/api/meetups/${meetupId}`)
    .then(response => {
      this.setState({details: response.data}, () =>
      {
        console.log(this.state);
      })
    })
    .catch(err => console.log(err));
}

    render() {
        return (
          <div>
          <br />
          <Link className="btn grey" to="/">Back</Link>
          <h1>{this.state.details.name}</h1>
          <ul className="collection">
            <li className="collection-item">City: {this.state.details.city}</li>
            <li className="collection-item">City: {this.state.details.adress}</li>
            </ul>
          </div>
        );
    }
}

export default MeetupsDetails;