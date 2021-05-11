import {
  findPropertiesFacetResults,
  findPropertiesInstancePage
} from '../sparql_queries/SparqlQueriesFinds'
import { prefixes } from '../sparql_queries/SparqlQueriesPrefixes'

export const findsPerspectiveConfig = {
  endpoint: {
    url: 'https://ldf.fi/findsampo/sparql',
    // url: 'http://localhost:3039/ds/sparql',
    prefixes,
    useAuth: true
  },
  facetClass: ':Find',
  langTag: 'fi',
  paginatedResults: {
    properties: findPropertiesFacetResults
  },
  instance: {
    properties: findPropertiesInstancePage,
    relatedInstances: ''
  },
  facets: {
    prefLabel: {
      labelPath: 'skos:prefLabel'
    },
    findName: {
      labelPath: 'ltk-s:find_name'
    },
    findNumber: {
      labelPath: ':identifier'
    },
    findText: {
      id: 'findText',
      labelPath: 'skos:prefLabel',
      textQueryPredicate: '',
      textQueryProperty: '',
      type: 'text'
    },
    facetObjectType: {
      id: 'facetObjectType',
      facetValueFilter: '',
      predicate: ':facet_object_type',
      labelPath: ':facet_object_type/skos:prefLabel',
      type: 'hierarchical',
      parentProperty: 'skos:broader'
    },
    objectType: { // objectType is used only for sorting results
      id: 'objectType',
      orderByPattern: `
        OPTIONAL {
          ?id :object_type/skos:prefLabel ?orderBy .
          FILTER(LANG(?orderBy) = '<LANG>')
        }
      `
    },
    material: {
      id: 'material',
      facetValueFilter: '',
      predicate: ':material',
      labelPath: ':material/skos:prefLabel',
      type: 'hierarchical',
      parentProperty: 'skos:broader'
    },
    place: {
      id: 'place',
      facetValueFilter: '',
      predicate: ':found_in_municipality/skos:exactMatch',
      labelPath: ':found_in_municipality/skos:exactMatch/skos:prefLabel',
      type: 'hierarchical',
      parentProperty: 'skos:broader',
      facetLabelFilter: `
        FILTER(LANG(?prefLabel_) = '<LANG>')
      `
    },
    province: {
      labelPath: ':found_in_province/skos:prefLabel'
    },
    municipality: {
      labelPath: ':found_in_municipality/skos:prefLabel'
    },
    period: {
      id: 'period',
      facetValueFilter: '',
      predicate: ':period',
      labelPath: ':period/skos:prefLabel',
      type: 'hierarchical',
      parentProperty: 'skos:broader'
    },
    dateTimespan: {
      id: 'dateTimespan',
      facetValueFilter: '',
      predicate: ':has_creation_time_span',
      startProperty: 'crm:P82a_begin_of_the_begin',
      endProperty: 'crm:P82b_end_of_the_end',
      type: 'timespan'
    },
    earliestStartYear: {
      orderByPattern: `
      OPTIONAL {
        ?id :has_creation_time_span/crm:P82a_begin_of_the_begin ?orderBy_ .
        BIND(xsd:date(?orderBy_) as ?orderBy)
      }
    `
    },
    latestEndYear: {
      orderByPattern: `
      OPTIONAL {
        ?id :has_creation_time_span/crm:P82b_end_of_the_end ?orderBy_ .
        BIND(xsd:date(?orderBy_) as ?orderBy)
      }
    `
    },
    ceramicStyle: {
      id: 'ceramicStyle',
      facetValueFilter: '',
      predicate: ':ceramic_style',
      labelPath: ':ceramic_style/skos:prefLabel',
      type: 'hierarchical',
      parentProperty: 'skos:broader'
    },
    length: {
      id: 'lenght',
      facetValueFilter: '',
      labelPath: ':length',
      predicate: ':length',
      type: 'integer',
      typecasting: 'BIND(xsd:integer(ROUND(xsd:decimal(?value))) as ?valueAsInteger)'
    },
    width: {
      id: 'width',
      facetValueFilter: '',
      labelPath: ':width',
      predicate: ':width',
      type: 'integer',
      typecasting: 'BIND(xsd:integer(ROUND(xsd:decimal(?value))) as ?valueAsInteger)'
    },
    weight: {
      id: 'weight',
      facetValueFilter: '',
      labelPath: ':weight',
      predicate: ':weight',
      type: 'integer',
      // the default typecasting is BIND(xsd:integer(?value) as ?valueAsInteger)
      // use a custom typecasting to convert and round from e.g. "673.39" to "673"^^xsd:integer
      typecasting: 'BIND(xsd:integer(ROUND(xsd:decimal(?value))) as ?valueAsInteger)'
    },
    diameter: {
      facetValueFilter: '',
      labelPath: ':diameter',
      predicate: ':diameter',
      type: 'integer',
      typecasting: 'BIND(xsd:integer(ROUND(xsd:decimal(?value))) as ?valueAsInteger)'
    },
    minThickness: {
      facetValueFilter: '',
      labelPath: ':min_thickness',
      predicate: ':min_thickness',
      type: 'integer',
      typecasting: 'BIND(xsd:integer(ROUND(xsd:decimal(?value))) as ?valueAsInteger)'
    },
    maxThickness: {
      facetValueFilter: '',
      labelPath: ':max_thickness',
      predicate: ':max_thickness',
      type: 'integer',
      typecasting: 'BIND(xsd:integer(ROUND(xsd:decimal(?value))) as ?valueAsInteger)'
    }
  }
}
