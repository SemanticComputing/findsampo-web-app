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
    prefLabel: {
      id: 'prefLabel',
      facetValueFilter: '',
      predicate: 'skos:prefLabel',
      labelPath: 'skos:prefLabel',
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
      facetLabelFilter: 'FILTER(LANG(?prefLabel_) = \'fi\')'
    },
    material: {
      id: 'material',
      facetValueFilter: '',
      predicate: ':material',
      labelPath: ':material/skos:prefLabel',
      type: 'hierarchical',
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
      sortByAscPredicate: ':has_creation_time_span/crm:P82a_begin_of_the_begin',
      sortByDescPredicate: ':has_creation_time_span/crm:P82b_end_of_the_end',
      predicate: ':has_creation_time_span',
      startProperty: 'crm:P82a_begin_of_the_begin',
      endProperty: 'crm:P82b_end_of_the_end',
      type: 'timespan'
    },
    municipality: {
      id: 'municipality',
      facetValueFilter: '',
      predicate: ':found_in_municipality',
      labelPath: ':found_in_municipality/skos:exactMatch/skos:prefLabel',
      type: 'list'
    },
    place: {
      id: 'place',
      facetValueFilter: '',
      predicate: ':found_in_municipality/skos:exactMatch',
      labelPath: ':found_in_municipality/skos:exactMatch/skos:prefLabel',
      type: 'hierarchical',
      parentProperty: 'skos:broader',
      facetLabelFilter: 'FILTER(LANG(?prefLabel_) = \'fi\')'
    },
    objectType: {
      id: 'objectType',
      facetValueFilter: '',
      predicate: ':object_type',
      labelPath: ':object_type/skos:prefLabel',
      type: 'hierarchical',
      // parentPredicate: ':object_type/skos:broader+',
      parentProperty: 'skos:broader'
    },
    objectTypeFlat: {
      id: 'objectTypeFlat',
      facetValueFilter: '',
      predicate: ':object_type',
      labelPath: ':object_type/skos:prefLabel',
      // type: 'hierarchical',
      type: 'list',
      facetLabelFilter: 'FILTER(LANG(?prefLabel_) = \'fi\')'
    },
    kmNumber: {
      id: 'kmNumber',
      facetValueFilter: '',
      predicate: 'ltk-s:identifier',
      labelPath: 'ltk-s:identifier',
      type: 'list',
      literal: true
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
      labelPath: 'ltk-s:length',
      predicate: 'ltk-s:length',
      type: 'integer'
    },
    width: {
      id: 'width',
      facetValueFilter: '',
      labelPath: 'ltk-s:width',
      predicate: 'ltk-s:width',
      type: 'integer'
    },
    weight: {
      id: 'weight',
      facetValueFilter: '',
      labelPath: 'ltk-s:weight',
      predicate: 'ltk-s:weight',
      type: 'integer'
    },
    thickness: {
      id: 'thickness',
      facetValueFilter: '',
      labelPath: 'ltk-s:thickness_literal',
      predicate: 'ltk-s:thickness_literal',
      type: 'integer'
    }
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
