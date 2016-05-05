import React from 'react';
import {PersonList} from 'components/personList';
import {PersonAdd} from 'components/PersonAdd';
import * as PersonsActions from 'actions/person.action';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

/**
 * @Connect decorateor wires up the stores
 * and provides the dispatch function to
 * this component
 */
@connect(state => (
  { 
    persons: state.personsReducer
  }
))
export class ListPersonView extends React.Component {
  componentDidMount() {
    this.props.dispatch(PersonsActions.getPersonsAsync())
  }
  render(){    
    const {dispatch} = this.props;
    return (
      <div>
        <PersonList {...bindActionCreators(PersonsActions, dispatch)} persons={this.props.persons} />
        <PersonAdd  {...bindActionCreators(PersonsActions, dispatch)} ></PersonAdd>
      </div>
    )
  }
}
