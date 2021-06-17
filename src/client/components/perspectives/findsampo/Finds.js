import React, { lazy } from 'react'
import PropTypes from 'prop-types'
import intl from 'react-intl-universal'
import { Route, Redirect } from 'react-router-dom'
import PerspectiveTabs from '../../main_layout/PerspectiveTabs'
// import ResultTable from '../../facet_results/ResultTable'
// import ReactVirtualizedList from '../../facet_results/ReactVirtualizedList'
// import LeafletMap from '../../facet_results/LeafletMap'
// import Deck from '../../facet_results/Deck'
// import ApexChart from '../../facet_results/ApexChart'
// import Network from '../../facet_results/Network'
// import Timeline from '../../facet_results/Timeline'
// import Export from '../../facet_results/Export'
// import ExportCSV from '../../facet_results/ExportCSV'
import {
  MAPBOX_ACCESS_TOKEN,
  MAPBOX_STYLE
} from '../../../configs/findsampo/GeneralConfig'
import { createApexPieChartData } from '../../../configs/findsampo/ApexCharts/PieChartConfig'
import { createApexBarChartData } from '../../../configs/findsampo/ApexCharts/BarChartConfig'
import { createApexTimelineChartData } from '../../../configs/findsampo/ApexCharts/TimelineConfig'
import {
  createSingleLineChartData
  // createMultipleLineChartData
} from '../../../configs/findsampo/ApexCharts/LineChartConfig'
import { layerConfigs, createPopUpContentFindSampo } from '../../../configs/findsampo/Leaflet/LeafletConfig'
const ResultTable = lazy(() => import('../../facet_results/ResultTable'))
const ReactVirtualizedList = lazy(() => import('../../facet_results/ReactVirtualizedList'))
const LeafletMap = lazy(() => import('../../facet_results/LeafletMap'))
const Deck = lazy(() => import('../../facet_results/Deck'))
const ApexChart = lazy(() => import('../../facet_results/ApexChart'))
const Timeline = lazy(() => import('../../facet_results/Timeline'))
const ExportCSV = lazy(() => import('../../facet_results/ExportCSV'))

