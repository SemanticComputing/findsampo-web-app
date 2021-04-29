import React from 'react'
import PropTypes from 'prop-types'
import LeafletMap from '../../facet_results/LeafletMap'
// import TitleBarGridList from './TitleBarGridList'
import InstanceHomePageTable from '../../main_layout/InstanceHomePageTable'
import { makeStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid'
import intl from 'react-intl-universal'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginTop: theme.spacing(4),
    width: '50%',
    marginLeft: 'auto',
    marginRight: 'auto'
  },
  gridItem: {
    width: '100%',
    padding: theme.spacing(2)
  },
  title: {
    marginBottom: theme.spacing(2)
  },
  content: {
    height: 450
  }

}))

const Recommendations = props => {
  const classes = useStyles()
  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Paper elevation={3} className={classes.gridItem}>
            <Typography className={classes.title} variant='h4'>{intl.get('perspectives.finds.instancePage.recommendations.similarFinds')}</Typography>
            <InstanceHomePageTable
              resultClass='finds'
              data={props.tableData}
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
            />
          </Paper>
        </Grid>
        <Grid item xs={12}>
          <Paper elevation={3} className={classes.gridItem}>
            <Typography className={classes.title} variant='h4'>{intl.get('perspectives.finds.instancePage.recommendations.nearByFinds')}</Typography>
            <div className={classes.content}>
              <LeafletMap
                center={[65.184809, 27.314050]}
                zoom={5}
                results={props.results}
                layers={props.leafletMapLayers}
                pageType='instancePage'
                resultClass='nearbyFinds'
                mapMode='cluster'
                uri={props.tableData.id}
                fetchResults={props.fetchResults}
                fetching={props.isLoading}
                fetchData={props.fetchResults}
                showInstanceCountInClusters={false}
                showExternalLayers={false}
              />
            </div>
          </Paper>
        </Grid>
      </Grid>

    </div>
  )
}

Recommendations.propTypes = {
  fetchByURI: PropTypes.func.isRequired,
  fetchResults: PropTypes.func.isRequired,
  tableData: PropTypes.object,
  tableExternalData: PropTypes.object,
  results: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  resultUpdateID: PropTypes.number.isRequired,
  sparqlQuery: PropTypes.string,
  isLoading: PropTypes.bool.isRequired,
  fetchGeoJSONLayers: PropTypes.func.isRequired,
  clearGeoJSONLayers: PropTypes.func.isRequired,
  leafletMap: PropTypes.object.isRequired,
  showError: PropTypes.func.isRequired
}

export default Recommendations
