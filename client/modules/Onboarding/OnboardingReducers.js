import { assign } from 'lodash';
import { ADD_CROWN_JEWELS,  ADD_TERRITORY, ADD_PROTECTION, ADD_INVESTMENT, ADD_STATUS, ADD_CONTROLS } from './OnboardingActions';

// Initial State
const initialState = {
    crownJewels: [],
    territory: {},
    protection: [],
    investment: [],
    status: [],
    controls: []
};

const OnboardingReducer = (state = initialState, action) => {
  switch (action.type) {

    case ADD_CROWN_JEWELS:
      return assign({}, state, {
        crownJewels: action.crownJewels,
    });

    case ADD_TERRITORY:
      return assign({}, state, {
        territory: action.territory,
    });

    case ADD_PROTECTION:
      return assign({}, state, {
        protection: action.protection,
    });

    case ADD_INVESTMENT:
      return assign({}, state, {
        investment: action.investment,
    });

    case ADD_STATUS:
      return assign({}, state, {
        status: action.status,
    });

    case ADD_CONTROLS:
      return assign({}, state, {
        controls: action.controls,
    });

    default:
      return state;
  }
};

// Get all crown jewels
export const getCrownJewels = state => state.onboarding.crownJewels;
// Get all territory info
export const getTerritory = state => state.onboarding.territory;
// Get all protection info
export const getProtection = state => state.onboarding.protection;
// Get all protection info
export const getInvestment = state => state.onboarding.investment;
// Get all status info
export const getStatus = state => state.onboarding.status;
// Get all controls info
export const getControls = state => state.onboarding.controls;

// Export Reducer
export default OnboardingReducer;
