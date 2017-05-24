import React, { PropTypes, Component } from 'react';
import _, { map, find, assign, forEach } from 'lodash';
import Box from 'grommet/components/Box';
import Heading from 'grommet/components/Heading';
import LinkPrevious from 'grommet/components/icons/base/LinkPrevious';
import LinkNext from 'grommet/components/icons/base/LinkNext';
import { Button, ButtonOutline } from 'rebass';
import Form from 'grommet/components/Form';
import Header from 'grommet/components/Header';
import RadioButton from 'grommet/components/RadioButton';
import FormField from 'grommet/components/FormField';

class StatusList extends Component {
    constructor(props) {
      super(props);
      this.state = {
          selections: []
      };

      this.handleRadioChange = this.handleRadioChange.bind(this);
    }

    componentWillReceiveProps(nextProps) {
        if(nextProps.statuses !== this.props.statuses) {
            this.setInitialStates(nextProps.statuses)
        }
    }

    setInitialStates(statuses) {
        var stateCopy = _.assign({}, this.state);
        _.map(statuses, function(status) {
            stateCopy.selections.push({
                'defaultValue': status.defaultValue, 'providedValue': status.providedValue,
                'statusName': status.statusName, 'status': status.status
            });
        });

        this.setState(stateCopy);
    }

    handleRadioChange(event) {
        var stateCopy = _.assign({}, this.state);
        let targetValue = event.target.id.split("-")[1];
        let targetState = event.target.name;

        let matchedObject = _.find(stateCopy.selections, function(value) {
            return value.statusName == targetState
        });

        matchedObject.providedValue = targetValue

        this.setState(stateCopy);
    }

    getRadioValue(status, id) {
        if(this.state.selections.length > 0) {
            let matchedObject = this.state.selections.find((value) => {
                return value.statusName == status
            });
            if(matchedObject.providedValue == id) {
                return true
            } else if (matchedObject.defaultValue == id && matchedObject.providedValue == 'null') {
                return true
            }
        }
        return  false
    }

    handleSelectedValues = () => {
        this.props.nextPage(this.state.selections);
    }

