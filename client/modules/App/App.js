import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import classnames from 'classnames';
import _,{ assign } from 'lodash';
// Import Style
import styles from './App.css';

// Import Components
import Helmet from 'react-helmet';
import DevTools from './components/DevTools';

// Import Selectors
import { getCurrentStep } from './AppReducer';

// Import Actions
import { toggleAddPost } from './AppActions';
import { switchLanguage } from '../../modules/Intl/IntlActions';

import VisualizationPage from '../Onboarding/pages/VisualizationPage';

import Sidebar from 'grommet/components/Sidebar';
import Box from 'grommet/components/Box';
import Menu from 'grommet/components/Menu';
import Anchor from 'grommet/components/Anchor';
import Search from 'grommet/components/Search';
import MenuFooter from 'grommet/components/Footer';
import Button from 'grommet/components/Button';
import Company from 'grommet/components/icons/base/Organization';
import Security from 'grommet/components/icons/base/ShieldSecurity';
import Survey from 'grommet/components/icons/base/Compliance';
import Modeling from 'grommet/components/icons/base/PieChart';
import Reporting from 'grommet/components/icons/base/Scorecard';
import Split from 'grommet/components/Split';
import Section from 'grommet/components/Section';
import { Scrollbars } from 'react-custom-scrollbars';
import ProgressSteps from 'react-progress-steps';
import Meter from 'grommet/components/Meter';
import Value from 'grommet/components/Value';
import { Wave } from 'better-react-spinkit';
import Container from 'grommet/components/App';
import Header from 'grommet/components/Header';
import Heading from 'grommet/components/Heading';
import Title from 'grommet/components/Title';
import Image from 'grommet/components/Image';
import Logo from '../../images/PharosLogoWhite.png'
import Tabs from 'grommet/components/Tabs';
import Tab from 'grommet/components/Tab';

const scrollHeight = () => {
    let viewHeight = window.innerHeight - 72;
    return viewHeight
}

export class App extends Component {
  constructor(props) {
    super(props);
    this.state = { isMounted: false, isLoading: true, activeTab: 0, activeSubNav: null };
  }

  componentDidMount() {
    this.handleActive();
    this.handleActiveTab = this.handleActiveTab.bind(this);
    this.handleActiveSubNav = this.handleActiveSubNav.bind(this);
  }

  getChildContext () {
    return {
      rebass: {
        colors: {primary: '#3f51b5'}
      }
    }
  }

  handleActive = () => {
      setTimeout(function() { this.setState({isMounted: true, isLoading: false}); }.bind(this), 1000);
  }

  toggleAddPostSection = () => {
    this.props.dispatch(toggleAddPost());
  };

  handleActiveTab = (event) => {
    const newTabValue = event.target.getAttribute('for').split('-')[1];
    var stateCopy = _.assign({}, this.state);
    stateCopy.activeTab = newTabValue;

    this.setState(stateCopy);
  };

  handleActiveSubNav = (event) => {
    const newNavValue = event.target.innerText;
    var stateCopy = _.assign({}, this.state);
    stateCopy.activeSubNav = newNavValue;

    this.setState(stateCopy);
  };

