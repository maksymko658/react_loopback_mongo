import React, { Component } from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';

class EditMeetup extends Component {
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
