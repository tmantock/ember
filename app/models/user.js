import DS from 'ember-data';

export default DS.Model.extend({
  post: DS.hasMany('post'),
  name: DS.attr('string'),
  username: DS.attr('string'),
  email: DS.attr('string')
});
