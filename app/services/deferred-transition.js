import Ember from 'ember';

export default Ember.Service.extend({
    attemptedTransition: null,

    setTransition(transition) {
        Ember.set(this, 'attemptedTransition', transition);
    },

    getTransition() {
        return Ember.get(this, 'attemptedTransition');
    }
});
