// Export Constants
export const TOGGLE_ADD_POST = 'TOGGLE_ADD_POST';
export const TOGGLE_ADD_CROWN_REVENUE = 'TOGGLE_ADD_CROWN_REVENUE';
export const TOGGLE_ADD_CROWN_TRADE = 'TOGGLE_ADD_CROWN_TRADE';
export const TOGGLE_ADD_CROWN_EXECUTIVE = 'TOGGLE_ADD_CROWN_EXECUTIVE';
export const TOGGLE_ADD_CROWN_CRITICAL = 'TOGGLE_ADD_CROWN_CRITICAL';
export const TOGGLE_ADD_CROWN_REGULATED = 'TOGGLE_ADD_CROWN_REGULATED';

export const TOGGLE_EDIT_CROWN_REVENUE = 'TOGGLE_EDIT_CROWN_REVENUE';
export const TOGGLE_EDIT_CROWN_TRADE = 'TOGGLE_EDIT_CROWN_TRADE';
export const TOGGLE_EDIT_CROWN_EXECUTIVE = 'TOGGLE_EDIT_CROWN_EXECUTIVE';
export const TOGGLE_EDIT_CROWN_CRITICAL = 'TOGGLE_EDIT_CROWN_CRITICAL';
export const TOGGLE_EDIT_CROWN_REGULATED = 'TOGGLE_EDIT_CROWN_REGULATED';

export const INCREASE_PROGRESS_STEP = 'INCREASE_PROGRESS_STEP';
export const DECREASE_PROGRESS_STEP = 'DECREASE_PROGRESS_STEP';

// Export Actions
export function toggleAddPost() {
  return {
    type: TOGGLE_ADD_POST,
  };
}

export function toggleAddCrownRevenue() {
  return {
    type: TOGGLE_ADD_CROWN_REVENUE,
  };
}

export function toggleAddCrownTrade() {
  return {
    type: TOGGLE_ADD_CROWN_TRADE,
  };
}

export function toggleAddCrownExecutive() {
  return {
    type: TOGGLE_ADD_CROWN_EXECUTIVE,
  };
}

export function toggleAddCrownCritical() {
  return {
    type: TOGGLE_ADD_CROWN_CRITICAL,
  };
}

export function toggleAddCrownRegulated() {
  return {
    type: TOGGLE_ADD_CROWN_REGULATED,
  };
}

export function toggleEditCrownRevenue(id, name, content) {
  return {
    id: id,
    name: name,
    content: content,
    type: TOGGLE_EDIT_CROWN_REVENUE,
  };
}

export function toggleEditCrownTrade(id, name, content) {
  return {
      id: id,
      name: name,
      content: content,
    type: TOGGLE_EDIT_CROWN_TRADE,
  };
}

export function toggleEditCrownExecutive(id, name, content) {
  return {
      id: id,
      name: name,
      content: content,
    type: TOGGLE_EDIT_CROWN_EXECUTIVE,
  };
}

export function toggleEditCrownCritical(id, name, content) {
  return {
      id: id,
      name: name,
      content: content,
    type: TOGGLE_EDIT_CROWN_CRITICAL,
  };
}

export function toggleEditCrownRegulated(id, name, content) {
  return {
      id: id,
      name: name,
      content: content,
    type: TOGGLE_EDIT_CROWN_REGULATED,
  };
}

export function increaseProgressStep(currentStep) {
  return {
    step: currentStep+1,
    type: INCREASE_PROGRESS_STEP,
  };
}

export function decreaseProgressStep(currentStep) {
  return {
    step: currentStep-1,
    type: DECREASE_PROGRESS_STEP,
  };
}
