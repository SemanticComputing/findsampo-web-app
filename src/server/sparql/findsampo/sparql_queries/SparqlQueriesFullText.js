export const fullTextSearchProperties = `
{
  ?id skos:prefLabel ?prefLabel__id .
  BIND(?prefLabel__id as ?prefLabel__prefLabel)
}
UNION 
{
  ?id a ?type__id .
  # ?type__id skos:prefLabel ?type__prefLabel_ .
  # BIND(STR(?type__prefLabel_) AS ?type__prefLabel)  # ignore language tags
  BIND(STR(?type__id) AS ?type__prefLabel) 
}
`
