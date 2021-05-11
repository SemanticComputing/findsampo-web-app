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
import findsImage from '../../img/findsampo/Museovirasto_063_vaaka.jpg'
// import coinsImage from '../../img/findsampo/coin.jpg'
// import periodsImage from '../../img/findsampo/periods_image.jpg'
import mapImage from '../../img/findsampo/map.jpg'
import sitesImage from '../../img/findsampo/sites.jpg'
// import guidesImage from '../../img/findsampo/Museovirasto_043-vaaka.jpg'
// import typesImage from '../../img/findsampo/Museovirasto_067-vaaka.jpg'
// import ilppariImage from '../../img/findsampo/Museovirasto_062_vaaka.jpg'

export const perspectiveConfig = [
  {
    id: 'finds',
    frontPageImage: findsImage,
    perspectiveDescHeight: 160,
    defaultActiveFacets: new Set(['findText']),
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
        id: 'csv',
        value: 6,
        icon: <CloudDownloadIcon />
      }
      // {
      //   id: 'coins_by_year',
      //   value: ,
      //   icon: <LineChartIcon />
      // }
    ],
    instancePageTabs: [
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
        id: 'nearby_finds',
        value: 2,
        icon: <AddLocationIcon />
      },
      {
        id: 'recommendation_links',
        value: 3,
        icon: <StarIcon />
      }
      // {
      //   id: 'export',
      //   value: 4,
      //   icon: <CloudDownloadIcon />
      // }
    ]
  },
  {
    id: 'map',
    frontPageImage: mapImage,
    searchMode: 'dummy-internal',
    internalLink: '/finds/faceted-search/map'
  },
  {
    id: 'sites',
    frontPageImage: sitesImage,
    perspectiveDescHeight: 160,
    searchMode: 'dummy-internal',
    internalLink: '/sites/map'
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
  // {
  //   id: 'periods',
  //   frontPageImage: periodsImage,
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
    id: 'guides',
    frontPageImage: null,
    searchMode: 'dummy-internal',
    internalLink: '/guides'
  },
  {
    id: 'ilppari',
    frontPageImage: null,
    externalUrl: 'http://ilppari.fi'
  }
]
