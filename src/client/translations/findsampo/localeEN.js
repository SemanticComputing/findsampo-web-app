export default {
  languageLabel: 'English',
  appTitle: {
    short: 'FindSampo',
    long: 'FindSampo',
    subheading: `
    `
  },
  appDescription: `
  `,
  selectPerspective: '',
  mainPageImageLicence: '',
  mainPage: {
    carouselHeading: 'FEATURED FINDS',
    cardLearnMore: 'learn more'
  },
  topBar: {
    feedback: 'feedback',
    info: {
      info: 'Info',
      blog: 'Project blog',
      blogUrl: 'https://blogs.helsinki.fi/sualt-project',
      aboutThePortal: 'About the Portal'
    },
    searchBarPlaceHolder: 'Search all content',
    searchBarPlaceHolderShort: 'Search',
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
    line_chart: 'line chart',
    weights: 'weights',
    coins_by_year: 'coins by year'

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
        'light-v10': 'Mapbox Light'
      },
      googleRoadmap: 'Google Maps',
      topographicalMapNLS: 'Topographical map (National Land Survey of Finland)',
      backgroundMapNLS: 'Background map (National Land Survey of Finland)'
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
  instancePageGeneral: {
    introduction: `
      <p class="MuiTypography-root MuiTypography-body1 MuiTypography-paragraph">
        This landing page provides a human-readable summary of the data points that link
        to this {entity}. The data included in this summary reflect only those data points
        used in the MMM Portal. Click the Open in Linked Data Browser on button on the
        Export tab to view the complete set of classes and properties linked to this record.
      </p>
      <p class="MuiTypography-root MuiTypography-body1 MuiTypography-paragraph">
        To cite this record, use its url. You can use also use the url to return directly
        to the record at any time.
      </p>
    `,
    repetition: `
      <h6 class="MuiTypography-root MuiTypography-h6">
        Repetition of data
      </h6>
      <p class="MuiTypography-root MuiTypography-body1 MuiTypography-paragraph">
        The same or similar data may appear within a single data field multiple times.
        This repetition occurs due to the merging of multiple records from different datasets
        to create the MMM record.
      </p>
    `
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
      label: 'Archaeological finds',
      facetResultsType: 'finds',
      shortDescription: 'Data provided by the Finnish Heritage Agency',
      longDescription: `
        <p class="MuiTypography-root MuiTypography-body1 MuiTypography-paragraph">
          Use this perspective to access data related to...
        </p>
        <ul class="MuiTypography-root MuiTypography-body1">
          <li>
            <strong>TABLE</STRONG> view includes ...
          </li>
          <li>
            <strong>PRODUCTION PLACES</STRONG> view visualizes the ...
          </li>
          <li>
            <strong>MIGRATIONS</strong> view visualizes the ....
          </li>
          <li>
            <strong>EXPORT</strong> the SPARQL query used to generate the result
            table view into YASGUI query editor.
          </li>
        </ul>
      `,
      instancePage: {
        label: 'Archaeological find',
        description: `
          <p class="MuiTypography-root MuiTypography-body1 MuiTypography-paragraph">
            MMM’s Manuscript entity corresponds to
            <a href='https://www.ifla.org/publications/node/11240' target='_blank' rel='noopener noreferrer'>FRBRoo’s</a>
            Manifestation Singleton, defined as "physical objects that each carry an instance of
            [an Expression], and that were produced as unique objects..." The various types
            of records that describe manuscripts in each of the three contributing MMM
            datasets have been mapped to this entity.
          </p>
          <h6 class="MuiTypography-root MuiTypography-h6">
            Manuscript labels
          </h6>
          <p class="MuiTypography-root MuiTypography-body1 MuiTypography-paragraph">
            If the Bibale or Oxford databases reference a shelf mark for the manuscript,
            that information will appear as its label. Otherwise, an SDBM ID number will serve
            as its label. SDBM ID numbers contain prefixes that indicate different things about
            the type of record they contain:
          </p>
          <ul class="MuiTypography-root MuiTypography-body1">
            <li>
              SDBM_MS: SDBM Manuscript Record, which aggregates the data of two or more SDBM
              Entries. Each Entry represents a different observation of a manuscript at a different
              point in time, derived from various sources.
            </li>
            <li>
              SDBM_MS_orphan: a single Entry in the SDBM, meaning it has not been linked to any
              other Entries and therefore has no SDBM Manuscript Record.
            </li>
            <li>
              SDBM_MS_part: a record identified as a fragment of a larger manuscript.
            </li>
          </ul>
          <p class="MuiTypography-root MuiTypography-body1 MuiTypography-paragraph"></p>
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
          label: 'Object type (MAO)',
          description: `
            Object type in MAO .
          `
        },
        objectTypeFHAFacet: {
          label: 'Object type using facet ontology (unfinished)',
          description: `
            Object type.
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
        }
      }
    },
    perspective2: {
      label: 'Perspective 2',
      facetResultsType: 'works',
      shortDescription: 'Perspective 2 description',
      longDescription: `
        <p class="MuiTypography-root MuiTypography-body1 MuiTypography-paragraph">
          Use this perspective to access data related to Works. The MMM data model follows
          the <a href='https://www.ifla.org/publications/node/11240' target='_blank' rel='noopener noreferrer'>FRBRoo</a>
          definition of a work, which refers to “distinct concepts or combinations
          of concepts identified in artistic and intellectual expressions.” Works
          contain title and author information. If two or more source
          datasets include the same Work and this has been verified, the information
          from the source datasets has been merged into one Work.  See
          <a href="/instructions">instructions</a> for using the filters.
          The result view can be selected using the tabs:
        </p>
        <ul class="MuiTypography-root MuiTypography-body1">
          <li>
            <strong>TABLE</STRONG> view gives you a list of specific works, and
            the manuscripts and manuscript collections in which they can be found.
          </li>
          <li>
            <strong>EXPORT</strong> the SPARQL query used to generate the result
            table view into YASGUI query editor.
          </li>
        </ul>
      `,
      instancePage: {
        label: 'Work',
        description: `
          <p class="MuiTypography-root MuiTypography-body1 MuiTypography-paragraph">
            The MMM data model follows the
            <a href='https://www.ifla.org/publications/node/11240' target='_blank' rel='noopener noreferrer'>FRBRoo</a>
            definition of a work, which refers to
            “distinct concepts or combinations of concepts identified in artistic and
            intellectual expressions.” Works contain title and author information.
            This definition is not shared by the Bibale or Oxford Libraries’ conception
            of the term, which both define their internal “work” concept more closely to
            the FRBRoo conception of an Expression. The SDBM does not have a work concept
            at all, recording only the titles of the texts as given in its various sources,
            without normalizing that data or linking it directly to author information.
            Works were generated within the MMM dataset by manually creating links across
            the three datasets’ various conceptions of the relationship between authors
            and their creations. This process was not able to reconcile every work
            contained within the combined dataset.
          </p>
        `
      },
      properties: {
        uri: {
          label: 'URI',
          description: 'Uniform Resource Identifier'
        },
        prefLabel: {
          label: 'Title',
          description: 'The name or title of the Work.'
        },
        author: {
          label: 'Possible author',
          description: `
            The author(s) associated with the Work. Because of the structure of
            entries in the Schoenberg Database, the authors shown as being
            associated with a Work may actually be associated with other
            Works in the same manuscript instead.
          `
        },
        language: {
          label: 'Language',
          description: `
            The language in which a Work is written in the manuscript
            (i.e., an “Expression” of a Work). One manuscript may contain multiple languages.
          `
        },
        expression: {
          label: 'Expression',
          description: `
            The expression(s) of the Work.
          `
        },
        manuscript: {
          label: 'Manuscript',
          description: `
            The specific manuscript(s) in which the Work can be found.
          `
        },
        productionTimespan: {
          label: 'Manuscript production date',
          description: `
            The date(s) when the manuscript(s) in which the Work can be found were written.
            Multiple production dates may appear for a single manuscript,
            when there are discrepancies between the contributing data source
            or when the precise date is uncertain.
          `
        },
        collection: {
          label: 'Collection',
          description: `
            The specific collection(s) of manuscripts in which a Work can be found.
          `
        },
        source: {
          label: 'Source',
          description: `
            The source database(s) (Schoenberg, Bibale, and Bodleian) that the Work
            occurs in. Click on the result table link to view the original record on the
            source’s website.
          `
        }
      }
    },
    perspective3: {
      label: 'Perspective 3',
      facetResultsType: 'events',
      shortDescription: 'Perspective 3 description',
      longDescription: `
        <p class="MuiTypography-root MuiTypography-body1 MuiTypography-paragraph">
          Use this perspective to access data related to events associated with the
          histories of manuscripts and manuscript collections over the centuries.
          See <a href="/instructions">instructions</a> for using the filters.
          The result view can be selected using the tabs:
        </p>
        <ul class="MuiTypography-root MuiTypography-body1">
          <li>
            <strong>TABLE</STRONG> view includes all events in the MMM data.
          </li>
          <li>
            <strong>MAP</STRONG> view visualizes the events that have location information on a map.
          </li>
          <li>
            <strong>EXPORT</strong> the SPARQL query used to generate the result
            table view into YASGUI query editor.
          </li>
        </ul>
      `,
      instancePage: {
        label: 'Event',
        description: `
          <p class="MuiTypography-root MuiTypography-body1 MuiTypography-paragraph">
            Events refer to various activities related to Manuscripts and Actors. Event
            types include Production, Transfer of Custody, and Activity events.
            Production events refer to the production of the physical manuscript.
            Transfer of Custody events indicate a change of ownership that involved
            a transaction of some kind, usually through an auction house or bookseller.
            The generic Activity event type covers all other types of events.
          </p>
        `
      },
      properties: {
        uri: {
          label: 'URI',
          description: 'Uniform Resource Identifier'
        },
        type: {
          label: 'Type',
          description: `
            Distinguish between “Transfer of Custody”, “Production”, and other
            types of “Activity” events.
          `
        },
        language: {
          label: 'Language',
          description: `
            The language in which a Work is written in the manuscript
            (i.e., an “Expression” of a Work). One manuscript may contain multiple languages.
          `
        },
        manuscript: {
          label: 'Manuscript / Collection',
          description: `
            The manuscript or manuscript collection associated with the event.
          `
        },
        eventTimespan: {
          label: 'Date',
          description: `
            The date or time period associated with the event.
          `
        },
        place: {
          label: 'Place',
          description: `
            The specific place(s) associated with the event.
          `
        },
        note: {
          label: 'Note',
          description: `
            Note
          `
        },
        surrender: {
          label: 'Custody surrendered by',
          description: `
            Custody surrendered by
          `
        },
        receiver: {
          label: 'Custody received by',
          description: `
            Custody received by
          `
        },
        observedOwner: {
          label: 'Observed owner',
          description: `
            Observed owner
          `
        },
        source: {
          label: 'Source',
          description: `
            The source database (Schoenberg, Bibale, and Bodleian) that provided
            the information about the event.
          `
        }
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
  `,
  feedback: `
    <h1 class="MuiTypography-root MuiTypography-h2 MuiTypography-gutterBottom">
      Feedback
    </h1>
    <p class="MuiTypography-root MuiTypography-body1 MuiTypography-paragraph">
      This semantic portal has been developed by the research project ...
    </p>
    <p class="MuiTypography-root MuiTypography-body1 MuiTypography-paragraph">
      We are interested in your feedback on the functionality, coverage, and usefulness of the portal and its data.
    </p>
    <p class="MuiTypography-root MuiTypography-body1 MuiTypography-paragraph">
      Please complete our
      <a href="" target='_blank' rel='noopener noreferrer'>Feedback Survey Form.</a>
    </p>
    <p class="MuiTypography-root MuiTypography-body1 MuiTypography-paragraph">
    You can also contact us via email:
    ...
    or DM us on Twitter: ...
    </p>
    `
}
