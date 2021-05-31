import { handleDataFetchingAction } from '../general/results'

export const INITIAL_STATE = {
  facetedSearchHeaderExpanded: true,
  maps: {
    sitesMap: {
      center: [65.184809, 27.314050],
      zoom: 5
    }
  }
}

const resultClasses = new Set([
  'sites',
  'sitesMap'
])

const sites = (state = INITIAL_STATE, action) => {
  if (resultClasses.has(action.resultClass)) {
    return handleDataFetchingAction(state, action, INITIAL_STATE)
  } else return state
}

export default sites
