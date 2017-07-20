import Ember from 'ember';

export default Ember.Service.extend({
    authenticated: false,

    login() {
        Ember.set(this, 'authenticated', true);
    },

    logout() {
        Ember.set(this, 'authenticated', false);
    },

    isAuthenticated() {
        return Ember.get(this, 'authenticated');
    }
});
