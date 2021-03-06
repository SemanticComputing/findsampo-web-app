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
import coins from './findsampo/coins'
import coinsFacets from './findsampo/coinsFacets'
import coinsFacetsConstrainSelf from './findsampo/coinsFacetsConstrainSelf'
import types from './findsampo/types'
import typesFacets from './findsampo/typesFacets'
import typesFacetsConstrainSelf from './findsampo/typesFacetsConstrainSelf'
import periods from './findsampo/periods'
import periodsFacets from './findsampo/periodsFacets'
import periodsFacetsConstrainSelf from './findsampo/periodsFacetsConstrainSelf'
import perspective2Facets from './sampo/perspective2Facets'
import perspective2FacetsConstrainSelf from './sampo/perspective2FacetsConstrainSelf'
import perspective3Facets from './sampo/perspective3Facets'
import places from './findsampo/places'

const reducer = combineReducers({
  finds,
  findsFacets,
  findsFacetsConstrainSelf,
  coins,
  coinsFacets,
  coinsFacetsConstrainSelf,
  types,
  typesFacets,
  typesFacetsConstrainSelf,
  periods,
  periodsFacets,
  periodsFacetsConstrainSelf,
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