const Finds = props => {
  const { rootUrl, perspective, screenSize } = props
  let defaultTab = 'table'
  if (screenSize === 'xs' || screenSize === 'sm') {
    defaultTab = 'list'
  }
  return (
    <>
      <PerspectiveTabs
        routeProps={props.routeProps}
        tabs={props.perspective.tabs}
        screenSize={props.screenSize}
        layoutConfig={props.layoutConfig}
      />
      <Route
        exact path={`${rootUrl}/${perspective.id}/faceted-search`}
        render={() => <Redirect to={`${rootUrl}/${perspective.id}/faceted-search/${defaultTab}`} />}
      />
      <Route
        path={`${props.rootUrl}/${perspective.id}/faceted-search/table`}
        render={routeProps =>
          <ResultTable
            data={props.perspectiveState}
            facetUpdateID={props.facetState.facetUpdateID}
            resultClass='finds'
            facetClass='finds'
            fetchPaginatedResults={props.fetchPaginatedResults}
            updatePage={props.updatePage}
            updateRowsPerPage={props.updateRowsPerPage}
            sortResults={props.sortResults}
            routeProps={routeProps}
            rootUrl={rootUrl}
            layoutConfig={props.layoutConfig}
          />}
      />
      <Route
        path={`${props.rootUrl}/${perspective.id}/faceted-search/list`}
        render={routeProps =>
          <ReactVirtualizedList
            resultClass='findsList'
            facetClass='finds'
            fetchResults={props.fetchResults}
            perspectiveState={props.perspectiveState}
            facetUpdateID={props.facetState.facetUpdateID}
            layoutConfig={props.layoutConfig}
          />}
      />
      <Route
        path={`${rootUrl}/${perspective.id}/faceted-search/map`}
        render={() =>
          <LeafletMap
            mapBoxAccessToken={MAPBOX_ACCESS_TOKEN}
            mapBoxStyle={MAPBOX_STYLE}
            center={props.perspectiveState.maps.findsPlaces.center}
            zoom={props.perspectiveState.maps.findsPlaces.zoom}
            results={props.perspectiveState.results}
            leafletMapState={props.leafletMapState}
            pageType='facetResults'
            facetUpdateID={props.facetState.facetUpdateID}
            resultClass='findsPlaces'
            facetClass='finds'
            mapMode='cluster'
            showMapModeControl={false}
            instance={props.perspectiveState.instanceTableData}
            createPopUpContent={createPopUpContentFindSampo}
            fetchResults={props.fetchResults}
            fetchGeoJSONLayers={props.fetchGeoJSONLayers}
            clearGeoJSONLayers={props.clearGeoJSONLayers}
            fetchByURI={props.fetchByURI}
            fetching={props.perspectiveState.fetching}
            showInstanceCountInClusters={false}
            updateFacetOption={props.updateFacetOption}
            updateMapBounds={props.updateMapBounds}
            showError={props.showError}
            showExternalLayers
            customMapControl
            layerConfigs={layerConfigs}
            infoHeaderExpanded={props.perspectiveState.facetedSearchHeaderExpanded}
            layoutConfig={props.layoutConfig}
            // activeLayers={[
            // 'WFS_MV_KulttuuriymparistoSuojellut:Muinaisjaannokset_alue',
            // 'WFS_MV_KulttuuriymparistoSuojellut:Muinaisjaannokset_piste',
            // 'WFS_MV_Kulttuuriymparisto:Arkeologiset_kohteet_alue',
            // 'WFS_MV_Kulttuuriymparisto:Arkeologiset_kohteet_piste'
            // ]}
          />}
      />
      <Route
        path={`${rootUrl}/${perspective.id}/faceted-search/heatmap`}
        render={() =>
          <Deck
            center={props.perspectiveState.maps.findsPlacesHeatmap.center}
            zoom={props.perspectiveState.maps.findsPlacesHeatmap.zoom}
            results={props.perspectiveState.results}
            facetUpdateID={props.facetState.facetUpdateID}
            resultClass='findsPlacesHeatmap'
            facetClass='finds'
            fetchResults={props.fetchResults}
            fetching={props.perspectiveState.fetching}
            layerType='heatmapLayer'
            mapBoxAccessToken={MAPBOX_ACCESS_TOKEN}
            mapBoxStyle={MAPBOX_STYLE}
            layoutConfig={props.layoutConfig}
          />}
      />
      <Route
        path={`${rootUrl}/${perspective.id}/faceted-search/pie_chart`}
        render={() =>
          <ApexChart
            pageType='facetResults'
            rawData={props.perspectiveState.results}
            rawDataUpdateID={props.perspectiveState.resultUpdateID}
            facetUpdateID={props.facetState.facetUpdateID}
            fetching={props.perspectiveState.fetching}
            fetchData={props.fetchResults}
            createChartData={createApexPieChartData}
            dropdownForChartTypes
            chartTypes={[
              { id: 'pie', createChartData: createApexPieChartData },
              { id: 'bar', createChartData: createApexBarChartData }
            ]}
            yaxisTitle='Number of finds'
            resultClass='findsByProvince'
            facetClass='finds'
            dropdownForResultClasses
            resultClasses={['findsByProvince', 'findsByMaterial', 'findsByObjectName']}
            doNotRenderOnMount
            screenSize={props.screenSize}
            layoutConfig={props.layoutConfig}
          />}
      />
      <Route
        path={`${rootUrl}/${perspective.id}/faceted-search/line_chart`}
        render={() =>
          <ApexChart
            pageType='facetResults'
            rawData={props.perspectiveState.results}
            rawDataUpdateID={props.perspectiveState.resultUpdateID}
            facetUpdateID={props.facetState.facetUpdateID}
            fetching={props.perspectiveState.fetching}
            fetchData={props.fetchResults}
            createChartData={createSingleLineChartData}
            title=''
            // xaxisTitle='Weight (g)'
            xaxisType='numeric'
            xaxisTickAmount={30}
            yaxisTitle={intl.get('apexCharts.numberOfFinds')}
            seriesTitle={intl.get('apexCharts.numberOfFinds')}
            stroke={{ width: 2 }}
            resultClass='findsByWeight'
            facetClass='finds'
            dropdownForResultClasses
            perspectiveStateType={intl.get(`perspectives.${perspective.id}.perspectiveStateType`)}
            resultClasses={['findsByWeight', 'findsByLength', 'findsByWidth']}
            doNotRenderOnMount
            screenSize={props.screenSize}
            layoutConfig={props.layoutConfig}
          />}
      />
      <Route
        path={`${rootUrl}/${perspective.id}/faceted-search/timeline_old`}
        render={() =>
          <Timeline
            pageType='facetResults'
            resultClass='findsTimeline'
            facetClass='finds'
            data={props.perspectiveState.results}
            dataUpdateID={props.perspectiveState.resultUpdateID}
            facetUpdateID={props.facetState.facetUpdateID}
            fetchResults={props.fetchResults}
            clearResults={props.clearResults}
            layoutConfig={props.layoutConfig}
          />}
      />
      <Route
        path={`${rootUrl}/${perspective.id}/faceted-search/timeline`}
        render={() =>
          <ApexChart
            pageType='facetResults'
            rawData={props.perspectiveState.results}
            rawDataUpdateID={props.perspectiveState.resultUpdateID}
            facetUpdateID={props.facetState.facetUpdateID}
            fetching={props.perspectiveState.fetching}
            fetchData={props.fetchResults}
            fetchInstanceAnalysis={props.fetchInstanceAnalysis}
            instanceAnalysisData={props.perspectiveState.instanceAnalysisData}
            instanceAnalysisDataUpdateID={props.perspectiveState.instanceAnalysisDataUpdateID}
            listHeadingSingleInstance='Löytö:'
            listHeadingMultipleInstances='Löydöt:'
            createChartData={createApexTimelineChartData}
            xaxisTitle='Vuosi'
            yaxisTitle='Maakunta'
            resultClass='findsApexChartsTimeline'
            facetClass='finds'
            doNotRenderOnMount
            layoutConfig={props.layoutConfig}
          />}
      />
      <Route
        path={`${props.rootUrl}/${perspective.id}/faceted-search/csv`}
        render={() =>
          <ExportCSV
            resultClass='csvFinds'
            facetClass='finds'
            facetUpdateID={props.facetState.facetUpdateID}
            facets={props.facetState.facets}
            layoutConfig={props.layoutConfig}
          />}
      />
    </>
  )
}

