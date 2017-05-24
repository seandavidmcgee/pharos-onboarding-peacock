import React, { PropTypes, Component } from 'react';
import { FormattedMessage } from 'react-intl';
import Table from 'grommet/components/Table';
import TableRow from 'grommet/components/TableRow';
import Edit from 'react-icons/lib/go/pencil';
import Info from 'react-icons/lib/go/info';
import Trash from 'react-icons/lib/go/trashcan';
import Add from 'react-icons/lib/md/add-circle-outline';
import { connect } from 'react-redux';
import ReactTooltip from 'react-tooltip'

import CrownJewelCreateWidget from '../../components/CrownJewelCreateWidget/CrownJewelCreateWidget';
import CrownJewelEditWidget from '../../components/CrownJewelEditWidget/CrownJewelEditWidget';
import { addCrownJewelRequest, deleteCrownJewelRequest, editCrownJewelRequest} from '../../OnboardingActions';

import { getShowAddCrownRevenue, getShowAddCrownTrade, getShowAddCrownExecutive,
getShowAddCrownCritical, getShowAddCrownRegulated, getShowEditCrownRevenue, getShowEditCrownTrade,
getShowEditCrownExecutive, getShowEditCrownCritical, getShowEditCrownRegulated, getEditCrownId, getEditCrownName,
getEditCrownDescription } from '../../../App/AppReducer';

import { toggleAddCrownRevenue, toggleAddCrownTrade, toggleAddCrownExecutive,
toggleAddCrownCritical, toggleAddCrownRegulated, toggleEditCrownRevenue, toggleEditCrownTrade, toggleEditCrownExecutive,
toggleEditCrownCritical, toggleEditCrownRegulated  } from '../../../App/AppActions';

// Import Style
import styles from './CrownJewelsListItem.css';

class CrownJewelsListItem extends Component {
    constructor(props) {
      super(props);
    }

    toggleAddCrownJewelSection = (category) => {
        switch (category) {
            case "Revenue Engine":
                this.props.dispatch(toggleAddCrownRevenue());
                break;
            case "Trade Secret":
                this.props.dispatch(toggleAddCrownTrade());
                break;
            case "Executive Command and Control":
                this.props.dispatch(toggleAddCrownExecutive());
                break;
            case "Critical Operation":
                this.props.dispatch(toggleAddCrownCritical());
                break;
            case "Regulated Asset":
                this.props.dispatch(toggleAddCrownRegulated());
                break;
        }
    };

    toggleEditCrownJewelSection = (id, name, category, content) => {
        switch (category) {
            case "Revenue Engine":
                this.props.dispatch(toggleEditCrownRevenue(id, name, content));
                break;
            case "Trade Secret":
                this.props.dispatch(toggleEditCrownTrade(id, name, content));
                break;
            case "Executive Command and Control":
                this.props.dispatch(toggleEditCrownExecutive(id, name, content));
                break;
            case "Critical Operation":
                this.props.dispatch(toggleEditCrownCritical(id, name, content));
                break;
            case "Regulated Asset":
                this.props.dispatch(toggleEditCrownRegulated(id, name, content));
                break;
        }
    };

    handleAddCrown= (name, category, content) => {
    let crownJewelCategory = category.charAt(category.length-1)
        == "s" ? category.substr(0, category.length-1) : category;
      this.toggleAddCrownJewelSection(crownJewelCategory);
      this.props.dispatch(addCrownJewelRequest({ name, category, content }));
    };

    handleDeleteCrown = (content) => {
        this.props.dispatch(deleteCrownJewelRequest({ content }));
    }

    handleEditCrown = (category, content) => {
        let crownJewelCategory = category.charAt(category.length-1)
            == "s" ? category : category + "s";
        this.toggleEditCrownJewelSection(content._id, content.jewel, category, content.description);
        this.props.dispatch(editCrownJewelRequest(crownJewelCategory, content));
    }

    addCreateWidget = (category) => {
        switch (this.props, category) {
            case this.props.showAddCrownRevenue && "Revenue Engine":
                return (<CrownJewelCreateWidget addCrownJewel={this.handleAddCrown} crownJewelCategory={category} showAddCrownJewel ={true} />)
            case this.props.showAddCrownTrade && "Trade Secret":
                return (<CrownJewelCreateWidget addCrownJewel={this.handleAddCrown} crownJewelCategory={category} showAddCrownJewel ={true} />)
            case this.props.showAddCrownExecutive && "Executive Command and Control":
                return (<CrownJewelCreateWidget addCrownJewel={this.handleAddCrown} crownJewelCategory={category} showAddCrownJewel ={true} />)
            case this.props.showAddCrownCritical && "Critical Operation":
                return (<CrownJewelCreateWidget addCrownJewel={this.handleAddCrown} crownJewelCategory={category} showAddCrownJewel ={true} />)
            case this.props.showAddCrownRegulated && "Regulated Asset":
                return (<CrownJewelCreateWidget addCrownJewel={this.handleAddCrown} crownJewelCategory={category} showAddCrownJewel ={true} />)
            default:
                return (<CrownJewelCreateWidget addCrownJewel={this.handleAddCrown} crownJewelCategory={category} showAddCrownJewel ={false} />)
        }
    }

