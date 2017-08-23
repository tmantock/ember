import Ember from 'ember';

export default Ember.Route.extend({
    model: function(params) {
        return Ember.RSVP.hash({
            post: this.store.findRecord('post', params.post_id),
            comments: this.store.query('comment', { postId: params.post_id })
        });
    },

    setupController: function(controller, model) {
        this._super(...arguments);
        controller.set('post', model.post);
        controller.set('comments', model.comments);
    }
});
