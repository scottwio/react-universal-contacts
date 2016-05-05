export default function loading(state = {}, action) {
    switch(action.type) {
      case 'GLOBAL_LOADING':
      return Object.assign({}, state, action);
    }
    return state;
};