    editCreateWidget = (category) => {
        switch (this.props, category) {
            case this.props.showEditCrownRevenue && "Revenue Engine":
                return (<CrownJewelEditWidget editCrownJewel={this.handleEditCrown} crownJewelId={this.props.editId} crownJewelName={this.props.editName} crownJewelCategory={category} crownJewelContent={this.props.editDescription} showEditCrownJewel ={true} />)
            case this.props.showEditCrownTrade && "Trade Secret":
                return (<CrownJewelEditWidget editCrownJewel={this.handleEditCrown} crownJewelId={this.props.editId} crownJewelName={this.props.editName} crownJewelCategory={category} crownJewelContent={this.props.editDescription} showEditCrownJewel ={true} />)
            case this.props.showEditCrownExecutive && "Executive Command and Control":
                return (<CrownJewelEditWidget editCrownJewel={this.handleEditCrown} crownJewelId={this.props.editId} crownJewelName={this.props.editName} crownJewelCategory={category} crownJewelContent={this.props.editDescription} showEditCrownJewel ={true} />)
            case this.props.showEditCrownCritical && "Critical Operation":
                return (<CrownJewelEditWidget editCrownJewel={this.handleEditCrown} crownJewelId={this.props.editId} crownJewelName={this.props.editName} crownJewelCategory={category} crownJewelContent={this.props.editDescription} showEditCrownJewel ={true} />)
            case this.props.showEditCrownRegulated && "Regulated Asset":
                return (<CrownJewelEditWidget editCrownJewel={this.handleEditCrown} crownJewelId={this.props.editId} crownJewelName={this.props.editName} crownJewelCategory={category} crownJewelContent={this.props.editDescription} showEditCrownJewel ={true} />)
            default:
                return (<CrownJewelEditWidget editCrownJewel={this.handleEditCrown} crownJewelId={this.props.editId} crownJewelCategory={category} showEditCrownJewel ={false} />)
        }
    }
    render() {
        let crownJewelCategory = this.props.crownJewel.categoryName.charAt(this.props.crownJewel.categoryName.length-1) == 's' ?
        this.props.crownJewel.categoryName.substr(0, this.props.crownJewel.categoryName.length -1) : this.props.crownJewel.categoryName;

        return (
          <div className={styles['single-category']}>
            <h3 className={styles['jewel-category']}>
              {this.props.crownJewel.categoryName}
            </h3>
            <Table className={styles['jewel-table']}>
                  <tbody>
                    {
                      this.props.crownJewel.jewels.map((child, index) => (
                          <TableRow key={index}>
                              <td>
                                  <p className={styles['jewel-name']}>{child.jewel}</p>
                              </td>
                              <td className='secondary'>
                                  <Info data-tip data-for={child.jewel} className={styles['jewel-control']} />
                                  <ReactTooltip id={child.jewel} place="top" type="dark" effect="float">
                                      <span>{child.description}</span>
                                  </ReactTooltip>
                                  <Edit onClick={this.toggleEditCrownJewelSection.bind(this, child._id, child.jewel, crownJewelCategory, child.description)} className={styles['jewel-control']} />
                                  <Trash onClick={this.handleDeleteCrown.bind(this, child )} />
                              </td>
                          </TableRow>
                      ))
                    }
                    <TableRow>
                        <td onClick={this.toggleAddCrownJewelSection.bind(this, crownJewelCategory)}>
                          <p className={styles['jewel-add']}>
                          <Add size={24} className={styles['jewel-control-add']} />Add a {crownJewelCategory}</p>
                        </td>
                    </TableRow>
                  </tbody>
            </Table>
            {this.editCreateWidget(crownJewelCategory)}
            {this.addCreateWidget(crownJewelCategory)}
          </div>
        );
    }
}

function mapStateToProps(state) {
  return {
    showAddCrownRevenue: getShowAddCrownRevenue(state),
    showAddCrownTrade: getShowAddCrownTrade(state),
    showAddCrownExecutive: getShowAddCrownExecutive(state),
    showAddCrownCritical: getShowAddCrownCritical(state),
    showAddCrownRegulated: getShowAddCrownRegulated(state),
    showEditCrownRevenue: getShowEditCrownRevenue(state),
    showEditCrownTrade: getShowEditCrownTrade(state),
    showEditCrownExecutive: getShowEditCrownExecutive(state),
    showEditCrownCritical: getShowEditCrownCritical(state),
    showEditCrownRegulated: getShowEditCrownRegulated(state),
    editId: getEditCrownId(state),
    editName: getEditCrownName(state),
    editDescription: getEditCrownDescription(state),
  };
}

CrownJewelsListItem.propTypes = {
  dispatch: PropTypes.func.isRequired,
  showAddCrownRevenue: PropTypes.bool,
  showAddCrownTrade: PropTypes.bool,
  showAddCrownExecutive: PropTypes.bool,
  showAddCrownCritical: PropTypes.bool,
  showAddCrownRegulated: PropTypes.bool,
  showEditCrownRevenue: PropTypes.bool,
  showEditCrownTrade: PropTypes.bool,
  showEditCrownExecutive: PropTypes.bool,
  showEditCrownCritical: PropTypes.bool,
  showEditCrownRegulated: PropTypes.bool,
  editId: PropTypes.string,
  editName: PropTypes.string,
  editDescription: PropTypes.string,
  crownJewel: PropTypes.shape({
    categoryName: PropTypes.string.isRequired,
    jewels: PropTypes.array.isRequired
  })
};

export default connect(mapStateToProps)(CrownJewelsListItem);
