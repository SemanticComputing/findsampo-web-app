export default {
  languageLabel: 'English',
  html: {
    title: 'FindSampo – Finnish Archaeological Finds on the Semantic Web',
    description: 'FindSampo is a semantic portal and a Linked Open Data service for searching and analyzing archaeological finds'
  },
  appTitle: {
    short: 'FindSampo',
    long: 'FindSampo',
    subheading: `
      Finnish Archaeological Finds on the Semantic Web
    `
  },
  appDescription: '',
  selectPerspective: 'Select an application perspective to search and browse the data:',
  selectPerspectiveExternal: 'Other applications:',
  mainPageImageLicence: '',
  backendErrorText: 'One of the backend services is not available at the moment. Please try again later.',
  mainPage: {
    carouselHeading: 'FEATURED FINDS',
    cardLearnMore: 'learn more'
  },
  topBar: {
    feedback: 'feedback',
    info: {
      info: 'Info',
      aboutFindSampo: 'About FindSampo',
      aboutFindSampoUrl: 'https://seco.cs.aalto.fi/projects/sualt/',
      blog: 'Project blog',
      blogUrl: 'https://blogs.helsinki.fi/sualt-project',
      guides: 'Archaeology guides'
    },
    searchBarPlaceHolder: 'Search all content',
    searchBarPlaceHolderShort: '',
    instructions: 'instructions',
    instructionsUrl: 'https://seco.cs.aalto.fi/projects/sualt/'
  },
  facetBar: {
    results: 'Results',
    activeFilters: 'Active filters:',
    defaultMissingValueLabel: '?tieto puuttuu',
    removeAllFilters: 'Remove all',
    narrowDownBy: 'Narrow down by',
    filterOptions: 'Filter options',
    filterByName: 'Filter by name',
    filterByBoundingBox: 'Filter by bounding box',
    selectionOptions: 'Selection options',
    selectAlsoSubconcepts: 'Automatically select all subconcepts',
    doNotSelectSubconcepts: 'Do not select subconcepts',
    sortingOptions: 'Sorting options',
    sortAlphabetically: 'Sort alphabetically',
    sortByNumberOfSearchResults: 'Sort by number of search results',
    minYear: 'Min year',
    maxYear: 'Max year',
    min: 'Min',
    max: 'Max',
    facetSearchFieldPlaceholder: 'Search...',
    applyFacetSelection: 'apply'
  },
  tabs: {
    table: 'table',
    map: 'map',
    heatmap: 'heatmap',
    export: 'export',
    timeline: 'timeline',
    recommendation_links: 'recommendation links',
    statistics: 'statistics',
    pie_chart: 'pie/bar chart',
    line_chart: 'line chart',
    nearby_finds: 'nearby finds',
    csv: 'csv'
  },
  table: {
    rowsPerPage: 'Rows per page',
    of: 'of'
  },
  pieChart: {
    by: 'by',
    chartType: 'Chart type:',
    pie: 'pie chart',
    bar: 'bar chart',
    resultClasses: {
      findsByProvince: 'province',
      findsByMaterial: 'material',
      findsByObjectName: 'object name'
    }
  },
  resultsAsCSV: 'download the search results as a CSV table',
  facets: {
    dateFacet: {
      invalidDate: 'Epäkelpo päivämäärä.',
      toBeforeFrom: 'Alkupäivämäärän täytyy olla ennen loppupäivämäärää.',
      minDate: 'Aikaisin sallittu päivämäärä on {minDate}',
      maxDate: 'Myöhäisin sallittu päivämäärä on {maxDate}',
      cancel: 'Peruuta',
      fromLabel: 'Alku',
      toLabel: 'Loppu'
    },
    textFacet: {
      inputLabel: 'Etsi nimellä'
    },
    sliderFacet: {
      invalidStartOrEnd: 'Min value must be smaller than max value. The smallest value can be {min} and the largest value can be {max}.'
    }
  },
  leafletMap: {
    findPopUpHeading: 'Archaeological find',
    basemaps: {
      mapbox: {
        'light-v10': 'Mapbox Light (OpenStreetMap)'
      },
      googleRoadmap: 'Google Maps',
      topographicalMapNLS: 'Topographical map (National Land Survey of Finland)',
      backgroundMapNLS: 'Background map (National Land Survey of Finland)',
      airMapNLS: 'Aerial map (National Land Survey of Finland)'
    },
    externalLayers: {
      arkeologiset_kohteet_alue: 'Register of Archaeological Sites, areas (Finnish Heritage Agency)',
      arkeologiset_kohteet_piste: 'Register of Archaeological Sites, points (Finnish Heritage Agency)',
      fhaLidar: 'Elevation model (Finnish Heritage Agency)',
      karelianMaps: 'Karelian maps, 1:100 000 topographic (SeCo)',
      senateAtlas: 'Senate atlas, 1:21 000 topographic (SeCo)',
      'kotus:pitajat': 'Finnish parishes in 1938 (Institute for the Languages of Finland)',
      'kotus:rajat-sms-alueet': 'Dialectical regions in Finland (Institute for the Languages of Finland)',
      'kotus:rajat-sms-alueosat': 'Dialectical subregions in Finland (Institute for the Languages of Finland)',
      'kotus:rajat-lansi-ita': 'Border between western and eastern dialects in Finland (Institute for the Languages of Finland)'
    },
    mapModeButtons: {
      markers: 'Markers',
      heatmap: 'Heatmap'
    },
    wrongZoomLevelFHA: 'The map zoom level has to be at least 13 in order to show this layer'
  },
  perspectives: {
    fullTextSearch: {
      properties: {
        prefLabel: {
          label: 'Label',
          description: ''
        },
        type: {
          label: 'Type',
          description: ''
        },
        description: {
          label: 'Description',
          description: ''
        }
      }
    },
    finds: {
      label: 'Finds',
      facetResultsType: 'finds',
      shortDescription: 'Faceted search for all types of archaelogical finds',
      longDescription: `
        <p class="MuiTypography-root MuiTypography-body1 MuiTypography-paragraph">
           [ short instructions here... ]
        </p>
        <ul class="MuiTypography-root MuiTypography-body1">
          <li>
            <strong>TABLE</STRONG> tab presents the finds as paginated table
          </li>
          <li>
            ...
          </li>
          <li>
            ...
          </li>
          <li>
            ...
          </li>
        </ul>
      `,
      instancePage: {
        label: 'Archaeological find',
        description: `
          <p class="MuiTypography-root MuiTypography-body1 MuiTypography-paragraph">
            [ short instructions here... ]
          </p>
        `,
        recommendations: {
          nearByFinds: 'Nearby finds',
          similarFinds: 'Similar finds'
        }
      },
      properties: {
        uri: {
          label: 'URI',
          description: 'Uniform Resource Identifier'
        },
        findName: {
          label: 'Find name',
          description: 'Find name.'
        },
        findText: {
          label: 'Text search',
          description: 'Search with free text based on name, number or description of the find.'
        },
        identifierFHA: {
          label: 'FHA identifier',
          description: 'FHA identifier of the find.'
        },
        description: {
          label: 'Description',
          description: 'Description text of the find.'
        },
        specification: {
          label: 'Specification',
          description: 'Specification.'
        },
        prefLabel: {
          label: 'Find name',
          description: 'Find name including a broad classification of the object and the accession number.'
        },
        objectType: {
          label: 'Object type',
          description: `
            Object type .
          `
        },
        facetObjectType: {
          label: 'Object type',
          description: `
            Object type of the find using a facet ontology created by the FHA.
          `
        },
        place: {
          label: 'Place',
          description: `
            Find place
          `
        },
        material: {
          label: 'Material',
          description: `
            Material.
          `
        },
        period: {
          label: 'Period',
          description: 'Period when the object was created. May include both earliest and lates periods.'
        },
        dateTimespan: {
          label: 'Dating',
          description: `
            Search based on dating of the find.
          `
        },
        startYear: {
          label: 'Start year',
          description: `
            Earliest creation year of the object as determined by an expert.
          `
        },
        endYear: {
          label: 'End year',
          description: `
            Latest creation year of the object as determined by an expert.
          `
        },
        province: {
          label: 'Province',
          description: `
            Province where found.
          `
        },
        municipality: {
          label: 'Municipality',
          description: `
            Municipality where found.
          `
        },
        image: {
          label: 'Image',
          description: 'Image description.'
        },
        earliestStartYear: {
          label: 'Earliest creation time',
          description: 'Earliest presumed creation date of the object based on a year determined by an expert or automatically deduced based on period'
        },
        latestEndYear: {
          label: 'Latest creation time',
          description: 'Latest presumed creation date of the object  based on a year determined by an expert or automatically deduced based on period'
        },
        kmNumber: {
          label: 'KM number',
          description: 'accession number of the collections'
        },
        ceramicStyle: {
          label: 'Ceramic style',
          description: 'Ceramic culture associated with the object'
        },
        weight: {
          label: 'Weight',
          description: 'Weight of the object in grams'
        },
        length: {
          label: 'Length',
          description: 'Length of the object in millimeters'
        },
        maxThickness: {
          label: 'Maximum thickness',
          description: 'Maximum thickness of the object of the object in millimeters'
        },
        minThickness: {
          label: 'Minimum thickness',
          description: 'Minimum thickness of the object of the object in millimeters'
        },
        width: {
          label: 'Width',
          description: 'Width of the object in millimeters'
        },
        diameter: {
          label: 'Diameter',
          description: 'Diameter of the object in millimeters'
        },
        similarObjectType: {
          label: 'Finds with similar object type',
          description: 'Finds with similar object type'
        },
        similarMaterial: {
          label: 'Finds with similar material',
          description: 'Finds with similar material'
        },
        similarPeriod: {
          label: 'Finds from the same time period',
          description: 'Finds from the same time period'
        },
        similarExternalFind: {
          label: 'Similar external find',
          description: 'Similar find in PAS'
        },
        foundAtHeight: {
          label: 'Height',
          description: 'Height of the find site above the sea level in meters'
        },
        archaeologicalSiteUrl: {
          label: 'Archeological site url',
          description: 'URL of the find site in the Ancient Relics Register (muinaisjäännösrekisteri, kyppi-portaali)'
        },
        typology: {
          label: 'Typological description',
          description: 'Typological description of the find (e.g. comb ware ceramic)'
        }
      }
    },
    types: {
      instancePage: {
        label: 'Object type',
        description: `
          <p class="MuiTypography-root MuiTypography-body1 MuiTypography-paragraph">
            [ short instructions here... ]
          </p>
      `
      },
      properties: {
        uri: {
          label: 'URI',
          description: 'Uniform Resource Identifier'
        },
        prefLabel: {
          label: 'Term',
          description: ''
        },
        maoMatch: {
          label: 'Equivalent term in MAO',
          description: `
          `
        },
        hiddenLabel: {
          label: 'Alternative terms',
          description: `
          `
        },
        facetType: {
          label: 'Category in facet ontology',
          description: `
          `
        }
      }
    },
    periods: {
      instancePage: {
        label: 'Period',
        description: `
          <p class="MuiTypography-root MuiTypography-body1 MuiTypography-paragraph">
            [ short instructions here... ]
          </p>
      `
      },
      properties: {
        uri: {
          label: 'URI',
          description: 'Uniform Resource Identifier'
        },
        prefLabel: {
          label: 'Name',
          description: 'Name of the period'
        },
        hiddenLabel: {
          label: 'Alternative terms',
          description: `
             possible alternative terms for the period
          `
        },
        earliestBegin: {
          label: 'Period start',
          description: `
             Earliest year that period started
          `
        },
        latestEnd: {
          label: 'Period end',
          description: `
             latest year that period ended
          `
        }
      }
    },
    ilppari: {
      label: 'Ilppari',
      mainPageLabel: 'Case Law Finder',
      shortDescription: 'Reporting service for archaelogical finds found in Finland'
    },
    map: {
      label: 'Map',
      mainPageLabel: 'Map',
      shortDescription: 'Interactive map for visualizing the finds'
    },
    sites: {
      label: 'Sites',
      mainPageLabel: 'Sites',
      shortDescription: 'View archaelogical sites and protected areas',
      longDescription: `
        <p class="MuiTypography-root MuiTypography-body1 MuiTypography-paragraph">
          [ add instructions for Sites perspective here... ]
        </p>

    `
    },
    guides: {
      label: 'Guides',
      mainPageLabel: 'Guides',
      shortDescription: 'Guides and instructions for conducting archaelogy as a hobby',
      whatShoulIDo: {
        title: 'What should I do if I find an antiquity?',
        link: 'https://www.museovirasto.fi/en/collection-and-information-services/item-collections/mitae-teen-kun-loeydaen-muinaisesineen'
      },
      reportingADiscovery: {
        title: 'Reporting a discovery',
        link: 'https://www.museovirasto.fi/en/cultural-environment/archaeological-cultural-heritage/reporting-a-discovery'
      },
      archaelogyAsAHobby: {
        title: 'Archaeology as hobby',
        link: 'https://www.museovirasto.fi/en/cultural-environment/archaeological-cultural-heritage/archaeology-as-a-hobby'
      },
      enthusiastsGuide: {
        title: 'Antiquities, ancient monuments and metal detectors: an enthusiast’s guide (PDF)',
        link: 'https://www.museovirasto.fi/uploads/Palvelut_ja_ohjeet/Antiquities_and_metal_detectors_guide_2020_final.pdf '
      }
    }
  }
}
