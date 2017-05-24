import React, { Component, PropTypes } from 'react';
import { injectIntl, intlShape, FormattedMessage } from 'react-intl';
import _, { assign } from 'lodash';

// Import Style
import styles from '../CrownJewelCreateWidget/CrownJewelCreateWidget.css';

export class CrownJewelEditWidget extends Component {
    constructor(props) {
        super(props);
        this.state = {_id: '', jewel: '', description: ''};

        this.handleContentChange = this.handleContentChange.bind(this);
        this.handleNameChange = this.handleNameChange.bind(this);
    }

    componentWillReceiveProps(nextProps) {
        if(nextProps.showEditCrownJewel) {
            var stateCopy = _.assign({}, this.state);
            stateCopy._id = nextProps.crownJewelId;
            stateCopy.jewel = nextProps.crownJewelName;
            stateCopy.description = nextProps.crownJewelContent;

            this.setState(stateCopy);
        }
    }

    handleContentChange(event) {
        this.setState({description: event.target.value});
    }

    handleNameChange(event) {
        this.setState({jewel: event.target.value});
    }

  editCrownJewel = () => {
       this.props.editCrownJewel(this.props.crownJewelCategory, this.state);
  };

  render() {
    const cls = `${styles.form} ${(this.props.showEditCrownJewel ? styles.appear : '')}`;
    return (
      <div className={cls}>
        <div className={styles['form-content']}>
          <h2 className={styles['form-title']}>Edit a {this.props.crownJewelCategory}</h2>
          <input type="text" value={this.state.jewel == '' ? this.props.crownJewelName: this.state.jewel} onChange={this.handleNameChange} className={styles['form-field']} ref="name" />
          <textarea type="text" value={this.state.description == '' ? this.props.crownJewelContent: this.state.description} onChange={this.handleContentChange} className={styles['form-field']} ref="content" />
          <a className={styles['post-submit-button']} onClick={this.editCrownJewel}>Save</a>
        </div>
      </div>
    );
  }
}

CrownJewelEditWidget.propTypes = {
  crownJewelId: PropTypes.string,
  crownJewelName: PropTypes.string,
  crownJewelContent: PropTypes.string,
  crownJewelCategory: PropTypes.string,
  editCrownJewel: PropTypes.func,
  showEditCrownJewel: PropTypes.bool,
  intl: intlShape.isRequired,
};

export default injectIntl(CrownJewelEditWidget);
