const perspectiveID = 'finds'

export const findPropertiesInstancePage =
`   {
      ?id skos:prefLabel ?prefLabel__id .
      BIND(?prefLabel__id as ?prefLabel__prefLabel)
      BIND(?id as ?uri__id)
      BIND(?id as ?uri__dataProviderUrl)
      BIND(?id as ?uri__prefLabel)
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
      ?id :material ?material .
    }
    UNION
    {
      ?id :period ?period .
    }
    UNION
    {
      ?id :municipality_literal ?municipality_literal .
    }
    UNION
    {
      ?id :municipality ?municipality__id .
      ?municipality__id skos:prefLabel ?municipality__prefLabel .
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
      ?id :material ?material .
    }
    UNION
    {
      ?id :period ?period .
    }
    UNION
    {
      ?id :start_year_literal ?startYearLiteral .
    }
    UNION
    {
      ?id :end_year_literal ?endYearLiteral .
    }
    UNION
    {
      ?id :municipality_literal ?municipality .
    }
    UNION
    {
      ?id :municipality ?municipality__id .
      ?municipality__id skos:prefLabel ?municipality__prefLabel .
    }
    UNION
    {
      ?id crm:P4_has_time_span/crm:P82a_begin_of_the_begin ?earliestStart .
      BIND (YEAR(?earliestStart) as ?startYear) .
    }
    UNION
    {
      ?id crm:P4_has_time_span/crm:P82b_end_of_the_end ?latestEnd .
      BIND (YEAR(?latestEnd) as ?endYear) .
    }
  `

export const findsPlacesQuery = `
  SELECT ?id ?lat ?long
  WHERE {
    <FILTER>
    ?id wgs84:lat ?lat ;
        wgs84:long ?long .
  }
`

export const findsTimelineQuery = `
  SELECT ?id ?group ?data__id ?data__uri ?data__label
  ?data__data__id ?data__data__label ?data__data__val ?data__data__timeRange
  WHERE {

    <FILTER> # a placeholder for facet filters

    ?find :material ?id  . # ?id = first hierarchy level
    BIND (?id as ?group)
    ?find :find_name ?data__id . # ?data__id = second hierarchy level
    BIND (?data__id as ?data__label)
    BIND (?find as ?data__data__id) # ?data__data__id = third hierarchy level
    BIND (?data__id as ?data__data__label)
    BIND (?data__id as ?data__data__val)

    # make sure that the selected finds have both 'start_year' and 'end_year'
    ?find :start_year [] .
    ?find :end_year [] .

    # Combine 'start_year' and 'end_year' into same variable,
    # so that the result mapper creates an array from these.
    ?find :start_year|:end_year ?data__data__timeRange .

    # Ignore missing values in the first hierarchy level
    FILTER (?id != "-")
  }
`