  render() {
      const percentComplete = Math.round(this.props.currentStep * 16.67);
      if(this.state.isLoading) {
          return (
              <Wave size={100} color='#3f51b5' />
          )
      } else {
          return (
            <div>
              {this.state.isMounted && !window.devToolsExtension && process.env.NODE_ENV === 'development' && <DevTools />}
              <div>
                <Helmet
                  title="Test"
                  titleTemplate="%s"
                  meta={[
                    { charset: 'utf-8' },
                    {
                      'http-equiv': 'X-UA-Compatible',
                      content: 'IE=edge',
                    },
                    {
                      name: 'viewport',
                      content: 'width=device-width, initial-scale=1',
                    },
                  ]}
                />
                <Box justify='start' align='stretch' pad='none' flex='grow' style={{ backgroundColor: '#515151', zIndex: '10' }}>
                    <Box justify='start' align='start' direction='row' style={{width: '50%'}} pad='small' />
                    <Box justify='start' align='start' direction='row' className={classnames(styles['main-header'])} pad='small'>
                        <Box justify='start' align='start' direction='row' style={{width: '25%' }} pad='none'>
                            <Title style={{ padding: '20px 0', margin: '5px 15px 0' }}>
                                <Image src={ `${Logo}` } fit='contain' className={classnames(styles['main-logo'])}
                                    size='small' alt='Home' />
                            </Title>
                        </Box>
                        <Box justify='start' align='start' direction='row' className={classnames(styles['main-tabs'])} pad='none'>
                            <Tabs>
                                <Tab title='First Title' className={this.state.activeTab == 0 ? classnames(styles['active-tab']) : classnames(styles['notActive-tab'])} onClick={this.handleActiveTab} />
                                <Tab title='Second Title' className={this.state.activeTab == 1 ? classnames(styles['active-tab']) : classnames(styles['notActive-tab'])} onClick={this.handleActiveTab} />
                                <Tab title='Third Title' className={this.state.activeTab == 2 ? classnames(styles['active-tab']) : classnames(styles['notActive-tab'])} onClick={this.handleActiveTab} />
                                <Tab title='Fourth Title' className={this.state.activeTab == 3 ? classnames(styles['active-tab']) : classnames(styles['notActive-tab'])} onClick={this.handleActiveTab} />
                            </Tabs>
                        </Box>
                        <Box justify='end' align='end' direction='row' style={{width: '25%' }} pad='none'>
                            <Search className={classnames(styles['main-search'])} inline={true} fill={false} size='medium' placeHolder='Search'
                                dropAlign={{"right": "right"}} />
                        </Box>
                    </Box>
                    <Box justify='start' align='start' direction='row' wrap={true} className={classnames(styles['main-subNav'])} pad={{ horizontal: 'small' }}>
                        <Box direction='row' justify='start' align='center' wrap={true} pad={{ horizontal: 'medium' }} margin={{ horizontal: 'small' }} className={(this.state.activeSubNav != null && this.state.activeSubNav == "Subnavigation1") ? classnames(styles['active-nav']) : classnames('')} onClick={this.handleActiveSubNav}>
                            <Heading tag='h4' margin='small' strong={false}>
                                Subnavigation1
                            </Heading>
                            <span className={styles['triangle']}></span>
                        </Box>
                        <Box direction='row' justify='start' align='center' wrap={true} pad={{ horizontal: 'medium' }} margin={{ horizontal: 'small' }} className={(this.state.activeSubNav != null && this.state.activeSubNav == "Subnavigation2") ? classnames(styles['active-nav']) : classnames('')} onClick={this.handleActiveSubNav}>
                            <Heading tag='h4' margin='small' strong={false}>
                                Subnavigation2
                            </Heading>
                            <span className={styles['triangle']}></span>
                        </Box>
                        <Box direction='row' justify='start' align='center' wrap={true} pad={{ horizontal: 'medium' }} margin={{ horizontal: 'small' }} className={(this.state.activeSubNav != null && this.state.activeSubNav == "Subnavigation3") ? classnames(styles['active-nav']) : classnames('')} onClick={this.handleActiveSubNav}>
                            <Heading tag='h4' margin='small' strong={false}>
                                Subnavigation3
                            </Heading>
                            <span className={styles['triangle']}></span>
                        </Box>
                        <Box direction='row' justify='start' align='center' wrap={true} pad={{ horizontal: 'medium' }} margin={{ horizontal: 'small' }} className={(this.state.activeSubNav != null && this.state.activeSubNav == "Subnavigation4") ? classnames(styles['active-nav']) : classnames('')} onClick={this.handleActiveSubNav}>
                            <Heading tag='h4' margin='small' strong={false}>
                                Subnavigation4
                            </Heading>
                            <span className={styles['triangle']}></span>
                        </Box>
                        <Box direction='row' justify='start' align='center' wrap={true} pad={{ horizontal: 'medium' }} margin={{ horizontal: 'small' }} className={(this.state.activeSubNav != null && this.state.activeSubNav == "Subnavigation5") ? classnames(styles['active-nav']) : classnames('')} onClick={this.handleActiveSubNav}>
                            <Heading tag='h4' margin='small' strong={false}>
                                Subnavigation5
                            </Heading>
                            <span className={styles['triangle']}></span>
                        </Box>
                    </Box>
                </Box>
                <Split priority='left' flex='left'>
                    <Scrollbars autoHide autoHideTimeout={1000} autoHideDuration={200}>
                        <Box colorIndex='light-1' justify='center' align='center' style={{ padding: '0 24px' }}>
                          {this.props.children}
                        </Box>
                    </Scrollbars>
                    <Split flex='right'>
                        <Box colorIndex='light-2' justify='start' align='stretch' style={{height: '100vh', width: '25vw', maxWidth: '400px', padding: '24px'}}>
                            <div style={{width: '100%'}}>
                                <Value value={percentComplete} units='%' align='start' style={{marginRight: '10px'}}/>
                                <Meter value={percentComplete} onActive={this.handleActive}/>
                            </div>
                          <VisualizationPage />
                        </Box>
                    </Split>
                </Split>
              </div>
            </div>
          );
      }
  }
}

App.propTypes = {
  children: PropTypes.object.isRequired,
  dispatch: PropTypes.func.isRequired,
  currentStep: PropTypes.number
};

App.childContextTypes = {
  rebass: PropTypes.object
}

// Retrieve data from store as props
function mapStateToProps(state) {
  return {
    currentStep: getCurrentStep(state)
  };
}

export default connect(mapStateToProps)(App);
