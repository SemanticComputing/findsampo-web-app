import React from 'react'
import makeStyles from '@mui/styles/makeStyles'
import LeafletMap from '../../facet_results/LeafletMap'
import { getSpacing } from '../../../helpers/helpers'

const useStyles = makeStyles(theme => ({
  root: props => ({
    marginLeft: theme.spacing(0.5),
    marginRight: theme.spacing(0.5),
    marginTop: theme.spacing(0.5),
    width: `calc(100% - ${theme.spacing(1)}px)`,
    height: `calc(100% - ${props.layoutConfig.topBar.reducedHeight +
      props.layoutConfig.infoHeader.reducedHeight.height +
      getSpacing(theme, 1.5)}px)`,
    [theme.breakpoints.up(props.layoutConfig.reducedHeightBreakpoint)]: {
      height: `calc(100% - ${props.layoutConfig.topBar.defaultHeight +
        props.layoutConfig.infoHeader.default.height +
        getSpacing(theme, 1.5)}px)`
    }
  }),
  rootHeaderExpanded: props => ({
    margin: theme.spacing(0.5),
    width: `calc(100% - ${theme.spacing(1)}px)`,
    // [theme.breakpoints.up(props.layoutConfig.hundredPercentHeightBreakPoint)]: {
    height: `calc(100% - ${
        props.layoutConfig.topBar.reducedHeight +
        props.layoutConfig.infoHeader.reducedHeight.height +
        props.layoutConfig.infoHeader.reducedHeight.expandedContentHeight +
        getSpacing(theme, 5.5)}px)`,
    // },
    [theme.breakpoints.up(props.layoutConfig.reducedHeightBreakpoint)]: {
      height: `calc(100% - ${
        props.layoutConfig.topBar.defaultHeight +
        props.layoutConfig.infoHeader.default.height +
        props.layoutConfig.infoHeader.default.expandedContentHeight +
        getSpacing(theme, 4.5)}px)`
    }
  })
}))

const Sites = props => {
  const classes = useStyles(props)
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
        portalConfig={props.portalConfig}
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
        layoutConfig={props.layoutConfig}
        layerConfigs={props.leafletConfig.layerConfigs}
        activeLayers={[
          // 'WFS_MV_KulttuuriymparistoSuojellut:Muinaisjaannokset_alue',
          // 'WFS_MV_KulttuuriymparistoSuojellut:Muinaisjaannokset_piste',
          // 'WFS_MV_Kulttuuriymparisto:Arkeologiset_kohteet_alue',
          // 'WFS_MV_Kulttuuriymparisto:Arkeologiset_kohteet_piste'
          'rajapinta_suojellut:muinaisjaannos_alue',
          'rajapinta_suojellut:muinaisjaannos_piste'
        ]}
      />
    </div>
  )
}

export default Sites
