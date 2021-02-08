const perspectiveID = 'types'

export const typesPropertiesInstancePage =
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
      ?id :mao_match/^skos:related ?facetType__id .
      ?facetType__id skos:prefLabel ?facetType__prefLabel .
    }
  `

  export const typesPropertiesFacetResults =
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
        ?id :mao_match/^skos:related ?facetType__id .
        ?facetType__id skos:prefLabel ?facetType__prefLabel .
      }
    `
