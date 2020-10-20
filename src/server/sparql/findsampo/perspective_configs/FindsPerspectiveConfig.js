import {
  findPropertiesFacetResults,
  findPropertiesInstancePage
} from '../sparql_queries/SparqlQueriesFinds'
import { prefixes } from '../sparql_queries/SparqlQueriesPrefixes'

export const findsPerspectiveConfig = {
  endpoint: {
    url: 'https://ldf.fi/sualt-fha-finds/sparql',
    //url: 'http://localhost:3039/ds/sparql',
    prefixes,
    useAuth: true
  },
  facetClass: ':Find',
  paginatedResults: {
    properties: findPropertiesFacetResults
  },
  instance: {
    properties: findPropertiesInstancePage,
    relatedInstances: ''
  },
  facets: {
    findName: {
      id: 'findName',
      facetValueFilter: '',
      predicate: ':find_name',
      labelPath: ':find_name',
      type: 'list',
      literal: true
    },
    specification: {
      id: 'specification',
      facetValueFilter: '',
      predicate: ':specification',
      labelPath: ':specification',
      type: 'list',
      literal: true
    },
    type: {
      id: 'type',
      facetValueFilter: '',
      predicate: ':type',
      labelPath: ':type',
      type: 'list',
      literal: true
    },
    subCategory: {
      id: 'subCategory',
      facetValueFilter: '',
      predicate: ':sub_category',
      labelPath: ':sub_category',
      type: 'list',
      literal: true
    },
    objectSubCategory: {
      id: 'objectSubCategory',
      facetValueFilter: '',
      predicate: ':object_type',
      labelPath: ':object_type/skos:prefLabel',
      type: 'list',
      facetLabelFilter: 'FILTER(LANG(?prefLabel_) = \'fi\')',
    },
    material: {
      id: 'material',
      facetValueFilter: '',
      predicate: ':material',
      labelPath: ':material/skos:prefLabel',
      type: 'hierarchical',
      parentPredicate: ':material/skos:broader+',
      parentProperty: 'skos:broader'
    },
    materialLiteral: {
      id: 'materialLiteral',
      facetValueFilter: '',
      predicate: ':material_literal',
      labelPath: ':material_literal',
      type: 'list',
      literal: true
    },
    period: {
      id: 'periodObject',
      facetValueFilter: '',
      predicate: ':earliest_period|:latest_period',
      labelPath: ':earliest_period/skos:prefLabel|:latest_period/skos:prefLabel',
      type: 'hierarchical',
      parentPredicate: ':earliest_perio/skos:broader+|:latest_period/skos:broader+',
      parentProperty: 'skos:broader'
    },
    municipality: {
      id: 'municipality',
      facetValueFilter: '',
      predicate: ':municipality',
      labelPath: ':municipality/skos:prefLabel',
      type: 'list',
    },
    place: {
      id: 'place',
      facetValueFilter: '',
      predicate: ':municipality/skos:related',
      labelPath: ':municipalityskos:related//skos:prefLabel',
      type: 'hierarchical',
      parentPredicate: ':municipality/skos:related/skos:broader+',
      parentProperty: 'skos:broader',
      facetLabelFilter: 'FILTER(LANG(?prefLabel_) = \'fi\')',
    },
    objectType: {
      id: 'objectType',
      facetValueFilter: '',
      predicate: ':object_type',
      labelPath: ':object_type/skos:prefLabel',
      type: 'hierarchical',
      parentPredicate: ':object_type/skos:broader+',
      parentProperty: 'skos:broader'
    },
    // objectType: {
    //   id: 'objectType',
    //   facetValueFilter: '?id a skos:Concept',
    //   predicate: ':object_type/skos:exactMatch',
    //   labelPath: ':object_type/skos:exactMatch/skos:prefLabel',
    //   type: 'hierarchical',
    //   parentPredicate: ':object_type/skos:exactMatch/:broader_type+',
    //   parentProperty: ':broader_type',
    //   facetLabelFilter: 'FILTER(LANG(?prefLabel_) = \'fi\')',
    // },
    // creationTimespan: {
    //   id: 'creationTimespan',
    //   facetValueFilter: '',
    //   sortByAscPredicate: ':has_time_span/crm:P82a_begin_of_the_begin',
    //   sortByDescPredicate: ':has_time_Span/crm:P82b_end_of_the_end',
    //   predicate: ':has_time_Span',
    //   startProperty: 'crm:P82a_begin_of_the_begin',
    //   endProperty: 'crm:P82b_end_of_the_end',
    //   type: 'timespan'
    // },
  }
}