Finds.propTypes = {
  /**
   * Faceted search configs and results of this perspective.
   */
  perspectiveState: PropTypes.object.isRequired,
  /**
    * Facet configs and values.
    */
  facetState: PropTypes.object.isRequired,
  /**
    * Facet values where facets constrain themselves, used for statistics.
    */
  facetConstrainSelfState: PropTypes.object.isRequired,
  /**
    * Leaflet map config and external layers.
    */
  leafletMapState: PropTypes.object.isRequired,
  /**
    * Redux action for fetching paginated results.
    */
  fetchPaginatedResults: PropTypes.func.isRequired,
  /**
    * Redux action for fetching all results.
    */
  fetchResults: PropTypes.func.isRequired,
  /**
    * Redux action for fetching facet values for statistics.
    */
  fetchFacetConstrainSelf: PropTypes.func.isRequired,
  /**
    * Redux action for loading external GeoJSON layers.
    */
  fetchGeoJSONLayers: PropTypes.func.isRequired,
  /**
    * Redux action for loading external GeoJSON layers via backend.
    */
  fetchGeoJSONLayersBackend: PropTypes.func.isRequired,
  /**
    * Redux action for clearing external GeoJSON layers.
    */
  clearGeoJSONLayers: PropTypes.func.isRequired,
  /**
    * Redux action for fetching information about a single entity.
    */
  fetchByURI: PropTypes.func.isRequired,
  /**
    * Redux action for updating the page of paginated results.
    */
  updatePage: PropTypes.func.isRequired,
  /**
    * Redux action for updating the rows per page of paginated results.
    */
  updateRowsPerPage: PropTypes.func.isRequired,
  /**
    * Redux action for sorting the paginated results.
    */
  sortResults: PropTypes.func.isRequired,
  /**
    * Redux action for updating the active selection or config of a facet.
    */
  showError: PropTypes.func.isRequired,
  /**
    * Redux action for showing an error
    */
  updateFacetOption: PropTypes.func.isRequired,
  /**
    * Routing information from React Router.
    */
  routeProps: PropTypes.object.isRequired,
  /**
    * Perspective config.
    */
  perspective: PropTypes.object.isRequired,
  /**
    * State of the animation, used by TemporalMap.
    */
  animationValue: PropTypes.array.isRequired,
  /**
    * Redux action for animating TemporalMap.
    */
  animateMap: PropTypes.func.isRequired,
  /**
    * Current screen size.
    */
  screenSize: PropTypes.string.isRequired,
  /**
    * Root url of the application.
    */
  rootUrl: PropTypes.string.isRequired
}

export default Finds
