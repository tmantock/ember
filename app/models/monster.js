import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  className: DS.attr('string'),
});
