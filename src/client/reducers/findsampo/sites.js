import { handleDataFetchingAction } from '../general/results'

export const INITIAL_STATE = {
  facetedSearchHeaderExpanded: true
}

const resultClasses = new Set([
  'sites'
])

const sites = (state = INITIAL_STATE, action) => {
  if (resultClasses.has(action.resultClass)) {
    return handleDataFetchingAction(state, action)
  } else return state
}

export default sites
