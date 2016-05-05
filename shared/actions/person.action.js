import request from 'axios';
import {BACKEND_URL} from 'const/config';
import loadingAction from 'actions/global.action';

/**
 * Get a list of all the people current
 * avaliable on the sever 
 */
export function getPersons(persons) {
  return {
    type:'GET_PERSONS',
    payload: {
      data: persons
    }
  };
};

export function getPersonsAsync() {
  return dispatch => {
    dispatch(loadingAction(true));
    return request.get(BACKEND_URL+'persons.json')
    .then(res => {
      dispatch(loadingAction(false));
      dispatch(getPersons(res.data));
      return true;
    })
    .catch(err => {
      return err;
    });
  }
};

/**
 * Get one person
 */
export function getPerson(id) {
  return {
    type:'GET_PERSON',
    payload: {
      data: {
        id
      }
    }
  };
};

/**
 * Add a new person to the list
 */
let personId = 4;
export function AddPerson(person) {
  // should be generated on the server
  person.id = personId++;
  return {
    type:'ADD_PERSON',
    payload: {
      data: person
    }
  };
};
