import React from 'react'
import CalendarViewDayIcon from '@material-ui/icons/CalendarViewDay'
import AddLocationIcon from '@material-ui/icons/AddLocation'
// import LocationOnIcon from '@material-ui/icons/LocationOn'
// import RedoIcon from '@material-ui/icons/Redo'
import PieChartIcon from '@material-ui/icons/PieChart'
import CloudDownloadIcon from '@material-ui/icons/CloudDownload'
import ClearAllIcon from '@material-ui/icons/ClearAll'
import StarIcon from '@material-ui/icons/Star'
import LineChartIcon from '@material-ui/icons/ShowChart'
// import manuscriptsImage from '../../img/manuscripts-452x262.jpg'
// import worksImage from '../../img/works-452x262_2.jpg'
// import eventsImage from '../../img/events-452x262.jpg'

export const perspectiveConfig = [
  {
    id: 'finds',
    // frontPageImage: manuscriptsImage,
    perspectiveDescHeight: 160,
    defaultActiveFacets: new Set(['findName']),
    tabs: [
      {
        id: 'table',
        value: 0,
        icon: <CalendarViewDayIcon />
      },
      {
        id: 'map',
        value: 1,
        icon: <AddLocationIcon />
      },
      {
        id: 'heatmap',
        value: 2,
        icon: <AddLocationIcon />
      },
      {
        id: 'timeline',
        value: 3,
        icon: <ClearAllIcon />
      },
      {
        id: 'pie_chart',
        value: 4,
        icon: <PieChartIcon />
      },
      {
        id: 'line_chart',
        value: 5,
        icon: <LineChartIcon />
      },
      {
        id: 'export',
        value: 6,
        icon: <CloudDownloadIcon />
      }
    ],
    instancePageTabs: [
      {
        id: 'table',
        value: 0,
        icon: <CalendarViewDayIcon />
      },
      {
        id: 'recommendations',
        value: 1,
        icon: <StarIcon />
      },
      {
        id: 'export',
        value: 2,
        icon: <CloudDownloadIcon />
      }
    ]
  }
]
