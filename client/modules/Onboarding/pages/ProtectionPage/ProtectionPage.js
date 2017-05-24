import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import { browserHistory } from 'react-router';

//Import Actions
import { fetchProtection, editProtectionRequest } from '../../OnboardingActions';
import { decreaseProgressStep, increaseProgressStep } from '../../../App/AppActions';

// Import Selectors
import { getProtection } from '../../OnboardingReducers';
import { getCurrentStep } from '../../../App/AppReducer';

// Import Components
import ProtectionList from '../../components/ProtectionList';

class ProtectionPage extends Component {
  componentDidMount() {
      this.props.dispatch(fetchProtection())
  }

  handlePreviousPage = () => {
      this.props.dispatch(decreaseProgressStep(this.props.currentStep));
      browserHistory.push('/territory');
  };

  handleNextPage = (responses) => {
      this.props.dispatch(increaseProgressStep(this.props.currentStep), this.props.dispatch(editProtectionRequest(responses)));
      browserHistory.push('/investment');
  };

  render() {
    return (
      <div style={{width: '100%'}}>
        <ProtectionList protections={this.props.protections} previousPage={this.handlePreviousPage} nextPage={this.handleNextPage} />
      </div>
    );
  }
}

// Actions required to provide data for this component to render in sever side.
ProtectionPage.need = [() => { return fetchProtection(); }];

// Retrieve data from store as props
function mapStateToProps(state) {
  return {
    protections: getProtection(state),
    currentStep: getCurrentStep(state)
  };
}

ProtectionPage.propTypes = {
    protections: PropTypes.arrayOf(
        PropTypes.shape({
            _id: PropTypes.number,
            protection: PropTypes.string,
            stateName: PropTypes.string,
            externalCyberDefault: PropTypes.string,
            externalCyberProvided: PropTypes.string,
            externalPhysicalDefault: PropTypes.string,
            externalPhysicalProvided: PropTypes.string,
            externalSocialDefault: PropTypes.string,
            externalSocialProvided: PropTypes.string,
            externalThirdDefault: PropTypes.string,
            externalThirdProvided: PropTypes.string,
            internalCyberDefault: PropTypes.string,
            internalCyberProvided: PropTypes.string,
            internalPhysicalDefault: PropTypes.string,
            internalPhysicalProvided: PropTypes.string,
            internalSocialDefault: PropTypes.string,
            internalSocialProvided: PropTypes.string,
            internalPrivDefault: PropTypes.string,
            internalPrivProvided: PropTypes.string,
    })),
    dispatch: PropTypes.func.isRequired,
    currentStep: PropTypes.number.isRequired
};

ProtectionPage.contextTypes = {
  router: React.PropTypes.object,
};

export default connect(mapStateToProps)(ProtectionPage);
