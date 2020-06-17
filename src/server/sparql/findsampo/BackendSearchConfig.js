import { findsPerspectiveConfig } from './perspective_configs/FindsPerspectiveConfig'
import {
  findPropertiesInstancePage,
  findsPlacesQuery,
  findsTimelineQuery
} from './sparql_queries/SparqlQueriesFinds'
import { fullTextSearchProperties } from './sparql_queries/SparqlQueriesFullText'
import { makeObjectList } from '../SparqlObjectMapper'
import {
  mapPlaces,
  // mapTimelineData
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
  jenaText: {
    perspectiveID: 'finds',
    properties: fullTextSearchProperties
  }
}
