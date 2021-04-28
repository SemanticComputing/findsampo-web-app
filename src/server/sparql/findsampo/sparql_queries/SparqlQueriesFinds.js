const perspectiveID = 'finds'

export const findPropertiesInstancePage =
`   {
      ?id skos:prefLabel ?prefLabel__id .
      BIND(?prefLabel__id as ?prefLabel__prefLabel)
      BIND(?id as ?uri__id)
      BIND(?id as ?uri__dataProviderUrl)
      BIND(?id as ?uri__prefLabel)
      BIND(CONCAT("/${perspectiveID}/page/", REPLACE(STR(?id), "^.*\\\\/(.+)", "$1")) AS ?dataProviderUrl)
    }
    UNION
    {
      ?id ltk-s:type ?type .
    }
    UNION
    {
      ?id :object_type ?objectType__id .
      ?objectType__id skos:prefLabel ?objectType__prefLabel .
      FILTER (LANG(?objectType__prefLabel) = 'fi')
      BIND (?objectType__id AS ?objectType__dataProviderUrl)
      #BIND(CONCAT("/types/page/", REPLACE(STR(?objectType__id ), "^.*\\\\/(.+)", "$1")) AS ?objectType__dataProviderUrl)
      #OPTIONAL {
      #  ?objectType__id skos:closeMatch ?maoMatch__id .
      #  ?objectType__id skos:closeMatch ?maoMatch__prefLabel .
      #  ?objectType__id skos:closeMatch ?maoMatch__dataProviderUrl .
      #  ?objectType__id skos:hiddenLabel ??objectType__hiddenLabel .
      #}
    }
    UNION
    {
      ?id ltk-s:sub_category ?subCategory .
    }
    UNION
    {
      ?id ltk-s:material ?materialLiteral .
    }
    UNION
    {
      ?id ltk-s:description ?description .
    }
    UNION
    {
      ?id :material ?material__id .
      ?material__id skos:prefLabel ?material__prefLabel .
    }
    UNION
    {
      ?id ltk-s:period ?period .
    }
    UNION
    {
      ?id ltk-s:municipality ?municipalityLiteral .
    }
    UNION
    {
      ?id :found_in_municipality ?municipality__id .
      ?municipality__id skos:exactMatch/skos:prefLabel ?municipality__prefLabel .
    }
    UNION
    {
      ?id :found_in_province ?province__id .
      ?province__id skos:exactMatch/skos:prefLabel ?province__prefLabel .
    }
    UNION
    {
      ?id :has_creation_time_span/crm:P82a_begin_of_the_begin ?earliestStart .
      BIND (IF (STRSTARTS(str(?earliestStart), '-'), SUBSTR(STR(?earliestStart), 1, 5), SUBSTR(STR(?earliestStart), 1, 4)) AS ?earliestStartYear) .
    }
    UNION
    {
      ?id :has_creation_time_span/crm:P82b_end_of_the_end ?latestEnd .
      BIND (IF (STRSTARTS(str(?latestEnd), '-'), SUBSTR(STR(?latestEnd), 1, 5), SUBSTR(STR(?latestEnd), 1, 4)) AS ?latestEndYear) .
    }
    UNION
    {
      ?image__id a :Image .
      ?image__id :documents ?id .
      ?image__id ltk-s:image_url ?image__url .
      OPTIONAL {
        ?image__id skos:prefLabel ?image__title .
      }
      OPTIONAL {
        ?image__id skos:prefLabel ?image__description .
      }
      #BIND(?image__id as ?image__url)
      #BIND(CONCAT("Sample description text for image ", ?image__id) as ?image__description)
    }
    UNION
    {
      #?id :find_set_number ?setNumber .
      #?id :individual_find_number ?individualNumber .
      #BIND(CONCAT(?setNumber, ':') as ?identifierStart) .
      #BIND(CONCAT(?identifierStart, ?individualNumber) as ?identifierFHA) .
      ?id ltk-s:identifier ?kmNumber .
    }
    UNION
    {
      ?id :weight ?weight .
    }
    UNION
    {
      ?id :length ?length .
    }
    UNION
    {
      ?id :max_thickness ?max_thickness .
    }
    UNION
    {
      ?id :min_thickness ?min_thickness .
    }
    UNION
    {
      ?id :width ?width .
    }
    UNION
    {
      ?id :diameter ?diameter .
    }
    UNION
    {
      ?id ltk-s:z_coordinate ?foundAtHeight .
    }
    UNION
    {
      ?id ltk-s:archaeological_site_url ?archaeologicalSiteUrl__id .
      BIND(URI(?archaeologicalSiteUrl__id) AS ?archaeologicalSiteUrl__dataProviderUrl)
      BIND(URI(?archaeologicalSiteUrl__id) AS ?archaeologicalSiteUrl__prefLabel)
    }
    UNION
    {
      ?id :similar_external_find ?similarExternalFind__id .
      BIND(?similarExternalFind__id AS ?similarExternalFind__prefLabel) .
      BIND(?similarExternalFind__id AS ?similarExternalFind__dataProviderUrl)
    }
`

