const dashboard = (state={}, action) => {
  switch (action.type) {
    case 'ACTIVATE_CELL':
      return Object.assign({}, state, {
        activeCell: action.id
      });
    case 'ACTIVATE_DASHBOARD':
      return Object.assign({}, state, {
        activeDashboard: action.id
      });
    default:
      return state;
  }
};

export default dashboard;
