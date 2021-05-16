const perspectiveID = 'periods'

export const periodsPropertiesInstancePage =
`   {
      ?id skos:altLabel ?prefLabel__id .
      BIND(?prefLabel__id as ?prefLabel__prefLabel)
      BIND(?id as ?uri__id)
      BIND(?id as ?uri__dataProviderUrl)
      BIND(?id as ?uri__prefLabel)
      BIND(CONCAT("/${perspectiveID}/page/", REPLACE(STR(?id), "^.*\\\\/(.+)", "$1")) AS ?dataProviderUrl)
    }
    UNION
    {
      ?id skos:hiddenLabel ?hiddenLabel .
    }
    UNION
    {
      ?id crm:P4_has_time-span/crm:P82a_begin_of_the_begin ?begin_of_the_begin .
      BIND (IF (STRSTARTS(str(?begin_of_the_begin), '-'), SUBSTR(STR(?begin_of_the_begin), 1, 5), SUBSTR(STR(?begin_of_the_begin), 1, 4)) AS ?earliestBegin) .
    }
    UNION
    {
      ?id crm:P4_has_time-span/crm:P81a_end_of_the_begin ?end_of_the_begin .
      BIND (IF (STRSTARTS(str(?end_of_the_begin), '-'), SUBSTR(STR(?end_of_the_begin), 1, 5), SUBSTR(STR(?end_of_the_begin), 1, 4)) AS ?latestBegin) .
    }
    UNION
    {
      ?id crm:P4_has_time-span/crm:P81b_begin_of_the_end ?begin_of_the_end .
      BIND (IF (STRSTARTS(str(?begin_of_the_end), '-'), SUBSTR(STR(?begin_of_the_end), 1, 5), SUBSTR(STR(?begin_of_the_end), 1, 4)) AS ?earliestEnd) .
    }
    UNION
    {
      ?id crm:P4_has_time-span/crm:P82b_end_of_the_end ?end_of_the_end .
      BIND (IF (STRSTARTS(str(?end_of_the_end), '-'), SUBSTR(STR(?end_of_the_end), 1, 5), SUBSTR(STR(?end_of_the_end), 1, 4)) AS ?latestEnd) .
    }
    UNION
    {
      ?relatedFind__id a :Find .
      ?relatedFind__id :period ?id .
      ?relatedFind__id skos:prefLabel ?relatedFind__prefLabel .
      BIND(CONCAT("/finds/page/", REPLACE(STR(?relatedFind__id), "^.*\\\\/(.+)", "$1")) AS ?relatedFind__dataProviderUrl)
    }
    UNION
    {
      ?id skos:broader ?broaderPeriod__id .
      ?broaderPeriod__id skos:altLabel ?broaderPeriod__prefLabel .
      BIND(CONCAT("/periods/page/", REPLACE(STR(?broaderPeriod__id ), "^.*\\\\/(.+)", "$1")) AS ?broaderPeriod__dataProviderUrl)
    }
    UNION
    {
      ?narrowerPeriod__id skos:broader ?id .
      ?narrowerPeriod__id skos:altLabel ?narrowerPeriod__prefLabel .
      BIND(CONCAT("/periods/page/", REPLACE(STR(?narrowerPeriod__id ), "^.*\\\\/(.+)", "$1")) AS ?narrowerPeriod__dataProviderUrl)
    }
  `

  export const periodsPropertiesFacetResults =
  `   {
        ?id skos:prefLabel ?prefLabel__id .
        BIND (?prefLabel__id as ?prefLabel__prefLabel)
        BIND(CONCAT("/${perspectiveID}/page/", REPLACE(STR(?id), "^.*\\\\/(.+)", "$1")) AS ?prefLabel__dataProviderUrl)
      }
      UNION
      {
        ?id skos:hiddenLabel ?hiddenLabel .
      }
      UNION
      {
        ?id crm:P4_has_time-span/crm:P82a_begin_of_the_begin ?earliestBegin .
      }
      UNION
      {
        ?id crm:P4_has_time-span/crm:P81a_end_of_the_begin ?latestEnd .
      }
      UNION
      {
        ?id crm:P4_has_time-span/crm:P81b_begin_of_the_end ?latestEnd .
      }
      UNION
      {
        ?id crm:P4_has_time-span/crm:P82b_end_of_the_end ?latestEnd .
      }
    `
