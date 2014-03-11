Handlebars.registerHelper('getRecordsByName', function(query, options, name){
  /** usage 
    {{#each getRecordsByName '{"isActive": true, "buttonHrefTarget": "#signup"}' '{"sort": {"order": 1}}' 'Plans'}}
  **/
  if(name && typeof(name)=='string'){
    return window[name]['getRecords'](query, options);
  }
});