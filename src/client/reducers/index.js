import { combineReducers } from 'redux'
import { reducer as toastrReducer } from 'react-redux-toastr'
import error from './error'
import options from './options'
import finds from './findsampo/finds'
import perspective2 from './sampo/perspective2'
import perspective3 from './sampo/perspective3'
import findsFacets from './findsampo/findsFacets'
import findsFacetsConstrainSelf from './findsampo/findsFacetsConstrainSelf'
import perspective2Facets from './sampo/perspective2Facets'
import perspective3Facets from './sampo/perspective3Facets'
import places from './sampo/places'
import leafletMapLayers from './sampo/leafletMapLayers'
import animation from './mmm/animation'
import clientSideFacetedSearch from './mmm/clientSideFacetedSearch'

const reducer = combineReducers({
  finds,
  perspective2,
  perspective3,
  findsFacets,
  findsFacetsConstrainSelf,
  perspective2Facets,
  perspective3Facets,
  places,
  leafletMapLayers,
  animation,
  options,
  error,
  clientSideFacetedSearch,
  toastr: toastrReducer
})

export default reducer
