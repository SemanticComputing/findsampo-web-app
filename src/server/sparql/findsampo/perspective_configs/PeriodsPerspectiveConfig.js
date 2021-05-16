import {
  periodsPropertiesFacetResults,
  periodsPropertiesInstancePage
} from '../sparql_queries/SparqlQueriesPeriods'
import { prefixes } from '../sparql_queries/SparqlQueriesPrefixes'

export const periodsPerspectiveConfig = {
  endpoint: {
    url: 'https://ldf.fi/findsampo/sparql',
    // url: 'http://localhost:3039/ds/sparql',
    prefixes,
    useAuth: true
  },
  facetClass: ':Period',
  paginatedResults: {
    properties: periodsPropertiesFacetResults
  },
  instance: {
    properties: periodsPropertiesInstancePage,
    relatedInstances: ''
  },
  facets: {
    prefLabel: {
      id: 'prefLabel',
      facetValueFilter: '',
      predicate: 'skos:prefLabel',
      labelPath: 'skos:prefLabel',
      type: 'list',
      literal: true
    }
  }
}
