import React, { PropTypes, Component } from 'react';
import FlexBox from 'grommet/components/Box';
import Header from 'grommet/components/Header';
import Heading from 'grommet/components/Heading';
import { Button, ButtonOutline, Section } from 'rebass';
import DateTime from 'grommet/components/DateTime';
import Select from 'grommet/components/Select';
import { Flex, Box } from 'reflexbox';

class ScheduleList extends Component {
    constructor(props) {
        super(props);

        this.handleChange = this.handleChange.bind(this);
        this.handleRemindersChange = this.handleRemindersChange.bind(this);
    }

    componentDidMount() {

    }

    handleChange(event) {
        console.log(event);
    }

    handleRemindersChange(event) {
        console.log(event)
    }

    handleFinishedOnboarding = () => {
        console.log('finished')
    }

    render() {
        return (
            <FlexBox justify='start' align='stretch' pad='small' flex='grow'>
                <Header pad={{"vertical": "none"}}>
                    <FlexBox justify='start' align='start' direction='row' style={{width: '50%'}}>
                        <Heading tag='h3' margin='medium' strong={true}>
                            CISO Schedule Survey
                        </Heading>
                    </FlexBox>
                    <FlexBox justify='end' align='end' direction='row' margin={{ "vertical": "none" }} style={{width: '50%'}}>
                        <ButtonOutline type='button' rounded="left" style={{ marginLeft: -1, color: '#3f51b5' }} onClick={this.props.previousPage}>
                          Back
                        </ButtonOutline>
                        <Button type='button' color="white" inverted rounded="right" style={{ marginLeft: -1, backgroundColor: '#3f51b5' }} onClick={this.handleFinishedOnboarding}>
                          Finish
                        </Button>
                    </FlexBox>
                </Header>
                <Section pl={1} pr={0} py={0}>
                    <Flex align='center' wrap gutter={2}>
                        <Box px={2} col={12}>
                            <Flex>
                                <Box col={3}>
                                    <Heading tag='h4' margin='medium' strong={true}>
                                        Distribute to
                                    </Heading>
                                </Box>
                                <Box col={3}>
                                    <Heading tag='h4' margin='medium' strong={true}>
                                        Send Date
                                    </Heading>
                                </Box>
                                <Box col={3}>
                                    <Heading tag='h4' margin='medium' strong={true}>
                                        Due Date
                                    </Heading>
                                </Box>
                                <Box col={3}>
                                    <Heading tag='h4' margin='medium' strong={true}>
                                        Reminders
                                    </Heading>
                                </Box>
                            </Flex>
                            <Flex>
                                <Box col={3}>
                                    <Heading tag='h4' margin='none' strong={false}>
                                        John Security <br />
                                        Control Manager - North America
                                    </Heading>
                                </Box>
                                <Box col={3}>
                                    <DateTime id='survey-send-1' name='survey-send-1' format='M/D/YYYY' onChange={this.handleChange} />
                                </Box>
                                <Box col={3}>
                                    <DateTime id='survey-due-1' name='survey-due-1' format='M/D/YYYY' onChange={this.handleChange} />
                                </Box>
                                <Box col={3}>
                                <Select placeHolder='None' options={['Daily', 'Weekly', 'Twice Weekly', 'Quarterly']} value={undefined} onChange={this.handleRemindersChange} />
                                </Box>
                            </Flex>
                        </Box>
                    </Flex>
                </Section>
            </FlexBox>
        );
    }
}

ScheduleList.propTypes = {
    previousPage: PropTypes.func,
    nextPage: PropTypes.func
};

export default ScheduleList;
