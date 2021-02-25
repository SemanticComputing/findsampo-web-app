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
import findsImage from '../../img/findsampo/sword.jpg'
import coinsImage from '../../img/findsampo/coin.jpg'
import periodsImage from '../../img/findsampo/periods_image.jpg'

export const perspectiveConfig = [
  {
    id: 'finds',
    frontPageImage: findsImage,
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
        id: 'weights',
        value: 5,
        icon: <LineChartIcon />
      },
      {
        id: 'coins_by_year',
        value: 6,
        icon: <LineChartIcon />
      },
      {
        id: 'export',
        value: 7,
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
  },
  {
    id: 'coins',
    frontPageImage: coinsImage,
    perspectiveDescHeight: 160,
    defaultActiveFacets: new Set(['findName']),
    tabs: [
      {
        id: 'table',
        value: 0,
        icon: <CalendarViewDayIcon />
      }
      // {
      //   id: 'map',
      //   value: 1,
      //   icon: <AddLocationIcon />
      // },
      // {
      //   id: 'heatmap',
      //   value: 2,
      //   icon: <AddLocationIcon />
      // },
      // {
      //   id: 'timeline',
      //   value: 3,
      //   icon: <ClearAllIcon />
      // },
      // {
      //   id: 'pie_chart',
      //   value: 4,
      //   icon: <PieChartIcon />
      // },
      // {
      //   id: 'weights',
      //   value: 5,
      //   icon: <LineChartIcon />
      // },
      // {
      //   id: 'coins_by_year',
      //   value: 6,
      //   icon: <LineChartIcon />
      // },
      // {
      //   id: 'export',
      //   value: 7,
      //   icon: <CloudDownloadIcon />
      // }
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
  },
  // {
  //   id: 'types',
  //   frontPageImage: typesImage,
  //   perspectiveDescHeight: 160,
  //   defaultActiveFacets: new Set(['prefLabel']),
  //   tabs: [
  //     {
  //       id: 'table',
  //       value: 0,
  //       icon: <CalendarViewDayIcon />
  //     },
  //     {
  //       id: 'export',
  //       value: 1,
  //       icon: <CloudDownloadIcon />
  //     }
  //   ],
  //   instancePageTabs: [
  //     {
  //       id: 'table',
  //       value: 0,
  //       icon: <CalendarViewDayIcon />
  //     },
  //     {
  //       id: 'export',
  //       value: 1,
  //       icon: <CloudDownloadIcon />
  //     }
  //   ]
  // },
  {
    id: 'periods',
    frontPageImage: periodsImage,
    perspectiveDescHeight: 160,
    defaultActiveFacets: new Set(['prefLabel']),
    tabs: [
      {
        id: 'table',
        value: 0,
        icon: <CalendarViewDayIcon />
      },
      {
        id: 'export',
        value: 1,
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
        id: 'export',
        value: 1,
        icon: <CloudDownloadIcon />
      }
    ]
  },
  {
    id: 'ilppari',
    frontPageImage: null,
    externalUrl: 'http://ilppari.fi'
  }
]
