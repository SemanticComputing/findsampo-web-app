import { combineReducers } from 'redux'
import { reducer as toastrReducer } from 'react-redux-toastr'
// general reducers:
import error from './error'
import options from './options'
import animation from './animation'
import leafletMap from './leafletMap'
// portal spefic reducers:
import fullTextSearch from './sampo/fullTextSearch'
import clientSideFacetedSearch from './sampo/clientSideFacetedSearch'
import finds from './findsampo/finds'
import perspective2 from './sampo/perspective2'
import perspective3 from './sampo/perspective3'
import findsFacets from './findsampo/findsFacets'
import findsFacetsConstrainSelf from './findsampo/findsFacetsConstrainSelf'
import perspective2Facets from './sampo/perspective2Facets'
import perspective3Facets from './sampo/perspective3Facets'
import places from './findsampo/places'

const reducer = combineReducers({
  finds,
  perspective2,
  perspective3,
  findsFacets,
  findsFacetsConstrainSelf,
  perspective2Facets,
  perspective3Facets,
  places,
  leafletMap,
  animation,
  options,
  error,
  clientSideFacetedSearch,
  fullTextSearch,
  toastr: toastrReducer
})

export default reducer
