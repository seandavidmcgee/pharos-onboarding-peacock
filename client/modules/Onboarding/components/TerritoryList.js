import React, { PropTypes, Component } from 'react';
import _,{ map, assign, find, entries, filter } from 'lodash';
import Box from 'grommet/components/Box';
import Heading from 'grommet/components/Heading';
import LinkPrevious from 'grommet/components/icons/base/LinkPrevious';
import LinkNext from 'grommet/components/icons/base/LinkNext';
import Form from 'grommet/components/Form';
import Header from 'grommet/components/Header';
import RadioButton from 'grommet/components/RadioButton';
import FormField from 'grommet/components/FormField';
import InputRange from 'react-input-range';
import { Button, ButtonOutline } from 'rebass';

class TerritoryList extends Component {
    constructor(props) {
      super(props);
      this.state = {
          name: '',
          enterprise_defaultValue: '',
          enterprise_providedValue: '',
          territory_defaultValue: '',
          territory_providedValue: '',
          territories: []
      };

      this.handleRadioChange = this.handleRadioChange.bind(this);
      this.handleEnterpriseChange = this.handleEnterpriseChange.bind(this);
      this.handleTerritoryChange = this.handleTerritoryChange.bind(this);
      this.getCurrentSelections = this.getCurrentSelections.bind(this);
    }

    componentWillReceiveProps(nextProps) {
        if(nextProps.territory !== this.props.territory) {
            this.setInitialStates(nextProps.territory)
        }
    }

    handleRadioChange(event) {
        var stateCopy = _.assign({}, this.state);
        let targetState = event.target.id;

        let matchedObject = _.find(stateCopy.territories, function(value) {
            return value.stateName == targetState
        });

        let matchedPreviousObject = _.find(stateCopy.territories, function(value) {
            return value.providedValue == "true"
        });

        if(matchedPreviousObject != undefined) {
            matchedPreviousObject.providedValue = "null";
        }

        if (matchedObject.providedValue == "true") {
            matchedObject.providedValue = "null";
        } else {
            matchedObject.providedValue = "true";
        }
        this.setState(stateCopy);
    }

    setInitialStates(territories) {
        var stateCopy = _.assign({}, this.state);
        _.map(territories.territories, function(territory) {
            stateCopy.territories.push({
                'defaultValue': territory.defaultValue, 'providedValue': territory.providedValue,
                'stateName': territory.stateName, 'territory': territory.territory
            });
        });

        stateCopy.name = territories.name;
        stateCopy.enterprise_defaultValue = territories.enterprise_defaultValue;
        stateCopy.enterprise_providedValue = territories.enterprise_providedValue;
        stateCopy.territory_defaultValue = territories.territory_defaultValue;
        stateCopy.territory_providedValue = territories.territory_providedValue;

        this.setState(stateCopy);
    }

    handleEnterpriseChange(event) {
        var stateCopy = _.assign({}, this.state);
        stateCopy.enterprise_providedValue = String(event);
        this.setState(stateCopy);
    }

    handleTerritoryChange(event) {
        var stateCopy = _.assign({}, this.state);
        stateCopy.territory_providedValue = String(event);
        this.setState(stateCopy);
    }

    getCurrentSelections() {
        this.props.nextPage(this.state);
    }

    render() {
      return (
        <Box justify='start' align='stretch' pad='small' flex='grow'>
            <Header pad={{"vertical": "none"}}>
                <Box justify='start' align='start' direction='row' style={{width: '50%'}}>
                    <Heading tag='h3' margin='medium' strong={true}>
                        What is your Protection Territory?
                    </Heading>
                </Box>
                <Box justify='end' align='end' direction='row' margin={{ "vertical": "none" }} style={{width: '50%'}}>
                    <ButtonOutline type='button' rounded="left" style={{ marginLeft: -1, color: '#3f51b5' }} onClick={this.props.previousPage}>
                      Back
                    </ButtonOutline>
                    <Button type='button' color="white" inverted rounded="right" style={{ marginLeft: -1, backgroundColor: '#3f51b5' }} onClick={this.getCurrentSelections}>
                      Next
                    </Button>
                </Box>
            </Header>
            <Form pad='medium'>
                <FormField>
                    {
                        _.map(this.state.territories, (territory) => (
                            <RadioButton key={territory.stateName} id={territory.stateName} name='territory' label={territory.territory} onChange={this.handleRadioChange} checked={(territory.providedValue != 'null' && territory.providedValue == 'true') ? true : false} />
                        ))
                    }
                </FormField>
            </Form>
            <Heading tag='h4' margin='medium' strong={false}>
                What % of enterprise is this?
            </Heading>
            <Box justify='center' align='stretch' margin={{bottom: 'large'}} direction='row'>
                <InputRange maxValue={100} minValue={0} step={5} formatLabel={value => `${value}%`} value={this.state.enterprise_providedValue != 'null' ? Number(this.state.enterprise_providedValue) : Number(this.state.enterprise_defaultValue)} onChange={this.handleEnterpriseChange} />
            </Box>
            <Heading tag='h4' margin='medium' strong={false}>
                What % of territory is currently controlled?
            </Heading>
            <Box justify='center' align='stretch' margin={{bottom: 'large'}} direction='row'>
                <InputRange maxValue={100} minValue={0} step={5} formatLabel={value => `${value}%`} value={this.state.territory_providedValue != 'null' ? Number(this.state.territory_providedValue) : Number(this.state.territory_defaultValue)} onChange={this.handleTerritoryChange} />
            </Box>
        </Box>
      );
    }
}

TerritoryList.propTypes = {
    territory: PropTypes.shape({
        name: PropTypes.string,
        territories: PropTypes.array,
        enterprise_defaultValue: PropTypes.string,
        enterprise_providedValue: PropTypes.string,
        territory_defaultValue: PropTypes.string,
        territory_defaultValue: PropTypes.string
    }),
    previousPage: PropTypes.func,
    nextPage: PropTypes.func,
    dispatch: PropTypes.func
};

export default TerritoryList;
