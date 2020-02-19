export const endpoint = 'https://ldf.fi/sualt-fha-finds/sparql'

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
    period: {
      id: 'period',
      facetValueFilter: '',
      predicate: ':period',
      labelPath: ':period',
      type: 'list',
      literal: true
    }
  }
}
