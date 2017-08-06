import Ember from 'ember';

export default Ember.Service.extend({
    property: null,

    setProperty(prop) {
        this.set('property', prop);
    },
    
    getProperty() {
        return this.get('property');
    }
});
