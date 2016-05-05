import React from 'react';
import {Link} from 'react-router';

export class Person extends React.Component {
  static propTypes = {
      id: React.PropTypes.number,
      firstName: React.PropTypes.string,
      secondName: React.PropTypes.string,
      phone: React.PropTypes.string
    }
    
  render() {
    let editMode = () => {
      if(!this.props.edit) return false;
      
      return (
      <span>
        <Link to={`/edit/${this.props.id}`}>Edit</Link>
        <span> | </span>
        <a onClick={this.props.deletePerson.bind(this, this.props.id)}>Delete</a>
      </span>
      )      
    }
    
    return (
      <div className="Person">
        <img src="/assets/images/avatar.png" />
        <div className="Person-details">
          {editMode()}
          <h3>{this.props.firstName} {this.props.secondName}</h3>
          <div>{this.props.phone}</div>
        </div>
      </div>
    )
  }
}



// import React from 'react';
// import {Link} from 'react-router';

// export class Person extends React.Component {
  
//   static propTypes = {
//       id: React.PropTypes.number,
//       firstName: React.PropTypes.string,
//       secondName: React.PropTypes.string,
//       phone: React.PropTypes.string
//     }
    
//   render() {
//     let editMode = () => {
//           return (
//           <span>
//             <Link to={`/edit/${this.props.id}`}>Edit</Link>
//             <span> | </span>
//             <a href="#" onClick={this.props.deletePerson(this.props.id)}>Delete</a>
//           </span>
//           )      
//     }
    
//     return (
//       <div className="Person">
//         <img src="/assets/images/avatar.png" />
//         <div className="Person-details">
//           {editMode()}
//           <h3>{this.props.firstName} {this.props.secondName}</h3>
//           <div>{this.props.phone}</div>
//         </div>
//       </div>
//     )
//   }
// }