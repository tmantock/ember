import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('render-component', 'Integration | Component | render component', {
  integration: true
});

test('it renders', function(assert) {

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{render-component}}`);

  assert.equal(this.$().text().trim(), 'I will be rendered');

  // Template block usage:
  this.render(hbs`
    {{#render-component}}
      template block text
    {{/render-component}}
  `);

  assert.equal(this.$().text().trim(), 'I will be rendered');
});
