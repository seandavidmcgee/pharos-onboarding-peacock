// Import Actions
import { assign } from 'lodash';

import { TOGGLE_ADD_POST, TOGGLE_ADD_CROWN_REVENUE, TOGGLE_ADD_CROWN_TRADE, TOGGLE_ADD_CROWN_EXECUTIVE,
TOGGLE_ADD_CROWN_CRITICAL, TOGGLE_ADD_CROWN_REGULATED, TOGGLE_EDIT_CROWN_REVENUE,
TOGGLE_EDIT_CROWN_TRADE, TOGGLE_EDIT_CROWN_EXECUTIVE, TOGGLE_EDIT_CROWN_CRITICAL,
TOGGLE_EDIT_CROWN_REGULATED, INCREASE_PROGRESS_STEP, DECREASE_PROGRESS_STEP } from './AppActions';

// Initial State
const initialState = {
  showAddPost: false,
  showAddCrownRevenue: false,
  showAddCrownTrade: false,
  showAddCrownExecutive: false,
  showAddCrownCritical: false,
  showAddCrownRegulated: false,
  showEditCrownRevenue: false,
  showEditCrownTrade: false,
  showEditCrownExecutive: false,
  showEditCrownCritical: false,
  showEditCrownRegulated: false,
  editCrownId: '',
  editCrownName: '',
  editCrownDescription: '',
  progressStep: 0
};

const AppReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_ADD_POST:
      return {
        showAddPost: !state.showAddPost,
      };

    case TOGGLE_ADD_CROWN_REVENUE:
      return assign({}, state, {
        showAddCrownRevenue: !state.showAddCrownRevenue,
    });
    case TOGGLE_ADD_CROWN_TRADE:
      return assign({}, state, {
        showAddCrownTrade: !state.showAddCrownTrade,
    });
    case TOGGLE_ADD_CROWN_EXECUTIVE:
      return {
        showAddCrownExecutive: !state.showAddCrownExecutive,
      };
    case TOGGLE_ADD_CROWN_CRITICAL:
      return assign({}, state, {
        showAddCrownCritical: !state.showAddCrownCritical,
    });
    case TOGGLE_ADD_CROWN_REGULATED:
      return assign({}, state, {
        showAddCrownRegulated: !state.showAddCrownRegulated,
    });
    case TOGGLE_EDIT_CROWN_REVENUE:
      return assign({}, state, {
        showEditCrownRevenue: !state.showEditCrownRevenue,
        editCrownId: action.id,
        editCrownName: action.name,
        editCrownDescription: action.content,
    });
    case TOGGLE_EDIT_CROWN_TRADE:
      return assign({}, state, {
        showEditCrownTrade: !state.showEditCrownTrade,
        editCrownId: action.id,
        editCrownName: action.name,
        editCrownDescription: action.content,
    });
    case TOGGLE_EDIT_CROWN_EXECUTIVE:
      return {
        showEditCrownExecutive: !state.showEditCrownExecutive,
        editCrownId: action.id,
        editCrownName: action.name,
        editCrownDescription: action.content,
      };
    case TOGGLE_EDIT_CROWN_CRITICAL:
      return assign({}, state, {
        showEditCrownCritical: !state.showEditCrownCritical,
        editCrownId: action.id,
        editCrownName: action.name,
        editCrownDescription: action.content,
    });
    case TOGGLE_EDIT_CROWN_REGULATED:
      return assign({}, state, {
        showEditCrownRegulated: !state.showEditCrownRegulated,
        editCrownId: action.id,
        editCrownName: action.name,
        editCrownDescription: action.content,
    });
    case INCREASE_PROGRESS_STEP:
      return assign({}, state, {
        progressStep: action.step,
    });
    case DECREASE_PROGRESS_STEP:
      return assign({}, state, {
        progressStep: action.step,
    });

    default:
      return state;
  }
};

/* Selectors */

// Get showAddPost
export const getShowAddPost = state => state.app.showAddPost;
export const getShowAddCrownRevenue = state => state.app.showAddCrownRevenue;
export const getShowAddCrownTrade= state => state.app.showAddCrownTrade;
export const getShowAddCrownExecutive = state => state.app.showAddCrownExecutive;
export const getShowAddCrownCritical = state => state.app.showAddCrownCritical;
export const getShowAddCrownRegulated= state => state.app.showAddCrownRegulated;

export const getShowEditCrownRevenue = state => state.app.showEditCrownRevenue;
export const getShowEditCrownTrade= state => state.app.showEditCrownTrade;
export const getShowEditCrownExecutive = state => state.app.showEditCrownExecutive;
export const getShowEditCrownCritical = state => state.app.showEditCrownCritical;
export const getShowEditCrownRegulated= state => state.app.showEditCrownRegulated;

export const getEditCrownId = state => state.app.editCrownId;
export const getEditCrownName = state => state.app.editCrownName;
export const getEditCrownDescription = state => state.app.editCrownDescription;

export const getCurrentStep = state => state.app.progressStep;

// Export Reducer
export default AppReducer;
