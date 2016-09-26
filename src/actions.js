export const activateCell = (id) => {
  return {
    type: 'ACTIVATE_CELL',
    id
  };
};

export const activateCellSettings = (id) => {
  return {
    type: 'ACTIVATE_CELL_SETTINGS',
    id
  };
};

export const activateDashboard = (id) => {
  return {
    type: 'ACTIVATE_DASHBOARD',
    id
  };
};

export const toggleMenu = () => {
  return {
    type: 'TOGGLE_MENU'
  };
};
