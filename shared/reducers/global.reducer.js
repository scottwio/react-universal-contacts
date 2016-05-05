export default function globalReducer(state = {}, action) {
    switch(action.type) {
      case 'GLOBAL_LOADING':
      return Object.assign({}, state, action);
    }
    return state;
};