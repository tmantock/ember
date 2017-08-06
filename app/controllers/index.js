import Ember from 'ember';

export default Ember.Controller.extend({
    foobar: Ember.inject.service(),
    session: Ember.inject.service(),
    isAuthenticated: Ember.computed('session.authenticated', {
        get() {
            return Ember.get(this, 'session').isAuthenticated();
        }
    })
});