import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import { browserHistory } from 'react-router';

//Import Actions
import { fetchControls, editControlsRequest } from '../../OnboardingActions';
import { decreaseProgressStep, increaseProgressStep } from '../../../App/AppActions';

// Import Selectors
import { getControls } from '../../OnboardingReducers';
import { getCurrentStep } from '../../../App/AppReducer';

// Import Components
import ControlsList from '../../components/ControlsList';

class ControlsListPage extends Component {
    componentDidMount() {
        this.props.dispatch(fetchControls())
    }

  handlePreviousPage = () => {
      this.props.dispatch(decreaseProgressStep(this.props.currentStep));
      browserHistory.push('/status');
  };

  handleNextPage = (responses) => {
    this.props.dispatch(increaseProgressStep(this.props.currentStep), this.props.dispatch(editControlsRequest(responses)));
    browserHistory.push('/schedule');
  };

  render() {
    return (
      <div style={{width: '100%'}}>
          <ControlsList controls={this.props.controls} previousPage={this.handlePreviousPage} nextPage={this.handleNextPage} />
      </div>
    );
  }
}

// Actions required to provide data for this component to render in sever side.
ControlsListPage.need = [() => { return fetchControls(); }];

// Retrieve data from store as props
function mapStateToProps(state) {
  return {
    controls: getControls(state),
    currentStep: getCurrentStep(state)
  };
}

ControlsListPage.propTypes = {
    controls: PropTypes.arrayOf(
        PropTypes.shape({
            controlName: PropTypes.string,
            stateName: PropTypes.string,
            typeid: PropTypes.string,
            defaultValue: PropTypes.string,
            providedValue: PropTypes.string,
            capEx_defaultValue: PropTypes.Number,
            capEx_providedValue: PropTypes.string,
            opEx_defaultValue: PropTypes.Number,
            opEx_providedValue: PropTypes.string,
            employees_defaultValue: PropTypes.Number,
            employees_providedValue: PropTypes.string,
            vendors_defaultValue: PropTypes.Number,
            vendors_providedValue: PropTypes.string
      })),
    dispatch: PropTypes.func.isRequired,
    currentStep: PropTypes.number.isRequired
};

ControlsListPage.contextTypes = {
  router: React.PropTypes.object,
};

export default connect(mapStateToProps)(ControlsListPage);
