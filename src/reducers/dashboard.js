const dashboard = (state={}, action) => {
  switch (action.type) {
    case 'ACTIVATE_CELL':
      return Object.assign({}, state, {
        activeCell: state.activeCell !== action.id ? action.id : null
      });
    case 'ACTIVATE_CELL_SETTINGS':
      return Object.assign({}, state, {
        activeCellSettings: state.activeCellSettings !== action.id ? action.id : null
      });
    case 'ACTIVATE_DASHBOARD':
      return Object.assign({}, state, {
        activeDashboard: action.id
      });
    case 'TOGGLE_MENU':
      return Object.assign({}, state, {
        isMenuClosed: !state.isMenuClosed
      });
    default:
      return state;
  }
};

export default dashboard;
