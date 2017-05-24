import React, { PropTypes, Component } from 'react';
import Box from 'grommet/components/Box';
import Header from 'grommet/components/Header';
import Heading from 'grommet/components/Heading';
import { Button, ButtonOutline } from 'rebass';
import Tabs from 'grommet/components/Tabs';
import Tab from 'grommet/components/Tab';
import Paragraph from 'grommet/components/Paragraph';

import Leadership from './LeadershipSecurityData';


class SecurityDataTabs extends Component {
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
                            Admin Enter Security Organization
                        </Heading>
                    </Box>
                    <Box justify='end' align='end' direction='row' margin={{ "vertical": "none" }} style={{width: '50%'}}>
                        <Button type='button' color="white" inverted rounded="right" style={{ marginLeft: -1, backgroundColor: '#3f51b5' }} onClick={this.props.nextPage}>
                          Next
                        </Button>
                    </Box>
                </Header>
                <Tabs justify='start'>
                    <Tab title='leadership'>
                        <Leadership />
                    </Tab>
                    <Tab title='staff and structure'>
                        <Paragraph>
                          staff and structure contents
                        </Paragraph>
                    </Tab>
                    <Tab title='third party'>
                        <Paragraph>
                          third party contents
                        </Paragraph>
                    </Tab>
                    <Tab title='budgets'>
                        <Paragraph>
                          budgets contents
                        </Paragraph>
                    </Tab>
                </Tabs>
            </Box>
        );
    }
}

export default SecurityDataTabs;
