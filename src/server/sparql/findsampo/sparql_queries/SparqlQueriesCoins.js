const perspectiveID = 'coins'

export const coinsPropertiesInstancePage =
`   {
      ?id skos:prefLabel ?prefLabel__id .
      BIND(?prefLabel__id as ?prefLabel__prefLabel)
      BIND(?id as ?uri__id)
      BIND(?id as ?uri__dataProviderUrl)
      BIND(?id as ?uri__prefLabel)
      BIND(CONCAT("/finds/page/", REPLACE(STR(?id), "^.*\\\\/(.+)", "$1")) AS ?dataProviderUrl)
    }
    UNION
    {
      ?id :type ?type .
    }
    UNION
    {
      ?id :object_type ?objectType__id .
      ?objectType__id skos:prefLabel ?objectType__prefLabel .
    }
    UNION
    {
      ?id :facet_object_term ?objectTypeFHAFacet__id .
      ?objectTypeFHAFacet__id skos:prefLabel ?objectTypeFHAFacet__prefLabel .
    }
    UNION
    {
      ?id :sub_category ?subCategory .
    }
    UNION
    {
      ?id :material_literal ?materialLiteral .
    }
    UNION
    {
      ?id :material ?material__id .
      ?material__id skos:prefLabel ?material__prefLabel .
    }
    UNION
    {
      ?id :period ?period .
    }
    UNION
    {
      ?id :municipality_literal ?municipalityLiteral .
    }
    UNION
    {
      ?id :municipality ?municipality__id .
      ?municipality__id skos:prefLabel ?municipality__prefLabel .
    }
    UNION
    {
      ?id :province ?province__id .
      ?province__id skos:prefLabel ?province__prefLabel .
    }
    UNION
    {
      ?id :has_time_span/crm:P82a_begin_of_the_begin ?earliestStart .
      BIND (YEAR(?earliestStart) as ?earliestStartYear) .
    }
    UNION
    {
      ?id :has_time_span/crm:P82b_end_of_the_end ?latestEnd .
      BIND (YEAR(?latestEnd) as ?latestEndYear) .
    }
    UNION
    {
      ?id :image_url ?image__id .
      ?id :find_name ?image__title .
      BIND(?image__id as ?image__url)
      BIND(CONCAT("Sample description text for image ", ?image__id) as ?image__description)
    }
    UNION
    {
      #?id :find_set_number ?setNumber .
      #?id :individual_find_number ?individualNumber .
      #BIND(CONCAT(?setNumber, ':') as ?identifierStart) .
      #BIND(CONCAT(?identifierStart, ?individualNumber) as ?identifierFHA) .
      ?id :km_number ?kmNumber .
    }
    UNION
    {
      ?id :weight_literal ?weight .
    }
    UNION
    {
      ?id :length_literal ?length .
    }
    UNION
    {
      ?id :thickness_literal ?thickness .
    }
    UNION
    {
      ?id :width_literal ?width .
    }
    UNION
    {
      ?id :similar_internal_find ?similarInternalFind__id .
      ?similarInternalFind__id skos:prefLabel ?similarInternalFind__prefLabel .
      BIND(CONCAT("/finds/page/", REPLACE(STR(?similarInternalFind__id), "^.*\\\\/(.+)", "$1")) AS ?similarInternalFind__dataProviderUrl)
    }
    UNION
    {
      ?id :similar_external_find ?similarExternalFind__id .
      BIND(?similarExternalFind__id AS ?similarExternalFind__prefLabel) .
      BIND(?similarExternalFind__id AS ?similarExternalFind__dataProviderUrl)
    }
`

export const coinsPropertiesFacetResults =
`   {
      ?id skos:prefLabel ?prefLabel__id .
      BIND (?prefLabel__id as ?prefLabel__prefLabel)
      BIND(CONCAT("/finds/page/", REPLACE(STR(?id), "^.*\\\\/(.+)", "$1")) AS ?prefLabel__dataProviderUrl)
    }
    UNION
    {
      ?id :specification ?specification .
    }
    UNION
    {
      ?id :type ?type .
    }
    UNION
    {
      ?id :sub_category ?subCategory .
    }
    UNION
    {
      ?id :object_type ?objectType__id.
      ?objectType__id skos:prefLabel ?objectType__prefLabel .
    }
    UNION
    {
      ?id :facet_object_term ?objectTypeFHAFacet__id .
      ?objectTypeFHAFacet__id skos:prefLabel ?objectTypeFHAFacet__prefLabel .
    }
    UNION
    {
      ?id :material_literal ?materialLiteral .
    }
    UNION
    {
      ?id :material ?material__id .
      ?material__id skos:prefLabel ?material__prefLabel .
    }
    UNION
    {
      ?id :period ?period .
    }
    UNION
    {
      ?id :start_year ?startYearLiteral .
    }
    UNION
    {
      ?id :end_year ?endYearLiteral .
    }
    UNION
    {
      ?id :municipality_literal ?municipalityLiteral .
    }
    UNION
    {
      ?id :municipality ?municipality__id .
      ?municipality__id skos:prefLabel ?municipality__prefLabel .
    }
    UNION
    {
      ?id :province_literal ?provinceLiteral .
    }
    UNION
    {
      ?id :province ?province__id .
      ?province__id skos:prefLabel ?province__prefLabel .
    }
    UNION
    {
      ?id :has_time_span/crm:P82a_begin_of_the_begin ?earliestStart .
      BIND (YEAR(?earliestStart) as ?earliestStartYear) .
    }
    UNION
    {
      ?id :has_time_span/crm:P82b_end_of_the_end ?latestEnd .
      BIND (YEAR(?latestEnd) as ?latestEndYear) .
    }
    UNION
    {
      ?id :image_url ?image__id .
      ?id :find_name ?image__title .
      BIND(?image__id as ?image__url)
      BIND(CONCAT("Sample description text for image ", ?image__id) as ?image__description)
    }
    UNION
    {
      #?id :find_set_number ?setNumber .
      #?id :individual_find_number ?individualNumber .
      #BIND(CONCAT(?setNumber, ':') as ?identifierStart) .
      #BIND(CONCAT(?identifierStart, ?individualNumber) as ?identifierFHA) .
      ?id :km_number ?kmNumber .
    }
    UNION
    {
      ?id :weight_literal ?weight .
    }
    UNION
    {
      ?id :length_literal ?length .
    }
    UNION
    {
      ?id :thickness_literal ?thickness .
    }
    UNION
    {
      ?id :width_literal ?width .
    }
  `

