import React, { PropTypes, Component } from 'react';
import SecurityData from '../../components/SecurityDataTabs';

class SecurityDataPage extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {

    }

    render() {
        return (
        <div style={{width: '100%', margin: '0 10px'}}>
            <SecurityData />
        </div>
        );
    }
}

export default SecurityDataPage;
