import Ember from 'ember';

export default Ember.Controller.extend({
    actions: {
        async editTask(id) {
            let title = this.get('model.title');
            let date = this.get('model.date');
            let description = this.get('model.description');
            
            var task = await this.store.findRecord('task', id);
            task.set('title', title);
            task.set('description', description);
            task.set('date', new Date(date));

            task.save();

            this.transitionToRoute('tasks');
        }
    }
});
