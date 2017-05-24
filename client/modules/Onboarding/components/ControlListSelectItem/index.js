import React, { PropTypes, Component } from 'react';
import classnames from 'classnames';
import { Button, ButtonOutline } from 'rebass';
import Form from 'grommet/components/Form';
import Header from 'grommet/components/Header';
import RadioButton from 'grommet/components/RadioButton';
import FormField from 'grommet/components/FormField';
import Box from 'grommet/components/Box';
import Heading from 'grommet/components/Heading';

// Import Style
import styles from './ControlsList.css';

class ControlsListSelectItem extends Component {

    render() {
        const selected = classnames(styles['radioPad__wrapper'], styles['radioPad__wrapper--selected']);
        const predictOptions = this.props.controls.map((selection, index) => {
            if (selection.typeid == "Predict") {
                return (
                    <div key={selection.stateName} className={styles['radioPad']}>
                      <div>
                        <label className={selection.providedValue == 'true' ? selected : styles['radioPad__wrapper']}>
                          <input className={styles['radioPad__radio']} type="radio" name={selection.typeid + '-' + index} id={selection.stateName} value={selection.controlName} onChange={this.props.handleChange} />
                          {selection.controlName}
                        </label>
                      </div>
                    </div>
                )
            }
        });
        const preventOptions = this.props.controls.map((selection, index) => {
            if (selection.typeid == "Prevent") {
                return (
                    <div key={selection.stateName} className={styles['radioPad']}>
                      <div>
                        <label className={selection.providedValue == 'true' ? selected : styles['radioPad__wrapper']}>
                          <input className={styles['radioPad__radio']} type="radio" name={selection.typeid + '-' + index} id={selection.stateName} value={selection.controlName} onChange={this.props.handleChange} />
                          {selection.controlName}
                        </label>
                      </div>
                    </div>
                )
            }
        });
        const detectOptions = this.props.controls.map((selection, index) => {
            if (selection.typeid == "Detect") {
                return (
                    <div key={selection.stateName} className={styles['radioPad']}>
                      <div>
                        <label className={selection.providedValue == 'true' ? selected : styles['radioPad__wrapper']}>
                          <input className={styles['radioPad__radio']} type="radio" name={selection.typeid + '-' + index} id={selection.stateName} value={selection.controlName} onChange={this.props.handleChange} />
                          {selection.controlName}
                        </label>
                      </div>
                    </div>
                )
            }
        });
        const respondOptions = this.props.controls.map((selection, index) => {
            if (selection.typeid == "Respond") {
                return (
                    <div key={selection.stateName} className={styles['radioPad']}>
                      <div>
                        <label className={selection.providedValue == 'true' ? selected : styles['radioPad__wrapper']}>
                          <input className={styles['radioPad__radio']} type="radio" name={selection.typeid + '-' + index} id={selection.stateName} value={selection.controlName} onChange={this.props.handleChange} />
                          {selection.controlName}
                        </label>
                      </div>
                    </div>
                )
            }
        });
        return (
            <Form pad='none' style={{width: '100%'}}>
                <Header pad={{"vertical": "none"}}>
                    <Box justify='start' align='start' direction='row' style={{width: '50%'}}>
                        <Heading tag='h3' margin='medium' strong={true}>
                            What security controls have you invested in?
                        </Heading>
                    </Box>
                    <Box justify='end' align='end' direction='row' margin={{ "vertical": "none" }} style={{width: '50%'}}>
                        <ButtonOutline type='button' rounded="left" style={{ marginLeft: -1, color: '#3f51b5' }} onClick={this.props.previousPage}>
                          Back
                        </ButtonOutline>
                        <Button type='button' color="white" inverted rounded="right" style={{ marginLeft: -1, backgroundColor: '#3f51b5' }} onClick={this.props.nextPage}>
                          Next
                        </Button>
                    </Box>
                </Header>
                <FormField label={'Predict Controls'}>
                    {predictOptions}
                </FormField>
                <FormField label={'Prevent Controls'}>
                    {preventOptions}
                </FormField>
                <FormField label={'Detect Controls'}>
                    {detectOptions}
                </FormField>
                <FormField label={'Respond Controls'}>
                    {respondOptions}
                </FormField>
            </Form>
        )
    }
}

ControlsListSelectItem.propTypes = {
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

export default ControlsListSelectItem;
