import {
  findPropertiesFacetResults,
  findPropertiesInstancePage
} from '../sparql_queries/SparqlQueriesFinds'
import { prefixes } from '../sparql_queries/SparqlQueriesPrefixes'

export const findsPerspectiveConfig = {
  endpoint: {
    url: 'https://ldf.fi/sualt-fha-finds/sparql',
    // url: 'http://localhost:3039/ds/sparql',
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
      predicate: ':earliest_period|:latest_period',
      labelPath: ':earliest_period/skos:prefLabel|:latest_period/skos:prefLabel',
      type: 'hierarchical',
      parentProperty: 'skos:broader'
    },
    dateTimespan: {
      id: 'dateTimespan',
      facetValueFilter: '',
      sortByAscPredicate: ':has_time_span/crm:P82a_begin_of_the_begin',
      sortByDescPredicate: ':has_time_span/crm:P82b_end_of_the_end',
      predicate: ':has_time_span',
      startProperty: 'crm:P82a_begin_of_the_begin',
      endProperty: 'crm:P82b_end_of_the_end',
      type: 'timespan'
    },
    municipality: {
      id: 'municipality',
      facetValueFilter: '',
      predicate: ':municipality',
      labelPath: ':municipality/skos:prefLabel',
      type: 'list'
    },
    place: {
      id: 'place',
      facetValueFilter: '',
      predicate: ':municipality/skos:related',
      labelPath: ':municipalityskos:related//skos:prefLabel',
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
    // objectTypeFHAFacet: {
    //   id: 'objectTypeFHAFacet',
    //   facetValueFilter: '?id a :Object_facet_type',
    //   predicate: ':object_type/:mao_match/^skos:related',
    //   labelPath: ':object_type/:mao_match/^skos:related/skos:prefLabel',
    //   type: 'hierarchical',
    //   parentProperty: 'skos:broader',
    //   facetLabelFilter: 'FILTER(LANG(?prefLabel_) = \'fi\')',
    // },
    objectTypeFHAFacet: {
      id: 'objectTypeFHAFacet',
      facetValueFilter: '?id a :Object_facet_type',
      predicate: ':facet_object_term',
      labelPath: ':facet_object_term/skos:prefLabel',
      type: 'hierarchical',
      parentProperty: 'skos:broader'
    },
    objectTypeMAO: {
      id: 'objectTypeMAO',
      facetValueFilter: '',
      predicate: ':object_type/:mao_match',
      labelPath: ':object_type/:mao_match/skos:prefLabel',
      type: 'hierarchical',
      parentProperty: 'skos:broader',
      facetLabelFilter: 'FILTER(LANG(?prefLabel_) = \'fi\')'
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
      predicate: ':km_number',
      labelPath: ':km_number',
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
      labelPath: ':length_literal',
      predicate: ':length_literal',
      type: 'integer'
    },
    width: {
      id: 'width',
      facetValueFilter: '',
      labelPath: ':width_literal',
      predicate: ':width_literal',
      type: 'integer'
    },
    weight: {
      id: 'weight',
      facetValueFilter: '',
      labelPath: ':weight_rounded',
      predicate: ':weight_rounded',
      type: 'integer'
    },
    thickness: {
      id: 'thickness',
      facetValueFilter: '',
      labelPath: ':thickness_literal',
      predicate: ':thickness_literal',
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
