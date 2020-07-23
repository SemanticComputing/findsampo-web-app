import React from 'react'
import PropTypes from 'prop-types'
import TimelinesChart from 'timelines-chart'
import purple from '@material-ui/core/colors/purple'
import CircularProgress from '@material-ui/core/CircularProgress'
import _debounce from 'lodash.debounce'
// import getRandomData from './TimelineTestData'

/**
 * A component for creating timelines with Timelines Chart.
 */
class Timeline extends React.Component {
  constructor (props) {
    super(props)
    this.state = { width: 1200 } // state for timelinewith
    this.timelinesChartRef = React.createRef()
    this.timelinesChart = TimelinesChart()
    this.timelinesChartRendered = false // for making sure that timeline is rendered only once
  }

  // local methods
  setWindowWidth = () => {
    if (this.state.width !== this.timelinesChartRef.current.clientWidth) {
      this.setState({
        width: this.timelinesChartRef.current.clientWidth
      })
    }
    console.log(' setWindowWidth rendered width: ', this.state.width)
    console.log(' setWindowWidth client width: ', this.timelinesChartRef.current.clientWidth)
    console.log(' setWindowWidth timelineChartRef', this.timelinesChartRef)
  }

  componentDidMount = () => {
    this.props.fetchResults({
      resultClass: this.props.resultClass,
      facetClass: this.props.facetClass
    })
    window.addEventListener(
      'resize',
      _debounce(() => {
        this.setWindowWidth()
      }, 250)
    )
  }

  // Remove event listener
  componentWillUnmount () { window.removeEventListener('resize', this.setWindowWidth()) }
  componentDidUpdate = prevProps => {
    window.addEventListener(
      'resize',
      _debounce(() => {
        this.setWindowWidth()
      }, 250)
    )
    /**
     *  Render the timeline from scratch when data has been fetched from the SPARQL endpoint for the first time.
     *  After that, only update the existing timeline.
     */
    if (prevProps.dataUpdateID !== this.props.dataUpdateID) {
      this.timelinesChartRendered ? this.updateTimeline() : this.renderTimeline()
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
    this.setWindowWidth(this.timelinesChartRef.current)
    const width = this.state.width

    this.timelinesChart
      .data(modifiedData)
      .width(width)
      .useUtc(true)
      .timeFormat('%Y')
      .zQualitative(true)(this.timelinesChartRef.current)
    this.timelinesChartRendered = true

    console.log(modifiedData)
    console.log('rendered width: ', width)
    console.log('client width: ', this.timelinesChartRef.current.clientWidth)
    console.log('timelineChartRef', this.timelinesChartRef)
  }

  updateTimeline = () => {
    const modifiedData = this.preprocess(this.props.data)
    const width = this.state.width
    this.timelinesChart
      .data(modifiedData)
      .width(width)
      .refresh()
    console.log(modifiedData)
    console.log('update width: ', width)
    console.log('update client width: ', this.timelinesChartRef.current.clientWidth)
    console.log('update timelineChartRef', this.timelinesChartRef)
  }

  preprocess = data => {
    /**
    * If there is only one value in the 'data' property, it is an object.
    * Convert those objects into arrays with one element.
    */
    return data.map(item => {
      if (!Array.isArray(item.data)) {
        item.data = [item.data]
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
      rootStyle = {
        height: 'calc(100% - 136px)',
        width: 'calc(100% - 64px)',
        padding: 32,
        backgroundColor: '#fff',
        borderTop: '1px solid rgba(224, 224, 224, 1)'
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
