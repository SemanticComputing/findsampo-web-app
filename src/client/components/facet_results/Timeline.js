import React from 'react'
import PropTypes from 'prop-types'
import TimelinesChart from 'timelines-chart'
import purple from '@material-ui/core/colors/purple'
import CircularProgress from '@material-ui/core/CircularProgress'
import { has } from 'lodash'
import history from '../../History'
// import getRandomData from './TimelineTestData'

// source: https://dev.to/monaye/refactor-davidwalsh-s-debounce-function-5afc
const debounce = (func, delay) => {
  let timerId
  return (...args) => {
    const boundFunc = func.bind(this, ...args)
    clearTimeout(timerId)
    timerId = setTimeout(boundFunc, delay)
  }
}

/**
 * A component for creating timelines with Timelines Chart.
 */
class Timeline extends React.Component {
  constructor (props) {
    super(props)
    this.timelinesChartRef = React.createRef()
    this.timelinesChart = TimelinesChart()
    this.timelinesChartRendered = false // for making sure that timeline is rendered only once
  }

  componentWillUnmount = () => {
    // use to remove chart-tooltip, becasue it lingered on the find home page.
    document.querySelectorAll('.chart-tooltip').forEach(e => e.remove())
    this.props.clearResults({ resultClass: this.props.resultClass })
  }

  componentDidMount = () => {
    this.props.fetchResults({
      resultClass: this.props.resultClass,
      facetClass: this.props.facetClass
    })
  }

  componentDidUpdate = prevProps => {
    /**
     *  Render the timeline from scratch when data has been fetched from the SPARQL endpoint for the first time.
     *  After that, only update the existing timeline.
     */
    if (prevProps.dataUpdateID !== this.props.dataUpdateID) {
      this.timelinesChartRendered ? this.updateTimelineData() : this.renderTimeline()
    }
    // Fetch data again if the facets have been updated
    if (this.props.pageType === 'facetResults' && prevProps.facetUpdateID !== this.props.facetUpdateID) {
      this.props.fetchResults({
        resultClass: this.props.resultClass,
        facetClass: this.props.facetClass
      })
    }
  }

  renderTimeline = () => {
    const modifiedData = this.preprocess(this.props.data)
    // Set the timeline chart's width to the width of the parent component.
    const width = this.timelinesChartRef.current.clientWidth
    /* Update timeline width every time browser window is resized. Use debounce
       function to reduce function calls when the user is resizing. */
    window.addEventListener('resize', debounce(this.updateTimelineWidth, 500))
    // Pass settings and data to the Timelines Chart library only once.
    this.timelinesChart
      .data(modifiedData)
      .width(width)
      .useUtc(true)
      .timeFormat('%Y')
      .zQualitative(true)(this.timelinesChartRef.current)
      .onSegmentClick(cd => history.push(`/finds/page/${cd.data.id}`))
    this.timelinesChartRendered = true
  }

  updateTimelineData = () => {
    const modifiedData = this.preprocess(this.props.data)
    /* Only update the timeline data. All other timeline settings are preserved
       from the first time the timeline was rendered. */
    this.timelinesChart
      .data(modifiedData)
      .refresh()
  }

  updateTimelineWidth = () =>
    this.timelinesChart.width(this.timelinesChartRef.current.clientWidth)

  preprocess = data => {
    /**
    * If there is only one value in the 'data' property, it is an object.
    * Convert those objects into arrays with one element.
    */
    return data.map(item => {
      if (has(item, 'data')) {
        if (!Array.isArray(item.data)) {
          item.data = [item.data]
        }
        this.preprocess(item.data)
      }
      return item
    })
  }

  render () {
    const { fetching, pageType } = this.props
    let rootStyle = {
      width: '100%',
      height: '100%'
    }
    if (pageType === 'facetResults') {
      const padding = 16
      const heightOffset = 72 + 2 * padding
      rootStyle = {
        height: `calc(100% - ${heightOffset}px)`,
        width: `calc(100% - ${2 * padding}px)`,
        padding,
        backgroundColor: '#fff',
        borderTop: '1px solid rgba(224, 224, 224, 1)',
        overflow: 'auto'
      }
    }
    const spinnerContainerStyle = {
      ...rootStyle,
      display: 'flex',
      width: '100%',
      height: '100%',
      alignItems: 'center',
      justifyContent: 'center'
    }
    return (
      <div style={rootStyle}>
        {fetching &&
          <div style={spinnerContainerStyle}>
            <CircularProgress style={{ color: purple[500] }} thickness={5} />
          </div>}
        {!fetching && <div ref={this.timelinesChartRef} />}
      </div>
    )
  }
}

Timeline.propTypes = {
  pageType: PropTypes.string.isRequired,
  resultClass: PropTypes.string.isRequired,
  facetUpdateID: PropTypes.number.isRequired,
  fetchResults: PropTypes.func.isRequired,
  dataUpdateID: PropTypes.number.isRequired,
  data: PropTypes.array
}

export default Timeline
