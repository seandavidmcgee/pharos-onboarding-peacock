import React, { Component, PropTypes } from 'react';
import { injectIntl, intlShape, FormattedMessage } from 'react-intl';

// Import Style
import styles from './CrownJewelCreateWidget.css';

export class CrownJewelCreateWidget extends Component {
  addCrownJewel = () => {
    const nameRef = this.refs.name;
    const categoryRef = this.props.crownJewelCategory + "s";
    const contentRef = this.refs.content;
    if (nameRef.value && contentRef.value) {
      this.props.addCrownJewel(nameRef.value, categoryRef, contentRef.value);
      nameRef.value = this.categoryRef = contentRef.value = '';
    }
  };

  render() {
    const cls = `${styles.form} ${(this.props.showAddCrownJewel ? styles.appear : '')}`;
    return (
      <div className={cls}>
        <div className={styles['form-content']}>
          <h2 className={styles['form-title']}>Add a {this.props.crownJewelCategory}</h2>
          <input placeholder="Name" className={styles['form-field']} ref="name" />
          <textarea placeholder="Description" className={styles['form-field']} ref="content" />
          <a className={styles['post-submit-button']} onClick={this.addCrownJewel}>Add</a>
        </div>
      </div>
    );
  }
}

CrownJewelCreateWidget.propTypes = {
  crownJewelCategory: PropTypes.string,
  addCrownJewel: PropTypes.func,
  showAddCrownJewel: PropTypes.bool,
  intl: intlShape.isRequired,
};

export default injectIntl(CrownJewelCreateWidget);
