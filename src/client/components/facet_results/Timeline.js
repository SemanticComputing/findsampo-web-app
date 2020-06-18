import React from 'react'
import PropTypes from 'prop-types'
import TimelinesChart from 'timelines-chart'
import purple from '@material-ui/core/colors/purple'
import CircularProgress from '@material-ui/core/CircularProgress'
import getRandomData from './TimelineTestData'

/**
 * A component for creating timelines with Timelines Chart.
 */
class Timeline extends React.Component {
  constructor (props) {
    super(props)
    this.timelinesChartRef = React.createRef()
  }

  componentDidMount = () => {
    this.props.fetchResults({
      resultClass: this.props.resultClass,
      facetClass: this.props.facetClass
    })
  }

  componentDidUpdate = prevProps => {
    // Render the timeline when data has been fetched from the SPARQL endpoint
    if (prevProps.dataUpdateID !== this.props.dataUpdateID) {
      this.renderTimeline()
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
    const timelinesChart = TimelinesChart()
    // console.log(this.props.data)
    // console.log(getRandomData(true))
    const modifiedData = this.props.data.map(item => {
      if (!Array.isArray(item.data)) {
        item.data = [item.data]
      }
      return item
    })
    console.log(modifiedData)
    timelinesChart
      // .data(getRandomData(true))
      .data(modifiedData)
      .width(1200)
      .useUtc(true)
      .timeFormat('%Y')
      .zQualitative(true)(this.timelinesChartRef.current)
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