export const findPropertiesFacetResults =
`   {
      ?id skos:prefLabel ?prefLabel__id .
      BIND (?prefLabel__id as ?prefLabel__prefLabel)
      BIND(CONCAT("/${perspectiveID}/page/", REPLACE(STR(?id), "^.*\\\\/(.+)", "$1")) AS ?prefLabel__dataProviderUrl)
    }
    UNION
    {
      ?id ltk-s:specification ?specification .
    }
    UNION
    {
      ?id ltk-s:type ?type .
    }
    UNION
    {
      ?id ltk-s:sub_category ?subCategory .
    }
    UNION
    {
      ?id :object_type ?objectType__id .
      ?objectType__id skos:prefLabel ?objectType__prefLabel .
      FILTER (LANG(?objectType__prefLabel) = 'fi')
      BIND (?objectType__id AS ?objectType__dataProviderUrl)
      #BIND(CONCAT("/types/page/", REPLACE(STR(?objectType__id ), "^.*\\\\/(.+)", "$1")) AS ?objectType__dataProviderUrl)
      #OPTIONAL {
      #  ?objectType__id skos:closeMatch ?maoMatch__id .
      #  ?objectType__id skos:closeMatch ?maoMatch__prefLabel .
      #  ?objectType__id skos:closeMatch ?maoMatch__dataProviderUrl .
      #  ?objectType__id skos:hiddenLabel ??objectType__hiddenLabel .
      #}
    }
    UNION
    {
      ?id :facet_object_term ?objectTypeFHAFacet__id .
      ?objectTypeFHAFacet__id skos:prefLabel ?objectTypeFHAFacet__prefLabel .
      BIND(CONCAT("/types/page/", REPLACE(STR(?objectTypeFHAFacet__id ), "^.*\\\\/(.+)", "$1")) AS ?objectTypeFHAFacet__dataProviderUrl)
    }
    UNION
    {
      ?id ltk-s:material ?materialLiteral .
    }
    UNION
    {
      ?id :material ?material__id .
      ?material__id skos:prefLabel ?material__prefLabel .
    }
    UNION
    {
      ?id ltk-s:period ?period .
    }
    UNION
    {
      ?id ltk-s:start_year ?startYearLiteral .
    }
    UNION
    {
      ?id ltk-s:end_year ?endYearLiteral .
    }
    UNION
    {
      ?id ltk-s:municipality ?municipalityLiteral .
    }
    UNION
    {
      ?id :found_in_municipality ?municipality__id .
      ?municipality__id skos:exactMatch/skos:prefLabel ?municipality__prefLabel .
    }
    UNION
    {
      ?id ltk-s:province ?provinceLiteral .
    }
    UNION
    {
      ?id :found_in_province ?province__id .
      ?province__id skos:exactMatch/skos:prefLabel ?province__prefLabel .
    }
    UNION
    {
      ?id :has_creation_time_span/crm:P82a_begin_of_the_begin ?earliestStart .
      BIND (IF (STRSTARTS(str(?earliestStart), '-'), SUBSTR(STR(?earliestStart), 1, 5), SUBSTR(STR(?earliestStart), 1, 4)) AS ?earliestStartYear) .
    }
    UNION
    {
      ?id :has_creation_time_span/crm:P82b_end_of_the_end ?latestEnd .
      BIND (IF (STRSTARTS(str(?latestEnd), '-'), SUBSTR(STR(?latestEnd), 1, 5), SUBSTR(STR(?latestEnd), 1, 4)) AS ?latestEndYear) .
    }
    UNION
    {
      ?image__id a :Image .
      ?image__id :documents ?id .
      ?image__id ltk-s:image_url ?image__url .
      OPTIONAL {
        ?image__id skos:prefLabel ?image__title .
      }
      ?image__id skos:prefLabel ?image__description .
      #BIND(?image__id as ?image__url)
      #BIND(CONCAT("Sample description text for image ", ?image__id) as ?image__description)
    }
    UNION
    {
      #?id :find_set_number ?setNumber .
      #?id :individual_find_number ?individualNumber .
      #BIND(CONCAT(?setNumber, ':') as ?identifierStart) .
      #BIND(CONCAT(?identifierStart, ?individualNumber) as ?identifierFHA) .
      ?id ltk-s:identifier ?kmNumber .
    }
    UNION
    {
      ?id :weight ?weight .
    }
    UNION
    {
      ?id :length ?length .
    }
    UNION
    {
      ?id :max_thickness ?max_thickness .
    }
    UNION
    {
      ?id :min_thickness ?min_thickness .
    }
    UNION
    {
      ?id :width ?width .
    }
    UNION
    {
      ?id :diameter ?diameter .
    }
  `

