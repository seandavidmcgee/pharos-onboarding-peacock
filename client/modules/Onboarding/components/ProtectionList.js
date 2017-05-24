import React, { PropTypes, Component } from 'react';
import _, { map, find } from 'lodash';
import Box from 'grommet/components/Box';
import Heading from 'grommet/components/Heading';
import LinkPrevious from 'grommet/components/icons/base/LinkPrevious';
import LinkNext from 'grommet/components/icons/base/LinkNext';
import { Button, ButtonOutline } from 'rebass';
import Header from 'grommet/components/Header';
import Label from 'grommet/components/Label';
import Slider, { Range } from 'rc-slider';

const tableStyle = {
  marginBottom: '15px'
};

const labelStyle = {
    display: 'inline-block',
    margin: '18px 0 -5px 0',
    fontSize: '15px',
    fontWeight: '600'
}

const sectionStyle = {
    display: 'inline-block',
    marginTop: '-3px',
    fontSize: '15px',
    fontWeight: '600',
    textAlign: 'right'
}

const marks = {
  '0': '1',
  0: <div><Heading tag='h4' strong={true}>1</Heading><p style={tableStyle}>10Ms</p><p style={tableStyle}>Hobbyist</p></div>,
  20: <div><Heading tag='h4' strong={true}>2</Heading><p style={tableStyle}>1Ms</p><p style={tableStyle}>Opportunist</p></div>,
  40: <div><Heading tag='h4' strong={true}>3</Heading><p style={tableStyle}>100Ks</p><p style={tableStyle}>Hacker</p></div>,
  60: <div><Heading tag='h4' strong={true}>4</Heading><p style={tableStyle}>10Ks</p><p style={tableStyle}>Org. Crime</p></div>,
  80: <div><Heading tag='h4' strong={true}>5</Heading><p style={tableStyle}>1,000s</p><p style={tableStyle}>Espionage</p></div>,
  100: <div><Heading tag='h4' strong={true}>6</Heading><p style={tableStyle}>100s</p><p style={tableStyle}>Nation St.</p></div>,
};

class ProtectionList extends Component {
    constructor(props) {
      super(props);
       this.state = {
           value: 0,
           selections : []
       };
    }

    componentWillReceiveProps(nextProps) {
        if(nextProps.protections !== this.props.protections) {
            this.setInitialStates(nextProps.protections)
        }
    }

    setInitialStates(protections) {
        var stateCopy = _.assign({}, this.state);
        protections.map(function(protect) {
            stateCopy.selections.push({
                '_id': protect._id, 'protection': protect.protection, 'stateName': protect.stateName,
                'externalCyberDefault': protect.externalCyberDefault, 'externalCyberProvided': protect.externalCyberProvided, 'externalPhysicalDefault': protect.externalPhysicalDefault, 'externalPhysicalProvided': protect.externalPhysicalProvided,
                'externalSocialDefault': protect.externalSocialDefault, 'externalSocialProvided': protect.externalSocialProvided, 'externalThirdDefault': protect.externalThirdDefault, 'externalThirdProvided': protect.externalThirdProvided,
                'internalCyberDefault': protect.internalCyberDefault, 'internalCyberProvided': protect.internalCyberProvided, 'internalPhysicalDefault': protect.internalPhysicalDefault, 'internalPhysicalProvided': protect.internalPhysicalProvided,
                'internalSocialDefault': protect.internalSocialDefault, 'internalSocialProvided': protect.internalSocialProvided, 'internalPrivDefault': protect.internalPrivDefault, 'internalPrivProvided': protect.internalPrivProvided
            });
        });

        this.setState(stateCopy);
    }

    onSliderChange = (type, event) => {
        var stateCopy = _.assign({}, this.state);
        let matchedObject = stateCopy.selections.find((object) => {
            return object._id == stateCopy.value
        });
        matchedObject[type] =String(((event + 20) / 20));
        this.setState(stateCopy);
    }

    handleStateOfProtections = () => {
        if(this.state.value != this.state.selections.length-1) {
            var stateCopy = _.assign({}, this.state);
            stateCopy.value = stateCopy.value+1

            this.setState(stateCopy);
        } else {
            this.props.nextPage(this.state.selections);
        }
    }

