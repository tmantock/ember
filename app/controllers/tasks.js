import Ember from 'ember';

export default Ember.Controller.extend({
    foobar: Ember.inject.service(),

    actions: {
        async deleteTask(id) {
            var task = await this.store.findRecord('task', id)
            task.deleteRecord();
            task.save();
        }
    }
});