export const findsPlacesQuery = `
  SELECT ?id ?lat ?long
  WHERE {
    <FILTER>
    ?id :find_coordinates/wgs84:lat ?lat ;
        :find_coordinates/wgs84:long ?long .
  }
`
export const findInstancePageMapQuery = `
  SELECT *
  WHERE {
    VALUES ?id { <ID> }
    ?id :find_coordinates/wgs84:lat ?lat ;
        :find_coordinates/wgs84:long ?long .
    BIND("red" AS ?markerColor)
    ${findPropertiesInstancePage}
  }
`

export const nearbyFindsQuery = `
  SELECT *
  WHERE {
    VALUES ?inputID { <ID> }
    ?inputID :find_coordinates ?inputSite .
    ?inputSite wgs84:lat ?inputLat ;
               wgs84:long ?inputLong .
    ?site spatial:nearby (?inputLat ?inputLong 30 'km') ;
          wgs84:lat ?lat ;
          wgs84:long ?long .
    ?id :find_coordinates ?site .
    ${findPropertiesInstancePage}
  }
`

export const similarFindsQuery = `
  SELECT *
  WHERE {
    VALUES ?id { <ID> }
    {
      ?id :object_type ?objectType_ .
      ?similarObjectType__id :object_type ?objectType_ ;
                           skos:prefLabel ?similarObjectType__prefLabel .
      BIND(CONCAT("/${perspectiveID}/page/", REPLACE(STR(?similarObjectType__id), "^.*\\\\/(.+)", "$1")) AS ?similarObjectType__dataProviderUrl)                 
      FILTER (?similarObjectType__id != ?id)
    }
    UNION
    {
      ?id :material ?material_ .
      ?similarMaterial__id :material ?material_ ;
                           skos:prefLabel ?similarMaterial__prefLabel .
      BIND(CONCAT("/${perspectiveID}/page/", REPLACE(STR(?similarMaterial__id), "^.*\\\\/(.+)", "$1")) AS ?similarMaterial__dataProviderUrl)                 
      FILTER (?similarMaterial__id != ?id)
    }
    UNION
    {
      ?id :period ?period_ .
      ?similarPeriod__id :period ?period_ ;
                          skos:prefLabel ?similarPeriod__prefLabel .
      BIND(CONCAT("/${perspectiveID}/page/", REPLACE(STR(?similarPeriod__id), "^.*\\\\/(.+)", "$1")) AS ?similarPeriod__dataProviderUrl)                 
      FILTER (?similarPeriod__id != ?id)
    }
  }
`

