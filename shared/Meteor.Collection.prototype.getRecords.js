Meteor.Collection.prototype.getRecords = function(query, options){
  return this.find(JSON.parse(query),  JSON.parse(options));
};