import React, { PropTypes, Component } from 'react';
import { Panel, PanelHeader, Section, Input, Textarea } from 'rebass';
import _, { assign } from 'lodash';
import { Flex, Box } from 'reflexbox';

class OverviewCompanyData extends Component {
    constructor(props) {
        super(props);

        this.state = _.assign({}, {
            item1: '',
            item2: '',
            item3: '',
            item4: '',
            item5: '',
            item6: '',
            item7: '',
            item8: '',
            item9: '',
            item10: '',
            item11: '',
            item12: '',
            item13: '',
            item14: '',
            item15: ''
        });

        this.handleChange = this.handleChange.bind(this)
    }

    componentDidMount() {

    }

    handleChange (e) {
        this.setState({ [e.target.name]: e.target.value });
  }

    render() {
        return (
            <Section pl={1} pr={0} py={0}>
                <Flex align='center' wrap gutter={2}>
                    <Box px={2} col={12}>
                        <Flex>
                            <Box col={12}>
                                <Input rounded={false} style={{ marginLeft: '10px' }} name='item1' label='' value={this.state.item1} onChange={this.handleChange} />
                            </Box>
                        </Flex>
                        <Flex>
                            <Box col={6}>
                                <Input rounded={false} style={{ marginLeft: '10px' }} name='item2' label='' value={this.state.item2} onChange={this.handleChange} />
                            </Box>
                            <Box col={6}>
                                <Input rounded={false} style={{ marginLeft: '10px' }} name='item3' label='' value={this.state.item3} onChange={this.handleChange} />
                            </Box>
                        </Flex>
                        <Flex>
                            <Box col={6}>
                                <Input rounded={false} style={{ marginLeft: '10px' }} name='item4' label='' value={this.state.item4} onChange={this.handleChange} />
                            </Box>
                            <Box col={6}>
                                <Input rounded={false} style={{ marginLeft: '10px' }} name='item5' label='' value={this.state.item5} onChange={this.handleChange} />
                            </Box>
                        </Flex>
                        <Flex>
                            <Box col={6}>
                                <Input rounded={false} style={{ marginLeft: '10px' }} name='item6' label='' value={this.state.item6} onChange={this.handleChange} />
                            </Box>
                            <Box col={6}>
                                <Input rounded={false} style={{ marginLeft: '10px' }} name='item7' label='' value={this.state.item7} onChange={this.handleChange} />
                            </Box>
                        </Flex>
                        <Flex>
                            <Box col={4}>
                                <Textarea rounded={false} style={{ marginLeft: '10px' }} name='item8' label='Question 1' value={this.state.item8} onChange={this.handleChange} />
                            </Box>
                            <Box col={4}>
                                <Textarea rounded={false} style={{ marginLeft: '10px'}} name='item9' label='Question 2' value={this.state.item9} onChange={this.handleChange} />
                            </Box>
                            <Box col={4}>
                                <Textarea rounded={false} style={{ marginLeft: '10px'}} name='item10' label='Question 3' value={this.state.item10} onChange={this.handleChange} />
                            </Box>
                        </Flex>
                        <Flex>
                            <Box col={4}>
                                <Textarea rounded={false} style={{ marginLeft: '10px' }} name='item11' label='Question 4' value={this.state.item11} onChange={this.handleChange} />
                            </Box>
                            <Box col={4}>
                                <Textarea rounded={false} style={{ marginLeft: '10px' }} name='item12' label='Question 5' value={this.state.item12} onChange={this.handleChange} />
                            </Box>
                            <Box col={4}>
                                <Textarea rounded={false} style={{ marginLeft: '10px' }} name='item13' label='Question 6' value={this.state.item13} onChange={this.handleChange} />
                            </Box>
                        </Flex>
                        <Flex>
                            <Box col={4}>
                                <Textarea rounded={false} style={{ marginLeft: '10px' }} name='item14' label='Question 7' value={this.state.item14} onChange={this.handleChange} />
                            </Box>
                            <Box col={4}>
                                <Textarea rounded={false} style={{ marginLeft: '10px' }} name='item15' label='Question 8' value={this.state.item15} onChange={this.handleChange} />
                            </Box>
                        </Flex>
                    </Box>
                </Flex>
            </Section>
        );
    }
}

export default OverviewCompanyData;
