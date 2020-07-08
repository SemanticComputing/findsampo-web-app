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
    material: {
      id: 'material',
      facetValueFilter: '',
      predicate: ':material',
      labelPath: ':material',
      type: 'list',
      literal: true
    },
    period: {
      id: 'period',
      facetValueFilter: '',
      predicate: ':period',
      labelPath: ':period',
      type: 'list',
      literal: true
    },
    //startYear: {
    //  id: 'startYear',
    //  labelPath: ':start_year'
    //},
    //endYear: {
    //  id: 'endYear',
    //  labelPath: ':end_year'
    //},
    //startYear: {
    //  id: 'startYear',
    //  labelPath: 'crm:P4_has_time_span/crm:P82a_begin_of_the_begin'
    //},
    //endYear: {
    //  id: 'endYear',
    //  labelPath: 'crm:P4_has_time_span/crm:P82b_end_of_the_end'
    //},
    municipality: {
      id: 'municipality',
      facetValueFilter: '',
      predicate: ':municipality',
      labelPath: ':municipality',
      type: 'list',
      literal: true
    }
  }
}
