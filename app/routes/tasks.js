import Ember from 'ember';

export default Ember.Route.extend({
    foobar: Ember.inject.service(),

    model: function() {
        return this.store.findAll('task');
    },

    actions: {
        setProp() {
            let foobar = Ember.get(this, 'foobar');
            foobar.setProperty('ember');
            console.log(foobar.getProperty());
        }
    }
});
