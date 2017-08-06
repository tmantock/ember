import Ember from 'ember';
import ENV from 'ember-quickstart/config/environment';
const { inject: { service }, run: { later, cancel, throttle }, get, set, $ } = Ember;

export default Ember.Service.extend({
    session: service(),
    inactivityTimeout: ENV.APP.sessionTimeout,
    userEvents: ['mousemove', 'touchmove', 'keydown'],
    timeoutTimer: null,
    throttleAction: null,
    
    resetTimeout() {
        cancel(get(this, 'timeoutTimer'));
        let inactivityTimeout = get(this, 'inactivityTimeout');
        let timeoutTimer = later(this, 'didBecomeInactive', inactivityTimeout);
        set(this, 'timeoutTimer', timeoutTimer);
    },

    didBecomeInactive() {
        let session = get(this, 'session');

        if(session.isAuthenticated()) {
            session.logout();
        }
    },

    setupWindowEvents() {
        let events = get(this, 'userEvents').map(e => `${e}.inactivityMonitor`).join(' ');
        $(window).on(events, () => {
            let throttleAction = throttle(this, 'resetTimeout', 1000);
            set(this, 'throttleAction', throttleAction);
        });
    },

    willDestroy() {
        this._super(...arguments);

        $(window).off('.inactivityMonitor');
        cancel(get(this, 'timeoutTimer'));
        cancel(get(this, 'throttleAction'));
    }
});
