import Ember from 'ember';

export default Ember.Route.extend({
    session: Ember.inject.service(),
    deferredTransition: Ember.inject.service(),

    beforeModel(transition) {
        this._super(...arguments);
        let deferred = Ember.get(this, 'deferredTransition');

        if(!Ember.get(this, 'session').isAuthenticated()) {
            deferred.setTransition(transition);
            this.transitionTo('application');
        }
    }
});