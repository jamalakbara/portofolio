export const initialState = {
  homeHeight: null,
  aboutHeight: null,
  servicesHeight: null,
  portofolioHeight: null,
};

export const actionTypes = {
  SET_HOME_HEIGHT: "SET_HOME_HEIGHT",
  SET_ABOUT_HEIGHT: "SET_ABOUT_HEIGHT",
  SET_SERVICES_HEIGHT: "SET_SERVICES_HEIGHT",
  SET_PORTOFOLIO_HEIGHT: "SET_PORTOFOLIO_HEIGHT",
};

const reducer = (state, action) => {
  switch (action.type) {
    case actionTypes.SET_HOME_HEIGHT:
      return {
        ...state,
        homeHeight: action.height,
      };
    case actionTypes.SET_ABOUT_HEIGHT:
      return {
        ...state,
        aboutHeight: action.height,
      };
    case actionTypes.SET_SERVICES_HEIGHT:
      return {
        ...state,
        servicesHeight: action.height,
      };
    case actionTypes.SET_PORTOFOLIO_HEIGHT:
      return {
        ...state,
        portofolioHeight: action.height,
      };
    default:
      return state;
  }
};

export default reducer;