    provideStateRenderValues = (surface) => {
        if(this.state.selections.length > 0) {
            let matchedObject = this.state.selections.find((object) => {
                return object._id == this.state.value
            });

            switch (surface) {
                case 'externalCyber' :
                    return matchedObject.externalCyberProvided != 'null' ? Number(matchedObject.externalCyberProvided - 1) *20 : Number(matchedObject.externalCyberDefault) *20;
                case 'externalPhysical':
                    return matchedObject.externalPhysicalProvided != 'null' ? Number(matchedObject.externalPhysicalProvided - 1) *20 : Number(matchedObject.externalPhysicalDefault) *20;
                case 'externalSocial':
                    return matchedObject.externalSocialProvided != 'null' ? Number(matchedObject.externalSocialProvided - 1) *20  : Number(matchedObject.externalSocialDefault) *20;
                case 'externalThird':
                    return matchedObject.externalThirdProvided != 'null' ? Number(matchedObject.externalThirdProvided - 1) *20  : Number(matchedObject.externalThirdDefault) *20;
                case 'internalCyber' :
                    return matchedObject.internalCyberProvided != 'null' ? Number(matchedObject.internalCyberProvided - 1) *20  : Number(matchedObject.internalCyberDefault) *20;
                case 'internalPhysical':
                    return matchedObject.internalPhysicalProvided != 'null' ? Number(matchedObject.internalPhysicalProvided - 1) *20  : Number(matchedObject.internalPhysicalDefault) *20;
                case 'internalSocial':
                    return matchedObject.internalSocialProvided != 'null' ? Number(matchedObject.internalSocialProvided - 1) *20  : Number(matchedObject.internalSocialDefault) *20;
                case 'internalPriv':
                    return matchedObject.internalPrivProvided != 'null' ? Number(matchedObject.internalPrivProvided - 1) *20  : Number(matchedObject.internalPrivDefault) *20;
            }
        }
    }

    provideStateRenderTitle = () => {
        if(this.state.selections.length > 0) {
            let matchedObject = this.state.selections.find((object) => {
                return object._id == this.state.value
            });
            return matchedObject.stateName
        }
        return ''
    }

