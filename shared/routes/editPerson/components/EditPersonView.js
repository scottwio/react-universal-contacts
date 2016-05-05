import React from 'react';
import {PersonAdd} from 'components/PersonAdd';
import * as PersonsActions from 'actions/person.action';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';


@connect(state => {
  return { 
    person: state.personReducer
  }
})
export class EditPersonView extends React.Component {
  render(){    
    const {dispatch} = this.props;
    return (
      <div>
        Editing a person
        <PersonAdd 
          {...bindActionCreators(PersonsActions, dispatch)} 
          person={this.props.person} 
          edit="true" 
          id={this.props.params.id
        }>
        </PersonAdd>
      </div>
    )
  }
}
