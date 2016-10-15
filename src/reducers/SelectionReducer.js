export default (state = null, action) => { //return state as null because it will return undefined for the first time, we dont want that
  console.log(action);
  switch (action.type) {
    case 'select_library':
      return action.payload;
    default:
      return state; //return last state
  }
};
