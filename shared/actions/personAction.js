import request from 'axios';
import {BACKEND_URL} from 'const/configConst';
import loadingAction from 'actions/globalAction';

/**
 * GET ALL PERSONS
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
    return request.get(BACKEND_URL+'persons')
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
 * GET ONE PERSON
 */
export function getPerson(person) {
  return {
    type:'GET_PERSON',
    payload: {
      data: person
    }
  };
};

export function getPersonAsync(id) {
  return dispatch => {
    dispatch(loadingAction(true));
    return request.get(BACKEND_URL+'person/'+id)
    .then(res => {
      dispatch(loadingAction(false));
      dispatch(getPerson(res.data));
      return true;
    })
    .catch(err => {
      return err;
    });
  }
};

/**
 * ADD ONE PERSON
 */
export function addPerson(person) {
  // should be generated on the server
  return {
    type:'ADD_PERSON',
    payload: {
      data: person
    }
  };
};

export function addPersonAsync(person) {
  return dispatch => {
    dispatch(loadingAction(true));
    return request.post(BACKEND_URL+'person', person)
    .then(res => {
      dispatch(loadingAction(false));
      dispatch(addPerson(res.data));
      return true;
    })
    .catch(err => {
      return err;
    });
  }
};

/**
 * UPDATE ONE PESON
 */

export function updatePerson(person) {
  // should be generated on the server
  return {
    type:'UPDATE_PERSON',
    payload: {
      data: person
    }
  };
};

export function updatePersonAsync(id, person) {
  return dispatch => {
    dispatch(loadingAction(true));
    return request.put(BACKEND_URL+'person/'+id, person)
    .then(res => {
      dispatch(loadingAction(false));
      dispatch(updatePerson(res.data));
      return true;
    })
    .catch(err => {
      return err;
    });
  }
};


/**
 * DELETE ONE PESON
 */

export function deletePersonFromList(id) {
  return {
    type:'DELETE_PERSON_FROM_LIST',
    payload: {
      data: {
        id:id
      }
    }
  };
};

export function deletePersonAsync(id) {
  return dispatch => {
    dispatch(loadingAction(true));
    return request.delete(BACKEND_URL+'person/'+id)
    .then(res => {
      dispatch(loadingAction(false));
      dispatch(deletePersonFromList(id));
      return true;
    })
    .catch(err => {
      return err;
    });
  }
};
