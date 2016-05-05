import React from 'react';
import { Person } from 'components/Person';
import { VelocityTransitionGroup } from 'velocity-react';

export class PersonList extends React.Component {
  render() {
    return (
      <section className="PersonList">
      <VelocityTransitionGroup enter={{ animation: "slideDown", stagger: 400 }} leave={{ animation: "slideUp", stagger: 400 }}>
        {this.props.persons.map(person => (
          <Person
            key={person.id}
            id={person.id}
            firstName={person.firstName}
            secondName={person.lastName}
            phone={person.phone}
            edit={this.props.edit}
            deletePerson={this.props.deletePersonAsync}
            >
          </Person>
        )) }
      </VelocityTransitionGroup>
      </section>
    )
  }
}