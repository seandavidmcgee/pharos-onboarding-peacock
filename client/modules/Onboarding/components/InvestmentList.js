import React, { PropTypes, Component } from 'react';
import _, { map, find, assign, forEach } from 'lodash';
import Box from 'grommet/components/Box';
import Heading from 'grommet/components/Heading';
import LinkPrevious from 'grommet/components/icons/base/LinkPrevious';
import LinkNext from 'grommet/components/icons/base/LinkNext';
import { Button, ButtonOutline } from 'rebass';
import Form from 'grommet/components/Form';
import Header from 'grommet/components/Header';
import NumberInput from 'grommet/components/NumberInput';
import FormField from 'grommet/components/FormField';
import InputRange from 'react-input-range';

class InvestmentList extends Component {
    constructor(props) {
      super(props);
      this.state = {
          providedValues : []
      }

      this.handleContentChange = this.handleContentChange.bind(this);
    }

    componentWillReceiveProps(nextProps) {
        if(nextProps.investments !== this.props.investments) {
            this.setInitialStates(nextProps.investments)
        }
    }

    setInitialStates(investments) {
        var stateCopy = _.assign({}, this.state);
        _.map(investments, function(invest) {
            stateCopy.providedValues.push({
                'defaultValue': invest.defaultValue, 'providedValue': invest.providedValue,
                'stateName': invest.stateName, 'investment': invest.investment
            });
        });

        this.setState(stateCopy);

    }

    handleContentChange(event) {
        var stateCopy = _.assign({}, this.state);
        let newValue = event.target.value;
        let targetState = event.target.id;

        let matchedObject = stateCopy.providedValues.find((value) => {
            return value.stateName == targetState
        });

        matchedObject.providedValue = String(newValue);
        this.setState(stateCopy);
    }

    getValue(targetState) {
        if(this.state.providedValues.length > 0) {
            let matchedObject = this.state.providedValues.find((value) => {
                return value.stateName == targetState
            });

            return matchedObject.providedValue != 'null' ? Number(matchedObject.providedValue) : Number(matchedObject.defaultValue);
        }
        return 0
    }

    handleProvidedValues = () => {
        this.props.nextPage(this.state.providedValues);
    }

    render() {
      return (
        <Box justify='start' align='stretch' pad='small' flex='grow'>
            <Form pad='small' plain={true}>
                <Header pad={{"vertical": "none"}}>
                    <Box justify='start' align='start' direction='row' style={{width: '50%'}}>
                        <Heading tag='h3' margin='medium' strong={true}>
                            What is your Security Investment?
                        </Heading>
                    </Box>
                    <Box justify='end' align='end' direction='row' margin={{ "vertical": "none" }} style={{width: '50%'}}>
                        <ButtonOutline type='button' rounded="left" style={{ marginLeft: -1, color: '#3f51b5' }} onClick={this.props.previousPage}>
                          Back
                        </ButtonOutline>
                        <Button type='button' color="white" inverted rounded="right" style={{ marginLeft: -1, backgroundColor: '#3f51b5' }} onClick={this.handleProvidedValues}>
                          Next
                        </Button>
                    </Box>
                </Header>
                <Heading tag='h4' margin='medium' strong={true}>
                    In total (within $50k):
                </Heading>
                <FormField label={'Total Investment'}>
                    <NumberInput id='totalInvest' name='total' step={50000} value={this.getValue('totalInvest')} onChange={this.handleContentChange} />
                </FormField>
                <Heading tag='h4' margin='medium' strong={true}>
                    Per exposure (within $50k):
                </Heading>
                <Box justify='start' align='start' margin={{bottom: 'large'}} direction='row'>
                    <FormField style={{marginRight: '20px'}} label={'External Cyber'}>
                        <NumberInput id='extCyber' name='extCyber' step={50000} value={this.getValue('extCyber')} onChange={this.handleContentChange} />
                    </FormField>
                    <FormField label={'Internal Cyber'}>
                        <NumberInput id='intCyber' name='intCyber' step={50000} value={this.getValue('intCyber')} onChange={this.handleContentChange} />
                    </FormField>
                </Box>
                <Box justify='start' align='start' margin={{bottom: 'large'}} direction='row'>
                    <FormField style={{marginRight: '20px'}} label={'External Physical'}>
                        <NumberInput id='extPhysical' name='extPhysical' step={50000} value={this.getValue('extPhysical')} onChange={this.handleContentChange} />
                    </FormField>
                    <FormField label={'Internal Physical'}>
                        <NumberInput id='intPhysical' name='intPhysical' step={50000} value={this.getValue('intPhysical')} onChange={this.handleContentChange} />
                    </FormField>
                </Box>
                <Box justify='start' align='start' margin={{bottom: 'large'}} direction='row'>
                    <FormField style={{marginRight: '20px'}} label={'External Social'}>
                        <NumberInput id='extSocial' name='extSocial' step={50000} value={this.getValue('extSocial')} onChange={this.handleContentChange} />
                    </FormField>
                    <FormField label={'Internal Social'}>
                        <NumberInput id='intSocial' name='intSocial' step={50000} value={this.getValue('intSocial')} onChange={this.handleContentChange} />
                    </FormField>
                </Box>
                <Box justify='start' align='start' margin={{bottom: 'large'}} direction='row'>
                    <FormField style={{marginRight: '20px'}} label={'External Third Party'}>
                        <NumberInput id='extThird' name='extThird' step={50000} value={this.getValue('extThird')} onChange={this.handleContentChange} />
                    </FormField>
                    <FormField label={'Internal Privileged'}>
                        <NumberInput id='intPriv' name='intPriv' step={50000} value={this.getValue('intPriv')} onChange={this.handleContentChange} />
                    </FormField>
                </Box>
            </Form>
        </Box>
      );
    }
}

InvestmentList.propTypes = {
    investments: PropTypes.arrayOf(
        PropTypes.shape({
          investment: PropTypes.string,
          stateName: PropTypes.string,
          defaultValue: PropTypes.string,
          providedValue: PropTypes.string
    })),
    previousPage: PropTypes.func,
    nextPage: PropTypes.func
};

export default InvestmentList;
