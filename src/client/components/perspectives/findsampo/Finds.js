import React from 'react'
import PropTypes from 'prop-types'
import intl from 'react-intl-universal'
import { Route, Redirect } from 'react-router-dom'
import PerspectiveTabs from '../../main_layout/PerspectiveTabs'
import ResultTable from '../../facet_results/ResultTable'
import LeafletMap from '../../facet_results/LeafletMap'
import Deck from '../../facet_results/Deck'
import ApexChart from '../../facet_results/ApexChart'
// import Network from '../../facet_results/Network'
import Timeline from '../../facet_results/Timeline'
import Export from '../../facet_results/Export'
import { MAPBOX_ACCESS_TOKEN, MAPBOX_STYLE } from '../../../configs/findsampo/GeneralConfig'
import { createApexPieChartData } from '../../../configs/findsampo/ApexCharts/PieChartConfig'
import { createApexBarChartData } from '../../../configs/findsampo/ApexCharts/BarChartConfig'
import {
  createSingleLineChartData
  // createMultipleLineChartData
} from '../../../configs/findsampo/ApexCharts/LineChartConfig'

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
            data={props.facetResults}
            facetUpdateID={props.facetData.facetUpdateID}
            resultClass='finds'
            facetClass='finds'
            fetchPaginatedResults={props.fetchPaginatedResults}
            updatePage={props.updatePage}
            updateRowsPerPage={props.updateRowsPerPage}
            sortResults={props.sortResults}
            routeProps={routeProps}
            rootUrl={rootUrl}
          />}
      />
      <Route
        path={`${rootUrl}/${perspective.id}/faceted-search/map`}
        render={() =>
          <LeafletMap
            // center={[22.43, 10.37]}
            // zoom={2}
            center={[65.184809, 27.314050]}
            zoom={5}
            // center={[60.17, 24.81]}
            // zoom={14}
            results={props.placesResults.results}
            layers={props.leafletMapLayers}
            pageType='facetResults'
            facetUpdateID={props.facetData.facetUpdateID}
            resultClass='findsPlaces'
            facetClass='finds'
            mapMode='cluster'
            showMapModeControl={false}
            instance={props.placesResults.instanceTableData}
            fetchResults={props.fetchResults}
            fetchGeoJSONLayers={props.fetchGeoJSONLayers}
            clearGeoJSONLayers={props.clearGeoJSONLayers}
            fetchByURI={props.fetchByURI}
            fetching={props.placesResults.fetching}
            showInstanceCountInClusters={false}
            updateFacetOption={props.updateFacetOption}
            showError={props.showError}
            showExternalLayers
            layerConfigs={[
              {
                id: 'arkeologiset_kohteet_alue',
                type: 'GeoJSON',
                minZoom: 13,
                buffer: {
                  distance: 200,
                  units: 'metres',
                  style: {
                    color: '#6E6E6E',
                    dashArray: '3, 5',
                    interactive: false
                  }
                },
                // this layer includes only GeoJSON Polygons, define style for them
                geojsonPolygonOptions: {
                  color: '#dd2c00',
                  cursor: 'pointer'
                },
                createPopup: data => {
                  let html = ''
                  const name = data.kohdenimi
                    ? `<b>Kohteen nimi:</b> ${data.kohdenimi}</p>` : ''
                  const type = data.laji ? `<b>Kohteen tyyppi:</b> ${data.laji}</p>` : ''
                  const municipality = data.kunta ? `<b>Kunta:</b> ${data.kunta}</p>` : ''
                  const link = data.mjtunnus
                    ? `<a href="https://www.kyppi.fi/to.aspx?id=112.${data.mjtunnus}" target="_blank">Avaa kohde Muinaisjäännösrekisterissä</a></p>` : ''
                  html += `
                  <div>
                    ${name}
                    ${type}
                    ${municipality}
                    ${link}
                  </div>
                  `
                  return html
                }
              },
              {
                id: 'arkeologiset_kohteet_piste',
                type: 'GeoJSON',
                minZoom: 13,
                buffer: {
                  distance: 200,
                  units: 'metres',
                  style: {
                    color: '#6E6E6E',
                    dashArray: '3, 5',
                    interactive: false
                  }
                },
                // this layer includes only GeoJSON points, define style for them
                geojsonMarkerOptions: {
                  radius: 8,
                  fillColor: '#dd2c00',
                  color: '#000',
                  weight: 1,
                  opacity: 1,
                  fillOpacity: 0.8
                },
                createPopup: data => {
                  let html = ''
                  const name = data.kohdenimi
                    ? `<b>Kohteen nimi:</b> ${data.kohdenimi}</p>` : ''
                  const type = data.laji ? `<b>Kohteen tyyppi:</b> ${data.laji}</p>` : ''
                  const municipality = data.kunta ? `<b>Kunta:</b> ${data.kunta}</p>` : ''
                  const link = data.mjtunnus
                    ? `<a href="https://www.kyppi.fi/to.aspx?id=112.${data.mjtunnus}" target="_blank">Avaa kohde Muinaisjäännösrekisterissä</a></p>` : ''
                  html += `
                  <div>
                    ${name}
                    ${type}
                    ${municipality}
                    ${link}
                  </div>
                  `
                  return html
                }
              },
              {
                id: 'fhaLidar',
                type: 'WMS',
                url: `${process.env.API_URL}/fha-wms`,
                layers: 'NBA:lidar',
                version: '1.3.0',
                attribution: 'FHA',
                minZoom: 13,
                maxZoom: 16
              },
              {
                id: 'karelianMaps',
                type: 'WMTS',
                url: 'https:///mapwarper.onki.fi/mosaics/tile/4/{z}/{x}/{y}.png',
                opacityControl: true,
                attribution: 'Semantic Computing Research Group'
              },
              {
                id: 'senateAtlas',
                type: 'WMTS',
                url: 'https:///mapwarper.onki.fi/mosaics/tile/5/{z}/{x}/{y}.png',
                opacityControl: true,
                attribution: 'Semantic Computing Research Group'
              }
            ]}
            // activeLayers={[
            //   'arkeologiset_kohteet_alue',
            //   'arkeologiset_kohteet_piste'
            // ]}
          />}
      />
      <Route
        path={`${rootUrl}/${perspective.id}/faceted-search/heatmap`}
        render={() =>
          <Deck
            results={props.placesResults.results}
            facetUpdateID={props.facetData.facetUpdateID}
            resultClass='findsPlaces'
            facetClass='finds'
            fetchResults={props.fetchResults}
            fetching={props.placesResults.fetching}
            layerType='heatmapLayer'
            mapBoxAccessToken={MAPBOX_ACCESS_TOKEN}
            mapBoxStyle={MAPBOX_STYLE}
          />}
      />
      <Route
        path={`${rootUrl}/${perspective.id}/faceted-search/pie_chart`}
        render={() =>
          <ApexChart
            pageType='facetResults'
            rawData={props.facetResults.results}
            rawDataUpdateID={props.facetResults.resultUpdateID}
            facetUpdateID={props.facetData.facetUpdateID}
            fetching={props.facetResults.fetching}
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
            facetResultsType={intl.get(`perspectives.${perspective.id}.facetResultsType`)}
            resultClasses={['findsByProvince', 'findsByMaterial', 'findsByObjectName']}
          />}
      />
      <Route
        path={`${rootUrl}/${perspective.id}/faceted-search/coins_by_year`}
        render={() =>
          <ApexChart
            pageType='facetResults'
            rawData={props.facetResults.results}
            rawDataUpdateID={props.facetResults.resultUpdateID}
            facetUpdateID={props.facetData.facetUpdateID}
            fetching={props.facetResults.fetching}
            fetchData={props.fetchResults}
            createChartData={createSingleLineChartData}
            title='Number of coins (find_name = "Raha" or "Hopearaha")'
            xaxisTitle='Year (using only "earliest_creation_year")'
            xaxisType='category'
            xaxisTickAmount={20}
            yaxisTitle='Number of coins'
            seriesTitle='Number of coins'
            stroke={{ width: 2 }}
            // tooltip={{
            //   x: { format: 'yyyy' }
            // }}
            resultClass='findsByYear'
            facetClass='finds'
          />}
      />
      <Route
        path={`${rootUrl}/${perspective.id}/faceted-search/weights`}
        render={() =>
          <ApexChart
            pageType='facetResults'
            rawData={props.facetResults.results}
            rawDataUpdateID={props.facetResults.resultUpdateID}
            facetUpdateID={props.facetData.facetUpdateID}
            fetching={props.facetResults.fetching}
            fetchData={props.fetchResults}
            createChartData={createSingleLineChartData}
            title='Weight'
            xaxisTitle='Weight (g)'
            xaxisType='numeric'
            xaxisTickAmount={30}
            yaxisTitle='Number of finds'
            seriesTitle='Number of finds'
            stroke={{ width: 2 }}
            resultClass='findsByWeight'
            facetClass='finds'
          />}
      />
      <Route
        path={`${rootUrl}/${perspective.id}/faceted-search/timeline`}
        render={() =>
          <Timeline
            pageType='facetResults'
            resultClass='findsTimeline'
            facetClass='finds'
            data={props.facetResults.results}
            dataUpdateID={props.facetResults.resultUpdateID}
            facetUpdateID={props.facetData.facetUpdateID}
            fetchResults={props.fetchResults}
          />}
      />
      <Route
        path={`${rootUrl}/${perspective.id}/faceted-search/export`}
        render={() =>
          <Export
            data={props.facetResults}
            resultClass='finds'
            facetClass='finds'
            pageType='facetResults'
            fetchPaginatedResults={props.fetchPaginatedResults}
            updatePage={props.updatePage}
          />}
      />
    </>
  )
}

Finds.propTypes = {
  facetResults: PropTypes.object.isRequired,
  placesResults: PropTypes.object.isRequired,
  leafletMapLayers: PropTypes.object.isRequired,
  facetData: PropTypes.object.isRequired,
  fetchResults: PropTypes.func.isRequired,
  fetchGeoJSONLayers: PropTypes.func.isRequired,
  clearGeoJSONLayers: PropTypes.func.isRequired,
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
  rootUrl: PropTypes.string.isRequired,
  showError: PropTypes.func.isRequired
}

export default Finds
