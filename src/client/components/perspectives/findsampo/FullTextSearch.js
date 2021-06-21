import React from 'react'
import PropTypes from 'prop-types'
import { Route } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles'
// import PerspectiveTabs from '../../main_layout/PerspectiveTabs'
import ReactVirtualizedTable from '../../facet_results/ReactVirtualizedTable'
// import CalendarViewDayIcon from '@material-ui/icons/CalendarViewDay'

const useStyles = makeStyles(theme => ({
  root: props => ({
    marginTop: theme.spacing(0.5),
    height: `calc(100% - ${props.layoutConfig.topBar.reducedHeight + theme.spacing(1)}px)`
  })
}))
/**
 * A component for displaying full text search results.
 */
const FullTextSearch = props => {
  const { rootUrl } = props
  const classes = useStyles(props)
  const perspectiveUrl = `${rootUrl}/full-text-search`
  return (
    <div className={classes.root}>
      {/* <PerspectiveTabs
        routeProps={props.routeProps}
        screenSize={props.screenSize}
        layoutConfig={props.layoutConfig}
        tabs={[{
          id: 'table',
          label: 'table',
          icon: <CalendarViewDayIcon />,
          value: 0
        }]}
      />
      <Route
        exact path={perspectiveUrl}
        render={() => <Redirect to={`${perspectiveUrl}/table`} />}
      /> */}
      <Route
        path={`${perspectiveUrl}`}
        render={() => {
          return (
            <ReactVirtualizedTable
              fullTextSearch={props.fullTextSearch}
              sortFullTextResults={props.sortFullTextResults}
              layoutConfig={props.layoutConfig}
            />
          )
        }}
      />
    </div>
  )
}

FullTextSearch.propTypes = {
  fullTextSearch: PropTypes.object.isRequired,
  routeProps: PropTypes.object.isRequired,
  screenSize: PropTypes.string.isRequired,
  rootUrl: PropTypes.string.isRequired
}

export default FullTextSearch
