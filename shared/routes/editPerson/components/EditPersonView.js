import React from 'react';
import {PersonAddEdit} from 'components/PersonAddEdit';
import * as personAction from 'actions/personAction';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Person } from 'components/Person';
import store from 'store';
import size from 'lodash/size';


@connect(state => {
  return { 
    person: state.person
  }
})
export class EditPersonView extends React.Component {
  componentWillMount() {
    this.props.dispatch(personAction.getPersonAsync(this.props.params.id));
  }
  render(){    
    const {dispatch} = this.props;
    let person = this.props.person;
    
    var personFound = () =>{
      if(size(this.props.person) === 0){
        return (<div>No person found</div>)
      } else {
        return (
          <div>
            Editing a person
            <Person
              key={person.id}
              id={person.id}
              firstName={person.firstName}
              secondName={person.lastName}
              phone={person.phone}
              >
            </Person>
            <PersonAddEdit
              {...bindActionCreators(personAction, dispatch)} 
              person={this.props.person}
              edit="true" 
              id={this.props.params.id}
              >
            </PersonAddEdit>
          </div>
        )
       }
    }    
    
    return (
      <div>
        {personFound()}
      </div>
    )
  }
}
