// export const endpoint = 'https://ldf.fi/sualt-fha-finds/sparql'
export const endpoint = 'http://localhost:3039/ds/sparql'

export const endpointUseAuth = true

export const facetConfigs = {
  finds: {
    facetClass: ':Find',
    prefLabel: {
      id: 'prefLabel',
      labelPath: 'skos:prefLabel',
      textQueryPredicate: '', // empty for querying the facetClass
      textQueryProperty: 'skos:prefLabel', // limit only to prefLabels
      type: 'text'
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
      labelPath: ':object_type',
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
    periodObject: {
      id: 'periodObject',
      facetValueFilter: '',
      predicate: ':period',
      labelPath: ':period',
      type: 'list',
      literal: true
    },
    municipality: {
      id: 'municipality',
      facetValueFilter: '',
      predicate: ':municipality',
      labelPath: ':municipality/skos:prefLabel',
      type: 'list',
      literal: true
    },
    place: {
      id: 'place',
      facetValueFilter: '',
      predicate: ':municipality',
      labelPath: ':municipality/skos:prefLabel',
      type: 'list',
      literal: true
    },
    materialLiteral: {
      id: 'materialLiteral',
      facetValueFilter: '',
      predicate: ':material_literal',
      labelPath: ':material_literal',
      type: 'list',
      literal: true
    },
    objectType: {
      id: 'objectType',
      facetValueFilter: '',
      predicate: ':object_type',
      labelPath: ':object_type/skos:prefLabel',
      type: 'hierarchical',
      parentPredicate: ':object_type/skos:broader+',
      parentProperty: 'skos:broader'
    }
  }
}
