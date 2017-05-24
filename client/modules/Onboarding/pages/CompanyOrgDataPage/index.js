import React, { PropTypes, Component } from 'react';
import CompanyData from '../components/CompanyDataTabs';

class CompanyDataPage extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {

    }

    render() {
        return (
        <div style={{width: '100%', margin: '0 10px'}}>
            <CompanyData />
        </div>
        );
    }
}

export default CompanyDataPage;
