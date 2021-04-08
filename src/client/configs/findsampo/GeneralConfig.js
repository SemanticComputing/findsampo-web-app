export const rootUrl = ''

export const defaultLocale = 'en'

export const showLanguageButton = true

export const MAPBOX_ACCESS_TOKEN = 'pk.eyJ1IjoiZWtrb25lbiIsImEiOiJjazhlbW16MWExNnFzM2VtanpmdTFwbThmIn0.BCYqZObBlHvxkW2TBMGPLw'

export const MAPBOX_STYLE = 'light-v10' // https://docs.mapbox.com/api/maps/#styles

export const documentFinderAPIUrl = 'https://data.finlex.fi/document-finder-backend'

export const backendErrorText = 'The database is not available. Please try again later.'

export const yasguiBaseUrl = 'https://yasgui.triply.cc'

export const yasguiParams = {
  contentTypeConstruct: 'text/turtle',
  contentTypeSelect: 'application/sparql-results+json',
  endpoint: 'https://ldf.fi/sualt-fha-finds/sparql',
  requestMethod: 'POST',
  tabTitle: 'Exported query'
}

export const feedbackLink = 'https://link.webropolsurveys.com/'

export const createArchealogicalSitePopUp = data => {
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