export const coinsPlacesQuery = `
  SELECT ?id ?lat ?long
  WHERE {
    <FILTER>
    ?id wgs84:lat ?lat ;
        wgs84:long ?long .
  }
`
export const nearbyFindsQuery = `
  SELECT *
  WHERE {
    ?id spatial:nearby (64.791 29.249 50 'km') . # Vuokkijärvi, Suomussalmi
    ?id wgs84:lat ?lat ;
        wgs84:long ?long .
    ${coinsPropertiesInstancePage}
  }
`

export const coinsTimelineQuery = `
  SELECT ?id ?group ?data__id ?data__uri ?data__label
  ?data__data__id ?data__data__label ?data__data__val ?data__data__timeRange
  WHERE {

    <FILTER> # a placeholder for facet filters

    ?find :province/skos:prefLabel ?id  . # ?id = first hierarchy level
    BIND (?id as ?group)
    #?find :find_name ?data__id . # ?data__id = second hierarchy level

     ?find :find_name ?lable_temp .
    BIND( STRAFTER(STR(?find),'http://ldf.fi/findsampo/finds/' ) AS ?find_num ).
    BIND (CONCAT(str(?lable_temp), str(?find_num)) as ?data__id) .
    BIND (?data__id as ?data__label)
    BIND (?find_num as ?data__data__id) # ?data__data__id = third hierarchy level
    BIND (?data__id as ?data__data__label)
    BIND (?data__id as ?data__data__val)

    # make sure that the selected finds have both 'start_year' and 'end_year'
    #?find :start_year [] .
    #?find :end_year [] .
    ?find :has_time_span/crm:P82a_begin_of_the_begin [] .
    ?find :has_time_span/crm:P82b_end_of_the_end [] .

    # Combine 'start_year' and 'end_year' into same variable,
    # so that the result mapper creates an array from these.
    #?find :start_year|:end_year ?data__data__timeRange .

    #?find :has_time_span/crm:P82a_begin_of_the_begin|:has_time_span/crm:P82b_end_of_the_end ?date .
    #BIND(CONCAT(str(?date), 'T00:00:00+00:00') AS ?date_wth_ending) .
    #BIND(STRDT(STR(?date_wth_ending), xsd:dateTime) AS ?data__data__timeRange)

    ?find :has_time_span/crm:P82a_begin_of_the_begin|:has_time_span/crm:P82b_end_of_the_end ?date .

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
    ?id a :Portal_configuration ;
          :featured_find ?featuredFind__id .
    ?featuredFind__id skos:prefLabel ?featuredFind__prefLabel ;
                      :image_url ?featuredFind__imageURL .
    BIND(CONCAT("/${perspectiveID}/page/", REPLACE(STR(?featuredFind__id), "^.*\\\\/(.+)", "$1")) AS ?featuredFind__dataProviderUrl)
  }
`

export const findsByProvinceQuery = `
 SELECT ?category ?prefLabel
 (COUNT(DISTINCT ?find) as ?instanceCount)
  WHERE {
    <FILTER>
    ?find :province ?category ;
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
    ?find :find_name ?category ;  # find_name is literal
        a :Find .
    BIND(?category as ?prefLabel)
  }
  GROUP BY ?category ?prefLabel
  ORDER BY DESC(?instanceCount)
`
export const coinsByYearQuery = `
  SELECT ?category
  (COUNT(DISTINCT ?find) as ?count)
  WHERE {
    <FILTER>
    #VALUES ?money { "Hopearaha" "Raha" }
    #?find :find_name ?money .
    ?find :start_year ?category .
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
    ?find :weight_rounded ?category ;
          a :Find .
  }
  GROUP BY ?category
  ORDER BY ?category
`
