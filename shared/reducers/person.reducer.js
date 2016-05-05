import Immutable from 'immutable';

const defaultState = new Immutable.List();

export default function personsReducer(state = [], action) {
  switch(action.type) {
    case 'ADD_PERSON':
      return state.concat(action.payload.data);
    case 'GET_PERSONS':
      return [...action.payload.data];
    default:
      return state;
  }
};


let mockPerson = {
    "id":2,
    "firstName":"Charlie", 
    "lastName":"Ebers",
    "stars": 4,
    "phone": "07972323940"
};

export function personReducer(state = mockPerson, action){
  console.log(action.type);
  return state;
};