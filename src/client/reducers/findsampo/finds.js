import { handleDataFetchingAction } from '../general/results'

export const INITIAL_STATE = {
  results: null,
  resultUpdateID: 0,
  resultsSparqlQuery: null,
  paginatedResults: [],
  paginatedResultsSparqlQuery: null,
  resultCount: 0,
  page: -1,
  pagesize: 10,
  sortBy: 'findNumber',
  sortDirection: 'asc',
  fetching: false,
  fetchingResultCount: false,
  facetedSearchHeaderExpanded: true,
  instancePageHeaderExpanded: true,
  instanceTableData: null,
  instanceTableExternalData: null,
  instanceAnalysisData: null,
  instanceAnalysisDataUpdateID: 0,
  instanceSparqlQuery: null,
  properties: [
    {
      id: 'uri',
      valueType: 'object',
      makeLink: true,
      externalLink: true,
      sortValues: true,
      numberedList: false,
      onlyOnInstancePage: true
    },
    {
      id: 'image',
      valueType: 'image',
      previewImageHeight: 200,
      makeLink: true,
      externalLink: true,
      sortValues: true,
      numberedList: false,
      hideHeader: true
    },
    // {
    //   id: 'prefLabel',
    //   valueType: 'object',
    //   makeLink: true,
    //   externalLink: false,
    //   sortValues: true,
    //   numberedList: false,
    //   minWidth: 130
    // },
    {
      id: 'findName',
      valueType: 'object',
      makeLink: true,
      externalLink: false,
      sortValues: true,
      numberedList: false,
      minWidth: 140
    },
    {
      id: 'findNumber',
      valueType: 'string',
      makeLink: true,
      externalLink: false,
      sortValues: true,
      numberedList: false,
      minWidth: 180
    },
    {
      id: 'objectType',
      valueType: 'object',
      makeLink: true,
      externalLink: false,
      sortValues: true,
      numberedList: false,
      minWidth: 130
    },
    {
      id: 'material',
      valueType: 'object',
      makeLink: false,
      externalLink: false,
      sortValues: true,
      numberedList: false,
      minWidth: 130
    },
    {
      id: 'province',
      valueType: 'object',
      makeLink: false,
      externalLink: false,
      sortValues: true,
      numberedList: false,
      minWidth: 130
    },
    {
      id: 'municipality',
      valueType: 'object',
      makeLink: false,
      externalLink: false,
      sortValues: true,
      numberedList: false,
      minWidth: 130
    },
    {
      id: 'period',
      valueType: 'object',
      makeLink: true,
      externalLink: false,
      sortValues: true,
      numberedList: false,
      minWidth: 130,
    },
    {
      id: 'earliestStartYear',
      valueType: 'string',
      makeLink: false,
      externalLink: false,
      sortValues: true,
      numberedList: false,
      minWidth: 180
    },
    {
      id: 'latestEndYear',
      valueType: 'string',
      makeLink: false,
      externalLink: false,
      sortValues: true,
      numberedList: false,
      minWidth: 180
    },
    {
      id: 'length',
      valueType: 'string',
      makeLink: false,
      externalLink: false,
      sortValues: true,
      numberedList: false,
      minWidth: 120
    },
    {
      id: 'width',
      valueType: 'string',
      makeLink: false,
      externalLink: false,
      sortValues: true,
      numberedList: false,
      minWidth: 120
    },
    {
      id: 'weight',
      valueType: 'string',
      makeLink: false,
      externalLink: false,
      sortValues: true,
      numberedList: false,
      minWidth: 120
    },
    {
      id: 'maxThickness',
      valueType: 'string',
      makeLink: false,
      externalLink: false,
      sortValues: true,
      numberedList: false,
      minWidth: 180
    },
    {
      id: 'minThickness',
      valueType: 'string',
      makeLink: false,
      externalLink: false,
      sortValues: true,
      numberedList: false,
      minWidth: 180
    },
    {
      id: 'diameter',
      valueType: 'string',
      makeLink: false,
      externalLink: false,
      sortValues: true,
      numberedList: false,
      minWidth: 120
    },
    {
      id: 'description',
      valueType: 'string',
      makeLink: false,
      externalLink: false,
      sortValues: true,
      numberedList: false,
      onlyOnInstancePage: true
    },
    {
      id: 'foundAtHeight',
      valueType: 'string',
      makeLink: false,
      externalLink: false,
      sortValues: true,
      numberedList: false,
      onlyOnInstancePage: true
    },
    {
      id: 'archaeologicalSiteUrl',
      valueType: 'object',
      makeLink: true,
      externalLink: true,
      sortValues: true,
      numberedList: false,
      onlyOnInstancePage: true
    }
  ]
}

const resultClasses = new Set([
  'finds',
  'findsTimeline',
  'findsApexChartsTimeline',
  'findsApexChartsTimelineDialog',
  'nearbyFinds',
  'similarFinds',
  'findInstancePageMap',
  'findsByProvince',
  'findsByMaterial',
  'findsByObjectName',
  'findsByYear',
  'findsByWeight',
  'findsByLength',
  'findsByWidth',
  'findsKnowledgeGraphMetadata',
  'csvFinds'
])

const finds = (state = INITIAL_STATE, action) => {
  if (resultClasses.has(action.resultClass)) {
    return handleDataFetchingAction(state, action)
  } else return state
}

export default finds