    render() {
      return (
        <Box justify='start' align='stretch' pad='small' flex='grow'>
            <Form pad='medium' style={{width: '100%'}}>
                <Header pad={{"vertical": "none"}}>
                    <Box justify='start' align='start' direction='row' style={{width: '50%'}}>
                        <Heading tag='h3' margin='medium' strong={true}>
                            What is status of each of the following?
                        </Heading>
                    </Box>
                    <Box justify='end' align='end' direction='row' margin={{ "vertical": "none" }} style={{width: '50%'}}>
                        <ButtonOutline type='button' rounded="left" style={{ marginLeft: -1, color: '#3f51b5' }} onClick={this.props.previousPage}>
                          Back
                        </ButtonOutline>
                        <Button type='button' color="white" inverted rounded="right" style={{ marginLeft: -1, backgroundColor: '#3f51b5' }} onClick={this.handleSelectedValues}>
                          Next
                        </Button>
                    </Box>
                </Header>
                <FormField label={'Accoutable Lead?'} style={{width: '100%'}}>
                    <RadioButton id='lead-Yes' name='lead' label='Yes' onChange={this.handleRadioChange} checked={this.getRadioValue('lead', 'Yes')} />
                    <RadioButton id='lead-None' name='lead' label='No' onChange={this.handleRadioChange} checked={this.getRadioValue('lead', 'None')} />
                </FormField>
                <FormField label={'Security and protection goals?'} style={{width: '100%'}}>
                    <RadioButton id='goals-Excellent' name='goals' label='Excellent' onChange={this.handleRadioChange} checked={this.getRadioValue('goals', 'Excellent')} />
                    <RadioButton id='goals-Good' name='goals' label='Good' onChange={this.handleRadioChange} checked={this.getRadioValue('goals', 'Good')} />
                    <RadioButton id='goals-Weak' name='goals' label='Weak' onChange={this.handleRadioChange} checked={this.getRadioValue('goals', 'Weak')} />
                    <RadioButton id='goals-None' name='goals' label='None' onChange={this.handleRadioChange} checked={this.getRadioValue('goals', 'None')} />
                </FormField>
                <FormField label={'Security strategy?'} style={{width: '100%'}}>
                    <RadioButton id='strategy-Excellent' name='strategy' label='Excellent' onChange={this.handleRadioChange} checked={this.getRadioValue('strategy', 'Excellent')} />
                    <RadioButton id='strategy-Good' name='strategy' label='Good' onChange={this.handleRadioChange} checked={this.getRadioValue('strategy', 'Good')} />
                    <RadioButton id='strategy-Weak' name='strategy' label='Weak' onChange={this.handleRadioChange} checked={this.getRadioValue('strategy', 'Weak')} />
                    <RadioButton id='strategy-None' name='strategy' label='None' onChange={this.handleRadioChange} checked={this.getRadioValue('strategy', 'None')} />
                </FormField>
                <FormField label={'Security design plan?'} style={{width: '100%'}}>
                    <RadioButton id='design-Excellent' name='design' label='Excellent' onChange={this.handleRadioChange} checked={this.getRadioValue('design', 'Excellent')} />
                    <RadioButton id='design-Good' name='design' label='Good' onChange={this.handleRadioChange} checked={this.getRadioValue('design', 'Good')} />
                    <RadioButton id='design-Weak' name='design' label='Weak' onChange={this.handleRadioChange} checked={this.getRadioValue('design', 'Weak')} />
                    <RadioButton id='design-None' name='design' label='None' onChange={this.handleRadioChange} checked={this.getRadioValue('design', 'None')} />
                </FormField>
                <FormField label={'Security implementation plan?'} style={{width: '100%'}}>
                    <RadioButton id='implementation-Excellent' name='implementation' label='Excellent' onChange={this.handleRadioChange} checked={this.getRadioValue('implementation', 'Excellent')} />
                    <RadioButton id='implementation-Good' name='implementation' label='Good' onChange={this.handleRadioChange} checked={this.getRadioValue('implementation', 'Good')} />
                    <RadioButton id='implementation-Weak' name='implementation' label='Weak' onChange={this.handleRadioChange} checked={this.getRadioValue('implementation', 'Weak')} />
                    <RadioButton id='implementation-None' name='implementation' label='None' onChange={this.handleRadioChange} checked={this.getRadioValue('implementation', 'None')} />
                </FormField>
                <FormField label={'Security operations plan?'} style={{width: '100%'}}>
                    <RadioButton id='operations-Excellent' name='operations' label='Excellent' onChange={this.handleRadioChange} checked={this.getRadioValue('operations', 'Excellent')} />
                    <RadioButton id='operations-Good' name='operations' label='Good' onChange={this.handleRadioChange} checked={this.getRadioValue('operations', 'Good')} />
                    <RadioButton id='operations-Weak' name='operations' label='Weak' onChange={this.handleRadioChange} checked={this.getRadioValue('operations', 'Weak')} />
                    <RadioButton id='operations-None' name='operations' label='None' onChange={this.handleRadioChange} checked={this.getRadioValue('operations', 'None')} />
                </FormField>
                <FormField label={'Security performance assurance plan?'} style={{width: '100%'}}>
                    <RadioButton id='assurance-Excellent' name='assurance' label='Excellent' onChange={this.handleRadioChange} checked={this.getRadioValue('assurance', 'Excellent')} />
                    <RadioButton id='assurance-Good' name='assurance' label='Good' onChange={this.handleRadioChange} checked={this.getRadioValue('assurance', 'Good')} />
                    <RadioButton id='assurance-Weak' name='assurance' label='Weak' onChange={this.handleRadioChange} checked={this.getRadioValue('assurance', 'Weak')} />
                    <RadioButton id='assurance-None' name='assurance' label='None' onChange={this.handleRadioChange} checked={this.getRadioValue('assurance', 'None')} />
                </FormField>
                <FormField label={'Metrics, KPI and reporting plan?'} style={{width: '100%'}}>
                    <RadioButton id='metrics-Excellent' name='metrics' label='Excellent' onChange={this.handleRadioChange} checked={this.getRadioValue('metrics', 'Excellent')} />
                    <RadioButton id='metrics-Good' name='metrics' label='Good' onChange={this.handleRadioChange} checked={this.getRadioValue('metrics', 'Good')} />
                    <RadioButton id='metrics-Weak' name='metrics' label='Weak' onChange={this.handleRadioChange} checked={this.getRadioValue('metrics', 'Weak')} />
                    <RadioButton id='metrics-None' name='metrics' label='None' onChange={this.handleRadioChange} checked={this.getRadioValue('metrics', 'None')} />
                </FormField>
                <FormField label={'Security business plan?'} style={{width: '100%'}}>
                    <RadioButton id='business-Excellent' name='business' label='Excellent' onChange={this.handleRadioChange} checked={this.getRadioValue('business', 'Excellent')} />
                    <RadioButton id='business-Good' name='business' label='Good' onChange={this.handleRadioChange} checked={this.getRadioValue('business', 'Good')} />
                    <RadioButton id='business-Weak' name='business' label='Weak' onChange={this.handleRadioChange} checked={this.getRadioValue('business', 'Weak')} />
                    <RadioButton id='business-None' name='business' label='None' onChange={this.handleRadioChange} checked={this.getRadioValue('business', 'None')} />
                </FormField>
            </Form>
        </Box>
      );
    }
}

StatusList.propTypes = {
    statuses: PropTypes.arrayOf(
        PropTypes.shape({
          status: PropTypes.string,
          statusName: PropTypes.string,
          defaultValue: PropTypes.string,
          providedValue: PropTypes.string,
    })),
    previousPage: PropTypes.func,
    nextPage: PropTypes.func
};

export default StatusList;
