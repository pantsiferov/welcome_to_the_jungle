import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { push } from 'connected-react-router';
import get from 'lodash.get';

import { Box } from '@welcome-ui/box';
import { InputText } from '@welcome-ui/input-text';
import { Select } from '@welcome-ui/select';

import {
  selectContractTypeReference,
  selectPublishedTimes,
  selectAttributesByGroupToSelect,
} from 'ducks/offers/selectors';
import { selectQueryParamsObject } from 'ducks/router/selectors';
import { stringifyObjectToQueryString } from 'helpers/queryStringHelper';


class FiltersForm extends Component {
  // TODO in production need to debounce
  onSearch = (event) => {
    const { onChangeFilter, filterState } = this.props;
    const value = get(event, 'target.value');
    onChangeFilter({ search: value }, filterState);
  }

  onChangeSearchCriterion = (name) => (value) => {
    const { onChangeFilter, filterState } = this.props;
    onChangeFilter({ [name]: value }, filterState);
  }

  onChangeSearchCriterionGroupBy = (name) => (value) => {
    const { onChangeFilter, filterState, attributesByGroup } = this.props;
    const attribute = attributesByGroup.find((item) => item.value === value);
    onChangeFilter({ [name]: { id: attribute.value, type: attribute.type } }, filterState);
  }

  render() {
    const {
      contractTypes, publishedTimes, filterState, attributesByGroup,
    } = this.props;
    return (
      <form>
        <Box
          display="flex"
          justifyContent="space-evenly"
          alignItems="center"
          height="100px"
        >
          <InputText
            id="search"
            name="search"
            placeholder="Your dream job"
            onChange={this.onSearch}
            connected={false}
            value={filterState.search}
          />
          <Select
            id="contractTypes"
            options={contractTypes}
            name="contractTypes"
            placeholder="Contract type"
            value={filterState.contractTypes}
            onChange={this.onChangeSearchCriterion('contractTypes')}
          />

          <Select
            id="date"
            options={publishedTimes}
            name="date"
            placeholder="Date"
            value={filterState.date}
            onChange={this.onChangeSearchCriterion('date')}
          />

          <Select
            id="groupBy"
            options={attributesByGroup}
            name="groupBy"
            placeholder="Group by"
            value={Number(get(filterState, 'groupBy.id'))}
            onChange={this.onChangeSearchCriterionGroupBy('groupBy')}
          />
        </Box>
      </form>
    );
  }
}

FiltersForm.propTypes = {
  contractTypes: PropTypes.arrayOf(PropTypes.object),
  publishedTimes: PropTypes.arrayOf(PropTypes.object),
  attributesByGroup: PropTypes.arrayOf(PropTypes.object),
  filterState: PropTypes.shape({
    search: PropTypes.string,
    contractTypes: PropTypes.string,
    date: PropTypes.string,
    groupBy: PropTypes.object,
  }),
  onChangeFilter: PropTypes.func.isRequired,
};

FiltersForm.defaultProps = {
  contractTypes: [],
  publishedTimes: [],
  attributesByGroup: {},
  filterState: {},
};


const mapStateToProps = (state) => ({
  filterState: selectQueryParamsObject(state),
  contractTypes: selectContractTypeReference(state),
  attributesByGroup: selectAttributesByGroupToSelect(state),
  publishedTimes: selectPublishedTimes(state),
});


const mapDispatchToProps = (dispatch) => ({
  onChangeFilter: (value, filterState) => {
    dispatch(push({
      pathname: '',
      search: stringifyObjectToQueryString({
        ...filterState,
        ...value,
      }),
    }));
  },
});

export default compose(
  withRouter,
  connect(mapStateToProps, mapDispatchToProps),
)(FiltersForm);
