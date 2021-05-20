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
      ?id ltk-s:find_name ?findName__id .
      BIND (?findName__id as ?findName__prefLabel)
    }
    UNION
    {
      ?id :identifier ?findNumber .
    }
    UNION
    {
      ?id ltk-s:type ?type .
    }
    UNION
    {
      ?id :object_type ?objectType__id .
      ?objectType__id skos:prefLabel ?objectType__prefLabel .
      FILTER (LANG(?objectType__prefLabel) = '<LANG>')
      BIND(CONCAT("/types/page/", REPLACE(STR(?objectType__id ), "^.*\\\\/(.+)", "$1")) AS ?objectType__dataProviderUrl)
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
      #?id ltk-s:period ?period__id .
      #BIND(?period__id AS ?period__prefLabel )
      ?id :period ?period__id .
      ?period__id skos:prefLabel ?period__prefLabel .
      BIND(CONCAT("/periods/page/", REPLACE(STR(?period__id ), "^.*\\\\/(.+)", "$1")) AS ?period__dataProviderUrl)
    }
    UNION
    {
      ?id ltk-s:municipality ?municipalityLiteral .
    }
    UNION
    {
      ?id :found_in_municipality ?municipality__id .
      ?municipality__id skos:exactMatch/skos:prefLabel ?municipality__prefLabel .
      FILTER (LANG(?municipality__prefLabel) = '<LANG>')
    }
    UNION
    {
      ?id :found_in_province ?province__id .
      ?province__id skos:exactMatch/skos:prefLabel ?province__prefLabel .
      FILTER (LANG(?province__prefLabel) = '<LANG>')
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
      ?image__id ltk-s:image_url ?image__url_ .
      BIND(REPLACE(?image__url_, "http", "https") as ?image__url)
      OPTIONAL {
        ?image__id skos:prefLabel ?image__title .
        BIND(CONCAT(STR(?image__title), ' (kuvan oikeudet: Museovirasto)') AS ?image__description)
      }
    }
    UNION
    {
      ?id :identifier ?findNumber .
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
      ?id :max_thickness ?maxThickness .
    }
    UNION
    {
      ?id :min_thickness ?minThickness .
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
`

export const findPropertiesFacetResults =
` # {
  #    ?id skos:prefLabel ?prefLabel__id .
  #    BIND (?prefLabel__id as ?prefLabel__prefLabel)
  #    BIND(CONCAT("/${perspectiveID}/page/", REPLACE(STR(?id), "^.*\\\\/(.+)", "$1")) AS ?prefLabel__dataProviderUrl)
  #  }
    {
      ?id ltk-s:find_name ?findName__id .
      BIND (?findName__id as ?findName__prefLabel)
      BIND(CONCAT("/${perspectiveID}/page/", REPLACE(STR(?id), "^.*\\\\/(.+)", "$1")) AS ?findName__dataProviderUrl)
    }
    UNION
    {
      ?id :identifier ?findNumber .
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
      FILTER (LANG(?objectType__prefLabel) = '<LANG>')
      BIND(CONCAT("/types/page/", REPLACE(STR(?objectType__id ), "^.*\\\\/(.+)", "$1")) AS ?objectType__dataProviderUrl)
    }
    UNION
    {
      ?id :material ?material__id .
      ?material__id skos:prefLabel ?material__prefLabel .
    }
    UNION
    {
      #?id ltk-s:period ?period__id .
      #BIND(?period__id AS ?period__prefLabel )
      ?id :period ?period__id .
      ?period__id skos:altLabel ?period__prefLabel .
      BIND(CONCAT("/periods/page/", REPLACE(STR(?period__id ), "^.*\\\\/(.+)", "$1")) AS ?period__dataProviderUrl)
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
      FILTER (LANG(?municipality__prefLabel) = '<LANG>')
    }
    UNION
    {
      ?id ltk-s:province ?provinceLiteral .
    }
    UNION
    {
      ?id :found_in_province ?province__id .
      ?province__id skos:exactMatch/skos:prefLabel ?province__prefLabel .
      FILTER (LANG(?province__prefLabel) = '<LANG>')
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
      ?image__id ltk-s:image_url ?image__url_ .
      BIND(REPLACE(?image__url_, "http", "https") as ?image__url)
      OPTIONAL {
        ?image__id skos:prefLabel ?image__title .
        BIND(CONCAT(STR(?image__title), ' (kuvan oikeudet: Museovirasto)') AS ?image__description)
      }
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
      ?id :max_thickness ?maxThickness .
    }
    UNION
    {
      ?id :min_thickness ?minThickness .
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
  SELECT DISTINCT ?id ?lat ?long
  WHERE {
    <FILTER>
    ?id :find_site_coordinates/wgs84:lat ?lat ;
        :find_site_coordinates/wgs84:long ?long .
  }
`
export const findInstancePageMapQuery = `
  SELECT *
  WHERE {
    VALUES ?id { <ID> }
    ?id :find_site_coordinates/wgs84:lat ?lat ;
        :find_site_coordinates/wgs84:long ?long .
    BIND("red" AS ?markerColor)
    ${findPropertiesInstancePage}
  }
`

export const nearbyFindsQuery = `
  SELECT *
  WHERE {
    VALUES ?inputID { <ID> }
    ?inputID :find_site_coordinates ?inputSite .
    ?inputSite wgs84:lat ?inputLat ;
               wgs84:long ?inputLong .
    ?site spatial:nearby (?inputLat ?inputLong 30 'km') ;
          wgs84:lat ?lat ;
          wgs84:long ?long .
    ?id :find_site_coordinates ?site .
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
    UNION
    {
      ?id extended-s:similar_external_find ?similarExternalFind__id .
      BIND(?similarExternalFind__id AS ?similarExternalFind__prefLabel) .
      BIND(?similarExternalFind__id AS ?similarExternalFind__dataProviderUrl)
    }
  }
`

export const findsTimelineQuery = `
  SELECT ?id ?group ?data__id ?data__uri ?data__label
  ?data__data__id ?data__data__label ?data__data__val ?data__data__timeRange
  WHERE {

    <FILTER> # a placeholder for facet filters

    ?find :found_in_province/skos:prefLabel ?id  . # ?id = first hierarchy level
    ?find :found_in_province/skos:exactMatch/<http://purl.org/dc/elements/1.1/source> ?source .
    FILTER (?source = "Maanmittauslaitoksen paikannimirekisteri; tyyppitieto: Maakunta"@fi)
    BIND (?id as ?group)
    #?find ltk-s:find_name ?data__id . # ?data__id = second hierarchy level

    #BIND (?id AS ?data__id)
    #BIND (' ' AS ?data__label)

    #BIND (?id as ?data__data__id) # ?data__data__id = third hierarchy level
    #BIND ('range' as ?data__data__label)
    #BIND (?data__id as ?data__data__val)

    ?find ltk-s:find_name ?data__label .
    BIND( STRAFTER(STR(?find),'http://ldf.fi/findsampo/finds/' ) AS ?find_num ).
    BIND (?id AS ?data__id)
    BIND (?find_num as ?data__data__id) # ?data__data__id = third hierarchy level
    BIND (?data__id as ?data__data__label)
    BIND (?data__id as ?data__data__val)

    ?find :has_creation_time_span/crm:P82a_begin_of_the_begin|:has_creation_time_span/crm:P82b_end_of_the_end ?date .

    # Ignore missing values in the first hierarchy level
    FILTER (?id != "-")

    # fill two extra digits with zeros for BCE dates
    BIND (STRAFTER(str(?date), '-') AS ?after)
    BIND (IF (STRSTARTS(str(?date), '-'), CONCAT('-00', ?after), str(?date)) AS ?new_date) .
    BIND(STRDT(STR(?new_date), xsd:dateTime) AS ?data__data__timeRange) .
  }
`

export const findsApexChartsTimelineQuery = `
  SELECT ?id ?beginDate ?endDate ?data__id ?name ?data__x
  (COUNT(DISTINCT ?find) as ?data__instanceCount)
  (?id as ?data__period)
  (?name as ?data__periodLabel)
  WHERE {
    <FILTER>
    VALUES ?id {
      periods:p2 # Kivikausi (-8850 – -1700)
      periods:p13 # Pronssikausi (-1700 – -0500)
      periods:p17 # Rautakausi (-0500 – 1300)
      periods:p28 # Historiallinen aika (1200 – 2000)
      periods:p29 # Keskiaika (1200 – 1520)
    }

    ?find :found_in_province ?data__id ;
          :period/skos:broader* ?id .
    ?data__id skos:prefLabel ?data__x ;
              skos:exactMatch/<http://purl.org/dc/elements/1.1/source> ?source .
    FILTER (?source = "Maanmittauslaitoksen paikannimirekisteri; tyyppitieto: Maakunta"@fi)

    ?id skos:prefLabel ?name ;
        crm:P4_has_time-span/crm:P82a_begin_of_the_begin ?begin_date_ ;
        crm:P4_has_time-span/crm:P82b_end_of_the_end ?end_date_ .

    # fill two extra digits with zeros for BCE dates
    BIND(STRAFTER(str(?begin_date_), '-') AS ?after_begin_date)
    BIND(IF(STRSTARTS(str(?begin_date_), '-'), CONCAT('-00', ?after_begin_date), str(?begin_date_)) AS ?new_begin_date)
    BIND(STRDT(?new_begin_date, xsd:dateTime) AS ?beginDate)
    BIND(STRAFTER(str(?end_date_), '-') AS ?after_end_date)
    BIND(IF(STRSTARTS(str(?end_date_), '-'), CONCAT('-00', ?after_end_date), str(?end_date_)) AS ?new_end_date)
    BIND(STRDT(?new_end_date, xsd:dateTime) AS ?endDate)
  }
  GROUP BY ?id ?beginDate ?endDate ?data__id ?name ?data__fillColor ?data__x ?data__y
`

export const findsApexChartsTimelineDialogQuery = `
  SELECT * {
    <FILTER>
    ?id :found_in_province <PROVINCE> ;
        :period/skos:broader* <PERIOD> ;
        skos:prefLabel ?prefLabel .
    <PERIOD> skos:prefLabel ?selectedPeriodLabel .
    <PROVINCE> skos:prefLabel ?selectedProvinceLabel .
    BIND(CONCAT("/${perspectiveID}/page/", REPLACE(STR(?id), "^.*\\\\/(.+)", "$1")) AS ?dataProviderUrl)
    FILTER(LANG(?selectedProvinceLabel) = '<LANG>')
  }
  ORDER BY ?prefLabel
`

export const knowledgeGraphMetadataQuery = `
  SELECT *
  WHERE {
    ?id a ltk-s:Portal_configuration ;
          ltk-s:featured_find ?featuredFind__id .
    ?featuredFind__id ltk-s:find_name ?featuredFind__prefLabel .
    ?picture :documents ?featuredFind__id .
    ?picture ltk-s:image_url ?featuredFind__imageURL .
    BIND(CONCAT("/${perspectiveID}/page/", REPLACE(STR(?featuredFind__id), "^.*\\\\/(.+)", "$1")) AS ?featuredFind__dataProviderUrl)
  }
`

export const findsCSVQuery = `
  SELECT ?id ?find_number ?find_name ?object_type ?object_type_MAO_URI ?description ?archaeological_site_url ?municipality ?province ?latitude ?longitude ?coordinate_source ?earliest_year ?latest_year ?earliest_period ?latest_period ?weight ?length ?width ?diameter (GROUP_CONCAT(?material_label;SEPARATOR=", ") AS ?material)
  WHERE {
  <FILTER>
    ?id a :Find .
    ?id ltk-s:find_number ?find_number .
    OPTIONAL {
      ?id ltk-s:archaeological_site_url ?archaeological_site_url .
    }
    OPTIONAL {
      ?id ltk-s:municipality ?municipality .
    }
    OPTIONAL {
      ?id ltk-s:province ?province .
    }
    OPTIONAL {
      ?id ltk-s:find_name ?find_name .
    }
    OPTIONAL {
      ?id ltk-s:description ?description .
    }
    OPTIONAL {
      ?id :material/skos:prefLabel ?material_label .
    }
    OPTIONAL {
      ?id :earliest_period/skos:prefLabel ?earliest_period .
    }
    OPTIONAL {
      ?id :latest_period/skos:prefLabel ?latest_period .
    }
    OPTIONAL {
      ?id :object_type/skos:prefLabel ?object_type .
      FILTER(LANG(?object_type) = '<LANG>')
    }
    OPTIONAL {
      ?id :object_type ?object_type_MAO_URI .
    }
    OPTIONAL {
      ?id :weight ?weight .
    }
    OPTIONAL {
      ?id :length ?length .
    }
    OPTIONAL {
      ?id :width ?width .
    }
    OPTIONAL {
      ?id :diameter ?diameter .
    }
    OPTIONAL {
      ?id :find_site_coordinates/wgs84:lat ?latitude .
      ?id :find_site_coordinates/wgs84:long ?longitude .
      ?id :find_site_coordinates/dct:source ?coordinate_source
    }
    OPTIONAL {
      ?id :earliest_creation_year ?earliest_year .
    }
    OPTIONAL {
      ?id :latest_creation_year ?latest_year .
    }

  }
  GROUP BY ?id ?find_number ?find_name ?object_type ?object_type_MAO_URI ?description ?archaeological_site_url ?municipality ?province ?latitude ?longitude ?coordinate_source ?earliest_year ?latest_year ?earliest_period ?latest_period ?weight ?length ?width ?diameter
  ORDER BY ?id
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

export const findsByLengthQuery = `
  SELECT ?category
  (COUNT(DISTINCT ?find) as ?count)
  WHERE {
    <FILTER>
    ?find :length ?decimal_value ;
              a :Find .
    BIND(xsd:integer(ROUND(?decimal_value)) as ?category)
  }
  GROUP BY ?category
  ORDER BY ?category
`

export const findsByWidthQuery = `
  SELECT ?category
  (COUNT(DISTINCT ?find) as ?count)
  WHERE {
    <FILTER>
    ?find :width ?decimal_value ;
              a :Find .
    BIND(xsd:integer(ROUND(?decimal_value)) as ?category)
  }
  GROUP BY ?category
  ORDER BY ?category
`

export const findsByWeightQuery = `
  SELECT ?category
  (COUNT(DISTINCT ?find) as ?count)
  WHERE {
    <FILTER>
    ?find :weight ?decimal_value ;
              a :Find .
    BIND(xsd:integer(ROUND(?decimal_value)) as ?category)
  }
  GROUP BY ?category
  ORDER BY ?category
`
