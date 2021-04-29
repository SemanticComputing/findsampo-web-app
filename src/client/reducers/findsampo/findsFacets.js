import { handleFacetAction } from '../general/facets'

export const INITIAL_STATE = {
  updatedFacet: null,
  facetUpdateID: 0,
  updatedFilter: null,
  facets: {
    findText: {
      id: 'findText',
      // predicate: defined in backend
      distinctValueCount: 0,
      values: [],
      flatValues: [],
      sortBy: null,
      sortDirection: null,
      sortButton: false,
      spatialFilterButton: false,
      isFetching: false,
      searchField: false,
      containerClass: 'one',
      filterType: 'textFilter',
      textFilter: null
    },
    facetObjectType: {
      id: 'facetObjectType',
      // predicate: defined in backend
      distinctValueCount: 0,
      values: [],
      flatValues: [],
      sortBy: 'instanceCount',
      sortDirection: 'desc',
      sortButton: false,
      spatialFilterButton: false,
      pieChartButton: false,
      isFetching: false,
      searchField: true,
      containerClass: 'ten',
      filterType: 'uriFilter',
      uriFilter: null,
      type: 'hierarchical'
    },
    material: {
      id: 'material',
      // predicate: defined in backend
      distinctValueCount: 0,
      values: [],
      flatValues: [],
      sortBy: 'instanceCount',
      sortDirection: 'desc',
      sortButton: false,
      spatialFilterButton: false,
      pieChartButton: true,
      isFetching: false,
      searchField: true,
      containerClass: 'ten',
      filterType: 'uriFilter',
      uriFilter: null,
      type: 'hierarchical'
    },
    place: {
      id: 'place',
      // predicate: defined in backend
      distinctValueCount: 0,
      values: [],
      flatValues: [],
      sortBy: 'instanceCount',
      sortDirection: 'desc',
      sortButton: false,
      spatialFilterButton: false,
      pieChartButton: false,
      isFetching: false,
      searchField: true,
      containerClass: 'ten',
      filterType: 'uriFilter',
      uriFilter: null,
      type: 'hierarchical'
    },
    dateTimespan: {
      id: 'dateTimespan',
      // predicate: defined in backend
      distinctValueCount: 0,
      values: [],
      flatValues: [],
      sortBy: null,
      sortDirection: null,
      sortButton: false,
      spatialFilterButton: false,
      lineChartButton: false,
      isFetching: false,
      searchField: false,
      containerClass: 'four',
      filterType: 'timespanFilter',
      min: null,
      max: null,
      timespanFilter: null,
      type: 'timespan'
    },
    period: {
      id: 'period',
      // predicate: defined in backend
      distinctValueCount: 0,
      values: [],
      flatValues: [],
      sortBy: 'instanceCount',
      sortDirection: 'desc',
      sortButton: false,
      spatialFilterButton: false,
      pieChartButton: false,
      isFetching: false,
      searchField: true,
      containerClass: 'ten',
      filterType: 'uriFilter',
      uriFilter: null,
      type: 'hierarchical'
    },
    ceramicStyle: {
      id: 'ceramicStyle',
      // predicate: defined in backend
      distinctValueCount: 0,
      values: [],
      flatValues: [],
      sortBy: 'instanceCount',
      sortDirection: 'desc',
      sortButton: false,
      spatialFilterButton: false,
      pieChartButton: false,
      isFetching: false,
      searchField: true,
      containerClass: 'ten',
      filterType: 'uriFilter',
      uriFilter: null,
      type: 'hierarchical'
    },
    length: {
      id: 'length',
      // predicate: defined in backend
      sortButton: false,
      spatialFilterButton: false,
      isFetching: false,
      containerClass: 'five',
      type: 'integer',
      filterType: 'integerFilterRange',
      integerFilter: null,
      unit: 'mm'
    },
    width: {
      id: 'width',
      // predicate: defined in backend
      sortButton: false,
      spatialFilterButton: false,
      isFetching: false,
      containerClass: 'five',
      type: 'integer',
      filterType: 'integerFilterRange',
      integerFilter: null,
      unit: 'mm'
    },
    weight: {
      id: 'weight',
      // predicate: defined in backend
      sortButton: false,
      spatialFilterButton: false,
      isFetching: false,
      containerClass: 'five',
      type: 'integer',
      filterType: 'integerFilterRange',
      integerFilter: null,
      unit: 'g'
    }
  }
}

const findsFacets = (state = INITIAL_STATE, action) => {
  if (action.facetClass === 'finds') {
    return handleFacetAction(state, action, INITIAL_STATE)
  } else return state
}

export default findsFacets
