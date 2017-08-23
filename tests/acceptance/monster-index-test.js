import { test } from 'qunit';
import moduleForAcceptance from 'ember-quickstart/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | monster index');

test('visiting /monsters', function(assert) {
  let monsters = server.createList('monster', 10);

  visit('/monsters');

  andThen(function() {
    assert.equal(currentURL(), '/monsters');
    assert.equal(find('.monster').length, 10);
    assert.equal(find('.monster:first span').text(), monsters[0].name);
  });

  click('.monster:first .btn.btn-primary');

  andThen(function () {
    assert.equal(currentURL(), '/monsters/1');
  })
});
