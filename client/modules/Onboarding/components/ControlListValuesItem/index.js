import React, { PropTypes, Component } from 'react';
import { Button, ButtonOutline, Panel, PanelHeader, Section, Input } from 'rebass';
import { Flex, Box } from 'reflexbox';
import Heading from 'grommet/components/Heading';
import numeral from 'numeral';

class ControlsListValuesItem extends Component {

    handleValues = (control, type) => {
        switch (type) {
            case 'capEx':
                return control.capEx_providedValue != "null" ? numeral(control.capEx_providedValue).format('0,0[.]00 $') : numeral(control.capEx_defaultValue).format('0,0[.]00 $');
            case 'opEx':
                return control.opEx_providedValue != "null" ? numeral(control.opEx_providedValue).format('0,0[.]00 $') : numeral(control.opEx_defaultValue).format('0,0[.]00 $');
            case 'employees':
                return control.employees_providedValue != "null" ? numeral(control.employees_providedValue).format('0,0[.]00 $') : numeral(control.employees_defaultValue).format('0,0[.]00 $');
            case 'vendors':
                return control.vendors_providedValue != "null" ? numeral(control.vendors_providedValue).format('0,0[.]00 $') : numeral(control.vendors_defaultValue).format('0,0[.]00 $');
            default:
                console.log('no initial value to format was found')
                break;
        }
    }

    render() {
        return (
            <Section pl={1} pr={0} py={0}>
                <Flex align='center' justify="space-between">
                    <Box p={0}>
                        <Heading tag='h3' margin='medium' strong={true}>
                            What did you invest in each control?
                        </Heading>
                    </Box>
                    <Box py={2} pl={2} pr={0}>
                        <ButtonOutline type='button' rounded="left" style={{ marginLeft: -1, color: '#3f51b5' }} onClick={this.props.previousPage}>
                          Back
                        </ButtonOutline>
                        <Button type='button' color="white" inverted rounded="right" style={{ marginLeft: -1, backgroundColor: '#3f51b5' }} onClick={this.props.nextPage}>
                          Next
                        </Button>
                    </Box>
                </Flex>
                <Flex align='center' wrap gutter={2}>
                {
                    this.props.controls.map((control, index) => {
                        if(control.providedValue == "true") {
                            return (
                                <Box key={control.stateName} px={2} sm={3}>
                                    <Panel m={0} theme='primary'>
                                        <PanelHeader style={{ color: '#f5f5f5'}}>
                                            {control.controlName + ' Expenses'}
                                        </PanelHeader>
                                        <Flex>
                                            <Box col={6}>
                                                <Input rounded='left' style={{ marginLeft: '2px' }} name={control.stateName + '-capEx'} label='Capital' value={this.handleValues(control, 'capEx')} onChange={this.props.handleChange} />
                                            </Box>
                                            <Box col={6}>
                                                <Input rounded={false} style={{ marginLeft: '2px' }} name={control.stateName + '-opEx'} label='Operational' value={this.handleValues(control, 'opEx')} onChange={this.props.handleChange} />
                                            </Box>
                                        </Flex>
                                        <Flex>
                                            <Box col={6}>
                                                <Input rounded={false} style={{ marginLeft: '2px' }} name={control.stateName + '-employees'} label='Employees' value={this.handleValues(control, 'employees')} onChange={this.props.handleChange} />
                                            </Box>
                                            <Box col={6}>
                                                <Input rounded='right' style={{ marginLeft: '2px' }} name={control.stateName + '-vendors'} label='Vendors' value={this.handleValues(control, 'vendors')} onChange={this.props.handleChange} />
                                            </Box>
                                        </Flex>
                                    </Panel>
                                </Box>
                            )
                        }
                    })
                }
                </Flex>
            </Section>
        )
    }
}

ControlsListValuesItem.propTypes = {
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
      nextPage: PropTypes.func,
      handleChange: PropTypes.func,
};

export default ControlsListValuesItem;
