import Ember from 'ember';

export default Ember.Route.extend({
    queryParams: {
        search: {
            refreshModel: true
        }
    },

    model(params) {
        // console.log(this.store);
        return this.store.find('post', params);
    },

    setupController(controller) {
        this._super(...arguments);
        controller.set('queryParams', ['search']),
        controller.set('search', '');
    }
});
