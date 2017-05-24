import React, { PropTypes, Component } from 'react';
import _, { map, forEach, find } from 'lodash';
import Box from 'grommet/components/Box';
import Heading from 'grommet/components/Heading';
import LinkPrevious from 'grommet/components/icons/base/LinkPrevious';
import LinkNext from 'grommet/components/icons/base/LinkNext';
import { Button, ButtonOutline } from 'rebass';
import Form from 'grommet/components/Form';
import Header from 'grommet/components/Header';
import RadioButton from 'grommet/components/RadioButton';
import FormField from 'grommet/components/FormField';
import NumberInput from 'grommet/components/NumberInput';
import numeral from 'numeral';

import ControlListSelect from './ControlListSelectItem';
import ControlListValues from './ControlListValuesItem';

class ControlsList extends Component {
    constructor(props) {
      super(props);
      this.state = {
          value: 0,
          selections : []
      }

      this.handleControlsChange = this.handleControlsChange.bind(this);
      this.handleValueChange = this.handleValueChange.bind(this);
    }

    componentWillReceiveProps(nextProps) {
        if(nextProps.controls !== this.props.controls) {
            this.setInitialStates(nextProps.controls);
        }
    }

    setInitialStates(controls) {
        var stateCopy = _.assign({}, this.state);
        _.map(controls, function(control) {
            stateCopy.selections.push( {
                'defaultValue': control.defaultValue, 'providedValue': control.providedValue,
                'stateName': control.stateName, 'typeid': control.typeid, 'controlName': control.controlName,
                'capEx_defaultValue': control.capEx_defaultValue, 'capEx_providedValue': control.capEx_providedValue, 'opEx_defaultValue': control.opEx_defaultValue,
                'opEx_providedValue': control.opEx_providedValue, 'employees_defaultValue': control.employees_defaultValue, 'employees_providedValue': control.employees_providedValue,
                'vendors_defaultValue': control.vendors_defaultValue, 'vendors_providedValue': control.vendors_providedValue} )
        })

        this.setState(stateCopy);
    }

    handleControlsChange = (event) => {
        var stateCopy = _.assign({}, this.state);
        let targetState = event.target.id;

        let matchedObject = _.find(stateCopy.selections, function(value) {
            return value.stateName == targetState
        });
        if (matchedObject.providedValue == "true") {
            matchedObject.providedValue = "false";
        } else {
            matchedObject.providedValue = "true";
        }
        this.setState(stateCopy);
    }

    handleValueChange = (event) => {
        var stateCopy = _.assign({}, this.state);
        let targetState = event.target.name.split("-")[0];
        let targetType = event.target.name.split("-")[1];
        let targetValue = numeral(event.target.value).format('0');

        let matchedObject = _.find(stateCopy.selections, function(value) {
            return value.stateName == targetState
        });

        switch (targetType) {
            case 'capEx':
                matchedObject.capEx_providedValue = targetValue;
                break;
            case 'opEx':
                matchedObject.opEx_providedValue = targetValue;
                break;
            case 'employees':
                matchedObject.employees_providedValue = targetValue;
                break;
            case 'vendors':
                matchedObject.vendors_providedValue = targetValue;
                break;
            default:
                console.log('no target value found')
                break;
        }

        this.setState(stateCopy);
    }

    handleSelectedValues = () => {
        if(this.state.value == 0) {
            this.setState({ value: this.state.value+1})
        } else {
            this.props.nextPage(this.state.selections);
        }
    }

    handleBack = () => {
        if(this.state.value == 0) {
            this.props.previousPage();
        } else {
            this.setState({ value: 0})
        }
    }

    handleFormFields = () => {
        if(this.state.value == 0) {
            return (
                <ControlListSelect controls={this.state.selections} previousPage={this.handleBack} nextPage={this.handleSelectedValues} handleChange={this.handleControlsChange} />
            )
        } else {
            return (
                <ControlListValues controls={this.state.selections} previousPage={this.handleBack} nextPage={this.handleSelectedValues} handleChange={this.handleValueChange} />
            )
        }
    }

    render() {
      return (
        <Box justify='start' align='stretch' pad='small' flex='grow'>
            {this.handleFormFields()}
        </Box>
      );
    }
}

ControlsList.propTypes = {
    controls: PropTypes.arrayOf(
        PropTypes.shape({
            controlName: PropTypes.string,
            stateName: PropTypes.string,
            typeid: PropTypes.string,
            defaultValue: PropTypes.string,
            providedValue: PropTypes.string,
            capEx_defaultValue: PropTypes.Number,
            capEx_providedValue: PropTypes.string,
            opEx_defaultValue: PropTypes.Number,
            opEx_providedValue: PropTypes.string,
            employees_defaultValue: PropTypes.Number,
            employees_providedValue: PropTypes.string,
            vendors_defaultValue: PropTypes.Number,
            vendors_providedValue: PropTypes.string
      })),
      previousPage: PropTypes.func,
      nextPage: PropTypes.func
};

export default ControlsList;
