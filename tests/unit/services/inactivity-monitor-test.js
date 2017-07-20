import { moduleFor, test } from 'ember-qunit';
import sinon from 'sinon';
import Ember from 'ember';

const { Service } = Ember;

let clock;
moduleFor('service:inactivity-monitor', 'Unit | Service | inactivity monitor', {
  // Specify the other units that are required for this test.
  needs: ['service:session'],

  beforeEach() {
    clock = sinon.useFakeTimers();
  },
  afterEach() {
    clock.restore();
  }
});

// Replace this with your real tests.
test('`setupWindowEvents` properly throttles action', function(assert) {
  assert.expect(1);

  let resetTimeout = function() {
    assert.ok(true, 'this function is called');
  };

  let service = this.subject({
    userEvents: ['keydown'],
    inactivityTimeout: 1000,
    resetTimeout
  });

  service.setupWindowEvents();

  Ember.$(window).trigger('keydown');
  clock.tick(2000);
});

test('`resetTimeout` resets our timeout and prevents logout', function(assert) {
  let didBecomeInactive = function() {
    assert.ok(true, 'user became inactive');
  }

  let service = this.subject({
    inactivityTimeout: 1000,
    didBecomeInactive
  });

  service.resetTimeout();
  clock.tick(1000);
});

test('`didBecomeInactive` log the user out after inactivity', function(assert) {
  assert.expect(1);
  let sessionStud = Service.extend({
    isAuthenticated() {
      assert.ok(true, 'user auth');
      return true;
    },

    logout() {
      assert.ok(true, 'user is logged out');
    }
  });

  let service = this.subject();

  this.register('service:session', sessionStud);
  this.inject.service('session', { as: 'session' });

  service.didBecomeInactive();
});
