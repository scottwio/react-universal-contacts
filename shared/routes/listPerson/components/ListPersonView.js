import React from 'react';
import {PersonList} from 'components/personList';
import {PersonAddEdit} from 'components/PersonAddEdit';
import * as personAction from 'actions/personAction';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

/**
 * @Connect decorateor wires up the stores
 * and provides the dispatch function to
 * this component
 */
@connect(state => (
  { 
    persons: state.persons
  }
))
export class ListPersonView extends React.Component {
  componentWillMount() {
    this.props.dispatch(personAction.getPersonsAsync());
  }
  render(){    
    const {dispatch} = this.props;
    return (
      <div>
        <PersonList 
          {...bindActionCreators(personAction, dispatch)} 
          persons={this.props.persons}
          edit="true" 
          />
        <PersonAddEdit
          {...bindActionCreators(personAction, dispatch)}
         />
      </div>
    )
  }
}
