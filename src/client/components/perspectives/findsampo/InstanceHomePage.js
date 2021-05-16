import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'
import CircularProgress from '@material-ui/core/CircularProgress'
import purple from '@material-ui/core/colors/purple'
import PerspectiveTabs from '../../main_layout/PerspectiveTabs'
import InstanceHomePageTable from '../../main_layout/InstanceHomePageTable'
// import Network from '../../facet_results/Network'
import LeafletMap from '../../facet_results/LeafletMap'
import Export from '../../facet_results/Export'
// import Recommendations from './Recommendations'
// import { coseLayout, cytoscapeStyle } from '../../../configs/sampo/Cytoscape.js/NetworkConfig'
import { Route, Redirect } from 'react-router-dom'
import { has } from 'lodash'

const styles = () => ({
  root: {
    width: '100%',
    height: '100%'
  },
  content: {
    width: '100%',
    height: 'calc(100% - 72px)',
    overflow: 'auto'
  },
  spinnerContainer: {
    display: 'flex',
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center'
  }
})

/**
 * A component for generating a landing page for a single entity.
 * Customized for FindSampo.
 */
class InstanceHomePage extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      localID: null
    }
  }

  componentDidMount = () => this.fetchTableData()

  componentDidUpdate = prevProps => {
    // handle the case when the TABLE tab was not originally active
    const prevPathname = prevProps.routeProps.location.pathname
    const currentPathname = this.props.routeProps.location.pathname
    if (!this.hasTableData() && prevPathname !== currentPathname && currentPathname.endsWith('table')) {
      this.fetchTableData()
    }
    // handle browser's back button
    const localID = this.getLocalIDFromURL()
    if (this.state.localID !== localID) {
      this.fetchTableData()
    }
  }

  hasTableData = () => this.props.tableData !== null && Object.values(this.props.tableData).length >= 1

  fetchTableData = () => {
    const localID = this.getLocalIDFromURL()
    this.setState({ localID })
    let uri = ''
    const base = 'http://ldf.fi/findsampo/'
    switch (this.props.resultClass) {
      case 'finds':
        uri = `${base}finds/${localID}`
        break
      case 'types':
        uri = `${base}object_types/${localID}`
        break
      case 'periods':
        uri = `${base}periods/${localID}`
        break
    }
    this.props.fetchByURI({
      resultClass: this.props.resultClass,
      facetClass: null,
      variant: null,
      uri: uri
    })
  }

  getLocalIDFromURL = () => {
    const locationArr = this.props.routeProps.location.pathname.split('/')
    let localID = locationArr.pop()
    this.props.tabs.map(tab => {
      if (localID === tab.id) {
        localID = locationArr.pop() // pop again if tab id
      }
    })
    return localID
  }

  getVisibleRows = rows => {
    const visibleRows = []
    const instanceClass = this.props.tableData.type ? this.props.tableData.type.id : ''
    rows.map(row => {
      if ((has(row, 'onlyForClass') && row.onlyForClass === instanceClass) ||
       !has(row, 'onlyForClass')) {
        visibleRows.push(row)
      }
    })
    return visibleRows
  }

  render = () => {
    const { classes, tableData, isLoading, resultClass, rootUrl } = this.props
    const hasTableData = this.hasTableData()
    return (
      <div className={classes.root}>
        <PerspectiveTabs
          routeProps={this.props.routeProps}
          tabs={this.props.tabs}
          screenSize={this.props.screenSize}
        />
        <Paper square className={classes.content}>
          {isLoading &&
            <div className={classes.spinnerContainer}>
              <CircularProgress style={{ color: purple[500] }} thickness={5} />
            </div>}
          {!hasTableData &&
            <>
              <Typography variant='h6'>
                No data found for id: <span style={{ fontStyle: 'italic' }}>{this.state.localID}</span>
              </Typography>
            </>}
          {hasTableData &&
            <>
              <Route
                exact path={`${rootUrl}/${resultClass}/page/${this.state.localID}`}
                render={() => <Redirect to={`${rootUrl}/${resultClass}/page/${this.state.localID}/table`} />}
              />
              <Route
                path={[`${rootUrl}/${resultClass}/page/${this.state.localID}/table`, '/iframe.html']} // support also rendering in Storybook
                render={() =>
                  <InstanceHomePageTable
                    resultClass={resultClass}
                    data={tableData}
                    properties={this.getVisibleRows(this.props.properties)}
                  />}
              />
              <Route
                path={`${rootUrl}/${resultClass}/page/${this.state.localID}/map`}
                render={() =>
                  <LeafletMap
                    center={[65.184809, 27.314050]}
                    zoom={5}
                    results={this.props.results}
                    layers={this.props.leafletMapLayers}
                    pageType='instancePage'
                    resultClass='findInstancePageMap'
                    facetClass='finds'
                    mapMode='cluster'
                    uri={tableData.id}
                    fetchResults={this.props.fetchResults}
                    fetching={isLoading}
                    fetchData={this.props.fetchResults}
                    showInstanceCountInClusters={false}
                    showExternalLayers={false}
                  />}
              />
              <Route
                path={`${rootUrl}/${resultClass}/page/${this.state.localID}/nearby_finds`}
                render={() =>
                  <LeafletMap
                    center={[65.184809, 27.314050]}
                    zoom={5}
                    results={this.props.results}
                    layers={this.props.leafletMapLayers}
                    pageType='instancePage'
                    resultClass='nearbyFinds'
                    mapMode='cluster'
                    uri={tableData.id}
                    fetchResults={this.props.fetchResults}
                    fetching={isLoading}
                    fetchData={this.props.fetchResults}
                    showInstanceCountInClusters={false}
                    showExternalLayers={false}
                  />}
              />
              <Route
                path={`${rootUrl}/${resultClass}/page/${this.state.localID}/recommendation_links`}
                render={() =>
                  <InstanceHomePageTable
                    resultClass={resultClass}
                    resultClassVariant='similarFinds'
                    fetchResultsWhenMounted
                    data={this.props.results ? this.props.results[0] : null}
                    resultUpdateID={this.props.resultUpdateID}
                    fetchResults={this.props.fetchResults}
                    uri={tableData.id}
                    properties={[
                      {
                        id: 'similarObjectType',
                        valueType: 'object',
                        makeLink: true,
                        externalLink: false,
                        sortValues: true,
                        numberedList: false
                      },
                      {
                        id: 'similarMaterial',
                        valueType: 'object',
                        makeLink: true,
                        externalLink: false,
                        sortValues: true,
                        numberedList: false
                      },
                      {
                        id: 'similarPeriod',
                        valueType: 'object',
                        makeLink: true,
                        externalLink: false,
                        sortValues: true,
                        numberedList: false
                      }
                    ]}
                  />}
              />
              <Route
                path={`${rootUrl}/${resultClass}/page/${this.state.localID}/export`}
                render={() =>
                  <Export
                    sparqlQuery={this.props.sparqlQuery}
                    pageType='instancePage'
                    id={tableData.id}
                  />}
              />
            </>}
        </Paper>
      </div>
    )
  }
}

InstanceHomePage.propTypes = {
  classes: PropTypes.object.isRequired,
  fetchByURI: PropTypes.func.isRequired,
  resultClass: PropTypes.string.isRequired,
  data: PropTypes.object,
  networkData: PropTypes.object,
  sparqlQuery: PropTypes.string,
  properties: PropTypes.array.isRequired,
  tabs: PropTypes.array.isRequired,
  isLoading: PropTypes.bool.isRequired,
  routeProps: PropTypes.object.isRequired,
  screenSize: PropTypes.string.isRequired,
  rootUrl: PropTypes.string.isRequired
}

export const InstanceHomePageComponent = InstanceHomePage

export default withStyles(styles)(InstanceHomePage)
