import callApi from '../../util/apiCaller';
import callTestApi from '../../util/apiTestCaller';
import postTestApi from '../../util/apiTestPoster';
import patchTestApi from '../../util/apiTestPatcher';
import deleteTestApi from '../../util/apiTestDeleter';

// Export Constants
export const ADD_CROWN_JEWELS = 'ADD_CROWN_JEWELS';
export const ADD_CROWN_JEWEL = 'ADD_CROWN_JEWEL';
export const DELETE_CROWN_JEWEL = 'DELETE_CROWN_JEWEL';
export const ADD_TERRITORY = 'ADD_TERRITORY';
export const ADD_PROTECTION = 'ADD_PROTECTION';
export const ADD_INVESTMENT = 'ADD_INVESTMENT';
export const ADD_STATUS = 'ADD_STATUS';
export const ADD_CONTROLS = 'ADD_CONTROLS';

export function addCrownJewel(crownJewel) {
  return {
    type: ADD_CROWN_JEWEL,
    crownJewel,
  };
}

export function addCrownJewels(crownJewels) {
    let json = JSON.parse(crownJewels);
    return {
        type: ADD_CROWN_JEWELS,
        crownJewels: json.categories,
    };
}

export function deleteCrownJewel(jewel) {
  return {
    type: DELETE_CROWN_JEWEL,
    jewel,
  };
}

export function addTerritory(territory) {
    let json = JSON.parse(territory);
    return {
      type: ADD_TERRITORY,
      territory: json,
    };
}

export function addProtection(protection) {
    let json = JSON.parse(protection);
    return {
      type: ADD_PROTECTION,
      protection: json.protections,
    };
}

export function addInvestment(investment) {
    let json = JSON.parse(investment);
    return {
      type: ADD_INVESTMENT,
      investment: json.investments,
    };
}

export function addStatus(status) {
    let json = JSON.parse(status);
    return {
      type: ADD_STATUS,
      status: json.statuses,
    };
}

export function addControls(controls) {
  let json = JSON.parse(controls);
  return {
    type: ADD_CONTROLS,
    controls: json.controls,
  };
}

export function fetchCrownJewels() {
  return (dispatch) => {
    return callTestApi('crownjewels', 'get', {
          user: 'mhawkes',
          customer: 'Global Blue'
    }).then(res => {
      dispatch(addCrownJewels(res.body));
    });
  };
}

export function fetchTerritory() {
  return (dispatch) => {
    return callTestApi('protectionterritory', 'get', {
          user: 'mhawkes',
          customer: 'Global Blue'
    }).then(res => {
      dispatch(addTerritory(res.body));
    });
  };
}

export function fetchProtection() {
  return (dispatch) => {
    return callTestApi('levelsofprotection', 'get', {
          user: 'mhawkes',
          customer: 'Global Blue'
    }).then(res => {
      dispatch(addProtection(res.body));
    });
  };
}

export function fetchInvestment() {
  return (dispatch) => {
    return callTestApi('securityinvestment', 'get', {
          user: 'mhawkes',
          customer: 'Global Blue'
    }).then(res => {
      dispatch(addInvestment(res.body));
    });
  };
}

export function fetchStatus() {
  return (dispatch) => {
    return callTestApi('securitystatus', 'get', {
          user: 'mhawkes',
          customer: 'Global Blue'
    }).then(res => {
      dispatch(addStatus(res.body));
    });
  };
}

export function fetchControls() {
  return (dispatch) => {
    return callTestApi('securitycontrol', 'get', {
          user: 'mhawkes',
          customer: 'Global Blue'
    }).then(res => {
      dispatch(addControls(res.body));
    });
  };
}

export function addCrownJewelRequest(crownJewel) {
    return (dispatch) => {
        return callApi('crownJewels', 'post', {
            crownJewel: {
              name: crownJewel.name,
              category: crownJewel.category,
              content: crownJewel.content,
            },
        }).then(res => {
            dispatch(fetchCrownJewels());
        });
    };
}

export function deleteCrownJewelRequest(crownJewel) {
  return (dispatch) => {
    return deleteTestApi('crownjewels', 'delete', {
          user: 'mhawkes',
          customer: 'Global Blue'
    }, crownJewel.content ).then(() => dispatch(fetchCrownJewels())
    );
  };
}

export function editCrownJewelRequest(category, content) {
    return (dispatch) => {
      return patchTestApi('crownjewels', 'PATCH', {
            user: 'mhawkes',
            customer: 'Global Blue',
            category: category
      }, { 'jewels': [content] }).then(() => dispatch(fetchCrownJewels())
      );
    };
}

export function editTerritoryRequest(territory) {
    return (dispatch) => {
        return postTestApi('protectionterritory', 'post', {
              user: 'mhawkes',
              customer: 'Global Blue'
        }, territory).then(() => dispatch(fetchTerritory())
        );
    };
}

export function editProtectionRequest(protection) {
    return (dispatch) => {
        return postTestApi('levelsofprotection', 'post', {
              user: 'mhawkes',
              customer: 'Global Blue'
        }, { name: 'levelsOfProtection', protections: protection }).then(() => dispatch(fetchProtection())
        );
    };
}

export function editInvestmentRequest(investment) {
    return (dispatch) => {
        return postTestApi('securityinvestment', 'post', {
              user: 'mhawkes',
              customer: 'Global Blue'
        }, { name: 'securityInvestment', investments: investment }).then(() => dispatch(fetchInvestment())
        );
    };
}

export function editStatusRequest(status) {
    return (dispatch) => {
        return postTestApi('securitystatus', 'post', {
              user: 'mhawkes',
              customer: 'Global Blue'
        }, { name: 'securityStatus', statuses: status }).then(() => dispatch(fetchStatus())
        );
    };
}

export function editControlsRequest(providedControls) {
    return (dispatch) => {
        return postTestApi('securitycontrol', 'post', {
              user: 'mhawkes',
              customer: 'Global Blue'
        }, { name: 'securityControls', controls: providedControls }).then(() => dispatch(fetchControls())
        );
    };
}