    render() {
      return (
        <Box justify='start' align='stretch' pad='small' flex='grow'>
            <Header pad={{"vertical": "none"}}>
                <Box justify='start' align='start' direction='row' style={{width: '50%'}}>
                    <Heading tag='h4' margin='medium' strong={false}>
                        Use this key to answer the following question
                    </Heading>
                </Box>
                <Box justify='end' align='end' direction='row' margin={{ "vertical": "none" }} style={{width: '50%'}}>
                    <ButtonOutline type='button' rounded="left" style={{ marginLeft: -1, color: '#3f51b5' }} onClick={this.props.previousPage}>
                      Back
                    </ButtonOutline>
                    <Button type='button' color="white" inverted rounded="right" style={{ marginLeft: -1, backgroundColor: '#3f51b5' }} onClick={this.handleStateOfProtections}>
                      Next
                    </Button>
                </Box>
            </Header>
            <Box direction='row' justify='start' align='stretch' pad='small' margin='small'>
                <Box direction='column' justify='start' align='start' pad='none' margin={{right: 'large'}}>
                    <Label style={labelStyle}>Sophistication</Label>
                    <Label style={labelStyle}>Population</Label>
                    <Label style={labelStyle}>Perpetrator</Label>
                </Box>
                <Slider style={{display: 'inline-block'}} disabled={true} marks={marks} dots step={20} defaultValue={0} onChange={this.onSliderChange} />
            </Box>
            <Box direction='row' justify='start' align='stretch' wrap={true} pad='none' margin={{top: 'medium'}}>
                <Heading tag='h3' margin='medium' strong={true}>
                    {this.provideStateRenderTitle()}
                </Heading>
            </Box>
            <Heading tag='h4' margin='medium' strong={false}>
                External Exposure
            </Heading>
            <Box direction='row' justify='start' align='stretch' pad='none' margin={{left: 'small'}}>
                <Box style={{width: '7rem'}} direction='column' justify='start' align='end' pad='none' margin={{right: 'large'}}>
                    <Label style={sectionStyle}>Cyber</Label>
                </Box>
                <Slider style={{display: 'inline-block'}} value={this.provideStateRenderValues('externalCyber')} dots step={20} onChange={this.onSliderChange.bind(this, 'externalCyberProvided')} />
            </Box>
            <Box direction='row' justify='start' align='stretch' pad='none' margin={{left: 'small'}}>
                <Box style={{width: '7rem'}} direction='column' justify='start' align='end' pad='none' margin={{right: 'large'}}>
                    <Label style={sectionStyle}>Physical</Label>
                </Box>
                <Slider style={{display: 'inline-block'}} value={this.provideStateRenderValues('externalPhysical')} dots step={20} onChange={this.onSliderChange.bind(this, 'externalPhysicalProvided')} />
            </Box>
            <Box direction='row' justify='start' align='stretch' pad='none' margin={{left: 'small'}}>
                <Box style={{width: '7rem'}} direction='column' justify='start' align='end' pad='none' margin={{right: 'large'}}>
                    <Label style={sectionStyle}>Social</Label>
                </Box>
                <Slider style={{display: 'inline-block'}} value={this.provideStateRenderValues('externalSocial')} dots step={20} onChange={this.onSliderChange.bind(this, 'externalSocialProvided')} />
            </Box>
            <Box direction='row' justify='start' align='stretch' pad='none' margin={{left: 'small'}}>
                <Box style={{width: '7rem'}} direction='column' justify='start' align='end' pad='none' margin={{right: 'large'}}>
                    <Label style={sectionStyle}>3rd Party</Label>
                </Box>
                <Slider style={{display: 'inline-block'}} value={this.provideStateRenderValues('externalThird')} dots step={20} onChange={this.onSliderChange.bind(this, 'externalThirdProvided')} />
            </Box>
            <Heading tag='h4' margin='medium' strong={false}>
                Internal Exposure
            </Heading>
            <Box direction='row' justify='start' align='stretch' pad='none' margin={{left: 'small'}}>
                <Box style={{width: '7rem'}} direction='column' justify='start' align='end' pad='none' margin={{right: 'large'}}>
                    <Label style={sectionStyle}>Cyber</Label>
                </Box>
                <Slider style={{display: 'inline-block'}} value={this.provideStateRenderValues('internalCyber')} dots step={20} onChange={this.onSliderChange.bind(this, 'internalCyberProvided')} />
            </Box>
            <Box direction='row' justify='start' align='stretch' pad='none' margin={{left: 'small'}}>
                <Box style={{width: '7rem'}} direction='column' justify='start' align='end' pad='none' margin={{right: 'large'}}>
                    <Label style={sectionStyle}>Physical</Label>
                </Box>
                <Slider style={{display: 'inline-block'}} value={this.provideStateRenderValues('internalPhysical')} dots step={20} onChange={this.onSliderChange.bind(this, 'internalPhysicalProvided')} />
            </Box>
            <Box direction='row' justify='start' align='stretch' pad='none' margin={{left: 'small'}}>
                <Box style={{width: '7rem'}} direction='column' justify='start' align='end' pad='none' margin={{right: 'large'}}>
                    <Label style={sectionStyle}>Social</Label>
                </Box>
                <Slider style={{display: 'inline-block'}} value={this.provideStateRenderValues('internalSocial')} dots step={20} onChange={this.onSliderChange.bind(this, 'internalSocialProvided')} />
            </Box>
            <Box direction='row' justify='start' align='stretch' pad='none' margin={{left: 'small'}}>
                <Box style={{width: '7rem'}} direction='column' justify='start' align='end' pad='none' margin={{right: 'large'}}>
                    <Label style={sectionStyle}>Privileged</Label>
                </Box>
                <Slider style={{display: 'inline-block'}} value={this.provideStateRenderValues('internalPriv')} dots step={20} onChange={this.onSliderChange.bind(this, 'internalPrivProvided')} />
            </Box>
        </Box>
      );
    }
}

ProtectionList.propTypes = {
    protections: PropTypes.arrayOf(
        PropTypes.shape({
          _id: PropTypes.number,
          protection: PropTypes.string,
          stateName: PropTypes.string,
          externalCyberDefault: PropTypes.string,
          externalCyberProvided: PropTypes.string,
          externalPhysicalDefault: PropTypes.string,
          externalPhysicalProvided: PropTypes.string,
          externalSocialDefault: PropTypes.string,
          externalSocialProvided: PropTypes.string,
          externalThirdDefault: PropTypes.string,
          externalThirdProvided: PropTypes.string,
          internalCyberDefault: PropTypes.string,
          internalCyberProvided: PropTypes.string,
          internalPhysicalDefault: PropTypes.string,
          internalPhysicalProvided: PropTypes.string,
          internalSocialDefault: PropTypes.string,
          internalSocialProvided: PropTypes.string,
          internalPrivDefault: PropTypes.string,
          internalPrivProvided: PropTypes.string
    })),
    previousPage: PropTypes.func,
    nextPage: PropTypes.func
};

export default ProtectionList;
