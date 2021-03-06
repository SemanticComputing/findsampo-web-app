import { handleFacetAction } from '../general/facets'

export const INITIAL_STATE = {
  updatedFacet: null,
  facetUpdateID: 0,
  updatedFilter: null,
  facets: {
      prefLabel: {
        id: 'prefLabel',
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
        priority: 4,
      },
  }
}

const periodsFacets = (state = INITIAL_STATE, action) => {
  if (action.facetClass === 'periods') {
    return handleFacetAction(state, action, INITIAL_STATE)
  } else return state
}

export default periodsFacets
