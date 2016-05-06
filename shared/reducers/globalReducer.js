export default function loading(state = {}, action) {
    switch(action.type) {
      case 'GLOBAL_LOADING':
      return {isLoading:action.isLoading};
    }
    return state;
};