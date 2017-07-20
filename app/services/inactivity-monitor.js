import Ember from 'ember';
import ENV from 'ember-quickstart/config/environment';

export default Ember.Service.extend({
    session: Ember.inject.service(),
    inactivityTimeout: ENV.APP.sessionTimeout,
    userEvents: ['mousemove', 'touchmove', 'keydown'],
    timeoutTimer: null,
    throttleAction: null,
    
    resetTimeout() {
        Ember.run.cancel(Ember.get(this, 'timeoutTimer'));
        let inactivityTimeout = Ember.get(this, 'inactivityTimeout');
        let timeoutTimer = Ember.run.later(this, 'didBecomeInactive', inactivityTimeout);
        Ember.set(this, 'timeoutTimer', timeoutTimer);
    },

    didBecomeInactive() {
        let session = Ember.get(this, 'session');

        if(session.isAuthenticated()) {
            session.logout();
        }
    },

    setupWindowEvents() {
        let events = Ember.get(this, 'userEvents').map(e => `${e}.inactivityMonitor`).join(' ');
        Ember.$(window).on(events, () => {
            let throttleAction = Ember.run.throttle(this, 'resetTimeout', 1000);
            Ember.set(this, 'throttleAction', throttleAction);
        });
    },

    willDestroy() {
        this._super(...arguments);

        Ember.$(window).off('.inactivityMonitor');
        Ember.run.cancel(Ember.get(this, 'timeoutTimer'));
        Ember.run.cancel(Ember.get(this, 'throttleAction'));
    }
});
