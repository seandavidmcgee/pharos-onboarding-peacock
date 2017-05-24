import React, { PropTypes, Component } from 'react';
import Box from 'grommet/components/Box';
import Heading from 'grommet/components/Heading';
import Header from 'grommet/components/Header';
import { Button, ButtonOutline } from 'rebass';
import { withRouter } from 'react-router';

// Import Components
import CrownJewelsListItem from './CrownJewelsListItem/CrownJewelsListItem';

class CrownJewelsList extends Component {
    constructor(props) {
      super(props);
    }

    render() {
        return (
            <Box justify='start' align='stretch' pad='small' flex='grow'>
                <Header pad={{"vertical": "none"}}>
                    <Box justify='start' align='start' direction='row' style={{width: '50%'}}>
                        <Heading tag='h3' margin='small' strong={true}>
                            What are your...
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
                    {
                        this.props.crownJewels.map((crownJewel, index) => (
                          <CrownJewelsListItem
                            crownJewel={crownJewel}
                            key={index}
                          />
                        ))
                    }
            </Box>
        );
    }
}

CrownJewelsList.propTypes = {
  crownJewels: PropTypes.arrayOf(
      React.PropTypes.shape({
        categoryName: PropTypes.string.isRequired,
        jewels: PropTypes.array.isRequired
  })).isRequired,
  previousPage: PropTypes.func,
  nextPage: PropTypes.func
};

export default CrownJewelsList;
