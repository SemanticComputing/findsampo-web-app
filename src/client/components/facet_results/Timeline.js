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
    this.renderTimeline()
    // if (this.props.rawData && this.props.rawData.length > 0) {
    //   this.renderChart()
    // }
    // this.props.fetchData({
    //   resultClass: this.props.resultClass,
    //   facetClass: this.props.facetClass,
    //   facetID: this.props.facetID
    // })
  }

  // componentDidUpdate = prevProps => {
  //   // Render the chart again if the raw data has changed
  //   if (prevProps.rawDataUpdateID !== this.props.rawDataUpdateID) {
  //     this.renderChart()
  //   }
  //   // check if filters have changed
  //   if (this.props.pageType === 'facetResults' && prevProps.facetUpdateID !== this.props.facetUpdateID) {
  //     this.props.fetchData({
  //       resultClass: this.props.resultClass,
  //       facetClass: this.props.facetClass,
  //       facetID: this.props.facetID
  //     })
  //   }
  // }

  // componentWillUnmount () {
  //   if (!this.chart == null) {
  //     this.chart.destroy()
  //   }
  // }

  renderTimeline = () => {
    const timelinesChart = TimelinesChart()
    console.log(getRandomData(true))
    timelinesChart
      .data(getRandomData(true))
      .width(1200)
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
  pageType: PropTypes.string.isRequired
}

export default Timeline
