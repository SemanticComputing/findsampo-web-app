import { findsPerspectiveConfig } from './perspective_configs/FindsPerspectiveConfig'
import {
  findPropertiesInstancePage,
  findsPlacesQuery
} from './sparql_queries/SparqlQueriesFinds'
import { fullTextSearchProperties } from './sparql_queries/SparqlQueriesFullText'
// import { makeObjectList } from '../SparqlObjectMapper'
import { mapPlaces } from '../Mappers'

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
  jenaText: {
    perspectiveID: 'finds',
    properties: fullTextSearchProperties
  }
}
