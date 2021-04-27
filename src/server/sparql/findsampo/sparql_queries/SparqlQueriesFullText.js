export const fullTextSearchProperties = `
{
  VALUES ?type__id {
    :Find 
    :Object_type
  }
  ?id a ?type__id .
  BIND(?type__id as ?type__prefLabel)
  # ?type__id skos:prefLabel|rdfs:label ?type__prefLabel . 
}
UNION 
{
  ?id a :Find ;
      skos:prefLabel ?prefLabel__id ;
      ltk-s:description ?description .
  BIND(?prefLabel__id as ?prefLabel__prefLabel)
  BIND(CONCAT("/finds/page/", REPLACE(STR(?id), "^.*\\\\/(.+)", "$1")) AS ?prefLabel__dataProviderUrl)
}
UNION 
{
  ?id a :Object_type ;
        skos:prefLabel ?prefLabel__id .
  BIND(?prefLabel__id as ?prefLabel__prefLabel)
  # BIND(CONCAT("/...../page/", REPLACE(STR(?id), "^.*\\\\/(.+)", "$1")) AS ?prefLabel__dataProviderUrl)
}
`
