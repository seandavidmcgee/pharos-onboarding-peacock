import React, { PropTypes, Component } from 'react';
import Box from 'grommet/components/Box';
import Header from 'grommet/components/Header';
import Heading from 'grommet/components/Heading';
import { Button, ButtonOutline } from 'rebass';
import Tabs from 'grommet/components/Tabs';
import Tab from 'grommet/components/Tab';
import Paragraph from 'grommet/components/Paragraph';

import Overview from './OverviewCompanyData';


class CompanyDataTabs extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {

    }

    render() {
        return (
            <Box justify='start' align='stretch' pad='small' flex='grow'>
                <Header pad={{"vertical": "none"}}>
                    <Box justify='start' align='start' direction='row' style={{width: '50%'}}>
                        <Heading tag='h3' margin='medium' strong={true}>
                            Admin Enter Company Information
                        </Heading>
                    </Box>
                    <Box justify='end' align='end' direction='row' margin={{ "vertical": "none" }} style={{width: '50%'}}>
                        <Button type='button' color="white" inverted rounded="right" style={{ marginLeft: -1, backgroundColor: '#3f51b5' }} onClick={this.props.nextPage}>
                          Next
                        </Button>
                    </Box>
                </Header>
                <Tabs justify='start'>
                    <Tab title='overview'>
                        <Overview />
                    </Tab>
                    <Tab title='industry'>
                        <Paragraph>
                          industry contents
                        </Paragraph>
                    </Tab>
                    <Tab title='size'>
                        <Paragraph>
                          size contents
                        </Paragraph>
                    </Tab>
                    <Tab title='location'>
                        <Paragraph>
                          location contents
                        </Paragraph>
                    </Tab>
                    <Tab title='revenue'>
                        <Paragraph>
                          revenue contents
                        </Paragraph>
                    </Tab>
                </Tabs>
            </Box>
        );
    }
}

export default CompanyDataTabs;
