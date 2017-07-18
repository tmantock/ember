import Ember from 'ember';

export default Ember.Controller.extend({
    actions: {
        addTask: function() {
            let title = this.get('title');
            let date = this.get('date');
            let description = this.get('description');
            

            // Create new record
            let newTask = this.store.createRecord('task', {
                title,
                description,
                date: new Date(date)
            });

            // Save to Database
            newTask.save();
            
            // Clear the form
            this.setProperties({
                title: '',
                description: '',
                date: ''
            });
        }
    }
});
