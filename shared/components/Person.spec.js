// libs
import React from 'react';
import { connect, Provider } from 'react-redux';
import { shallow } from 'enzyme';

// our imports
import {Person} from 'components/Person';

// store mocking
import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk';
const middlewares = [thunk]
const mockStore = configureMockStore(middlewares)

let personFixture = {
    "id":1,
    "firstName":"Jack", 
    "lastName":"Smith",
    "stars": 4,
    "phone": "07978859400"
  };

describe('Person', () => {
  it('renders', () => {
    const wrapper = shallow(
          <Person />
    );
    expect(wrapper).toBeTruthy();
  });
  
  it('It should show delete and edit links if edit mode is on', () => {
    const wrapper = shallow(
          <Person
            edit={true}
            deletePerson={()=>{}}
            >
          </Person>
    );
    expect(wrapper.find('.Person-edit').length).toBe(1);
  });
  
  it('It should hide delete and edit links if edit mode is on', () => {
    const wrapper = shallow(
          <Person
            edit={false}
            deletePerson={()=>{}}
            >
          </Person>
    );
    expect(wrapper.find('.Person-edit').length).toBe(0);
    expect(wrapper.find('.Person-edit-delete').length).toBe(0);
  });
  
it('It should call delete on click', () => {
  var spy = jasmine.createSpy('spy');
    
    const wrapper = shallow(
          <Person
            edit={true}
            deletePerson={spy}
            >
          </Person>
    );
    wrapper.find('.Person-edit-delete').simulate('click');
    expect(spy).toHaveBeenCalled();
  });
       
});

