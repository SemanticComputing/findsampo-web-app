const perspectiveID = 'periods'

export const periodsPropertiesInstancePage =
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
      ?id skos:hiddenLabel ?hiddenLabel .
    }
    UNION
    {
      ?id crm:P4_has_time-span/crm:P82a_begin_of_the_begin ?earliestBegin .
    }
    UNION
    {
      ?id crm:P4_has_time-span/crm:P82b_end_of_the_end ?latestEnd .
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
        ?id crm:P4_has_time-span/crm:P82b_end_of_the_end ?latestEnd .
      }
    `
