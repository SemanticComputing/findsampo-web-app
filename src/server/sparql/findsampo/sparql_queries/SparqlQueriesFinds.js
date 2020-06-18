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
      ?id :municipality ?municipality .
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
      ?id :municipality ?municipality .
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
    <FILTER>
    ?find :material ?id  . 
    BIND (?id as ?group) 
    ?find :find_name ?data__id .
    BIND (?data__id as ?data__label)
    BIND (?find as ?data__data__id)
    BIND (?data__id as ?data__data__label)
    BIND (?data__id as ?data__data__val)
    ?find :start_year [] .
    ?find :end_year [] .
    ?find :start_year|:end_year ?data__data__timeRange .
    FILTER (?id != "-")
  } 
`
