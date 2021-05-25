export const rootUrl = ''

export const defaultLocale = 'fi'

export const showLanguageButton = true

export const readTranslationsFromGoogleSheets = true

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

export const feedbackLink = 'https://link.webropolsurveys.com/S/4288C417CBF3AAFB'

const createArchealogicalSitePopUp = data => {
  let html = ''
  const name = data.kohdenimi
    ? `<b>Nimi:</b> ${data.kohdenimi}</p>` : ''
  const classification = data.laji ? `<h3>${data.laji.charAt(0).toUpperCase() + data.laji.slice(1)}</b></h3>` : ''
  const municipality = data.kunta ? `<b>Kunta:</b> ${data.kunta}</p>` : ''
  const link = data.mjtunnus
    ? `<a href="https://www.kyppi.fi/to.aspx?id=112.${data.mjtunnus}" target="_blank">Avaa kohde Muinaisjäännösrekisterissä</a></p>` : ''
  html += `
  <div>
    ${classification}
    ${name}
    ${municipality}
    ${link}
  </div>
  `
  return html
}

const bufferStyle = feature => {
  if (feature.properties.laji.includes('poistettu kiinteä muinaisjäännös')) {
    return {
      fillOpacity: 0,
      weight: 0
    }
  } else {
    return {
      color: '#6E6E6E',
      dashArray: '3, 5'
    }
  }
}

const createArchealogicalSiteColor = feature => {
  let color = '#dd2c00'
  if (feature.properties.laji.includes('poistettu kiinteä muinaisjäännös')) {
    color = '#000000'
  }
  return color
}

export const leafletLayerConfigs = [
  {
    id: 'arkeologiset_kohteet_alue_varoalue',
    type: 'GeoJSON',
    minZoom: 13,
    buffer: {
      distance: 200,
      units: 'metres',
      style: bufferStyle
    },
    createGeoJSONPointStyle: feature => null, //  this layer includes only GeoJSON Polygons
    createGeoJSONPolygonStyle: feature => {
      return {
        color: createArchealogicalSiteColor(feature),
        cursor: 'pointer'
      }
    },
    createPopup: createArchealogicalSitePopUp
  },
  {
    id: 'arkeologiset_kohteet_piste_varoalue',
    type: 'GeoJSON',
    minZoom: 13,
    buffer: {
      distance: 200,
      units: 'metres',
      style: bufferStyle
    },
    createGeoJSONPointStyle: feature => {
      return {
        radius: 8,
        fillColor: createArchealogicalSiteColor(feature),
        color: '#000',
        weight: 1,
        opacity: 1,
        fillOpacity: 0.8
      }
    },
    createGeoJSONPolygonStyle: feature => null, // this layer includes only GeoJSON points
    createPopup: createArchealogicalSitePopUp
  },
  {
    id: 'arkeologiset_kohteet_alue',
    type: 'GeoJSON',
    minZoom: 13,
    // buffer: {
    //   distance: 200,
    //   units: 'metres',
    //   style: bufferStyle
    // },
    createGeoJSONPointStyle: feature => null, //  this layer includes only GeoJSON Polygons
    createGeoJSONPolygonStyle: feature => {
      return {
        color: createArchealogicalSiteColor(feature),
        cursor: 'pointer'
      }
    },
    createPopup: createArchealogicalSitePopUp
  },
  {
    id: 'arkeologiset_kohteet_piste',
    type: 'GeoJSON',
    minZoom: 13,
    // buffer: {
    //   distance: 200,
    //   units: 'metres',
    //   style: bufferStyle
    // },
    createGeoJSONPointStyle: feature => {
      return {
        radius: 8,
        fillColor: createArchealogicalSiteColor(feature),
        color: '#000',
        weight: 1,
        opacity: 1,
        fillOpacity: 0.8
      }
    },
    createGeoJSONPolygonStyle: feature => null, // this layer includes only GeoJSON points
    createPopup: createArchealogicalSitePopUp
  },
  {
    id: 'fhaLidar',
    type: 'WMS',
    url: `${process.env.API_URL}/fha-wms`,
    layers: 'NBA:lidar',
    version: '1.3.0',
    attribution: 'FHA',
    minZoom: 13,
    maxZoom: 16
  },
  {
    id: 'karelianMaps',
    type: 'WMTS',
    url: 'https:///mapwarper.onki.fi/mosaics/tile/4/{z}/{x}/{y}.png',
    opacityControl: true,
    attribution: 'Semantic Computing Research Group'
  },
  {
    id: 'senateAtlas',
    type: 'WMTS',
    url: 'https:///mapwarper.onki.fi/mosaics/tile/5/{z}/{x}/{y}.png',
    opacityControl: true,
    attribution: 'Semantic Computing Research Group'
  }
]
