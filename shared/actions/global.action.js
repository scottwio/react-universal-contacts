export default function loadingAction(loading) {
  return {
    type:'GLOBAL_LOADING',
    isLoading: loading
  };
};