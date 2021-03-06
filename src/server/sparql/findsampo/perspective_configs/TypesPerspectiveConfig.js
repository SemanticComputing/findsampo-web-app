import {
  typesPropertiesFacetResults,
  typesPropertiesInstancePage
} from '../sparql_queries/SparqlQueriesTypes'
import { prefixes } from '../sparql_queries/SparqlQueriesPrefixes'

export const typesPerspectiveConfig = {
  endpoint: {
    url: 'https://ldf.fi/sualt-fha-finds/sparql',
    //url: 'http://localhost:3039/ds/sparql',
    prefixes,
    useAuth: true
  },
  facetClass: ':Object_facet_type',
  paginatedResults: {
    properties: typesPropertiesFacetResults
  },
  instance: {
    properties: typesPropertiesInstancePage,
    relatedInstances: ''
  },
  facets: {
    // name: {
    //   id: 'name',
    //   facetValueFilter: '',
    //   //predicate: 'skos:related/^skos:related',
    //   labelPath: 'skos:prefLabel',
    //   type: 'hierarchical',
    //   parentProperty: 'skos:broader',
    // },
    // broader: {
    //   id: 'broader',
    //   facetValueFilter: '',
    //   predicate: 'skos:broader',
    //   labelPath: 'skos:broader/skos:prefLabel',
    //   parentProperty: 'skos:broader',
    //   type: 'hierarchical'
    // },
    facetType: {
      id: 'facetType',
      facetValueFilter: '',
      predicate: 'skos:broader',
      labelPath: 'skos:broader/skos:prefLabel',
      parentProperty: 'skos:broader',
      type: 'hierarchical'
    },
  }
}
