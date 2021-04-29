import { findsPerspectiveConfig } from './perspective_configs/FindsPerspectiveConfig'
import { typesPerspectiveConfig } from './perspective_configs/TypesPerspectiveConfig'
import { periodsPerspectiveConfig } from './perspective_configs/PeriodsPerspectiveConfig'
import { coinsPerspectiveConfig } from './perspective_configs/CoinsPerspectiveConfig'
import {
  findPropertiesInstancePage,
  findsByProvinceQuery,
  findsByMaterialQuery,
  findsByObjectNameQuery,
  findsByYearQuery,
  findsByWeightQuery,
  findsPlacesQuery,
  findInstancePageMapQuery,
  findsTimelineQuery,
  nearbyFindsQuery,
  knowledgeGraphMetadataQuery,
  findsCSVQuery
} from './sparql_queries/SparqlQueriesFinds'
import {
  coinsByYearQuery
  // coinsPlacesQuery,
  // coinsTimelineQuery
} from './sparql_queries/SparqlQueriesCoins'
// import {
//   typesPropertiesInstancePage
// } from './sparql_queries/SparqlQueriesTypes'
// import {
//   periodsPropertiesInstancePage
// } from './sparql_queries/SparqlQueriesPeriods'
import { fullTextSearchProperties } from './sparql_queries/SparqlQueriesFullText'
import { makeObjectList } from '../SparqlObjectMapper'
import {
  mapPlaces,
  mapPieChart,
  mapLineChart
} from '../Mappers'

export const backendSearchConfig = {
  finds: findsPerspectiveConfig,
  types: typesPerspectiveConfig,
  periods: periodsPerspectiveConfig,
  coins: coinsPerspectiveConfig,
  findsPlaces: {
    perspectiveID: 'finds', // use endpoint config from finds
    q: findsPlacesQuery,
    filterTarget: 'id',
    resultMapper: mapPlaces,
    instance: {
      properties: findPropertiesInstancePage,
      relatedInstances: ''
    }
  },
  findInstancePageMap: {
    perspectiveID: 'finds',
    q: findInstancePageMapQuery,
    resultMapper: makeObjectList
  },
  findsTimeline: {
    perspectiveID: 'finds', // use endpoint config from finds
    q: findsTimelineQuery,
    filterTarget: 'find',
    resultMapper: makeObjectList
  },
  nearbyFinds: {
    perspectiveID: 'finds', // use endpoint config from finds
    q: nearbyFindsQuery,
    resultMapper: makeObjectList
  },
  findsByProvince: {
    perspectiveID: 'finds', // use endpoint config from finds
    q: findsByProvinceQuery,
    filterTarget: 'find',
    resultMapper: mapPieChart
  },
  findsByMaterial: {
    perspectiveID: 'finds', // use endpoint config from finds
    q: findsByMaterialQuery,
    filterTarget: 'find',
    resultMapper: mapPieChart
  },
  findsByObjectName: {
    perspectiveID: 'finds', // use endpoint config from finds
    q: findsByObjectNameQuery,
    filterTarget: 'find',
    resultMapper: mapPieChart
  },
  findsByYear: {
    perspectiveID: 'finds', // use endpoint config from finds
    q: findsByYearQuery,
    filterTarget: 'find',
    resultMapper: mapLineChart,
    resultMapperConfig: {
      fillEmptyValues: true
      // xAxisConverter: value => {
      //   return new Date(value, 0)
      // }
    }
  },
  findsByWeight: {
    perspectiveID: 'finds', // use endpoint config from finds
    q: findsByWeightQuery,
    filterTarget: 'find',
    resultMapper: mapLineChart,
    resultMapperConfig: {
      fillEmptyValues: true
    }
  },
  findsKnowledgeGraphMetadata: {
    perspectiveID: 'finds', // use endpoint config from finds
    q: knowledgeGraphMetadataQuery,
    resultMapper: makeObjectList
  },
  jenaText: {
    perspectiveID: 'finds',
    properties: fullTextSearchProperties
  },
  coinsByYear: {
    perspectiveID: 'coins',
    q: coinsByYearQuery,
    filterTarget: 'find',
    resultMapper: mapLineChart
  },
  csvFinds: {
  perspectiveID: 'finds', // use endpoint config from finds
  q: findsCSVQuery,
  filterTarget: 'id'
},
}
