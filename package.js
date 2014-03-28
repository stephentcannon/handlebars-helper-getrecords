Package.describe({
  summary: "A handlebars helper that extends the ability to get records from any collection by query, options and name to the template."
});

Package.on_use(function (api, where) {
  api.use(['handlebars'], 'client');
  api.add_files([
    'client/helper.js',
    ], 
  'client');
  api.add_files('shared/Meteor.Collection.prototype.getRecords.js', ['client', 'server']);

});