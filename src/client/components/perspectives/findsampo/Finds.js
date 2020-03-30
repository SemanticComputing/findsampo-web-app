import React from 'react'
import PropTypes from 'prop-types'
import { Route, Redirect } from 'react-router-dom'
import PerspectiveTabs from '../../main_layout/PerspectiveTabs'
import ResultTable from '../../facet_results/ResultTable'
import LeafletMap from '../../facet_results/LeafletMap'
import Deck from '../../facet_results/Deck'
// import Network from '../../facet_results/Network'
import Export from '../../facet_results/Export'
import MigrationsMapLegend from '../mmm/MigrationsMapLegend'
import { MAPBOX_ACCESS_TOKEN, MAPBOX_STYLE } from '../../../configs/findsampo/GeneralConfig'

const Finds = props => {
  const { rootUrl, perspective } = props
  return (
    <>
      <PerspectiveTabs
        routeProps={props.routeProps}
        tabs={props.perspective.tabs}
        screenSize={props.screenSize}
      />
      <Route
        exact path={`${rootUrl}/${perspective.id}/faceted-search`}
        render={() => <Redirect to={`${rootUrl}/${perspective.id}/faceted-search/table`} />}
      />
      <Route
        path={`${props.rootUrl}/${perspective.id}/faceted-search/table`}
        render={routeProps =>
          <ResultTable
            data={props.finds}
            facetUpdateID={props.facetData.facetUpdateID}
            resultClass='finds'
            facetClass='finds'
            fetchPaginatedResults={props.fetchPaginatedResults}
            updatePage={props.updatePage}
            updateRowsPerPage={props.updateRowsPerPage}
            sortResults={props.sortResults}
            routeProps={routeProps}
          />}
      />
      <Route
        path={`${rootUrl}/${perspective.id}/faceted-search/map`}
        render={() =>
          <LeafletMap
            results={props.places.results}
            layers={props.leafletMapLayers}
            pageType='facetResults'
            facetUpdateID={props.facetData.facetUpdateID}
            resultClass='findsPlaces'
            facetClass='finds'
            mapMode='cluster'
            showMapModeControl={false}
            instance={props.places.instance}
            fetchResults={props.fetchResults}
            fetchGeoJSONLayers={props.fetchGeoJSONLayers}
            fetchByURI={props.fetchByURI}
            fetching={props.places.fetching}
            showInstanceCountInClusters={false}
            updateFacetOption={props.updateFacetOption}
            showExternalLayers
          />}
      />
      <Route
        path={`${rootUrl}/${perspective.id}/faceted-search/heatmap`}
        render={() =>
          <Deck
            results={props.places.results}
            facetUpdateID={props.facetData.facetUpdateID}
            resultClass='findsPlaces'
            facetClass='finds'
            fetchResults={props.fetchResults}
            fetching={props.places.fetching}
            legendComponent={<MigrationsMapLegend />}
            layerType='heatmapLayer'
            mapBoxAccessToken={MAPBOX_ACCESS_TOKEN}
            mapBoxStyle={MAPBOX_STYLE}
          />}
      />
      <Route
        path={`${rootUrl}/${perspective.id}/faceted-search/export`}
        render={() =>
          <Export
            sparqlQuery={props.finds.paginatedResultsSparqlQuery}
            pageType='facetResults'
          />}
      />
    </>
  )
}

Finds.propTypes = {
  finds: PropTypes.object.isRequired,
  places: PropTypes.object.isRequired,
  leafletMapLayers: PropTypes.object.isRequired,
  facetData: PropTypes.object.isRequired,
  fetchResults: PropTypes.func.isRequired,
  fetchGeoJSONLayers: PropTypes.func.isRequired,
  fetchPaginatedResults: PropTypes.func.isRequired,
  fetchByURI: PropTypes.func.isRequired,
  updatePage: PropTypes.func.isRequired,
  updateRowsPerPage: PropTypes.func.isRequired,
  sortResults: PropTypes.func.isRequired,
  routeProps: PropTypes.object.isRequired,
  updateFacetOption: PropTypes.func.isRequired,
  perspective: PropTypes.object.isRequired,
  animationValue: PropTypes.array.isRequired,
  animateMap: PropTypes.func.isRequired,
  screenSize: PropTypes.string.isRequired,
  rootUrl: PropTypes.string.isRequired
}

export default Finds
