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
import { layerConfigs } from '../../../configs/findsampo/Leaflet/LeafletConfig'

const useStyles = makeStyles(theme => ({
  root: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    marginBottom: theme.spacing(1),
    width: '100%',
    [theme.breakpoints.down('sm')]: {
      marginTop: 56 + 67 + theme.spacing(1), // app bar + info header + margin
      height: 'calc(100% - 140px)' // app bar + info header + 2*margin
    },
    [theme.breakpoints.up('sm')]: {
      marginTop: 64 + 67 + theme.spacing(1), // app bar + info header + margin
      height: 'calc(100% - 147px)' // app bar + info header + 2*margin
    }
  },
  rootHeaderExpanded: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    marginBottom: theme.spacing(1),
    width: '100%',
    [theme.breakpoints.down('sm')]: {
      marginTop: 56 + 252 + theme.spacing(1), // app bar + info header expanded + margin
      height: 'calc(100% - 316px)' // app bar + info header expanded + 2*margin
    },
    [theme.breakpoints.up('sm')]: {
      marginTop: 64 + 252 + theme.spacing(1), // app bar + info header expanded + margin
      height: 'calc(100% - 332px)' // app bar + info header expanded + 2*margin
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
    <div className={props.perspectiveState.facetedSearchHeaderExpanded
      ? classes.rootHeaderExpanded
      : classes.root}
    >
      <LeafletMap
        center={props.perspectiveState.maps.sitesMap.center}
        zoom={props.perspectiveState.maps.sitesMap.zoom}
        locateUser
        // results={this.props.results}
        leafletMapState={props.leafletMapState}
        pageType='mobileMapPage'
        resultClass='sitesMap'
        fetchGeoJSONLayers={props.fetchGeoJSONLayers}
        clearGeoJSONLayers={props.clearGeoJSONLayers}
        fetching={false}
        // fetchData={this.props.fetchResults}
        showInstanceCountInClusters={false}
        showError={props.showError}
        updateMapBounds={props.updateMapBounds}
        showExternalLayers
        customMapControl
        layerControlExpanded={layerControlExpanded}
        infoHeaderExpanded={props.perspectiveState.facetedSearchHeaderExpanded}
        layerConfigs={layerConfigs}
        activeLayers={[
          // 'WFS_MV_KulttuuriymparistoSuojellut:Muinaisjaannokset_alue',
          // 'WFS_MV_KulttuuriymparistoSuojellut:Muinaisjaannokset_piste',
          'WFS_MV_Kulttuuriymparisto:Arkeologiset_kohteet_alue',
          'WFS_MV_Kulttuuriymparisto:Arkeologiset_kohteet_piste'
        ]}
      />
    </div>
  )
}

export default Sites
