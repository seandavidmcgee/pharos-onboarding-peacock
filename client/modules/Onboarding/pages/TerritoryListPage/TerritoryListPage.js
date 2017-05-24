import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import { browserHistory } from 'react-router';

//Import Actions
import { fetchTerritory, editTerritoryRequest, fetchTestControls } from '../../OnboardingActions';
import { decreaseProgressStep, increaseProgressStep } from '../../../App/AppActions';

// Import Selectors
import { getTerritory } from '../../OnboardingReducers';
import { getCurrentStep } from '../../../App/AppReducer';

// Import Components
import TerritoryList from '../../components/TerritoryList';

class TerritoryListPage extends Component {
  componentDidMount() {
      this.props.dispatch(fetchTerritory())
  }

  handlePreviousPage = () => {
      this.props.dispatch(decreaseProgressStep(this.props.currentStep));
      browserHistory.push('/crownJewels');
  };

  handleNextPage = (responses) => {
      this.props.dispatch(increaseProgressStep(this.props.currentStep),  this.props.dispatch(editTerritoryRequest(responses)));
      browserHistory.push('/protection');
  };

  render() {
    return (
      <div style={{width: '100%'}}>
        <TerritoryList territory={this.props.protectionTerritory} previousPage={this.handlePreviousPage} nextPage={this.handleNextPage} />
      </div>
    );
  }
}

// Actions required to provide data for this component to render in sever side.
TerritoryListPage.need = [() => { return fetchTerritory(); }];

// Retrieve data from store as props
function mapStateToProps(state) {
  return {
    protectionTerritory: getTerritory(state),
    currentStep: getCurrentStep(state)
  };
}

TerritoryListPage.propTypes = {
    protectionTerritory: PropTypes.shape({
        name: PropTypes.string,
        territories: PropTypes.array,
        enterprise_defaultValue: PropTypes.string,
        enterprise_providedValue: PropTypes.string,
        territory_defaultValue: PropTypes.string,
        territory_defaultValue: PropTypes.string
    }),
    dispatch: PropTypes.func.isRequired,
    currentStep: PropTypes.number.isRequired
};

TerritoryListPage.contextTypes = {
  router: React.PropTypes.object,
};

export default connect(mapStateToProps)(TerritoryListPage);
