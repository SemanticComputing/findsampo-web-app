export const fullTextSearchProperties = `
{
  VALUES ?type__id {
    :Find 
    <http://www.yso.fi/onto/mao-meta/Concept>
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
  ?id a <http://www.yso.fi/onto/mao-meta/Concept> ;
        skos:prefLabel ?prefLabel__id .
  BIND(?prefLabel__id as ?prefLabel__prefLabel)
  # BIND(CONCAT("/...../page/", REPLACE(STR(?id), "^.*\\\\/(.+)", "$1")) AS ?prefLabel__dataProviderUrl)
}
`
