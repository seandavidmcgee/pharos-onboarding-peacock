import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import { browserHistory } from 'react-router';

//Import Actions
import { fetchStatus, editStatusRequest } from '../../OnboardingActions';
import { decreaseProgressStep, increaseProgressStep } from '../../../App/AppActions';

// Import Selectors
import { getStatus } from '../../OnboardingReducers';
import { getCurrentStep } from '../../../App/AppReducer';

// Import Components
import StatusList from '../../components/StatusList';

class StatusListPage extends Component {
    componentDidMount() {
        this.props.dispatch(fetchStatus())
    }

  handlePreviousPage = () => {
      this.props.dispatch(decreaseProgressStep(this.props.currentStep));
      browserHistory.push('/investment');
  };

  handleNextPage = (responses) => {
      this.props.dispatch(increaseProgressStep(this.props.currentStep), this.props.dispatch(editStatusRequest(responses)));
      browserHistory.push('/controls');
  };

  render() {
    return (
      <div style={{width: '100%'}}>
          <StatusList statuses={this.props.statuses} previousPage={this.handlePreviousPage} nextPage={this.handleNextPage} />
      </div>
    );
  }
}

// Actions required to provide data for this component to render in sever side.
StatusListPage.need = [() => { return fetchStatus(); }];

// Retrieve data from store as props
function mapStateToProps(state) {
  return {
    statuses: getStatus(state),
    currentStep: getCurrentStep(state)
  };
}

StatusListPage.propTypes = {
    statuses: PropTypes.arrayOf(
        PropTypes.shape({
          status: PropTypes.string,
          statusName: PropTypes.string,
          defaultValue: PropTypes.string,
          providedValue: PropTypes.string,
    })),
    dispatch: PropTypes.func.isRequired,
    currentStep: PropTypes.number.isRequired
};

StatusListPage.contextTypes = {
  router: React.PropTypes.object,
};

export default connect(mapStateToProps)(StatusListPage);
