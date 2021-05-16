
// import intl from 'react-intl-universal'

export const createApexTimelineChartData = ({
  rawData,
  title,
  xaxisTitle,
  xaxisType,
  xaxisTickAmount,
  xaxisLabels,
  yaxisTitle,
  seriesTitle,
  stroke,
  tooltip,
  fetchInstanceAnalysis,
  resultClass,
  facetClass
}) => {
  preprocessTimelineData(rawData)
  const apexChartOptionsWithData = {
    ...timelineOptions,
    chart: {
      type: 'rangeBar',
      width: '100%',
      height: '100%',
      events: {
        click: (event, chartContext, config) => {
          if (chartContext.w.globals.initialSeries[config.seriesIndex]) {
            const data = chartContext.w.globals.initialSeries[config.seriesIndex].data[config.dataPointIndex]
            fetchInstanceAnalysis({
              resultClass: `${resultClass}Dialog`,
              facetClass,
              period: data.period,
              province: data.id
            })
          }
        }
      }
    },
    xaxis: {
      ...timelineOptions.xaxis,
      title: {
        text: xaxisTitle
      }
    },
    yaxis: { title: { text: yaxisTitle } },
    series: rawData
  }
  return apexChartOptionsWithData
}

const timelineOptions = {
  plotOptions: {
    bar: {
      horizontal: true,
      barHeight: '70%'
      // rangeBarGroupRows: true
    }
  },
  colors: [
    '#008FFB', '#00E396', '#FEB019', '#FF4560', '#775DD0',
    '#3F51B5', '#546E7A', '#D4526E', '#8D5B4C', '#F86624',
    '#D7263D', '#1B998B', '#2E294E', '#F46036', '#E2C044'
  ],
  fill: {
    type: 'solid'
  },
  xaxis: {
    type: 'datetime',
    labels: {
      formatter: value => {
        return new Date(value).getFullYear()
      }
    },
    min: new Date('-008850').getTime(),
    max: new Date('2000').getTime()
  },
  legend: {
    position: 'top'
  },
  // tooltip: {
  //   y: {
  //     formatter: function (value, opts) {
  //       console.log(value)
  //       return value
  //     }
  //   }
  // }
  tooltip: {
    custom: opts => {
      const data = opts.w.globals.initialSeries[opts.seriesIndex].data[opts.dataPointIndex]
      const { ylabel, seriesName } = opts.ctx.rangeBar.getTooltipValues(opts)
      // const startYear = new Date(opts.y1).getFullYear()
      // const endYear = new Date(opts.y2).getFullYear()
      return `
      <div class="apexcharts-custom-tooltip">
        <p><b>Maakunta:</b> ${ylabel.replace(':', '')}</p>
        <p><b>Aikakausi:</b> ${seriesName.replace(':', '')}</p>
        <p><b>Löytöjen lukumäärä:</b> ${data.instanceCount}</p> 
      </div>  
    `
    }
    // fixed: {
    //   enabled: true,
    //   position: 'topLeft',
    //   offsetX: 0,
    //   offsetY: 0
    // }
  },
  grid: {
    borderColor: '#000',
    // row: {
    //   opacity: 0
    // },
    padding: {
      right: 15
    }
  }
}

const preprocessTimelineData = rawData => {
  const lengths = []
  rawData.sort((a, b) => new Date(a.beginDate) - new Date(b.beginDate))
  rawData.forEach((obj, index) => {
    if (!Array.isArray(obj.data)) { obj.data = [obj.data] }
    obj.data.forEach(dataObj => {
      if (dataObj.y == null) {
        console.log(dataObj)
      }
      dataObj.y = [
        new Date(dataObj.y[0]).getTime(),
        new Date(dataObj.y[1]).getTime()
      ].sort((a, b) => a - b)
    })
    obj.data.sort((a, b) => a.x.localeCompare(b.x))
    lengths.push({ index, length: obj.data.length })
  })
  lengths.sort((a, b) => b.length - a.length)
  if (rawData[0].data.length < lengths[0].length) {
    const indexOfLongestArr = lengths[0].index
    /*
    * The first data array must hold all possible values,
    * because it is used for sortable y-axis.
    */
    rawData[indexOfLongestArr].data.forEach((obj, index) => {
      if (!rawData[0].data.find(x => x.id === obj.id)) {
        rawData.[0].data.push({
          id: obj.id,
          x: obj.x,
          y: [null, null],
          instanceCount: 0
        })
      }
    })
  }
  rawData[0].data.sort((a, b) => a.x.localeCompare(b.x))
}
