import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import { browserHistory } from 'react-router';

//Import Actions
import { fetchInvestment, editInvestmentRequest } from '../../OnboardingActions';
import { decreaseProgressStep, increaseProgressStep } from '../../../App/AppActions';

// Import Selectors
import { getInvestment } from '../../OnboardingReducers';
import { getCurrentStep } from '../../../App/AppReducer';

// Import Components
import InvestmentList from '../../components/InvestmentList';

class InvestmentListPage extends Component {
    componentDidMount() {
        this.props.dispatch(fetchInvestment())
    }

  handlePreviousPage = () => {
      this.props.dispatch(decreaseProgressStep(this.props.currentStep));
      browserHistory.push('/protection');
  };

  handleNextPage = (responses) => {
      this.props.dispatch(increaseProgressStep(this.props.currentStep), this.props.dispatch(editInvestmentRequest(responses)));
      browserHistory.push('/status');
  };

  render() {
    return (
      <div style={{width: '100%'}}>
          <InvestmentList investments={this.props.investments} previousPage={this.handlePreviousPage} nextPage={this.handleNextPage} />
      </div>
    );
  }
}

// Actions required to provide data for this component to render in sever side.
InvestmentListPage.need = [() => { return fetchInvestment(); }];

// Retrieve data from store as props
function mapStateToProps(state) {
  return {
    investments: getInvestment(state),
    currentStep: getCurrentStep(state)
  };
}

InvestmentListPage.propTypes = {
    investments: PropTypes.arrayOf(
        PropTypes.shape({
          investment: PropTypes.string,
          stateName: PropTypes.string,
          defaultValue: PropTypes.string,
          providedValue: PropTypes.string,
    })),
    dispatch: PropTypes.func.isRequired,
    currentStep: PropTypes.number.isRequired
};

InvestmentListPage.contextTypes = {
  router: React.PropTypes.object,
};

export default connect(mapStateToProps)(InvestmentListPage);
