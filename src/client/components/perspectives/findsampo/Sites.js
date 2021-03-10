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
        activeOverlays={[
          'arkeologiset_kohteet_alue',
          'arkeologiset_kohteet_piste'
        ]}
        layerControlExpanded={layerControlExpanded}
      />
    </div>
  )
}

export default Sites