export const findsTimelineQuery = `
  SELECT ?id ?group ?data__id ?data__uri ?data__label
  ?data__data__id ?data__data__label ?data__data__val ?data__data__timeRange
  WHERE {

    <FILTER> # a placeholder for facet filters

    ?find :found_in_province/skos:exactMatch/skos:prefLabel ?id  . # ?id = first hierarchy level
    BIND (?id as ?group)
    #?find ltk-s:find_name ?data__id . # ?data__id = second hierarchy level

    ?find ltk-s:find_name ?lable_temp .
    BIND( STRAFTER(STR(?find),'http://ldf.fi/findsampo/finds/' ) AS ?find_num ).
    BIND (CONCAT(str(?lable_temp), str(?find_num)) as ?data__id) .
    BIND (?data__id as ?data__label)
    BIND (?find_num as ?data__data__id) # ?data__data__id = third hierarchy level
    BIND (?data__id as ?data__data__label)
    BIND (?data__id as ?data__data__val)

    # make sure that the selected finds have both 'start_year' and 'end_year'
    #?find :start_year [] .
    #?find :end_year [] .
    ?find :has_creation_time_span/crm:P82a_begin_of_the_begin [] .
    ?find :has_creation_time_span/crm:P82b_end_of_the_end [] .

    # Combine 'start_year' and 'end_year' into same variable,
    # so that the result mapper creates an array from these.
    #?find ltk-s:start_year|ltk-s:end_year ?data__data__timeRange .

    #?find :has_creation_time_span/crm:P82a_begin_of_the_begin|:has_time_span/crm:P82b_end_of_the_end ?date .
    #BIND(CONCAT(str(?date), 'T00:00:00+00:00') AS ?date_wth_ending) .
    #BIND(STRDT(STR(?date_wth_ending), xsd:dateTime) AS ?data__data__timeRange)

    ?find :has_creation_time_span/crm:P82a_begin_of_the_begin|:has_creation_time_span/crm:P82b_end_of_the_end ?date .

    # Ignore missing values in the first hierarchy level
    FILTER (?id != "-")

    # fill two extra digits with zeros for BCE dates
    BIND (STRAFTER(str(?date), '-') AS ?after)
    BIND (IF (STRSTARTS(str(?date), '-'), CONCAT('-00', ?after), str(?date)) AS ?new_date) .
    BIND(STRDT(STR(?new_date), xsd:dateTime) AS ?data__data__timeRange) .
  }
`

export const knowledgeGraphMetadataQuery = `
  SELECT *
  WHERE {
    ?id a ltk-s:Portal_configuration ;
          ltk-s:featured_find ?featuredFind__id .
    ?featuredFind__id skos:prefLabel ?featuredFind__prefLabel .
    ?picture :documents ?featuredFind__id .
    ?picture ltk-s:image_url ?featuredFind__imageURL .
    BIND(CONCAT("/${perspectiveID}/page/", REPLACE(STR(?featuredFind__id), "^.*\\\\/(.+)", "$1")) AS ?featuredFind__dataProviderUrl)
  }
`

export const findsByProvinceQuery = `
 SELECT ?category ?prefLabel
 (COUNT(DISTINCT ?find) as ?instanceCount)
  WHERE {
    <FILTER>
    ?find :found_in_province ?category ;
        a :Find .
    ?category skos:prefLabel ?prefLabel .
  }
  GROUP BY ?category ?prefLabel
  ORDER BY DESC(?instanceCount)
`

export const findsByMaterialQuery = `
 SELECT ?category ?prefLabel
 (COUNT(DISTINCT ?find) as ?instanceCount)
  WHERE {
    <FILTER>
    {
      ?find :material ?category ;
        a :Find .
      ?category skos:prefLabel ?prefLabel .
    }
    UNION
    {
      ?find a :Find .
      FILTER NOT EXISTS {
        ?find :material [] .
      }
      BIND("unknown" as ?category)
      BIND("unknown" as ?prefLabel)
    }
  }
  GROUP BY ?category ?prefLabel
  ORDER BY DESC(?instanceCount)
`
export const findsByObjectNameQuery = `
 SELECT ?category ?prefLabel
 (COUNT(DISTINCT ?find) as ?instanceCount)
  WHERE {
    <FILTER>
    ?find ltk-s:find_name ?category ;  # find_name is literal
        a :Find .
    BIND(?category as ?prefLabel)
  }
  GROUP BY ?category ?prefLabel
  ORDER BY DESC(?instanceCount)
`
export const findsByYearQuery = `
  SELECT ?category
  (COUNT(DISTINCT ?find) as ?count)
  WHERE {
    <FILTER>
    VALUES ?money { "Hopearaha" "Raha" }
    ?find ltk-s:find_name ?money ;
          :earliest_creation_year ?category .
    FILTER (?category < 2000)
  }
  GROUP BY ?category
  ORDER BY ?category
`

export const findsByWeightQuery = `
  SELECT ?category
  (COUNT(DISTINCT ?find) as ?count)
  WHERE {
    <FILTER>
    ?find :weight ?weight ;
              a :Find .
    BIND(xsd:integer(ROUND(xsd:decimal(?weight))) as ?category)

  }
  GROUP BY ?category
  ORDER BY ?category
`
