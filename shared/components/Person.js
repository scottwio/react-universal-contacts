import React from 'react';
import {Link} from 'react-router';

export class Person extends React.Component {
  render() {
    return (
      <div className="Person">
        <img src="/assets/images/avatar.png" />
        <div className="Person-details">
          <Link to={`/edit/${this.props.id}`}>Edit</Link>
          <h3>{this.props.firstName} {this.props.secondName}</h3>
          <div>{this.props.phone}</div>
        </div>
      </div>
    )
  }
}