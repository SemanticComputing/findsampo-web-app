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
      ?id skos:related ?maoMatch__id .
      ?maoMatch__id ^:mao_match/skos:prefLabel ?maoMatch__prefLabel .
      BIND(?maoMatch__id as ?maoMatch__dataProviderUrl)
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
        ?id skos:related ?maoMatch__id .
        BIND(?maoMatch__id as ?maoMatch__dataProviderUrl)
        ?maoMatch__id ^:mao_match/skos:prefLabel ?maoMatch__prefLabel .
      }
    `
