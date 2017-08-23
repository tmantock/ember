import Ember from 'ember';

export default Ember.Route.extend({
    model() {
        return this.store.findAll('monster');
    },

    actions: {
        showBlock(monster) {
            let s = monster.get('className');

            if(s == 'hide') {
                monster.set('className', 'show');
            } else {
                monster.set('className', 'hide');
            }
        }
    }
});
