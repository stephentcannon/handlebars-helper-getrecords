handlebars-helper-getrecords
=============================
A handlebars helper that extends the ability to get records from any collection by query, options and name to the template.

usage
======

````

{{#each getRecordsByName '{"name": "something"}' '{"sort": {"order": 1}}' 'MyCollection'}}

````