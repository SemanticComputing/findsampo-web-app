export const fullTextSearchProperties = `
{
  VALUES ?type__id {
    :Find 
    :Object_type
  }
  ?id a ?type__id .
  ?type__id skos:prefLabel|rdfs:label ?type__prefLabel .
  FILTER(LANG(?type__prefLabel) = 'fi')
}
UNION 
{
  ?id a :Find ;
      skos:prefLabel ?prefLabel__id .
  OPTIONAL { ?id ltk-s:description ?description }    
  BIND(?prefLabel__id as ?prefLabel__prefLabel)
  BIND(CONCAT("/finds/page/", REPLACE(STR(?id), "^.*\\\\/(.+)", "$1")) AS ?prefLabel__dataProviderUrl)
}
UNION 
{
  ?id a :Object_type ;
        skos:prefLabel ?prefLabel__id .
  BIND(?prefLabel__id as ?prefLabel__prefLabel)
  BIND(CONCAT("/types/page/", REPLACE(STR(?id), "^.*\\\\/(.+)", "$1")) AS ?prefLabel__dataProviderUrl)
  FILTER(LANG(?prefLabel__id ) = 'fi')
}
`
