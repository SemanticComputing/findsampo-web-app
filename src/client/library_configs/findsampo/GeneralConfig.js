import bannerImage from '../../img/'

export const rootUrl = ''

export const defaultLocale = 'fi'

export const MAPBOX_ACCESS_TOKEN = ''

export const MAPBOX_STYLE = 'light-v10' // https://docs.mapbox.com/api/maps/#styles

// export const documentFinderAPIUrl = 'https://data.finlex.fi/document-finder-backend'

export const yasguiBaseUrl = 'https://yasgui.triply.cc'

export const yasguiParams = {
  contentTypeConstruct: 'text/turtle',
  contentTypeSelect: 'application/sparql-results+json',
  endpoint: 'https://ldf.fi/findsampo/sparql',
  requestMethod: 'POST',
  tabTitle: 'Exported query'
}

export const feedbackLink = ''

export const layoutConfig = {
  hundredPercentHeightBreakPoint: 'md',
  reducedHeightBreakpoint: 'xl',
  tabHeight: 58,
  paginationToolbarHeight: 37,
  tableFontSize: '0.8rem',
  topBar: {
    showLanguageButton: true,
    feedbackLink: 'https://link.webropolsurveys.com/S/4288C417CBF3AAFB',
    reducedHeight: 44,
    defaultHeight: 64,
    mobileMenuBreakpoint: 1100
  },
  mainPage: {
    bannerBackround: `linear-gradient( rgba(0, 0, 0, 0.30), rgba(0, 0, 0, 0.30) ), url(${bannerImage})`,
    bannerMobileHeight: 150,
    bannerReducedHeight: 225,
    bannerDefaultHeight: 370
  },
  infoHeader: {
    default: {
      height: 49,
      expandedContentHeight: 160,
      headingVariant: 'h4',
      infoIconFontSize: 40
    },
    reducedHeight: {
      height: 40,
      expandedContentHeight: 100,
      headingVariant: 'h6',
      infoIconFontSize: 32
    }
  },
  footer: {
    reducedHeight: 44,
    defaultHeight: 64
  }
}
