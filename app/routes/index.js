import Ember from 'ember';

export default Ember.Route.extend({
    session: Ember.inject.service(),
    deferredTransition: Ember.inject.service(),
    inactivityMonitor: Ember.inject.service(),

    actions: {
        loginUser() {
            Ember.get(this, 'session').login();
            Ember.get(this, 'inactivityMonitor').setupWindowEvents();

            let deferred = Ember.get(this, 'deferredTransition').getTransition();
            if(deferred) {
                deferred.retry();
                Ember.get(this, 'deferredTransition').setTransition(null);
            }
        }
    }
})