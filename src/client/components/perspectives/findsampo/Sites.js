import React from 'react'
// import PropTypes from 'prop-types'
import { makeStyles } from '@material-ui/core/styles'
// import { Route, Redirect } from 'react-router-dom'
// import PerspectiveTabs from '../../main_layout/PerspectiveTabs'
// import ResultTable from '../../facet_results/ResultTable'
import LeafletMap from '../../facet_results/LeafletMap'
// import Deck from '../../facet_results/Deck'
// import Network from '../../facet_results/Network'
// import Timeline from '../../facet_results/Timeline'
// import Export from '../../facet_results/Export'
// import { MAPBOX_ACCESS_TOKEN, MAPBOX_STYLE } from '../../../configs/sampo/GeneralConfig'

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    [theme.breakpoints.down('sm')]: {
      marginTop: 56, // app bar
      height: 'calc(100% - 56px)'
    },
    [theme.breakpoints.up('sm')]: {
      marginTop: 64, // app bar
      height: 'calc(100% - 64px)'
    }
  }
}))

const Sites = props => {
  const classes = useStyles()
  const { screenSize } = props
  const layerControlExpanded = screenSize === 'md' ||
    screenSize === 'lg' ||
    screenSize === 'xl'
  return (
    <div className={classes.root}>
      <LeafletMap
        // center={[60.187, 24.821]}
        // zoom={15}
        locateUser
        // results={this.props.results}
        layers={props.leafletMap}
        pageType='mobileMapPage'
        fetchGeoJSONLayers={props.fetchGeoJSONLayers}
        clearGeoJSONLayers={props.clearGeoJSONLayers}
        fetching={false}
        // fetchData={this.props.fetchResults}
        showInstanceCountInClusters={false}
        showError={props.showError}
        showExternalLayers
        layerControlExpanded={layerControlExpanded}
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
        activeLayers={[
          'arkeologiset_kohteet_alue',
          'arkeologiset_kohteet_piste'
        ]}
      />
    </div>
  )
}

export default Sites
