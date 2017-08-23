import Mirage from './mirage';
import Ember from 'ember';

export default Mirage.extend({
    pathForType(type) {
        return 'monsters';
    },
});