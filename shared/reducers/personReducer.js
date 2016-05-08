import findIndex from 'lodash/findIndex';

export default function persons(state = [], action) {
  switch(action.type) {
    case 'ADD_PERSON':
      return state.concat(action.payload.data);
    case 'GET_PERSONS':
      return [...action.payload.data];
    case 'DELETE_PERSON_FROM_LIST':
      let index = findIndex(state, (person) => { 
        return person.id == action.payload.data.id;
      });
      
      if(index === -1){
        return state;  
      }
      return state
      .slice(0, index)
      .concat(state.slice(index +1));
    default:
      return state;
  }
};

export function person(state = {}, action){
  switch(action.type) {
    case 'GET_PERSON':
      return Object.assign({}, action.payload.data);
    case 'UPDATE_PERSON':
      return Object.assign({}, action.payload.data);
    default:
      return state;
  }
};