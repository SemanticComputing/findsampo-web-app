import { handleFacetConstrainSelfAction } from '../general/facetsConstrainSelf'

export const INITIAL_STATE = {
  updatedFacet: null,
  facetUpdateID: 0,
  updatedFilter: null,
  facets: {
    facetType: {
      id: 'facetType',
      // predicate: defined in backend
      distinctValueCount: 0,
      values: [],
      flatValues: [],
      sortBy: 'instanceCount',
      sortDirection: 'desc',
      sortButton: true,
      spatialFilterButton: false,
      pieChartButton: true,
      isFetching: false,
      searchField: true,
      containerClass: 'ten',
      filterType: 'uriFilter',
      uriFilter: null,
      priority: 1,
      type: 'hierarchical',
    },
    // broader: {
    //   id: 'broader',
    //   // predicate: defined in backend
    //   distinctValueCount: 0,
    //   values: [],
    //   flatValues: [],
    //   sortBy: 'instanceCount',
    //   sortDirection: 'desc',
    //   sortButton: true,
    //   spatialFilterButton: false,
    //   pieChartButton: true,
    //   isFetching: false,
    //   searchField: true,
    //   containerClass: 'ten',
    //   filterType: 'uriFilter',
    //   uriFilter: null,
    //   priority: 1,
    //   type: 'hierarchical',
    // },
  }
}

const typesFacetsConstrainSelf = (state = INITIAL_STATE, action) => {
  if (action.facetClass === 'types') {
    return handleFacetConstrainSelfAction(state, action, INITIAL_STATE)
  } else return state
}

export default typesFacetsConstrainSelf
