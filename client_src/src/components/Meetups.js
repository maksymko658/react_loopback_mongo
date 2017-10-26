import React, { Component } from 'react';
import axios from 'axios';

class Meetups extends Component {
	constructor(){
		super();
		this.state = {
			meetups: []
		}
	}
	componentWillMount(){
		
	}

	getMeetups(){
		axios.get('http://localhost:3000/api/meetups')
		.then(response => {
			console.log(response);
		})
	}

    render() {
        return (
            <div>
            	<h1>Meetups</h1>
            </div>
        );
    }
}

export default Meetups;
