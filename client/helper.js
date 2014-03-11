Handlebars.registerHelper('getRecordsByName', function(query, options, name){
  if(name && typeof(name)=='string'){
    return window[name]['getRecords'](query, options);
  }
});