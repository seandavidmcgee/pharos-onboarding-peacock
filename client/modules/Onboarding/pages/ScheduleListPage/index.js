import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import ScheduleList from '../../components/ScheduleList';

//Import Actions
import { decreaseProgressStep, increaseProgressStep } from '../../../App/AppActions';

// Import Selectors
import { getCurrentStep } from '../../../App/AppReducer';

class ScheduleListPage extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {

    }

    handlePreviousPage = () => {
        this.props.dispatch(decreaseProgressStep(this.props.currentStep));
        browserHistory.push('/controls');
    };

    render() {
        return (
        <div style={{width: '100%', margin: '0 10px'}}>
            <ScheduleList />
        </div>
        );
    }
}

// Retrieve data from store as props
function mapStateToProps(state) {
  return {
    currentStep: getCurrentStep(state)
  };
}

ScheduleListPage.propTypes = {
    dispatch: PropTypes.func.isRequired,
    currentStep: PropTypes.number.isRequired
};

ScheduleListPage.contextTypes = {
  router: React.PropTypes.object,
};

export default connect(mapStateToProps)(ScheduleListPage);
