import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import { browserHistory } from 'react-router';

// Import Components
import CrownJewelsList from '../../components/CrownJewelsList';

// Import Actions
import { addCrownJewelRequest, fetchCrownJewels } from '../../OnboardingActions';
import { increaseProgressStep } from '../../../App/AppActions';

// Import Selectors
import { getCrownJewels } from '../../OnboardingReducers';
import { getCurrentStep } from '../../../App/AppReducer';

class CrownJewelsListPage extends Component {
  componentDidMount() {
    this.props.dispatch(fetchCrownJewels());
  }

  handleAddCrownJewel = (name, content) => {
    //this.props.dispatch(toggleAddCrownJewel());
    this.props.dispatch(addCrownJewelRequest({ name, content }));
  }

  handlePreviousPage = () => {
      browserHistory.push('/security');
  };

  handleNextPage = () => {
      this.props.dispatch(increaseProgressStep(this.props.currentStep));
      browserHistory.push('/territory');
  };

  render() {
    return (

      <div style={{width: '100%', margin: '0 10px'}}>
        <CrownJewelsList crownJewels={this.props.crownJewels} previousPage={this.handlePreviousPage} nextPage={this.handleNextPage} />
      </div>
    );
  }
}

// Actions required to provide data for this component to render in sever side.
CrownJewelsListPage.need = [() => { return fetchCrownJewels(); }];

// Retrieve data from store as props
function mapStateToProps(state) {
  return {
    crownJewels: getCrownJewels(state),
    currentStep: getCurrentStep(state)
  };
}

CrownJewelsListPage.propTypes = {
  crownJewels: PropTypes.arrayOf(
      PropTypes.shape({
        categoryName: PropTypes.string.isRequired,
        jewels: PropTypes.array.isRequired
  })).isRequired,
  dispatch: PropTypes.func.isRequired,
  currentStep: PropTypes.number.isRequired
};

CrownJewelsListPage.contextTypes = {
  router: React.PropTypes.object,
};

export default connect(mapStateToProps)(CrownJewelsListPage);
