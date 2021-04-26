export default {
  languageLabel: 'English',
  html: {
    title: 'FindSampo – Finnish Archaeological Finds on the Semantic Web',
    description: 'FindSampo is a semantic portal and a Linked Open Data service searching and analyzing archaeological Finds'
  },
  appTitle: {
    short: 'FindSampo',
    long: 'FindSampo',
    subheading: `
      Finnish Archaeological Finds on the Semantic Web
    `
  },
  appDescription: `
  `,
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
      guides: 'Archaeology guides',
      info: 'Info',
      blog: 'Project blog',
      blogUrl: 'https://blogs.helsinki.fi/sualt-project',
      aboutThePortal: 'About the Portal'
    },
    searchBarPlaceHolder: 'Search all content',
    searchBarPlaceHolderShort: '',
    instructions: 'instructions'
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
    useDisjunction: 'Use logical OR between selections',
    useConjuction: 'Use logical AND between selections',
    minYear: 'Min year',
    maxYear: 'Max year',
    min: 'Min',
    max: 'Max',
    facetSearchFieldPlaceholder: 'Search...',
    applyFacetSelection: 'apply',
    pieChart: {
      tooltip: 'Pie chart'
    },
    barChart: {
      tooltip: 'Bar chart',
      language: {
        title: 'Language',
        xaxisTitle: 'Language',
        yaxisTitle: 'Manuscript count',
        seriesTitle: 'Manuscript count'
      }
    },
    lineChart: {
      tooltip: 'Line chart',
      productionTimespan: {
        title: 'Manuscript production by decade',
        xaxisTitle: 'Decade',
        yaxisTitle: 'Manuscript count',
        seriesTitle: 'Manuscript count'
      }
    }
  },
  tabs: {
    table: 'table',
    map: 'map',
    heatmap: 'heatmap',
    production_places: 'production places',
    last_known_locations: 'last known locations',
    migrations: 'migrations',
    network: 'network',
    export: 'export',
    'by-period': 'by period',
    timeline: 'timeline',
    recommendations: 'recommendations',
    statistics: 'statistics',
    pie_chart: 'pie chart',
    line_chart: 'line chart'
    // coins_by_year: 'coins by year'
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
  exportToYasgui: 'open the result table query in yasgui sparql editor',
  openInLinkedDataBrowser: 'open in linked data browser',
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
  deckGlMap: {
    arcColouring: 'Arc colouring:',
    showMoreInformation: 'Click to show more information.',
    manuscriptMigrations: {
      legendTitle: 'Arc colouring',
      legendFrom: 'Manuscript production place',
      legendTo: 'Last known location',
      from: 'Production place:',
      to: 'Last known location:',
      listHeadingSingleInstance: 'Manuscript:',
      listHeadingMultipleInstances: 'Manuscripts:'
    }
  },
  perspectives: {
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
        `
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
        identifierFHA: {
          label: 'FHA identifier',
          description: 'FHA identifier of the find.'
        },
        description: {
          label: 'Description',
          description: 'Decription.'
        },
        specification: {
          label: 'Specification',
          description: 'Specification.'
        },
        prefLabel: {
          label: 'Find name',
          description: 'Find name.'
        },
        type: {
          label: 'Type',
          description: `
            Type.
          `
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
        objectTypeFlat: {
          label: 'Object type MAO annotation term (for testing and development purposes)',
          description: `
            Object type without hierarchy using MAO term.
          `
        },
        place: {
          label: 'Place',
          description: `
            Find pace
          `
        },
        subCategory: {
          label: 'Sub category',
          description: `
            Sub category.
          `
        },
        objectSubCategory: {
          label: 'Sub category ontologized',
          description: `
            Sub category using ontology terms.
          `
        },
        material: {
          label: 'Material',
          description: `
            Material.
          `
        },
        materialLiteral: {
          label: 'Material literal',
          description: `
            Material literal.
          `
        },
        period: {
          label: 'Period',
          description: 'Ontologized period. May include both earliest and lates periods.'
        },
        periodObject: {
          label: 'Period ontologized',
          description: 'Ontologized period. May include both earliest and lates periods.'
        },
        dateTimespan: {
          label: 'Date',
          description: `
            Date.
          `
        },
        startYear: {
          label: 'Start year',
          description: `
            Start year.
          `
        },
        endYear: {
          label: 'End year',
          description: `
            End year.
          `
        },
        province: {
          label: 'Province',
          description: `
            Province.
          `
        },
        municipality: {
          label: 'Municipality',
          description: `
            Municipality.
          `
        },
        image: {
          label: 'Image',
          description: 'Image description.'
        },
        earliestStart: {
          label: 'Earliest date',
          description: 'Earliest possible creation date of the object'
        },
        latestEnd: {
          label: 'Latest date',
          description: 'Latest possible creation date of the object'
        },
        kmNumber: {
          label: 'KM number',
          description: 'accession number of the collections'
        },
        ceramicStyle: {
          label: 'Ceramic style',
          description: 'Ceramic culture associated with the find'
        },
        weight: {
          label: 'Weight',
          description: 'Weight'
        },
        length: {
          label: 'Length',
          description: 'Length'
        },
        max_thickness: {
          label: 'Maximum thickness',
          description: 'Maximum thickness'
        },
        min_thickness: {
          label: 'Minimum thickness',
          description: 'Minimum thickness'
        },
        width: {
          label: 'Width',
          description: 'Width'
        },
        diameter: {
          label: 'Diameter',
          description: 'Diameter'
        },
        similarInternalFind: {
          label: 'Similar internal find',
          description: 'Similar find in FindSampo'
        },
        similarExternalFind: {
          label: 'Similar external find',
          description: 'Similar find in PAS'
        },
        foundAtHeight: {
          label: 'Height',
          description: 'Height where found in meters'
        },
        archaeologicalSiteUrl: {
          label: 'Archeological site url',
          description: 'Url of the archeological site in kyppi.fi service'
        }
      }
    },
    coins: {
      label: 'Coins',
      facetResultsType: 'coins',
      shortDescription: 'Faceted search for coins',
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
        `
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
        identifierFHA: {
          label: 'FHA identifier',
          description: 'FHA identifier of the find.'
        },
        specification: {
          label: 'Specification',
          description: 'Specification.'
        },
        prefLabel: {
          label: 'Find name',
          description: 'Find name.'
        },
        type: {
          label: 'Type',
          description: `
            Type.
          `
        },
        objectType: {
          label: 'Type (annotation)',
          description: `
            Object type in MAO .
          `
        },
        facetObjectType: {
          label: 'Object type',
          description: `
            Object type of the find using a facet ontology created by the FHA.
          `
        },
        objectTypeFlat: {
          label: 'Object type MAO annotation term (for testing and development purposes)',
          description: `
            Object type without hierarchy using MAO term.
          `
        },
        place: {
          label: 'Place',
          description: `
            Find pace
          `
        },
        subCategory: {
          label: 'Sub category',
          description: `
            Sub category.
          `
        },
        objectSubCategory: {
          label: 'Sub category ontologized',
          description: `
            Sub category using ontology terms.
          `
        },
        material: {
          label: 'Material',
          description: `
            Material.
          `
        },
        materialLiteral: {
          label: 'Material literal',
          description: `
            Material literal.
          `
        },
        period: {
          label: 'Period',
          description: 'Ontologized period. May include both earliest and lates periods.'
        },
        periodObject: {
          label: 'Period ontologized',
          description: 'Ontologized period. May include both earliest and lates periods.'
        },
        dateTimespan: {
          label: 'Date',
          description: `
            Date.
          `
        },
        startYear: {
          label: 'Start year',
          description: `
            Start year.
          `
        },
        endYear: {
          label: 'End year',
          description: `
            End year.
          `
        },
        province: {
          label: 'Province',
          description: `
            Province.
          `
        },
        municipality: {
          label: 'Municipality',
          description: `
            Municipality.
          `
        },
        image: {
          label: 'Image',
          description: 'Image description.'
        },
        earliestStart: {
          label: 'Earliest date',
          description: 'Earliest possible creation date of the object'
        },
        latestEnd: {
          label: 'Latest date',
          description: 'Latest possible creation date of the object'
        },
        kmNumber: {
          label: 'KM number',
          description: 'accession number of the collections'
        },
        ceramicStyle: {
          label: 'Ceramic style',
          description: 'Ceramic culture associated with the find'
        },
        weight: {
          label: 'Weight',
          description: 'Weight'
        },
        length: {
          label: 'Length',
          description: 'Length'
        },
        thickness: {
          label: 'Thickness',
          description: 'Thickness'
        },
        width: {
          label: 'Width',
          description: 'Width'
        },
        similarInternalFind: {
          label: 'Similar internal find',
          description: 'Similar find in FindSampo'
        },
        similarExternalFind: {
          label: 'Similar external find',
          description: 'Similar find in PAS'
        }
      }
    },
    types: {
      label: 'Object Types',
      facetResultsType: 'types',
      shortDescription: 'Information about object types',
      longDescription: `
        <p class="MuiTypography-root MuiTypography-body1 MuiTypography-paragraph">
        </p>
        <ul class="MuiTypography-root MuiTypography-body1">
          <li>
            <strong>TABLE</STRONG> tab presents the object types as a paginated table
          </li>
          <li>
            <strong>EXPORT</strong> the SPARQL query used to generate the result
            table into YASGUI query editor.
          </li>
        </ul>
      `,
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
          label: 'Catecory in facet ontology',
          description: `
          `
        }
      }
    },
    periods: {
      label: 'Periods',
      facetResultsType: 'periods',
      shortDescription: 'Information about archaeological periods',
      longDescription: `
        <p class="MuiTypography-root MuiTypography-body1 MuiTypography-paragraph">
        </p>
        <ul class="MuiTypography-root MuiTypography-body1">
          <li>
            <strong>TABLE</STRONG> tab presents the periods as a paginated table
          </li>
          <li>
            <strong>EXPORT</strong> the SPARQL query used to generate the result
            table into YASGUI query editor.
          </li>
        </ul>
      `,
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
          description: 'NAme of the period'
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
  },
  aboutThePortalPartOne: `
    <h1 class="MuiTypography-root MuiTypography-h2 MuiTypography-gutterBottom">
      About the Portal
    </h1>
    <p class="MuiTypography-root MuiTypography-body1 MuiTypography-paragraph">
      Morbi nunc ex, ultrices vitae molestie eu, fringilla quis dolor. Vivamus in enim nibh.
      Nunc rutrum molestie ex eget dictum. Mauris lectus leo, ultrices in sodales ac, fermentum
      ut massa. In porta, mauris sed facilisis lacinia, eros magna sollicitudin tortor, quis venenatis
      nisl ipsum lacinia justo. Duis pretium bibendum consequat.
    </p>
    <p class="MuiTypography-root MuiTypography-body1 MuiTypography-paragraph">
      Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; In
      hac habitasse platea dictumst. Curabitur consectetur aliquet est, ac dapibus ante semper vitae.
      Sed consequat at est ac lobortis. In vitae metus in ligula pretium vehicula. Aliquam maximus
      ac massa euismod eleifend. Vestibulum vehicula mattis libero at tempus.
    </p>
    <h2 class="MuiTypography-root MuiTypography-h4 MuiTypography-gutterBottom">
      Data
    </h2>
    <p class="MuiTypography-root MuiTypography-body1 MuiTypography-paragraph">
      Nullam eu blandit ex, quis consectetur enim. Nulla aliquam, enim non euismod tincidunt,
      neque eros tincidunt urna, eget elementum diam metus vel elit. Donec dui augue, vehicula a cursus ut,
      efficitur eget velit. Aliquam pellentesque odio vel metus sodales tempor. Donec in lectus magna.
      Cras at odio a libero laoreet viverra nec sed lorem. In malesuada tempus dolor.
      Suspendisse et ligula quis nisi facilisis maximus. Sed dictum justo eu condimentum efficitur.
      Mauris porttitor ante nec auctor vulputate. Phasellus varius, odio sed egestas bibendum,
      dolor lacus consequat turpis, ac pulvinar libero lorem maximus nunc. Praesent egestas volutpat
      leo, vel faucibus dui convallis sed. Ut sed libero eu nisi accumsan mollis. Pellentesque
      ultricies est non porta luctus. Maecenas eget viverra mauris.
    </p>
    `,
  aboutThePortalPartTwo: `
    <p class="MuiTypography-root MuiTypography-body1 MuiTypography-paragraph">
      Mauris porttitor ante nec auctor vulputate. Phasellus varius, odio sed egestas bibendum,
      dolor lacus consequat turpis, ac pulvinar libero lorem maximus nunc. Praesent egestas volutpat
      leo, vel faucibus dui convallis sed. Ut sed libero eu nisi accumsan mollis. Pellentesque
      ultricies est non porta luctus. Maecenas eget viverra mauris.
      </p>
    <h2 class="MuiTypography-root MuiTypography-h4 MuiTypography-gutterBottom">
      Data Reuse
    </h2>
    <p class="MuiTypography-root MuiTypography-body1 MuiTypography-paragraph">
      Nullam eu blandit ex, quis consectetur enim. Nulla aliquam, enim non euismod tincidunt,
      neque eros tincidunt urna, eget elementum diam metus vel elit. Donec dui augue, vehicula a cursus ut,
      efficitur eget velit. Aliquam pellentesque odio vel metus sodales tempor. Donec in lectus magna.
      Cras at odio a libero laoreet viverra nec sed lorem. In malesuada tempus dolor.
      Suspendisse et ligula quis nisi facilisis maximus. Sed dictum justo eu condimentum efficitur.
      Mauris porttitor ante nec auctor vulputate. Phasellus varius, odio sed egestas bibendum,
      dolor lacus consequat turpis, ac pulvinar libero lorem maximus nunc. Praesent egestas volutpat
      leo, vel faucibus dui convallis sed. Ut sed libero eu nisi accumsan mollis. Pellentesque
      ultricies est non porta luctus. Maecenas eget viverra mauris.
    </p>
    <h2 class="MuiTypography-root MuiTypography-h4 MuiTypography-gutterBottom">
      More Information
    </h2>
    <p class="MuiTypography-root MuiTypography-body1 MuiTypography-paragraph">
      Nullam eu blandit ex, quis consectetur enim. Nulla aliquam, enim non euismod tincidunt,
      neque eros tincidunt urna, eget elementum diam metus vel elit. Donec dui augue, vehicula a cursus ut,
      efficitur eget velit. Aliquam pellentesque odio vel metus sodales tempor. Donec in lectus magna.
      Cras at odio a libero laoreet viverra nec sed lorem. In malesuada tempus dolor.
      Suspendisse et ligula quis nisi facilisis maximus. Sed dictum justo eu condimentum efficitur.
      Mauris porttitor ante nec auctor vulputate. Phasellus varius, odio sed egestas bibendum,
      dolor lacus consequat turpis, ac pulvinar libero lorem maximus nunc. Praesent egestas volutpat
      leo, vel faucibus dui convallis sed. Ut sed libero eu nisi accumsan mollis. Pellentesque
      ultricies est non porta luctus. Maecenas eget viverra mauris.
    </p>
  `,
  instructions: `
    <h1 class="MuiTypography-root MuiTypography-h2 MuiTypography-gutterBottom">
      Instructions
    </h1>
    <p class="MuiTypography-root MuiTypography-body1 MuiTypography-paragraph">
      The search functionality of the ...... portal is based on the
      <a href="https://doi.org/10.2200/S00190ED1V01Y200904ICR005" target='_blank' rel='noopener noreferrer'>
      faceted search</a> paradigm. By default each perspective displays
      all results from the corresponding class.
      This default result set can be narrowed down by using the filters on the left.
    </p>

    <h2 class="MuiTypography-root MuiTypography-h4 MuiTypography-gutterBottom">
      Using a single filter
    </h2>

    <h3 class="MuiTypography-root MuiTypography-h6 MuiTypography-gutterBottom">
      Selecting values within a filter
    </h3>
    <p class="MuiTypography-root MuiTypography-body1 MuiTypography-paragraph">
      All possible values for a filter are displayed either as a list or as a hierarchical
      tree structure (if available). The number of results is shown in brackets for each value.
      Once a value is selected, the results are automatically updated. To prevent further
      selections that do not return any results, also the possible values for all
      other filters are updated at the same time.
    </p>
    <p class="MuiTypography-root MuiTypography-body1 MuiTypography-paragraph">
      Multiple values can be selected within a single filter. Selecting multiple values
      generates results that contain any of the selected values. For example, selecting
      both <i>Saint Augustine</i> and <i>Saint Jerome</i> as an Author returns results that
      include either <i>Saint Augustine</i> <strong>OR</strong> <i>Saint Jerome</i> as an Author.
    </p>
    <p class="MuiTypography-root MuiTypography-body1 MuiTypography-paragraph">
      Selected values of a filter appear in the Active filters section at the top of the list
      of filters. To deselect a filter, click the X mark next to it within the Active filters
      section. You can also deselect a filter value by unchecking the checkmark in the
      filter’s value list. The Active filters section only appears if there are filter
      values currently selected.
    </p>

    <h3 class="MuiTypography-root MuiTypography-h6 MuiTypography-gutterBottom">
      Searching within a filter
    </h3>
    <p class="MuiTypography-root MuiTypography-body1 MuiTypography-paragraph">
      Search within a filter by using the search field at the top of each filter.
      All possible values of a filter remain visible at all times. The values of
      the filter that match the search term are indicated by a purple underline.
    </p>
    <p class="MuiTypography-root MuiTypography-body1 MuiTypography-paragraph">
      Steps for searching within filters:
    </p>
    <ol class="MuiTypography-root MuiTypography-body1 MuiTypography-gutterBottom">
      <li>
        Type search term into search field. If there are matches, a number
        will appear to the right of the search field, indicating the number
        of filter values that match the search term.
      </li>
      <li>
        Click the arrows to the right of the search field to cycle
        through the results. As you click the arrow, a different filter value
        will appear at the top of the list. Matched filters are underlined in
        purple.
      </li>
      <li>
        Click the checkmark next to a filter value to activate it. The results
        (and also other filters) are automatically updated.
      </li>
    </ol>

    <h2 class="MuiTypography-root MuiTypography-h4 MuiTypography-gutterBottom">
      Using multiple filters simultaneously
    </h2>
    <p class="MuiTypography-root MuiTypography-body1 MuiTypography-paragraph">
      The effectiveness of faceted search is realized when multiple filters are
      applied at the same time. As in many e-commerce sites, a logical AND is
      always used between the filters. For example selecting <i>Saint Augustine </i>
      and <i>Saint Jerome</i> as an Author and <i>Sir Thomas Phillipps</i> and
      <i> Thomas Thorpe</i> as an Owner, the results are narrowed down as follows:
    </p>
    <p class="MuiTypography-root MuiTypography-body1">
      (Author: <i>Saint Augustine</i> <strong>OR</strong> Author: <i>Saint Jerome</i>)
    </p>
    <p class="MuiTypography-root MuiTypography-body1">
        <strong>AND</strong>
    </p>
    <p class="MuiTypography-root MuiTypography-body1">
      (Owner: <i>Sir Thomas Phillipps</i> <strong>OR</strong> Owner: <i>Thomas Thorpe</i>)
    </p>
  `
}
