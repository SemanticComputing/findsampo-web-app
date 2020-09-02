import { combineReducers } from 'redux'
import { reducer as toastrReducer } from 'react-redux-toastr'
// general reducers:
import error from './general/error'
import options from './general/options'
import animation from './general/animation'
import leafletMap from './general/leafletMap'
// portal spefic reducers:
import fullTextSearch from './sampo/fullTextSearch'
import finds from './findsampo/finds'
import findsFacets from './findsampo/findsFacets'
import findsFacetsConstrainSelf from './findsampo/findsFacetsConstrainSelf'
import perspective2Facets from './sampo/perspective2Facets'
import perspective2FacetsConstrainSelf from './sampo/perspective2FacetsConstrainSelf'
import perspective3Facets from './sampo/perspective3Facets'
import places from './findsampo/places'

const reducer = combineReducers({
  finds,
  findsFacets,
  findsFacetsConstrainSelf,
  perspective2Facets,
  perspective2FacetsConstrainSelf,
  perspective3Facets,
  places,
  leafletMap,
  animation,
  options,
  error,
  fullTextSearch,
  toastr: toastrReducer
})

export default reducer
