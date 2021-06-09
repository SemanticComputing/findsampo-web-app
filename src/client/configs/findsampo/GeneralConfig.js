import bannerImage from '../../img/findsampo/ponsi-banner-compressed.jpg'

export const rootUrl = ''

export const defaultLocale = 'fi'

export const MAPBOX_ACCESS_TOKEN = 'pk.eyJ1IjoiZWtrb25lbiIsImEiOiJjazhlbW16MWExNnFzM2VtanpmdTFwbThmIn0.BCYqZObBlHvxkW2TBMGPLw'

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
  reducedHeightBreakpoint: 'lg',
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
    bannerDefaultHeight: 370,
    bannerReducedHeight: 225
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
    height: 61
  }
}
