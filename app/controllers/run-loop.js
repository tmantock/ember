import Ember from 'ember';
const { Controller, run, set } = Ember;

export default Ember.Controller.extend({
    shouldShowComponent: true,

    actions: {
        clickAction() {
            //this.toggleProperty('shouldShowComponent');
            run(() => {
                set(this, 'shouldShowComponent', false);
            });
            run(() => {
                set(this, 'shouldShowComponent', true);
            });
            run(() => {
                set(this, 'shouldShowComponent', false);
            });
            run(() => {
                set(this, 'shouldShowComponent', true);
            });
            run(() => {
                set(this, 'shouldShowComponent', false);
            });
            run(() => {
                set(this, 'shouldShowComponent', true);
            });
            run(() => {
                set(this, 'shouldShowComponent', false);
            });
            run(() => {
                set(this, 'shouldShowComponent', true);
            });
        }
    }
});
