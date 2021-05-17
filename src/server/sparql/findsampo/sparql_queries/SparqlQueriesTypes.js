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
      ?id skos:exactMatch ?maoMatch__id .
      BIND(?maoMatch__id as ?maoMatch__prefLabel)
      BIND(?maoMatch__id as ?maoMatch__dataProviderUrl)
    }
    UNION
    {
      ?id skos:closeMatch ?kokoMatch__id .
      BIND(?kokoMatch__id as ?kokoMatch__prefLabel)
      BIND(?kokoMatch__id as ?kokoMatch__dataProviderUrl)
    }
    UNION
    {
      ?id skos:hiddenLabel ?aatTerm__id .
      BIND(?aatTerm__id AS ?aatTerm__prefLabel)
      FILTER(LANG(?aatTerm__prefLabel) = 'en')
    }
    UNION
    {
      ?id skos:hiddenLabel ?ltkName .
      FILTER(LANG(?ltkName) = 'fi')
    }
    UNION
    {
      ?relatedFind__id a :Find .
      ?relatedFind__id :object_type ?id .
      ?relatedFind__id skos:prefLabel ?relatedFind__prefLabel .
      BIND(CONCAT("/finds/page/", REPLACE(STR(?relatedFind__id), "^.*\\\\/(.+)", "$1")) AS ?relatedFind__dataProviderUrl)
    }
    UNION
    {
      ?id extended-s:fishTerm ?fishTerm .
      BIND(REPLACE(STR(?fishTerm), " ", "+") AS ?modifiedFishTerm)
      BIND(CONCAT('https://finds.org.uk/database/search/results/objecttype/', ?modifiedFishTerm) AS ?pasLink__id)
      BIND(?pasLink__id AS ?pasLink__prefLabel)
      BIND(?pasLink__id AS ?pasLink__dataProviderUrl)
    }
    UNION
    {
      ?id skos:note ?definition__id .
      ?id skos:note ?definition__prefLabel .
      ?id rdfs:seeAlso ?definition__dataProviderUrl .
    }
  `

// export const typesPropertiesFacetResults = `
//   {
//     ?id skos:prefLabel ?prefLabel__id .
//     BIND (?prefLabel__id as ?prefLabel__prefLabel)
//     BIND(CONCAT("/${perspectiveID}/page/", REPLACE(STR(?id), "^.*\\\\/(.+)", "$1")) AS ?prefLabel__dataProviderUrl)
//   }
//   UNION
//   {
//     ?id skos:exactMatch ?maoMatch__id .
//     BIND(?maoMatch__id as ?maoMatch__prefLabel)
//     BIND(?maoMatch__id as ?maoMatch__dataProviderUrl)
//   }
// `
