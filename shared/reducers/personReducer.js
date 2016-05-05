export default function persons(state = [], action) {
  switch(action.type) {
    case 'ADD_PERSON':
      return state.concat(action.payload.data);
    case 'GET_PERSONS':
      return [...action.payload.data];
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