const intialState = { darkmode: false };

export default (state = intialState, action) => {
  switch (action.type) {
    case 'TOGGLE':
      return { ...state, darkmode: !state.darkmode };

    default:
      return state;
  }
};
