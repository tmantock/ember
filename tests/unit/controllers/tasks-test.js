import { moduleFor, test } from 'ember-qunit';

moduleFor('controller:tasks', 'Unit | Controller | tasks', {
  // Specify the other units that are required for this test.
  needs: ['service:foobar']
});

// Replace this with your real tests.
test('it exists', function(assert) {
  let controller = this.subject();
  assert.ok(controller);
});
