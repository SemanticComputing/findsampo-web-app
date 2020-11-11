import { findsPerspectiveConfig } from './perspective_configs/FindsPerspectiveConfig'
import {
  findPropertiesInstancePage,
  findsByProvinceQuery,
  findsByMaterialQuery,
  findsByObjectNameQuery,
  findsByYearQuery,
  findsPlacesQuery,
  findsTimelineQuery,
  nearbyFindsQuery,
  knowledgeGraphMetadataQuery
} from './sparql_queries/SparqlQueriesFinds'
import { fullTextSearchProperties } from './sparql_queries/SparqlQueriesFullText'
import { makeObjectList } from '../SparqlObjectMapper'
import {
  mapPlaces,
  mapPieChart,
  // mapLineChart,
  mapLineChartFillEmptyValues
} from '../Mappers'

export const backendSearchConfig = {
  finds: findsPerspectiveConfig,
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
  findsTimeline: {
    perspectiveID: 'finds', // use endpoint config from finds
    q: findsTimelineQuery,
    filterTarget: 'find',
    resultMapper: makeObjectList
  },
  nearbyFinds: {
    perspectiveID: 'finds', // use endpoint config from finds
    q: nearbyFindsQuery,
    resultMapper: mapPlaces,
    instance: {
      properties: findPropertiesInstancePage,
      relatedInstances: ''
    }
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
    resultMapper: mapLineChartFillEmptyValues
  },
  findsKnowledgeGraphMetadata: {
    perspectiveID: 'finds', // use endpoint config from finds
    q: knowledgeGraphMetadataQuery,
    resultMapper: makeObjectList
  },
  jenaText: {
    perspectiveID: 'finds',
    properties: fullTextSearchProperties
  }
}
