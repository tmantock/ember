import DS from 'ember-data';

export default DS.Model.extend({
  postId: DS.belongsTo('post'),
  name: DS.attr('string'),
  email: DS.attr('string'),
  body: DS.attr('string')
});
